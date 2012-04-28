var dusty = new Peggy('dusty');

dusty.root("body", dusty.any(":comment"/*, ":section", ":partial", ":special", ":reference", ":buffer"*/), function(value){
	return value;
});

dusty.rule("literal", )
dusty.rule("esc", '\\"', function(value) { return '"'; });
dusty.rule("comment",  dusty.all(":ld", "!", /.+[^!}]/, "!", ":rd"),  function(value){ return value[2]; });
dusty.rule("tag", dusty.all(":ld", /[#?^><+%:@/~%]/, ":not_rd", ":rd"));

/* Peggy needs a .not functionality to prevent the duplication that this rule has. */
dusty.rule("not_rd", /[^\}\\n\\r\\u2028\\u2029].+/);
dusty.rule("")
dusty.rule("ld", "{");
dusty.rule("rd", "}");
dusty.rule("eol", dusty.any("\n", "\r\n", "\r", "\u2028", "\u2029"));
dusty.rule("ws", /[\t\v\f\u00A0\uFEFF]/);