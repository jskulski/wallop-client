var config = module.exports;

config["End-to-end"] = {
    rootPath: "../",
    environment: "browser",
    sources: [
        "lib/main.js",
        "lib/**/*.js"
    ],
    tests: [
        "test/*-test.js"
    ]
}
