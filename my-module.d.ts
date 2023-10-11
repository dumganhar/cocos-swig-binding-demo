// my-module.d.ts
declare namespace my_ns {
class MyFeatureObject {
    foo() : void;
}

class MyCoolObject {
    constructor();
    constructor(a: number, b: number);

    publicFloatProperty : number;
    print() : void;
    coolProperty: number;
    coolMethod() : void;
    type: number;
    getFeatureObject() : MyFeatureObject;
    helloWithAnotherObject(obj: another_ns.MyAnotherObject) : void;
}
}

declare namespace another_ns {
class MyAnotherObject {
    a: number;
    b: number;
}
}