var assert = buster.assert;
var refute = buster.refute;

buster.testCase("Register", {

    beforeEach: function () {

    },

    "Can create a register": function () {
        var target = new Register();
        refute.isNull(target);
    }

});

