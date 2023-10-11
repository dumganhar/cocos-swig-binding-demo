// MyRef.h
#pragma once
namespace my_ns {
class MyRef  {
public:
    MyRef() = default;
    virtual ~MyRef() = default;
    void addRef() { _ref++; }
    void release() { --_ref; }
private:
    unsigned int _ref{0};
};
} // namespace my_ns {
