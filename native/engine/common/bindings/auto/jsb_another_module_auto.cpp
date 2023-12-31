// clang-format off

/* ----------------------------------------------------------------------------
 * This file was automatically generated by SWIG (https://www.swig.org).
 * Version 4.1.0
 *
 * Do not make changes to this file unless you know what you are doing - modify
 * the SWIG interface file instead.
 * ----------------------------------------------------------------------------- */

/****************************************************************************
 Copyright (c) 2022-2023 Xiamen Yaji Software Co., Ltd.

 http://www.cocos.com

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights to
 use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
 of the Software, and to permit persons to whom the Software is furnished to do so,
 subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
****************************************************************************/

#if defined(__clang__)
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wunused-variable"
#elif defined(__GNUC__) || defined(__GNUG__)
#pragma GCC diagnostic push
#pragma GCC diagnostic ignored "-Wunused-variable"
#elif defined(_MSC_VER)
#pragma warning(push)
#pragma warning(disable : 4101)
#endif


#define SWIG_STD_MOVE(OBJ) std::move(OBJ)


#include <stdio.h>


#include "bindings/jswrapper/SeApi.h"
#include "bindings/manual/jsb_conversions.h"
#include "bindings/manual/jsb_global.h"


#include "bindings/auto/jsb_another_module_auto.h"



se::Class* __jsb_my_another_ns_MyAnotherObject_class = nullptr;
se::Object* __jsb_my_another_ns_MyAnotherObject_proto = nullptr;
SE_DECLARE_FINALIZE_FUNC(js_delete_my_another_ns_MyAnotherObject) 

static bool js_my_another_ns_MyAnotherObject_a_set(se::State& s)
{
    CC_UNUSED bool ok = true;
    const auto& args = s.args();
    size_t argc = args.size();
    my_another_ns::MyAnotherObject *arg1 = (my_another_ns::MyAnotherObject *) NULL ;
    
    arg1 = SE_THIS_OBJECT<my_another_ns::MyAnotherObject>(s);
    if (nullptr == arg1) return true;
    
    ok &= sevalue_to_native(args[0], &arg1->a, s.thisObject());
    SE_PRECONDITION2(ok, false, "Error processing arguments"); 
    
    
    return true;
}
SE_BIND_PROP_SET(js_my_another_ns_MyAnotherObject_a_set) 

static bool js_my_another_ns_MyAnotherObject_a_get(se::State& s)
{
    CC_UNUSED bool ok = true;
    my_another_ns::MyAnotherObject *arg1 = (my_another_ns::MyAnotherObject *) NULL ;
    
    arg1 = SE_THIS_OBJECT<my_another_ns::MyAnotherObject>(s);
    if (nullptr == arg1) return true;
    
    ok &= nativevalue_to_se(arg1->a, s.rval(), s.thisObject()); 
    
    
    return true;
}
SE_BIND_PROP_GET(js_my_another_ns_MyAnotherObject_a_get) 

static bool js_my_another_ns_MyAnotherObject_b_set(se::State& s)
{
    CC_UNUSED bool ok = true;
    const auto& args = s.args();
    size_t argc = args.size();
    my_another_ns::MyAnotherObject *arg1 = (my_another_ns::MyAnotherObject *) NULL ;
    
    arg1 = SE_THIS_OBJECT<my_another_ns::MyAnotherObject>(s);
    if (nullptr == arg1) return true;
    
    ok &= sevalue_to_native(args[0], &arg1->b, s.thisObject());
    SE_PRECONDITION2(ok, false, "Error processing arguments"); 
    
    
    return true;
}
SE_BIND_PROP_SET(js_my_another_ns_MyAnotherObject_b_set) 

static bool js_my_another_ns_MyAnotherObject_b_get(se::State& s)
{
    CC_UNUSED bool ok = true;
    my_another_ns::MyAnotherObject *arg1 = (my_another_ns::MyAnotherObject *) NULL ;
    
    arg1 = SE_THIS_OBJECT<my_another_ns::MyAnotherObject>(s);
    if (nullptr == arg1) return true;
    
    ok &= nativevalue_to_se(arg1->b, s.rval(), s.thisObject()); 
    
    
    return true;
}
SE_BIND_PROP_GET(js_my_another_ns_MyAnotherObject_b_get) 

