// another-module.i
%module(target_namespace="another_ns") another_module

// Insert code at the beginning of generated header file (.h)
%insert(header_file) %{
#pragma once
#include "bindings/jswrapper/SeApi.h"
#include "bindings/manual/jsb_conversions.h"

#include "MyAnotherObject.h" // Add this line
%}

// Insert code at the beginning of generated source file (.cpp)
%{
#include "bindings/auto/jsb_another_module_auto.h"
%}

%include "MyAnotherObject.h"