class Name {
    constructor(private readonly _value: string) {
        //asserts pour vérifier le format
    }

    //ValueObject

    get value(): string {
        return this._value
    }
}