// MyComponent.ts
import { _decorator, Component } from 'cc';
import { NATIVE } from 'cc/env';
const { ccclass, property } = _decorator;

@ccclass('MyComponent')
export class MyComponent extends Component {
    @property
    myInt: number = 0

    @property
    myString: string = "hello"

    constructor() {
        super()
    }

    start() {
        if (NATIVE) {
            const myObj = new my_ns.MyCoolObject();
            myObj.print();
            console.log(`==> myObj.publicFloatProperty: ${myObj.publicFloatProperty}`);
            console.log(`==> old: myObj.coolProperty: ${myObj.coolProperty}`);
            myObj.coolProperty = 666;
            console.log(`==> new: myObj.coolProperty: ${myObj.coolProperty}`);
            myObj.coolMethod();
            console.log(`==> old: myObj.type: ${myObj.type}`);
            myObj.type = 888;
            console.log(`==> new: myObj.type: ${myObj.type}`);
            const featureObj = myObj.getFeatureObject();
            console.log(`==> featureObj: ${featureObj}`);
            if (featureObj) {
                featureObj.foo();
            }
            const anotherObj = new another_ns.MyAnotherObject();
            myObj.helloWithAnotherObject(anotherObj);
        }
    }
}

