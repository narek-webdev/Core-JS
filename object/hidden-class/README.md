# Hidden Class Simulation in C

This directory contains a small C implementation that simulates part of JavaScript's object model using a tagged union and a dynamically sized property list.

The goal is to model a lightweight, dictionary-style object system with the same basic ideas behind hidden-class-based engines:

- values carry an explicit runtime type tag
- objects store key/value pairs dynamically
- property lookup is linear
- storage grows automatically as properties are added
- heap allocations are owned and released safely

## Overview

The implementation is centered around four data structures:

- `JS_Type`: an enum that identifies the active value type
- `JS_Value`: a tagged union that stores a number, boolean, string, or `undefined`
- `JS_Property`: a string key paired with a `JS_Value`
- `JS_Object`: an object container that manages a resizable array of properties

This is not a full JavaScript engine. It is a focused educational model of dynamic values and object storage in C.

## Data Model

`JS_Value` supports the following tags:

- `JS_FLOAT64`
- `JS_INT64`
- `JS_BOOLEAN`
- `JS_STRING`
- `JS_UNDEFINED`

String values and property keys are duplicated on the heap so the object can own its stored data independently from the caller.

`JS_Object` keeps track of:

- `size`: the number of active properties
- `capacity`: the allocated slot count
- `properties`: the backing array of `JS_Property` entries

When the object runs out of space, the storage is reallocated at 2x capacity.

## API

### Memory helpers

- `void *allocate_memory(size_t size);`
- `void *reallocate_memory(void *ptr, size_t size);`
- `void free_Object(JS_Object *obj);`

These helpers wrap heap allocation and fail fast if allocation is unsuccessful.

### Value constructors

- `JS_Value init_float64(double val);`
- `JS_Value init_boolean(bool val);`
- `JS_Value init_int64(long long int val);`
- `JS_Value init_string(char *val);`
- `JS_Value init_undefined(void);`

Each constructor creates a tagged value with the correct runtime type.

### Object operations

- `JS_Object *init_Object(void);`
- `void set_property(JS_Object *obj, const char *key, JS_Value value);`
- `JS_Value get_property(JS_Object *obj, const char *key);`
- `void print_value(JS_Value val);`

Behavior summary:

- `init_Object()` creates an empty object with an initial capacity of 8 properties
- `set_property()` updates an existing property or appends a new one
- `get_property()` returns the stored value or `undefined` if the key is missing
- `print_value()` prints the underlying C value according to the active tag

## Example

```c
int main(void) {
	JS_Object *user = init_Object();

	set_property(user, "name", init_string("James"));

	print_value(get_property(user, "name"));

	free_Object(user);
	return 0;
}
```

Expected output:

```text
James
```

## Memory Management

The object owns:

- its properties array
- duplicated property keys
- any string values stored inside properties

Always call `free_Object()` when you are done with an object to avoid leaks.

## Build And Run

You can compile the example with a C compiler such as `gcc`:

```bash
gcc object/hidden-class/hiddenclass.c -o hiddenclass
./hiddenclass
```

## Notes

- Property lookup is linear, so this implementation is simple rather than optimized.
- The storage behaves like a dynamic property bag, which is useful for learning how JavaScript-like objects can be modeled in C.

