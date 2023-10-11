// MyObject.h
#pragma once
#include "cocos/cocos.h"
#include "MyRef.h"
#include "MyAnotherObject.h"
#include <memory>

#ifndef USE_MY_FEATURE
#define USE_MY_FEATURE 0
#endif

namespace my_ns {

#if USE_MY_FEATURE
class MyFeatureObject {
public:
    void foo() {
        CC_LOG_DEBUG("==> MyFeatureObject::foo");
    }
};
#else
class MyFeatureObject;
#endif

// MyObject inherits from MyRef
class MyObject : public MyRef {
public:
    MyObject() = default;
    MyObject(int a, bool b) {}
    virtual ~MyObject() = default;
    void print() {
        CC_LOG_DEBUG("==> a: %d, b: %d\n", _a, (int)_b);
    }

    void methodToBeIgnored() {}
    float propertyToBeIgnored{345.123F};

    void methodToBeRenamed() {
        CC_LOG_DEBUG("==> hello MyObject::methodToBeRenamed");
    }
    int propertyToBeRenamed{1234};

    void setType(int v) { _type = v; CC_LOG_DEBUG("==> setType: v: %d", v); }
    int getType() const { return _type; }

    float publicFloatProperty{1.23F};

    MyFeatureObject* getFeatureObject() {
#if USE_MY_FEATURE
        if (_featureObject == nullptr) {
            _featureObject = new MyFeatureObject();
        }
#endif
        return _featureObject;
    }

    void helloWithAnotherObject(const my_another_ns::MyAnotherObject &obj) {
        CC_LOG_DEBUG("==> helloWithAnotherObject, a: %f, b: %d", obj.a, obj.b);
    }

private:
    int _a{100};
    bool _b{true};
    int _type{333};
    MyFeatureObject* _featureObject{nullptr};
};
} // namespace my_ns {
