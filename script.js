var letterTable = [];
var TableReverse = []

function test_letter(Obj) {
    var Obj = $(Obj);
    //5sec: 1191
    //Obj.each(function() {
    //    var Text = $(this).html();
    //    var Nums = string2num(Text);
    //    var Rand = randomize(Nums);
    //    $(this).html(num2string(Rand));
    //    });

    //5sec: 1122
    //Obj.each(function() {
    //    var o = this;
    //    var index = get_rand(0,o.innerHTML.length);
    //    var value = o.innerHTML.charCodeAt(index);
    //    var letter = String.fromCharCode(rand_letter(value));
    //    o.innerHTML = o.innerHTML.substring(0,index) + letter + o.innerHTML.substring(index+1);
    //    });

    //5sec: 1181, 1191
    Obj.each(function() {
        if (get_rand(0,5 < 4)) return;
        var t = $(this).html();
        var index = get_rand(0,t.length);
        var value = t.charCodeAt(index);
        var letter = String.fromCharCode(rand_letter(value));
        $(this).html([t.substring(0,index), letter, t.substring(index+1)].join(''));
        });


    }

function string2num(Str) {
    var Length = Str.length;
    var Output = [];
    for (var i=0;i<Length;i++)
        Output.push(Str.charCodeAt(i));
    return Output;
    }

function num2string(Input) {
    Output = [];
    for (var i=0,l=Input.length;i<l;i++)
        Output.push(String.fromCharCode(Input[i]));
    return Output.join('');
    }

function randomize(Input) {
    var index = get_rand(0,Input.length);
    var current = Input[index];
    Input[index] = rand_letter(current);
    return Input;
    }

//A-Z: 65 - 90
//a-z: 97 - 122
function rand_letter(Ltr) {
    switch(true)
        {
        case Ltr >=  65 && Ltr <= 90:
            return get_rand(65,90);
        case Ltr >=97 && Ltr <= 122:
            return get_rand(97,122);
        default:
            return Ltr;
        }
    }