static bool js_new_my_another_ns_MyAnotherObject(se::State& s) // NOLINT(readability-identifier-naming)
{
    CC_UNUSED bool ok = true;
    const auto& args = s.args();
    size_t argc = args.size();
    
    my_another_ns::MyAnotherObject *result;
    result = (my_another_ns::MyAnotherObject *)new my_another_ns::MyAnotherObject();
    
    
    auto *ptr = JSB_MAKE_PRIVATE_OBJECT_WITH_INSTANCE(result);
    s.thisObject()->setPrivateObject(ptr);
    return true;
}
SE_BIND_CTOR(js_new_my_another_ns_MyAnotherObject, __jsb_my_another_ns_MyAnotherObject_class, js_delete_my_another_ns_MyAnotherObject)

static bool js_delete_my_another_ns_MyAnotherObject(se::State& s)
{
    return true;
}
SE_BIND_FINALIZE_FUNC(js_delete_my_another_ns_MyAnotherObject) 

template<>
bool sevalue_to_native(const se::Value &from, my_another_ns::MyAnotherObject * to, se::Object *ctx)
{
    assert(from.isObject());
    se::Object *json = from.toObject();
    auto* data = reinterpret_cast<my_another_ns::MyAnotherObject*>(json->getPrivateData());
    if (data) {
        *to = *data;
        return true;
    }
    se::Value field;
    bool ok = true;
    
    json->getProperty("a", &field, true);
    if (!field.isNullOrUndefined()) {
        ok &= sevalue_to_native(field, &(to->a), ctx);
    }
    
    
    json->getProperty("b", &field, true);
    if (!field.isNullOrUndefined()) {
        ok &= sevalue_to_native(field, &(to->b), ctx);
    }
    
    
    return ok;
}


bool js_register_my_another_ns_MyAnotherObject(se::Object* obj) {
    auto* cls = se::Class::create("MyAnotherObject", obj, nullptr, _SE(js_new_my_another_ns_MyAnotherObject)); 
    
    cls->defineStaticProperty("__isJSB", se::Value(true), se::PropertyAttribute::READ_ONLY | se::PropertyAttribute::DONT_ENUM | se::PropertyAttribute::DONT_DELETE);
    cls->defineProperty("a", _SE(js_my_another_ns_MyAnotherObject_a_get), _SE(js_my_another_ns_MyAnotherObject_a_set)); 
    cls->defineProperty("b", _SE(js_my_another_ns_MyAnotherObject_b_get), _SE(js_my_another_ns_MyAnotherObject_b_set)); 
    
    
    
    
    
    cls->defineFinalizeFunction(_SE(js_delete_my_another_ns_MyAnotherObject));
    
    
    cls->install();
    JSBClassType::registerClass<my_another_ns::MyAnotherObject>(cls);
    
    __jsb_my_another_ns_MyAnotherObject_proto = cls->getProto();
    __jsb_my_another_ns_MyAnotherObject_class = cls;
    se::ScriptEngine::getInstance()->clearException();
    return true;
}




bool register_all_another_module(se::Object* obj) {
    // Get the ns
    se::Value nsVal;
    if (!obj->getProperty("another_ns", &nsVal, true))
    {
        se::HandleObject jsobj(se::Object::createPlainObject());
        nsVal.setObject(jsobj);
        obj->setProperty("another_ns", nsVal);
    }
    se::Object* ns = nsVal.toObject();
    /* Register classes */
    js_register_my_another_ns_MyAnotherObject(ns); 
    
    /* Register global variables & global functions */
    
    
    
    return true;
}


#if defined(__clang__)
#pragma clang diagnostic pop
#elif defined(__GNUC__) || defined(__GNUG__)
#pragma GCC diagnostic pop
#elif defined(_MSC_VER)
#pragma warning(pop)
#endif
// clang-format on
