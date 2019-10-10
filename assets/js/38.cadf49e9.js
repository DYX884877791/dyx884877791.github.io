(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{285:function(t,s,a){"use strict";a.r(s);var r=a(0),n=Object(r.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"string-字符串"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#string-字符串","aria-hidden":"true"}},[t._v("#")]),t._v(" String 字符串")]),t._v(" "),a("h2",{attrs:{id:"字符串如何定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字符串如何定义","aria-hidden":"true"}},[t._v("#")]),t._v(" 字符串如何定义")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("在Python中，可以用单引号或者双引号' '、\"\"来定义一个字符串类型的变量，除此之外，还可以使用一对三个连续的引号来定义一串占用多行的字符串，比如'''...'''或者\"\"\"...\"\"\"；")])]),t._v(" "),a("li",[a("p",[t._v("在Python3.x版本中，字符串是以Unicode编码的，也就是说，Python3.x中的字符串默认支持多语言，而在Python2.x中，字符串类型是以ASCII编码的，默认只支持英文，当需要定义中文字符串变量时，需要在文件头部指明文件编码格式为UTF-8；")])]),t._v(" "),a("li",[a("p",[t._v('如果字符串内容本身包含了单 引号或双引号，此时就需要进行特殊处理 。此时可以使用不同的引号将字符串括起来处理。 也可以对引号进行转义（使用反斜线"\\"将字符串中的特殊字 符进行转义）；')])])]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("str1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"I\'m a Python Coder"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nstr2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'I\\'m a Python Coder'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"长字符串"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#长字符串","aria-hidden":"true"}},[t._v("#")]),t._v(" 长字符串")]),t._v(" "),a("ol",[a("li",[t._v("当程序中有大段文本内容或者多行文本内容要定义成字符串时，可以使用连续三个引号"),a("code",[t._v("'''...'''")]),t._v("或者"),a("code",[t._v('"""..."""')]),t._v("定义长字符串，因为这种形式非常强大，可以让字符串中包含任何内容，既可包含单引号，也可包含双引号 ，优先推荐使用长字符串形式，定义的长字符串打印输出时按原样输出；")])]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("str3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v("'''The quick brown fox\njumps over the lazy dog'''")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nThe quick brown fox\njumps over the lazy dog\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v('Python 还允许使用转义字符"\\"对换行符进行转义，转义之后的换行符不会“中断” 字符串 ；')])]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("str4 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 'The quick brown fox \\\njumps over the lazy dog'\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nThe quick brown fox jumps over the lazy dog\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v('如果在长字符串中每一行字符串的行尾使用转义字符"\\"时，相当于对行尾的换行符也进行了转义，这样会在同一行中输出；')])]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("str5 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v("'''The quick brown fox \\\njumps over the lazy dog'''")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nThe quick brown fox jumps over the lazy dog\n")])])]),a("h2",{attrs:{id:"原始字符串"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原始字符串","aria-hidden":"true"}},[t._v("#")]),t._v(" 原始字符串")]),t._v(" "),a("h2",{attrs:{id:"字符串的格式化输出"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字符串的格式化输出","aria-hidden":"true"}},[t._v("#")]),t._v(" 字符串的格式化输出")])])},[],!1,null,null,null);s.default=n.exports}}]);