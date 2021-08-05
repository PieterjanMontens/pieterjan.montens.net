/* Js mostly quick'n'dirty. This ain't no enterprise-level,pacemaker-controlling
 * ,satellite-launching, application-critical code. Get's the job done though.
 *
 * Pieterjan Montens 2013
 */

// INIT ////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
var Limits = {'width':[13,90]
             ,'left':[44,150]
             ,'opacity':[1,30]};

var ColNumber= 11;

var timer;
var max_steps=20;
var steps_interval=75;
var random_timer=undefined;

var usable_chars=[[32,32]   // ' '
                 ,[48,57]   // 0-9
                 ,[65,90]   // A-Z
                 ,[97,122]  // a-z
                 ];

var random_limits = [8,12];
var current_language = undefined;

// ONLOAD //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
$(document).ready(function()    
    {
    current_language = langs[get_rand(0,langs.length-1)];
    lang(current_language);

    init_columns();
    init_languageselection();
    init_texttransitions();
    });

// MISC FUNCTIONS //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
function get_rand(Low,High) 
    {
    return Low + Math.floor(Math.random() * (High-Low +1));
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
            chi[i] = par[i];
        }
    return chi;
    }


// COLUMNS STUFF ///////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
function init_columns()
    {
    for(var i=1;i<=ColNumber;i++)
        {
        var Width   = get_rand(Limits.width[0]   ,Limits.width[1]);
        var Left    = get_rand(Limits.left[0]    ,Limits.left[1]);
        var Opacity = get_rand(Limits.opacity[0] ,Limits.opacity[1]);
        column(Width,Left,Opacity,"col"+i);
        }
    }

function column(Width,Left,Opacity,Id) {
    var newdiv = $('<div id="col'+Id+'" class="column"/>')
                  .css('width',Width)
                  .css('left',Left+'em')
                  .css('opacity',Opacity/100);
    $('body').append(newdiv);
    }

// LANGUAGE STUFF //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
function init_languageselection()
    {
    $('#lang a').click(function() {
        stop_random();
        lang($(this).attr('id').substr(2));
        texter.go();
        start_random();
        return false;
        });
    }

function lang(Ln)
    {
    $('#lang a.selected').removeClass('selected');
    $('#l_'+Ln).addClass('selected');
    current_language = Ln;
    texter.prepare(Ln);
    start_random();
    }

function start_random()
    {
    clearTimeout(random_timer);
    random_timer = setTimeout(function() { random(); },get_rand(random_limits[0],random_limits[1])*1000);
    }

function stop_random()
    {
    clearTimeout(random_timer);
    }

function random() {
    texter.random();
    setTimeout(function() { random(); } ,get_rand(random_limits[0],random_limits[1])*1000);
    }

// TEXT TRANSITION STUFF ///////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
function init_texttransitions()
    {
    var charlist = build_char_list(usable_chars);
    for (var i=0;i<30;i++)
        charlist.push(32);
    for (Term in terms)
        texter.set(Term,terms[Term]);
    texter.init(charlist);
    }

function build_char_list(chars)
    {
    var output = [];
    for (var i=0,l=chars.length;i<l;i++)
        {
        for (var j=chars[i][0]; j <= chars[i][1]; j++)
            output.push(j);
        }
    return output;
    }

function sp2unbsp(Str) {
    return Str.replace(/\s{2}/g,'&nbsp; ');
    }

