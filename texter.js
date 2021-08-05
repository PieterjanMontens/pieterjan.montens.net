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
