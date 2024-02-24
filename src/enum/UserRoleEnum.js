function define(name, value) {
    Object.defineProperty(exports, name, {
        value: value,
        enumerable: true,
        writable: false,
        configurable: false
    });
}

define("USER", 1);
define("PANDA", 3);
define("MODER", 2);
define("ADMIN", 4);