function string2num(Str) {
    var Output = [];
    for (var i=0,l=Str.length;i<l;i++)
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
        Step = Final;
    else if (StepCount < Middle)
        {
        for(var i=0;i<Size;i++)
            Step[i] = randomize_char(Current[i],Charlist,StepCount);
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

function randomize_char(Char,Charlist,Chance)
    {
    if (get_rand(0,10) < Chance)
        {
        var L = Charlist.length;
        return Charlist[get_rand(0,L)];
        }
    return Char;
    }

var texter = function()
    {
    var fields = [];
    var timer;
    var fieldtimer = [];
    var fieldcounter = []
    var step_counter = 0;
    return {
        set     : field_add,
        init    : fields_init,
        prepare : fields_move_init,
        go      : fields_move,
        step    : fields_move_step,
        random  : random_field
        }

    function field_add(name, contents)
        {
        var field = new_field(name,contents);
        fields.push(field);
        return this;
        }

    function fields_init(charlist)
        {
        for (var i=0,l=fields.length;i<l;i++)
            {
            var field = fields[i];
            field.init(charlist);
            }
        return this;
        }

    function fields_move_init(ln)
        {
        for (var i=0,l=fields.length;i<l;i++)
            {
            var field = fields[i];
            field.move_init(ln);
            }
        return this;
        }

    function fields_move()
        {
        step_counter = 0;
        fields_move_step();
        timer = setInterval(function()
            {
            fields_move_step();
            },steps_interval);
        return this;
        }

    function fields_move_step()
        {
        var stop = (step_counter >= max_steps)
        if (stop) 
            clearInterval(timer);

        for (var i=0,l=fields.length;i<l;i++)
            {
            var field = fields[i];
            if (stop) 
                field.display_set(current_language);
            else 
                field.move_step();
            }
        step_counter++;
        }

    function random_field()
        {
        var F = get_rand(0,fields.length-1);
        field_move(F);
        return this;
        }
 
    function field_move(index)
        {
        fieldcounter[index] = 0;
        var field = fields[index];
        field.move_init(current_language);
        field_move_step(index);
        fieldtimer[index] = setInterval(function()
            {
            field_move_step(index);
            },steps_interval);
        return this;
        }

    function field_move_step(index)
        {
        var stop = (fieldcounter[index] >= max_steps)
        if (stop) 
            clearInterval(fieldtimer[index]);

        var field = fields[index];
        if (stop) 
            field.display_set(current_language);
        else 
            field.move_step();
        fieldcounter[index]++
        }
    }();

function new_field(Name,Contents)
    {
    var Field = {name:Name,contents:Contents};
    return inherit(field_object,Field);
    }

var field_object = {
    init:function(charlist)
        {
        this.length = this.length_max();
        this.equalize();

        if (this.contents.default !== undefined)
            {
            this.contents.fr = this.contents.default;
            this.contents.nl = this.contents.default;
            }

        this.display_set(current_language);
        this.charlist = charlist;
        },
    length_max: function()
        {
        var length_max = 0;
        for (var i=0,l=langs.length;i<l;i++)
            {
            var ln = langs[i];
            var length = this.get_content(ln).length;
            length_max = length > length_max ? length : length_max;
            }
        return length_max;
        },

    equalize: function()
        {
        if (this.contents.default !== undefined) return this;
        for (var i=0,l=langs.length;i<l;i++)
            {
            var ln = langs[i];
            var length = this.contents[ln].length;
            if (length < this.length)
                {
                this.contents[ln] += this.filler(this.length - length);
                }
            }
        return this;
        },

    filler: function(length)
        {
        var filler = '';
        for (var i=0;i<length;i++)
            {
            filler += ' ';
            }
        return filler;
        },

    display_set:function(ln)
        {
        this.display(this.get_content(ln));
        this.actual=ln;
        return this;
        },

    display:function(content)
        {
        $('.translate[data-term='+this.name+']').html(sp2unbsp(content));
        },

    move_init:function(ln)
        {
        this.array_final = string2num(this.get_content(ln));
        this.array_step  = string2num(this.get_content(this.actual));
        this.step_count = 1;
        return this;
        },

    move_step:function()
        {
        this.array_step = array_step(this.charlist,this.array_final,this.array_step,this.length,this.step_count);
        this.display(num2string(this.array_step));
        this.step_count++;
        return this;
        },

    get_content:function(ln)
        {
        if (this.contents[ln] !== undefined)
            return this.contents[ln];
        if (this.contents.default !== undefined)
            return this.contents.default;
        return "empty";
        }
    }
