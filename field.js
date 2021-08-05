
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
