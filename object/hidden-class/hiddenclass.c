#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <string.h>
#define INITIAL_CAPACITY 8

typedef enum {
	JS_FLOAT64,
	JS_INT64,
	JS_BOOLEAN,
	JS_STRING,
	JS_UNDEFINED,
} JS_Type;

typedef struct {
	JS_Type tag;

	union {
		double f64;
		long long i64;
		bool boolean;
		char * string;
	};
} JS_Value;

typedef struct {
	char * key;
	JS_Value value;
} JS_Property;

typedef struct {
	size_t size;
	size_t capacity;
	JS_Property * properties;
} JS_Object;

// Allocates a specific block of memory. 
// Exits the process securely if malloc fails.
void * allocate_memory(size_t);

void * reallocate_memory(void * ptr, size_t size);

// Initializes a JS_Value containing an IEEE 754 double precision float
JS_Value init_float64 (double);

// Initializes a JS_Value containing a boolean state
JS_Value init_boolean (bool);

// Initializes a JS_Value containing a 64-bit integer
JS_Value init_int64(long long int);

// Initializes a JS_Value containing a string pointer
JS_Value init_string(char *);

// Initializes an empty JS_Value representing JS 'undefined'
JS_Value init_undefined(void);

// Mutates the object by adding or updating a property.
// Requires O(N) lookup. Must dynamically trigger realloc() scaling capacity by 2x if size >= cap.
// String keys must be duplicated (strdup) into heap memory.
void set_property(JS_Object * obj, const char * key, JS_Value value);

// Creates a new JS_Object instance.
// Requires initial memory allocation for the struct and a default capacity (cap = 8) for properties.
JS_Object * init_Object(void);

// Retrieves a property by its string key.
// Returns the matched JS_Value or init_undefined() if the key does not exist.
JS_Value get_property(JS_Object * obj, const char * key);

// Utility function to print the unwrapped C-value based on its active JS_Type tag.
void print_value(JS_Value val);

// Deep-cleans the object. 
// Must free all duplicated string keys, the properties array, and the object struct itself.
void free_Object(JS_Object * obj);

int main () {
	JS_Object * user = init_Object();

	set_property(user, "name", init_string("James"));

	print_value(get_property(user, "name"));

	free_Object(user);

	return 0;
}

JS_Value init_float64 (double val) {
	JS_Value v;
	v.tag = JS_FLOAT64;
	v.f64 = val;
	return v;
}

JS_Value init_boolean (bool val) {
	JS_Value v;
	v.tag = JS_BOOLEAN;
	v.boolean = val;
	return v;
}

JS_Value init_int64 (long long int val) {
	JS_Value v;
	v.tag = JS_INT64;
	v.i64 =  val;
	return v;
}

JS_Value init_string (char * val) {
	JS_Value v;
	v.tag = JS_STRING;
	v.string = strdup(val);
	if (v.string == NULL) {
		fprintf(stderr, "Memory allocation failed!\n");
		exit(1);
	}
	return v;
}

JS_Value init_undefined(void) {
	JS_Value v = {0};
	v.tag = JS_UNDEFINED;
	return v;
}

void print_value (JS_Value val) {
	if (val.tag == JS_FLOAT64) {
		printf("%g\n", val.f64);
	} else if (val.tag == JS_INT64) {
		printf("%lld\n", val.i64);
	} else if (val.tag == JS_BOOLEAN) {
		printf("%s\n", val.boolean ? "true" : "false");
	} else if (val.tag == JS_STRING) {
		printf("%s\n", val.string);
	} else if (val.tag == JS_UNDEFINED) {
		printf("%s\n", "undefined");
	} else {
		fprintf(stderr, "unknown type\n");
	}
}

JS_Value get_property(JS_Object * obj, const char * key) {
	for (size_t i = 0; i < obj->size; ++i) {
		if (strcmp(obj->properties[i].key, key) == 0) {
			return obj->properties[i].value;
		}
	}

	return init_undefined();
}

void set_property(JS_Object * obj, const char * key, JS_Value value) {
	for (size_t i = 0; i < obj->size; ++i) {
		if (strcmp(obj->properties[i].key, key) == 0) {
			if (obj->properties[i].value.tag == JS_STRING) {
				free(obj->properties[i].value.string);
			}
			obj->properties[i].value = value;
			return;
		}
	}

	if (obj->size >= obj->capacity) {
		size_t new_cap = obj->capacity * 2;
		obj->properties = reallocate_memory(obj->properties, new_cap * sizeof(JS_Property));
		obj->capacity = new_cap;
	}

	obj->properties[obj->size].key = strdup(key);

	if (obj->properties[obj->size].key == NULL) {
		fprintf(stderr, "Memory allocation failed!\n");
		exit(1);
	}

	obj->properties[obj->size].value = value;
	++obj->size;
}

JS_Object * init_Object(void) {
	JS_Object * obj = allocate_memory(sizeof(JS_Object));

	obj->properties = allocate_memory(INITIAL_CAPACITY * sizeof(JS_Property));

	obj->size = 0;
	obj->capacity = INITIAL_CAPACITY;

	return obj;
}

void * reallocate_memory(void * ptr, size_t size) {
	void * new_ptr = realloc(ptr, size);

	if (new_ptr == NULL) {
		fprintf(stderr, "Allocation failed!\n");
		exit(1);
	}
	
	return new_ptr;
}

void * allocate_memory (size_t size)
{
	void * ptr = malloc(size);
	
	if (ptr == NULL) {
		fprintf(stderr, "Allocation failed!\n");
		exit(1);
	}
	
	return ptr;
}

void free_Object (JS_Object * obj) {
	if (obj == NULL) return;

	for (size_t i = 0; i < obj->size; ++i) {
		free(obj->properties[i].key);

		if (obj->properties[i].value.tag == JS_STRING) {
			free(obj->properties[i].value.string);
		}
	}

	free(obj->properties);

	free(obj);
}