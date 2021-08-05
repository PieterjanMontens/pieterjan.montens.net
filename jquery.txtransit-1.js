(function($) 
    {
    var settings;
    $.fn.txtransit = function(arg1,options)
        {
        var arg1 = arg1 || {};

        if ($.isPlainObject(arg1))
            {
            var options = arg1;
            var text = null;
            }
        else 
            {
            var text = arg1;
            var options = (options !== undefined && $.isPlainObject(options)) ? options : {};
            }

        if (!$.isEmptyObject(options))
            settings = $.extend({},$.fn.txtransit.defaults,options);

        return this.each(function() {
            this.txtransit = function(Text)
                {
                $(this).html(Text);
                }
            });

        }
    $.fn.txtransit.defaults = {
                steps      : 20,
                interval   : 75,
                length     : 100,
                characters : [[48,57]   // 0-9
                             ,[65,90]   // A-Z
                             ,[97,122]],  // a-z
                callback   : null
                };
    }(jQuery))
