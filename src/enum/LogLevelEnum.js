function define(name, value) {
    Object.defineProperty(exports, name, {
        value: value,
        enumerable: true,
        writable: false,
        configurable: false
    });
}

define("", );
define("FATAL", 1);
define("ERROR", 2);
define("WARN", 3);
define("INFO", 4);
define("DEBUG", 5);
