// my-module.i
%module(target_namespace="my_ns") my_module

// Insert code at the beginning of generated header file (.h)
%insert(header_file) %{
#pragma once
#include "bindings/jswrapper/SeApi.h"
#include "bindings/manual/jsb_conversions.h"

#include "MyObject.h" // Add this line
%}

// Insert code at the beginning of generated source file (.cpp)
%{
#include "bindings/auto/jsb_my_module_auto.h"
#include "bindings/auto/jsb_another_module_auto.h"
%}

%ignore my_ns::MyRef;
%ignore my_ns::MyObject::methodToBeIgnored;
%ignore my_ns::MyObject::propertyToBeIgnored;
%rename(coolProperty) my_ns::MyObject::propertyToBeRenamed;
%rename(coolMethod) my_ns::MyObject::methodToBeRenamed;
%rename(MyCoolObject) my_ns::MyObject;

%attribute(my_ns::MyObject, int, type, getType, setType);

%module_macro(USE_MY_FEATURE) my_ns::MyFeatureObject;
%module_macro(USE_MY_FEATURE) my_ns::MyObject::getFeatureObject;

#define USE_MY_FEATURE 1 // Must be 1 to trick Swig that we need to generate binding code
// even this macro is disabled in C++. NOTE: this line should be after %module_macro

%import "MyRef.h"
%include "MyObject.h"