function randomize_char(Char,Charlist,Chance)
    {
    if (get_rand(0,10) < Chance)
        {
        var L = Charlist.length;
        return Charlist[get_rand(0,L)];
        }
    return Char;
    }


function inherit(par,chi)
    {
    var chi = chi || {};
    for (var i in par)
        {
        if (chi[i] !== undefined) continue;
        if (typeof par[i] === 'object')
            {
            chi[i] = (par[i].constructor === Array) ? [] : {};
            inherit(par[i],chi[i]);
            }
        else
            {
            chi[i] = par[i];
            }
        }
    return chi;
    }

function obj2arr(OrObj)
    {
    var Obj = [];
    jQuery.each(OrObj, function(name, value) {
        Obj.push({key:name,val:value});
        });
    return Obj;
    }


function objCopy(Obj)
    {
    if (Obj == null || typeof(Obj) != 'object')
        return Obj;

    var temp = new Obj.constructor();
    for (var key in Obj)
        temp[key] = objCopy(Obj[key]);
    return temp;
    }

function unbsp2sp(Str) {
    return Str.replace(/&nbsp;/g,' ');
    }

function sp2unbsp(Str) {
    return Str.replace(/\s{2}/g,'&nbsp; ');
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

function array_step(Charlist,Final,Current,Size,StepCount)
    {
    var Step=[];
    var Middle = Math.floor(max_steps/3);
    if (StepCount == max_steps)
        {
        Step = Final;
        }
    else if (StepCount < Middle)
        {
        var i=0;
        while (i < Size)
            {
            Step[i] = randomize_char(Current[i],Charlist,StepCount);
            i++;
            }
        }
    else
        {
        var i=0;
        var Level = 1/Math.sqrt(max_steps-StepCount);
        while (i < Size && Level > 0)
            {
            if (Math.random() < Level) 
                Step[i] = Final[i];
            else
                Step[i] = Current[i];
            i++;
            }
        }
    return Step;
    }

function test()
    {
    var out = {};
    for (var i=20,l=255;i<l;i++)
        {
        out[i] = String.fromCharCode(i);
        }
    return out;
    }
