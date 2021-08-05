

$(document).ready(function() {
    for(var i=1;i<=ColNumber;i++)
        {
        var Width   = get_rand(Limits.width[0]
                              ,Limits.width[1]);
        var Left    = get_rand(Limits.left[0]
                              ,Limits.left[1]);
        var Opacity = get_rand(Limits.opacity[0]
                              ,Limits.opacity[1]);
        set_col(Width,Left,Opacity,"col"+i);
        }

    charlist = build_char_list(usable_chars);

    for (var i=0;i<30;i++)
        charlist.push(32);

    // init fields
    for (Term in terms)
        {
        texter.set(Term,terms[Term]);
        }
    texter.init(charlist);
    current_language = langs[get_rand(1,langs.length];
    lang(current_language);
    //setTimeout(function() {texter.go()},0);

    $('#lang a').click(function() {
        $('#lang a.selected').removeClass('selected');
        stop_random();
        lang($(this).attr('id').substr(2));
        $(this).addClass('selected');
        texter.go();
        start_random();
        return false;
        });


    $('h1').txtransit({});
    $('h1').txtransit("salut");
    });



function random() {
    texter.random();
    setTimeout(function() { random(); }
              ,get_rand(8,20)*1000);
    }

function build_char_list(chars)
    {
    var output = [];
    for (var i=0,l=chars.length;i<l;i++)
        {
        var Low = chars[i][0];
        var Max = chars[i][1];
        for (var j=Low; j <= Max; j++)
            {
            output.push(j);
            }
        }
    return output;
    }



function set(n)
    {
    $('body').css('background-image','url(./photo.php?n='+n);
    }

function go() {
    texter.prepare(current_language);
    if (!busy)
        timer = setInterval(function() 
            {
            texter.step();
            },200);
    else
        {
        clearInterval(timer);
        console.log(its);
        }
    busy=!busy;
    }



function set_col(Width,Left,Opacity,Id) {
    var $newdiv = $('<div id="col'+Id+'" class="column"/>')
            .css('width',Width)
            .css('left',Left+'em')
            .css('opacity',Opacity/100);
//            .css('background-color','rgb('+Clr+','+Clr+','+Clr+')');
    $('body').append($newdiv);
    }

