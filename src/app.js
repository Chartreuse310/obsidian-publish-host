const __modules = {
    932: e => {
        "use strict";
        e.exports = function (e, t) {
            var n, r = String(e), i = 0;
            if ("string" != typeof t || 1 !== t.length) throw new Error("Expected character");
            n = r.indexOf(t);
            for (; -1 !== n;) i++, n = r.indexOf(t, n + 1);
            return i
        }
    }, 5848: e => {
        "use strict";
        e.exports = JSON.parse('{"nbsp":" ","iexcl":"¡","cent":"¢","pound":"£","curren":"¤","yen":"¥","brvbar":"¦","sect":"§","uml":"¨","copy":"©","ordf":"ª","laquo":"«","not":"¬","shy":"­","reg":"®","macr":"¯","deg":"°","plusmn":"±","sup2":"²","sup3":"³","acute":"´","micro":"µ","para":"¶","middot":"·","cedil":"¸","sup1":"¹","ordm":"º","raquo":"»","frac14":"¼","frac12":"½","frac34":"¾","iquest":"¿","Agrave":"À","Aacute":"Á","Acirc":"Â","Atilde":"Ã","Auml":"Ä","Aring":"Å","AElig":"Æ","Ccedil":"Ç","Egrave":"È","Eacute":"É","Ecirc":"Ê","Euml":"Ë","Igrave":"Ì","Iacute":"Í","Icirc":"Î","Iuml":"Ï","ETH":"Ð","Ntilde":"Ñ","Ograve":"Ò","Oacute":"Ó","Ocirc":"Ô","Otilde":"Õ","Ouml":"Ö","times":"×","Oslash":"Ø","Ugrave":"Ù","Uacute":"Ú","Ucirc":"Û","Uuml":"Ü","Yacute":"Ý","THORN":"Þ","szlig":"ß","agrave":"à","aacute":"á","acirc":"â","atilde":"ã","auml":"ä","aring":"å","aelig":"æ","ccedil":"ç","egrave":"è","eacute":"é","ecirc":"ê","euml":"ë","igrave":"ì","iacute":"í","icirc":"î","iuml":"ï","eth":"ð","ntilde":"ñ","ograve":"ò","oacute":"ó","ocirc":"ô","otilde":"õ","ouml":"ö","divide":"÷","oslash":"ø","ugrave":"ù","uacute":"ú","ucirc":"û","uuml":"ü","yacute":"ý","thorn":"þ","yuml":"ÿ","fnof":"ƒ","Alpha":"Α","Beta":"Β","Gamma":"Γ","Delta":"Δ","Epsilon":"Ε","Zeta":"Ζ","Eta":"Η","Theta":"Θ","Iota":"Ι","Kappa":"Κ","Lambda":"Λ","Mu":"Μ","Nu":"Ν","Xi":"Ξ","Omicron":"Ο","Pi":"Π","Rho":"Ρ","Sigma":"Σ","Tau":"Τ","Upsilon":"Υ","Phi":"Φ","Chi":"Χ","Psi":"Ψ","Omega":"Ω","alpha":"α","beta":"β","gamma":"γ","delta":"δ","epsilon":"ε","zeta":"ζ","eta":"η","theta":"θ","iota":"ι","kappa":"κ","lambda":"λ","mu":"μ","nu":"ν","xi":"ξ","omicron":"ο","pi":"π","rho":"ρ","sigmaf":"ς","sigma":"σ","tau":"τ","upsilon":"υ","phi":"φ","chi":"χ","psi":"ψ","omega":"ω","thetasym":"ϑ","upsih":"ϒ","piv":"ϖ","bull":"•","hellip":"…","prime":"′","Prime":"″","oline":"‾","frasl":"⁄","weierp":"℘","image":"ℑ","real":"ℜ","trade":"™","alefsym":"ℵ","larr":"←","uarr":"↑","rarr":"→","darr":"↓","harr":"↔","crarr":"↵","lArr":"⇐","uArr":"⇑","rArr":"⇒","dArr":"⇓","hArr":"⇔","forall":"∀","part":"∂","exist":"∃","empty":"∅","nabla":"∇","isin":"∈","notin":"∉","ni":"∋","prod":"∏","sum":"∑","minus":"−","lowast":"∗","radic":"√","prop":"∝","infin":"∞","ang":"∠","and":"∧","or":"∨","cap":"∩","cup":"∪","int":"∫","there4":"∴","sim":"∼","cong":"≅","asymp":"≈","ne":"≠","equiv":"≡","le":"≤","ge":"≥","sub":"⊂","sup":"⊃","nsub":"⊄","sube":"⊆","supe":"⊇","oplus":"⊕","otimes":"⊗","perp":"⊥","sdot":"⋅","lceil":"⌈","rceil":"⌉","lfloor":"⌊","rfloor":"⌋","lang":"〈","rang":"〉","loz":"◊","spades":"♠","clubs":"♣","hearts":"♥","diams":"♦","quot":"\\"","amp":"&","lt":"<","gt":">","OElig":"Œ","oelig":"œ","Scaron":"Š","scaron":"š","Yuml":"Ÿ","circ":"ˆ","tilde":"˜","ensp":" ","emsp":" ","thinsp":" ","zwnj":"‌","zwj":"‍","lrm":"‎","rlm":"‏","ndash":"–","mdash":"—","lsquo":"‘","rsquo":"’","sbquo":"‚","ldquo":"“","rdquo":"”","bdquo":"„","dagger":"†","Dagger":"‡","permil":"‰","lsaquo":"‹","rsaquo":"›","euro":"€"}')
    }, 6588: e => {
        "use strict";
        e.exports = JSON.parse('{"AElig":"Æ","AMP":"&","Aacute":"Á","Acirc":"Â","Agrave":"À","Aring":"Å","Atilde":"Ã","Auml":"Ä","COPY":"©","Ccedil":"Ç","ETH":"Ð","Eacute":"É","Ecirc":"Ê","Egrave":"È","Euml":"Ë","GT":">","Iacute":"Í","Icirc":"Î","Igrave":"Ì","Iuml":"Ï","LT":"<","Ntilde":"Ñ","Oacute":"Ó","Ocirc":"Ô","Ograve":"Ò","Oslash":"Ø","Otilde":"Õ","Ouml":"Ö","QUOT":"\\"","REG":"®","THORN":"Þ","Uacute":"Ú","Ucirc":"Û","Ugrave":"Ù","Uuml":"Ü","Yacute":"Ý","aacute":"á","acirc":"â","acute":"´","aelig":"æ","agrave":"à","amp":"&","aring":"å","atilde":"ã","auml":"ä","brvbar":"¦","ccedil":"ç","cedil":"¸","cent":"¢","copy":"©","curren":"¤","deg":"°","divide":"÷","eacute":"é","ecirc":"ê","egrave":"è","eth":"ð","euml":"ë","frac12":"½","frac14":"¼","frac34":"¾","gt":">","iacute":"í","icirc":"î","iexcl":"¡","igrave":"ì","iquest":"¿","iuml":"ï","laquo":"«","lt":"<","macr":"¯","micro":"µ","middot":"·","nbsp":" ","not":"¬","ntilde":"ñ","oacute":"ó","ocirc":"ô","ograve":"ò","ordf":"ª","ordm":"º","oslash":"ø","otilde":"õ","ouml":"ö","para":"¶","plusmn":"±","pound":"£","quot":"\\"","raquo":"»","reg":"®","sect":"§","shy":"­","sup1":"¹","sup2":"²","sup3":"³","szlig":"ß","thorn":"þ","times":"×","uacute":"ú","ucirc":"û","ugrave":"ù","uml":"¨","uuml":"ü","yacute":"ý","yen":"¥","yuml":"ÿ"}')
    }, 3407: e => {
        "use strict";
        e.exports = JSON.parse('{"AEli":"Æ","AElig":"Æ","AM":"&","AMP":"&","Aacut":"Á","Aacute":"Á","Abreve":"Ă","Acir":"Â","Acirc":"Â","Acy":"А","Afr":"𝔄","Agrav":"À","Agrave":"À","Alpha":"Α","Amacr":"Ā","And":"⩓","Aogon":"Ą","Aopf":"𝔸","ApplyFunction":"⁡","Arin":"Å","Aring":"Å","Ascr":"𝒜","Assign":"≔","Atild":"Ã","Atilde":"Ã","Aum":"Ä","Auml":"Ä","Backslash":"∖","Barv":"⫧","Barwed":"⌆","Bcy":"Б","Because":"∵","Bernoullis":"ℬ","Beta":"Β","Bfr":"𝔅","Bopf":"𝔹","Breve":"˘","Bscr":"ℬ","Bumpeq":"≎","CHcy":"Ч","COP":"©","COPY":"©","Cacute":"Ć","Cap":"⋒","CapitalDifferentialD":"ⅅ","Cayleys":"ℭ","Ccaron":"Č","Ccedi":"Ç","Ccedil":"Ç","Ccirc":"Ĉ","Cconint":"∰","Cdot":"Ċ","Cedilla":"¸","CenterDot":"·","Cfr":"ℭ","Chi":"Χ","CircleDot":"⊙","CircleMinus":"⊖","CirclePlus":"⊕","CircleTimes":"⊗","ClockwiseContourIntegral":"∲","CloseCurlyDoubleQuote":"”","CloseCurlyQuote":"’","Colon":"∷","Colone":"⩴","Congruent":"≡","Conint":"∯","ContourIntegral":"∮","Copf":"ℂ","Coproduct":"∐","CounterClockwiseContourIntegral":"∳","Cross":"⨯","Cscr":"𝒞","Cup":"⋓","CupCap":"≍","DD":"ⅅ","DDotrahd":"⤑","DJcy":"Ђ","DScy":"Ѕ","DZcy":"Џ","Dagger":"‡","Darr":"↡","Dashv":"⫤","Dcaron":"Ď","Dcy":"Д","Del":"∇","Delta":"Δ","Dfr":"𝔇","DiacriticalAcute":"´","DiacriticalDot":"˙","DiacriticalDoubleAcute":"˝","DiacriticalGrave":"`","DiacriticalTilde":"˜","Diamond":"⋄","DifferentialD":"ⅆ","Dopf":"𝔻","Dot":"¨","DotDot":"⃜","DotEqual":"≐","DoubleContourIntegral":"∯","DoubleDot":"¨","DoubleDownArrow":"⇓","DoubleLeftArrow":"⇐","DoubleLeftRightArrow":"⇔","DoubleLeftTee":"⫤","DoubleLongLeftArrow":"⟸","DoubleLongLeftRightArrow":"⟺","DoubleLongRightArrow":"⟹","DoubleRightArrow":"⇒","DoubleRightTee":"⊨","DoubleUpArrow":"⇑","DoubleUpDownArrow":"⇕","DoubleVerticalBar":"∥","DownArrow":"↓","DownArrowBar":"⤓","DownArrowUpArrow":"⇵","DownBreve":"̑","DownLeftRightVector":"⥐","DownLeftTeeVector":"⥞","DownLeftVector":"↽","DownLeftVectorBar":"⥖","DownRightTeeVector":"⥟","DownRightVector":"⇁","DownRightVectorBar":"⥗","DownTee":"⊤","DownTeeArrow":"↧","Downarrow":"⇓","Dscr":"𝒟","Dstrok":"Đ","ENG":"Ŋ","ET":"Ð","ETH":"Ð","Eacut":"É","Eacute":"É","Ecaron":"Ě","Ecir":"Ê","Ecirc":"Ê","Ecy":"Э","Edot":"Ė","Efr":"𝔈","Egrav":"È","Egrave":"È","Element":"∈","Emacr":"Ē","EmptySmallSquare":"◻","EmptyVerySmallSquare":"▫","Eogon":"Ę","Eopf":"𝔼","Epsilon":"Ε","Equal":"⩵","EqualTilde":"≂","Equilibrium":"⇌","Escr":"ℰ","Esim":"⩳","Eta":"Η","Eum":"Ë","Euml":"Ë","Exists":"∃","ExponentialE":"ⅇ","Fcy":"Ф","Ffr":"𝔉","FilledSmallSquare":"◼","FilledVerySmallSquare":"▪","Fopf":"𝔽","ForAll":"∀","Fouriertrf":"ℱ","Fscr":"ℱ","GJcy":"Ѓ","G":">","GT":">","Gamma":"Γ","Gammad":"Ϝ","Gbreve":"Ğ","Gcedil":"Ģ","Gcirc":"Ĝ","Gcy":"Г","Gdot":"Ġ","Gfr":"𝔊","Gg":"⋙","Gopf":"𝔾","GreaterEqual":"≥","GreaterEqualLess":"⋛","GreaterFullEqual":"≧","GreaterGreater":"⪢","GreaterLess":"≷","GreaterSlantEqual":"⩾","GreaterTilde":"≳","Gscr":"𝒢","Gt":"≫","HARDcy":"Ъ","Hacek":"ˇ","Hat":"^","Hcirc":"Ĥ","Hfr":"ℌ","HilbertSpace":"ℋ","Hopf":"ℍ","HorizontalLine":"─","Hscr":"ℋ","Hstrok":"Ħ","HumpDownHump":"≎","HumpEqual":"≏","IEcy":"Е","IJlig":"Ĳ","IOcy":"Ё","Iacut":"Í","Iacute":"Í","Icir":"Î","Icirc":"Î","Icy":"И","Idot":"İ","Ifr":"ℑ","Igrav":"Ì","Igrave":"Ì","Im":"ℑ","Imacr":"Ī","ImaginaryI":"ⅈ","Implies":"⇒","Int":"∬","Integral":"∫","Intersection":"⋂","InvisibleComma":"⁣","InvisibleTimes":"⁢","Iogon":"Į","Iopf":"𝕀","Iota":"Ι","Iscr":"ℐ","Itilde":"Ĩ","Iukcy":"І","Ium":"Ï","Iuml":"Ï","Jcirc":"Ĵ","Jcy":"Й","Jfr":"𝔍","Jopf":"𝕁","Jscr":"𝒥","Jsercy":"Ј","Jukcy":"Є","KHcy":"Х","KJcy":"Ќ","Kappa":"Κ","Kcedil":"Ķ","Kcy":"К","Kfr":"𝔎","Kopf":"𝕂","Kscr":"𝒦","LJcy":"Љ","L":"<","LT":"<","Lacute":"Ĺ","Lambda":"Λ","Lang":"⟪","Laplacetrf":"ℒ","Larr":"↞","Lcaron":"Ľ","Lcedil":"Ļ","Lcy":"Л","LeftAngleBracket":"⟨","LeftArrow":"←","LeftArrowBar":"⇤","LeftArrowRightArrow":"⇆","LeftCeiling":"⌈","LeftDoubleBracket":"⟦","LeftDownTeeVector":"⥡","LeftDownVector":"⇃","LeftDownVectorBar":"⥙","LeftFloor":"⌊","LeftRightArrow":"↔","LeftRightVector":"⥎","LeftTee":"⊣","LeftTeeArrow":"↤","LeftTeeVector":"⥚","LeftTriangle":"⊲","LeftTriangleBar":"⧏","LeftTriangleEqual":"⊴","LeftUpDownVector":"⥑","LeftUpTeeVector":"⥠","LeftUpVector":"↿","LeftUpVectorBar":"⥘","LeftVector":"↼","LeftVectorBar":"⥒","Leftarrow":"⇐","Leftrightarrow":"⇔","LessEqualGreater":"⋚","LessFullEqual":"≦","LessGreater":"≶","LessLess":"⪡","LessSlantEqual":"⩽","LessTilde":"≲","Lfr":"𝔏","Ll":"⋘","Lleftarrow":"⇚","Lmidot":"Ŀ","LongLeftArrow":"⟵","LongLeftRightArrow":"⟷","LongRightArrow":"⟶","Longleftarrow":"⟸","Longleftrightarrow":"⟺","Longrightarrow":"⟹","Lopf":"𝕃","LowerLeftArrow":"↙","LowerRightArrow":"↘","Lscr":"ℒ","Lsh":"↰","Lstrok":"Ł","Lt":"≪","Map":"⤅","Mcy":"М","MediumSpace":" ","Mellintrf":"ℳ","Mfr":"𝔐","MinusPlus":"∓","Mopf":"𝕄","Mscr":"ℳ","Mu":"Μ","NJcy":"Њ","Nacute":"Ń","Ncaron":"Ň","Ncedil":"Ņ","Ncy":"Н","NegativeMediumSpace":"​","NegativeThickSpace":"​","NegativeThinSpace":"​","NegativeVeryThinSpace":"​","NestedGreaterGreater":"≫","NestedLessLess":"≪","NewLine":"\\n","Nfr":"𝔑","NoBreak":"⁠","NonBreakingSpace":" ","Nopf":"ℕ","Not":"⫬","NotCongruent":"≢","NotCupCap":"≭","NotDoubleVerticalBar":"∦","NotElement":"∉","NotEqual":"≠","NotEqualTilde":"≂̸","NotExists":"∄","NotGreater":"≯","NotGreaterEqual":"≱","NotGreaterFullEqual":"≧̸","NotGreaterGreater":"≫̸","NotGreaterLess":"≹","NotGreaterSlantEqual":"⩾̸","NotGreaterTilde":"≵","NotHumpDownHump":"≎̸","NotHumpEqual":"≏̸","NotLeftTriangle":"⋪","NotLeftTriangleBar":"⧏̸","NotLeftTriangleEqual":"⋬","NotLess":"≮","NotLessEqual":"≰","NotLessGreater":"≸","NotLessLess":"≪̸","NotLessSlantEqual":"⩽̸","NotLessTilde":"≴","NotNestedGreaterGreater":"⪢̸","NotNestedLessLess":"⪡̸","NotPrecedes":"⊀","NotPrecedesEqual":"⪯̸","NotPrecedesSlantEqual":"⋠","NotReverseElement":"∌","NotRightTriangle":"⋫","NotRightTriangleBar":"⧐̸","NotRightTriangleEqual":"⋭","NotSquareSubset":"⊏̸","NotSquareSubsetEqual":"⋢","NotSquareSuperset":"⊐̸","NotSquareSupersetEqual":"⋣","NotSubset":"⊂⃒","NotSubsetEqual":"⊈","NotSucceeds":"⊁","NotSucceedsEqual":"⪰̸","NotSucceedsSlantEqual":"⋡","NotSucceedsTilde":"≿̸","NotSuperset":"⊃⃒","NotSupersetEqual":"⊉","NotTilde":"≁","NotTildeEqual":"≄","NotTildeFullEqual":"≇","NotTildeTilde":"≉","NotVerticalBar":"∤","Nscr":"𝒩","Ntild":"Ñ","Ntilde":"Ñ","Nu":"Ν","OElig":"Œ","Oacut":"Ó","Oacute":"Ó","Ocir":"Ô","Ocirc":"Ô","Ocy":"О","Odblac":"Ő","Ofr":"𝔒","Ograv":"Ò","Ograve":"Ò","Omacr":"Ō","Omega":"Ω","Omicron":"Ο","Oopf":"𝕆","OpenCurlyDoubleQuote":"“","OpenCurlyQuote":"‘","Or":"⩔","Oscr":"𝒪","Oslas":"Ø","Oslash":"Ø","Otild":"Õ","Otilde":"Õ","Otimes":"⨷","Oum":"Ö","Ouml":"Ö","OverBar":"‾","OverBrace":"⏞","OverBracket":"⎴","OverParenthesis":"⏜","PartialD":"∂","Pcy":"П","Pfr":"𝔓","Phi":"Φ","Pi":"Π","PlusMinus":"±","Poincareplane":"ℌ","Popf":"ℙ","Pr":"⪻","Precedes":"≺","PrecedesEqual":"⪯","PrecedesSlantEqual":"≼","PrecedesTilde":"≾","Prime":"″","Product":"∏","Proportion":"∷","Proportional":"∝","Pscr":"𝒫","Psi":"Ψ","QUO":"\\"","QUOT":"\\"","Qfr":"𝔔","Qopf":"ℚ","Qscr":"𝒬","RBarr":"⤐","RE":"®","REG":"®","Racute":"Ŕ","Rang":"⟫","Rarr":"↠","Rarrtl":"⤖","Rcaron":"Ř","Rcedil":"Ŗ","Rcy":"Р","Re":"ℜ","ReverseElement":"∋","ReverseEquilibrium":"⇋","ReverseUpEquilibrium":"⥯","Rfr":"ℜ","Rho":"Ρ","RightAngleBracket":"⟩","RightArrow":"→","RightArrowBar":"⇥","RightArrowLeftArrow":"⇄","RightCeiling":"⌉","RightDoubleBracket":"⟧","RightDownTeeVector":"⥝","RightDownVector":"⇂","RightDownVectorBar":"⥕","RightFloor":"⌋","RightTee":"⊢","RightTeeArrow":"↦","RightTeeVector":"⥛","RightTriangle":"⊳","RightTriangleBar":"⧐","RightTriangleEqual":"⊵","RightUpDownVector":"⥏","RightUpTeeVector":"⥜","RightUpVector":"↾","RightUpVectorBar":"⥔","RightVector":"⇀","RightVectorBar":"⥓","Rightarrow":"⇒","Ropf":"ℝ","RoundImplies":"⥰","Rrightarrow":"⇛","Rscr":"ℛ","Rsh":"↱","RuleDelayed":"⧴","SHCHcy":"Щ","SHcy":"Ш","SOFTcy":"Ь","Sacute":"Ś","Sc":"⪼","Scaron":"Š","Scedil":"Ş","Scirc":"Ŝ","Scy":"С","Sfr":"𝔖","ShortDownArrow":"↓","ShortLeftArrow":"←","ShortRightArrow":"→","ShortUpArrow":"↑","Sigma":"Σ","SmallCircle":"∘","Sopf":"𝕊","Sqrt":"√","Square":"□","SquareIntersection":"⊓","SquareSubset":"⊏","SquareSubsetEqual":"⊑","SquareSuperset":"⊐","SquareSupersetEqual":"⊒","SquareUnion":"⊔","Sscr":"𝒮","Star":"⋆","Sub":"⋐","Subset":"⋐","SubsetEqual":"⊆","Succeeds":"≻","SucceedsEqual":"⪰","SucceedsSlantEqual":"≽","SucceedsTilde":"≿","SuchThat":"∋","Sum":"∑","Sup":"⋑","Superset":"⊃","SupersetEqual":"⊇","Supset":"⋑","THOR":"Þ","THORN":"Þ","TRADE":"™","TSHcy":"Ћ","TScy":"Ц","Tab":"\\t","Tau":"Τ","Tcaron":"Ť","Tcedil":"Ţ","Tcy":"Т","Tfr":"𝔗","Therefore":"∴","Theta":"Θ","ThickSpace":"  ","ThinSpace":" ","Tilde":"∼","TildeEqual":"≃","TildeFullEqual":"≅","TildeTilde":"≈","Topf":"𝕋","TripleDot":"⃛","Tscr":"𝒯","Tstrok":"Ŧ","Uacut":"Ú","Uacute":"Ú","Uarr":"↟","Uarrocir":"⥉","Ubrcy":"Ў","Ubreve":"Ŭ","Ucir":"Û","Ucirc":"Û","Ucy":"У","Udblac":"Ű","Ufr":"𝔘","Ugrav":"Ù","Ugrave":"Ù","Umacr":"Ū","UnderBar":"_","UnderBrace":"⏟","UnderBracket":"⎵","UnderParenthesis":"⏝","Union":"⋃","UnionPlus":"⊎","Uogon":"Ų","Uopf":"𝕌","UpArrow":"↑","UpArrowBar":"⤒","UpArrowDownArrow":"⇅","UpDownArrow":"↕","UpEquilibrium":"⥮","UpTee":"⊥","UpTeeArrow":"↥","Uparrow":"⇑","Updownarrow":"⇕","UpperLeftArrow":"↖","UpperRightArrow":"↗","Upsi":"ϒ","Upsilon":"Υ","Uring":"Ů","Uscr":"𝒰","Utilde":"Ũ","Uum":"Ü","Uuml":"Ü","VDash":"⊫","Vbar":"⫫","Vcy":"В","Vdash":"⊩","Vdashl":"⫦","Vee":"⋁","Verbar":"‖","Vert":"‖","VerticalBar":"∣","VerticalLine":"|","VerticalSeparator":"❘","VerticalTilde":"≀","VeryThinSpace":" ","Vfr":"𝔙","Vopf":"𝕍","Vscr":"𝒱","Vvdash":"⊪","Wcirc":"Ŵ","Wedge":"⋀","Wfr":"𝔚","Wopf":"𝕎","Wscr":"𝒲","Xfr":"𝔛","Xi":"Ξ","Xopf":"𝕏","Xscr":"𝒳","YAcy":"Я","YIcy":"Ї","YUcy":"Ю","Yacut":"Ý","Yacute":"Ý","Ycirc":"Ŷ","Ycy":"Ы","Yfr":"𝔜","Yopf":"𝕐","Yscr":"𝒴","Yuml":"Ÿ","ZHcy":"Ж","Zacute":"Ź","Zcaron":"Ž","Zcy":"З","Zdot":"Ż","ZeroWidthSpace":"​","Zeta":"Ζ","Zfr":"ℨ","Zopf":"ℤ","Zscr":"𝒵","aacut":"á","aacute":"á","abreve":"ă","ac":"∾","acE":"∾̳","acd":"∿","acir":"â","acirc":"â","acut":"´","acute":"´","acy":"а","aeli":"æ","aelig":"æ","af":"⁡","afr":"𝔞","agrav":"à","agrave":"à","alefsym":"ℵ","aleph":"ℵ","alpha":"α","amacr":"ā","amalg":"⨿","am":"&","amp":"&","and":"∧","andand":"⩕","andd":"⩜","andslope":"⩘","andv":"⩚","ang":"∠","ange":"⦤","angle":"∠","angmsd":"∡","angmsdaa":"⦨","angmsdab":"⦩","angmsdac":"⦪","angmsdad":"⦫","angmsdae":"⦬","angmsdaf":"⦭","angmsdag":"⦮","angmsdah":"⦯","angrt":"∟","angrtvb":"⊾","angrtvbd":"⦝","angsph":"∢","angst":"Å","angzarr":"⍼","aogon":"ą","aopf":"𝕒","ap":"≈","apE":"⩰","apacir":"⩯","ape":"≊","apid":"≋","apos":"\'","approx":"≈","approxeq":"≊","arin":"å","aring":"å","ascr":"𝒶","ast":"*","asymp":"≈","asympeq":"≍","atild":"ã","atilde":"ã","aum":"ä","auml":"ä","awconint":"∳","awint":"⨑","bNot":"⫭","backcong":"≌","backepsilon":"϶","backprime":"‵","backsim":"∽","backsimeq":"⋍","barvee":"⊽","barwed":"⌅","barwedge":"⌅","bbrk":"⎵","bbrktbrk":"⎶","bcong":"≌","bcy":"б","bdquo":"„","becaus":"∵","because":"∵","bemptyv":"⦰","bepsi":"϶","bernou":"ℬ","beta":"β","beth":"ℶ","between":"≬","bfr":"𝔟","bigcap":"⋂","bigcirc":"◯","bigcup":"⋃","bigodot":"⨀","bigoplus":"⨁","bigotimes":"⨂","bigsqcup":"⨆","bigstar":"★","bigtriangledown":"▽","bigtriangleup":"△","biguplus":"⨄","bigvee":"⋁","bigwedge":"⋀","bkarow":"⤍","blacklozenge":"⧫","blacksquare":"▪","blacktriangle":"▴","blacktriangledown":"▾","blacktriangleleft":"◂","blacktriangleright":"▸","blank":"␣","blk12":"▒","blk14":"░","blk34":"▓","block":"█","bne":"=⃥","bnequiv":"≡⃥","bnot":"⌐","bopf":"𝕓","bot":"⊥","bottom":"⊥","bowtie":"⋈","boxDL":"╗","boxDR":"╔","boxDl":"╖","boxDr":"╓","boxH":"═","boxHD":"╦","boxHU":"╩","boxHd":"╤","boxHu":"╧","boxUL":"╝","boxUR":"╚","boxUl":"╜","boxUr":"╙","boxV":"║","boxVH":"╬","boxVL":"╣","boxVR":"╠","boxVh":"╫","boxVl":"╢","boxVr":"╟","boxbox":"⧉","boxdL":"╕","boxdR":"╒","boxdl":"┐","boxdr":"┌","boxh":"─","boxhD":"╥","boxhU":"╨","boxhd":"┬","boxhu":"┴","boxminus":"⊟","boxplus":"⊞","boxtimes":"⊠","boxuL":"╛","boxuR":"╘","boxul":"┘","boxur":"└","boxv":"│","boxvH":"╪","boxvL":"╡","boxvR":"╞","boxvh":"┼","boxvl":"┤","boxvr":"├","bprime":"‵","breve":"˘","brvba":"¦","brvbar":"¦","bscr":"𝒷","bsemi":"⁏","bsim":"∽","bsime":"⋍","bsol":"\\\\","bsolb":"⧅","bsolhsub":"⟈","bull":"•","bullet":"•","bump":"≎","bumpE":"⪮","bumpe":"≏","bumpeq":"≏","cacute":"ć","cap":"∩","capand":"⩄","capbrcup":"⩉","capcap":"⩋","capcup":"⩇","capdot":"⩀","caps":"∩︀","caret":"⁁","caron":"ˇ","ccaps":"⩍","ccaron":"č","ccedi":"ç","ccedil":"ç","ccirc":"ĉ","ccups":"⩌","ccupssm":"⩐","cdot":"ċ","cedi":"¸","cedil":"¸","cemptyv":"⦲","cen":"¢","cent":"¢","centerdot":"·","cfr":"𝔠","chcy":"ч","check":"✓","checkmark":"✓","chi":"χ","cir":"○","cirE":"⧃","circ":"ˆ","circeq":"≗","circlearrowleft":"↺","circlearrowright":"↻","circledR":"®","circledS":"Ⓢ","circledast":"⊛","circledcirc":"⊚","circleddash":"⊝","cire":"≗","cirfnint":"⨐","cirmid":"⫯","cirscir":"⧂","clubs":"♣","clubsuit":"♣","colon":":","colone":"≔","coloneq":"≔","comma":",","commat":"@","comp":"∁","compfn":"∘","complement":"∁","complexes":"ℂ","cong":"≅","congdot":"⩭","conint":"∮","copf":"𝕔","coprod":"∐","cop":"©","copy":"©","copysr":"℗","crarr":"↵","cross":"✗","cscr":"𝒸","csub":"⫏","csube":"⫑","csup":"⫐","csupe":"⫒","ctdot":"⋯","cudarrl":"⤸","cudarrr":"⤵","cuepr":"⋞","cuesc":"⋟","cularr":"↶","cularrp":"⤽","cup":"∪","cupbrcap":"⩈","cupcap":"⩆","cupcup":"⩊","cupdot":"⊍","cupor":"⩅","cups":"∪︀","curarr":"↷","curarrm":"⤼","curlyeqprec":"⋞","curlyeqsucc":"⋟","curlyvee":"⋎","curlywedge":"⋏","curre":"¤","curren":"¤","curvearrowleft":"↶","curvearrowright":"↷","cuvee":"⋎","cuwed":"⋏","cwconint":"∲","cwint":"∱","cylcty":"⌭","dArr":"⇓","dHar":"⥥","dagger":"†","daleth":"ℸ","darr":"↓","dash":"‐","dashv":"⊣","dbkarow":"⤏","dblac":"˝","dcaron":"ď","dcy":"д","dd":"ⅆ","ddagger":"‡","ddarr":"⇊","ddotseq":"⩷","de":"°","deg":"°","delta":"δ","demptyv":"⦱","dfisht":"⥿","dfr":"𝔡","dharl":"⇃","dharr":"⇂","diam":"⋄","diamond":"⋄","diamondsuit":"♦","diams":"♦","die":"¨","digamma":"ϝ","disin":"⋲","div":"÷","divid":"÷","divide":"÷","divideontimes":"⋇","divonx":"⋇","djcy":"ђ","dlcorn":"⌞","dlcrop":"⌍","dollar":"$","dopf":"𝕕","dot":"˙","doteq":"≐","doteqdot":"≑","dotminus":"∸","dotplus":"∔","dotsquare":"⊡","doublebarwedge":"⌆","downarrow":"↓","downdownarrows":"⇊","downharpoonleft":"⇃","downharpoonright":"⇂","drbkarow":"⤐","drcorn":"⌟","drcrop":"⌌","dscr":"𝒹","dscy":"ѕ","dsol":"⧶","dstrok":"đ","dtdot":"⋱","dtri":"▿","dtrif":"▾","duarr":"⇵","duhar":"⥯","dwangle":"⦦","dzcy":"џ","dzigrarr":"⟿","eDDot":"⩷","eDot":"≑","eacut":"é","eacute":"é","easter":"⩮","ecaron":"ě","ecir":"ê","ecirc":"ê","ecolon":"≕","ecy":"э","edot":"ė","ee":"ⅇ","efDot":"≒","efr":"𝔢","eg":"⪚","egrav":"è","egrave":"è","egs":"⪖","egsdot":"⪘","el":"⪙","elinters":"⏧","ell":"ℓ","els":"⪕","elsdot":"⪗","emacr":"ē","empty":"∅","emptyset":"∅","emptyv":"∅","emsp13":" ","emsp14":" ","emsp":" ","eng":"ŋ","ensp":" ","eogon":"ę","eopf":"𝕖","epar":"⋕","eparsl":"⧣","eplus":"⩱","epsi":"ε","epsilon":"ε","epsiv":"ϵ","eqcirc":"≖","eqcolon":"≕","eqsim":"≂","eqslantgtr":"⪖","eqslantless":"⪕","equals":"=","equest":"≟","equiv":"≡","equivDD":"⩸","eqvparsl":"⧥","erDot":"≓","erarr":"⥱","escr":"ℯ","esdot":"≐","esim":"≂","eta":"η","et":"ð","eth":"ð","eum":"ë","euml":"ë","euro":"€","excl":"!","exist":"∃","expectation":"ℰ","exponentiale":"ⅇ","fallingdotseq":"≒","fcy":"ф","female":"♀","ffilig":"ﬃ","fflig":"ﬀ","ffllig":"ﬄ","ffr":"𝔣","filig":"ﬁ","fjlig":"fj","flat":"♭","fllig":"ﬂ","fltns":"▱","fnof":"ƒ","fopf":"𝕗","forall":"∀","fork":"⋔","forkv":"⫙","fpartint":"⨍","frac1":"¼","frac12":"½","frac13":"⅓","frac14":"¼","frac15":"⅕","frac16":"⅙","frac18":"⅛","frac23":"⅔","frac25":"⅖","frac3":"¾","frac34":"¾","frac35":"⅗","frac38":"⅜","frac45":"⅘","frac56":"⅚","frac58":"⅝","frac78":"⅞","frasl":"⁄","frown":"⌢","fscr":"𝒻","gE":"≧","gEl":"⪌","gacute":"ǵ","gamma":"γ","gammad":"ϝ","gap":"⪆","gbreve":"ğ","gcirc":"ĝ","gcy":"г","gdot":"ġ","ge":"≥","gel":"⋛","geq":"≥","geqq":"≧","geqslant":"⩾","ges":"⩾","gescc":"⪩","gesdot":"⪀","gesdoto":"⪂","gesdotol":"⪄","gesl":"⋛︀","gesles":"⪔","gfr":"𝔤","gg":"≫","ggg":"⋙","gimel":"ℷ","gjcy":"ѓ","gl":"≷","glE":"⪒","gla":"⪥","glj":"⪤","gnE":"≩","gnap":"⪊","gnapprox":"⪊","gne":"⪈","gneq":"⪈","gneqq":"≩","gnsim":"⋧","gopf":"𝕘","grave":"`","gscr":"ℊ","gsim":"≳","gsime":"⪎","gsiml":"⪐","g":">","gt":">","gtcc":"⪧","gtcir":"⩺","gtdot":"⋗","gtlPar":"⦕","gtquest":"⩼","gtrapprox":"⪆","gtrarr":"⥸","gtrdot":"⋗","gtreqless":"⋛","gtreqqless":"⪌","gtrless":"≷","gtrsim":"≳","gvertneqq":"≩︀","gvnE":"≩︀","hArr":"⇔","hairsp":" ","half":"½","hamilt":"ℋ","hardcy":"ъ","harr":"↔","harrcir":"⥈","harrw":"↭","hbar":"ℏ","hcirc":"ĥ","hearts":"♥","heartsuit":"♥","hellip":"…","hercon":"⊹","hfr":"𝔥","hksearow":"⤥","hkswarow":"⤦","hoarr":"⇿","homtht":"∻","hookleftarrow":"↩","hookrightarrow":"↪","hopf":"𝕙","horbar":"―","hscr":"𝒽","hslash":"ℏ","hstrok":"ħ","hybull":"⁃","hyphen":"‐","iacut":"í","iacute":"í","ic":"⁣","icir":"î","icirc":"î","icy":"и","iecy":"е","iexc":"¡","iexcl":"¡","iff":"⇔","ifr":"𝔦","igrav":"ì","igrave":"ì","ii":"ⅈ","iiiint":"⨌","iiint":"∭","iinfin":"⧜","iiota":"℩","ijlig":"ĳ","imacr":"ī","image":"ℑ","imagline":"ℐ","imagpart":"ℑ","imath":"ı","imof":"⊷","imped":"Ƶ","in":"∈","incare":"℅","infin":"∞","infintie":"⧝","inodot":"ı","int":"∫","intcal":"⊺","integers":"ℤ","intercal":"⊺","intlarhk":"⨗","intprod":"⨼","iocy":"ё","iogon":"į","iopf":"𝕚","iota":"ι","iprod":"⨼","iques":"¿","iquest":"¿","iscr":"𝒾","isin":"∈","isinE":"⋹","isindot":"⋵","isins":"⋴","isinsv":"⋳","isinv":"∈","it":"⁢","itilde":"ĩ","iukcy":"і","ium":"ï","iuml":"ï","jcirc":"ĵ","jcy":"й","jfr":"𝔧","jmath":"ȷ","jopf":"𝕛","jscr":"𝒿","jsercy":"ј","jukcy":"є","kappa":"κ","kappav":"ϰ","kcedil":"ķ","kcy":"к","kfr":"𝔨","kgreen":"ĸ","khcy":"х","kjcy":"ќ","kopf":"𝕜","kscr":"𝓀","lAarr":"⇚","lArr":"⇐","lAtail":"⤛","lBarr":"⤎","lE":"≦","lEg":"⪋","lHar":"⥢","lacute":"ĺ","laemptyv":"⦴","lagran":"ℒ","lambda":"λ","lang":"⟨","langd":"⦑","langle":"⟨","lap":"⪅","laqu":"«","laquo":"«","larr":"←","larrb":"⇤","larrbfs":"⤟","larrfs":"⤝","larrhk":"↩","larrlp":"↫","larrpl":"⤹","larrsim":"⥳","larrtl":"↢","lat":"⪫","latail":"⤙","late":"⪭","lates":"⪭︀","lbarr":"⤌","lbbrk":"❲","lbrace":"{","lbrack":"[","lbrke":"⦋","lbrksld":"⦏","lbrkslu":"⦍","lcaron":"ľ","lcedil":"ļ","lceil":"⌈","lcub":"{","lcy":"л","ldca":"⤶","ldquo":"“","ldquor":"„","ldrdhar":"⥧","ldrushar":"⥋","ldsh":"↲","le":"≤","leftarrow":"←","leftarrowtail":"↢","leftharpoondown":"↽","leftharpoonup":"↼","leftleftarrows":"⇇","leftrightarrow":"↔","leftrightarrows":"⇆","leftrightharpoons":"⇋","leftrightsquigarrow":"↭","leftthreetimes":"⋋","leg":"⋚","leq":"≤","leqq":"≦","leqslant":"⩽","les":"⩽","lescc":"⪨","lesdot":"⩿","lesdoto":"⪁","lesdotor":"⪃","lesg":"⋚︀","lesges":"⪓","lessapprox":"⪅","lessdot":"⋖","lesseqgtr":"⋚","lesseqqgtr":"⪋","lessgtr":"≶","lesssim":"≲","lfisht":"⥼","lfloor":"⌊","lfr":"𝔩","lg":"≶","lgE":"⪑","lhard":"↽","lharu":"↼","lharul":"⥪","lhblk":"▄","ljcy":"љ","ll":"≪","llarr":"⇇","llcorner":"⌞","llhard":"⥫","lltri":"◺","lmidot":"ŀ","lmoust":"⎰","lmoustache":"⎰","lnE":"≨","lnap":"⪉","lnapprox":"⪉","lne":"⪇","lneq":"⪇","lneqq":"≨","lnsim":"⋦","loang":"⟬","loarr":"⇽","lobrk":"⟦","longleftarrow":"⟵","longleftrightarrow":"⟷","longmapsto":"⟼","longrightarrow":"⟶","looparrowleft":"↫","looparrowright":"↬","lopar":"⦅","lopf":"𝕝","loplus":"⨭","lotimes":"⨴","lowast":"∗","lowbar":"_","loz":"◊","lozenge":"◊","lozf":"⧫","lpar":"(","lparlt":"⦓","lrarr":"⇆","lrcorner":"⌟","lrhar":"⇋","lrhard":"⥭","lrm":"‎","lrtri":"⊿","lsaquo":"‹","lscr":"𝓁","lsh":"↰","lsim":"≲","lsime":"⪍","lsimg":"⪏","lsqb":"[","lsquo":"‘","lsquor":"‚","lstrok":"ł","l":"<","lt":"<","ltcc":"⪦","ltcir":"⩹","ltdot":"⋖","lthree":"⋋","ltimes":"⋉","ltlarr":"⥶","ltquest":"⩻","ltrPar":"⦖","ltri":"◃","ltrie":"⊴","ltrif":"◂","lurdshar":"⥊","luruhar":"⥦","lvertneqq":"≨︀","lvnE":"≨︀","mDDot":"∺","mac":"¯","macr":"¯","male":"♂","malt":"✠","maltese":"✠","map":"↦","mapsto":"↦","mapstodown":"↧","mapstoleft":"↤","mapstoup":"↥","marker":"▮","mcomma":"⨩","mcy":"м","mdash":"—","measuredangle":"∡","mfr":"𝔪","mho":"℧","micr":"µ","micro":"µ","mid":"∣","midast":"*","midcir":"⫰","middo":"·","middot":"·","minus":"−","minusb":"⊟","minusd":"∸","minusdu":"⨪","mlcp":"⫛","mldr":"…","mnplus":"∓","models":"⊧","mopf":"𝕞","mp":"∓","mscr":"𝓂","mstpos":"∾","mu":"μ","multimap":"⊸","mumap":"⊸","nGg":"⋙̸","nGt":"≫⃒","nGtv":"≫̸","nLeftarrow":"⇍","nLeftrightarrow":"⇎","nLl":"⋘̸","nLt":"≪⃒","nLtv":"≪̸","nRightarrow":"⇏","nVDash":"⊯","nVdash":"⊮","nabla":"∇","nacute":"ń","nang":"∠⃒","nap":"≉","napE":"⩰̸","napid":"≋̸","napos":"ŉ","napprox":"≉","natur":"♮","natural":"♮","naturals":"ℕ","nbs":" ","nbsp":" ","nbump":"≎̸","nbumpe":"≏̸","ncap":"⩃","ncaron":"ň","ncedil":"ņ","ncong":"≇","ncongdot":"⩭̸","ncup":"⩂","ncy":"н","ndash":"–","ne":"≠","neArr":"⇗","nearhk":"⤤","nearr":"↗","nearrow":"↗","nedot":"≐̸","nequiv":"≢","nesear":"⤨","nesim":"≂̸","nexist":"∄","nexists":"∄","nfr":"𝔫","ngE":"≧̸","nge":"≱","ngeq":"≱","ngeqq":"≧̸","ngeqslant":"⩾̸","nges":"⩾̸","ngsim":"≵","ngt":"≯","ngtr":"≯","nhArr":"⇎","nharr":"↮","nhpar":"⫲","ni":"∋","nis":"⋼","nisd":"⋺","niv":"∋","njcy":"њ","nlArr":"⇍","nlE":"≦̸","nlarr":"↚","nldr":"‥","nle":"≰","nleftarrow":"↚","nleftrightarrow":"↮","nleq":"≰","nleqq":"≦̸","nleqslant":"⩽̸","nles":"⩽̸","nless":"≮","nlsim":"≴","nlt":"≮","nltri":"⋪","nltrie":"⋬","nmid":"∤","nopf":"𝕟","no":"¬","not":"¬","notin":"∉","notinE":"⋹̸","notindot":"⋵̸","notinva":"∉","notinvb":"⋷","notinvc":"⋶","notni":"∌","notniva":"∌","notnivb":"⋾","notnivc":"⋽","npar":"∦","nparallel":"∦","nparsl":"⫽⃥","npart":"∂̸","npolint":"⨔","npr":"⊀","nprcue":"⋠","npre":"⪯̸","nprec":"⊀","npreceq":"⪯̸","nrArr":"⇏","nrarr":"↛","nrarrc":"⤳̸","nrarrw":"↝̸","nrightarrow":"↛","nrtri":"⋫","nrtrie":"⋭","nsc":"⊁","nsccue":"⋡","nsce":"⪰̸","nscr":"𝓃","nshortmid":"∤","nshortparallel":"∦","nsim":"≁","nsime":"≄","nsimeq":"≄","nsmid":"∤","nspar":"∦","nsqsube":"⋢","nsqsupe":"⋣","nsub":"⊄","nsubE":"⫅̸","nsube":"⊈","nsubset":"⊂⃒","nsubseteq":"⊈","nsubseteqq":"⫅̸","nsucc":"⊁","nsucceq":"⪰̸","nsup":"⊅","nsupE":"⫆̸","nsupe":"⊉","nsupset":"⊃⃒","nsupseteq":"⊉","nsupseteqq":"⫆̸","ntgl":"≹","ntild":"ñ","ntilde":"ñ","ntlg":"≸","ntriangleleft":"⋪","ntrianglelefteq":"⋬","ntriangleright":"⋫","ntrianglerighteq":"⋭","nu":"ν","num":"#","numero":"№","numsp":" ","nvDash":"⊭","nvHarr":"⤄","nvap":"≍⃒","nvdash":"⊬","nvge":"≥⃒","nvgt":">⃒","nvinfin":"⧞","nvlArr":"⤂","nvle":"≤⃒","nvlt":"<⃒","nvltrie":"⊴⃒","nvrArr":"⤃","nvrtrie":"⊵⃒","nvsim":"∼⃒","nwArr":"⇖","nwarhk":"⤣","nwarr":"↖","nwarrow":"↖","nwnear":"⤧","oS":"Ⓢ","oacut":"ó","oacute":"ó","oast":"⊛","ocir":"ô","ocirc":"ô","ocy":"о","odash":"⊝","odblac":"ő","odiv":"⨸","odot":"⊙","odsold":"⦼","oelig":"œ","ofcir":"⦿","ofr":"𝔬","ogon":"˛","ograv":"ò","ograve":"ò","ogt":"⧁","ohbar":"⦵","ohm":"Ω","oint":"∮","olarr":"↺","olcir":"⦾","olcross":"⦻","oline":"‾","olt":"⧀","omacr":"ō","omega":"ω","omicron":"ο","omid":"⦶","ominus":"⊖","oopf":"𝕠","opar":"⦷","operp":"⦹","oplus":"⊕","or":"∨","orarr":"↻","ord":"º","order":"ℴ","orderof":"ℴ","ordf":"ª","ordm":"º","origof":"⊶","oror":"⩖","orslope":"⩗","orv":"⩛","oscr":"ℴ","oslas":"ø","oslash":"ø","osol":"⊘","otild":"õ","otilde":"õ","otimes":"⊗","otimesas":"⨶","oum":"ö","ouml":"ö","ovbar":"⌽","par":"¶","para":"¶","parallel":"∥","parsim":"⫳","parsl":"⫽","part":"∂","pcy":"п","percnt":"%","period":".","permil":"‰","perp":"⊥","pertenk":"‱","pfr":"𝔭","phi":"φ","phiv":"ϕ","phmmat":"ℳ","phone":"☎","pi":"π","pitchfork":"⋔","piv":"ϖ","planck":"ℏ","planckh":"ℎ","plankv":"ℏ","plus":"+","plusacir":"⨣","plusb":"⊞","pluscir":"⨢","plusdo":"∔","plusdu":"⨥","pluse":"⩲","plusm":"±","plusmn":"±","plussim":"⨦","plustwo":"⨧","pm":"±","pointint":"⨕","popf":"𝕡","poun":"£","pound":"£","pr":"≺","prE":"⪳","prap":"⪷","prcue":"≼","pre":"⪯","prec":"≺","precapprox":"⪷","preccurlyeq":"≼","preceq":"⪯","precnapprox":"⪹","precneqq":"⪵","precnsim":"⋨","precsim":"≾","prime":"′","primes":"ℙ","prnE":"⪵","prnap":"⪹","prnsim":"⋨","prod":"∏","profalar":"⌮","profline":"⌒","profsurf":"⌓","prop":"∝","propto":"∝","prsim":"≾","prurel":"⊰","pscr":"𝓅","psi":"ψ","puncsp":" ","qfr":"𝔮","qint":"⨌","qopf":"𝕢","qprime":"⁗","qscr":"𝓆","quaternions":"ℍ","quatint":"⨖","quest":"?","questeq":"≟","quo":"\\"","quot":"\\"","rAarr":"⇛","rArr":"⇒","rAtail":"⤜","rBarr":"⤏","rHar":"⥤","race":"∽̱","racute":"ŕ","radic":"√","raemptyv":"⦳","rang":"⟩","rangd":"⦒","range":"⦥","rangle":"⟩","raqu":"»","raquo":"»","rarr":"→","rarrap":"⥵","rarrb":"⇥","rarrbfs":"⤠","rarrc":"⤳","rarrfs":"⤞","rarrhk":"↪","rarrlp":"↬","rarrpl":"⥅","rarrsim":"⥴","rarrtl":"↣","rarrw":"↝","ratail":"⤚","ratio":"∶","rationals":"ℚ","rbarr":"⤍","rbbrk":"❳","rbrace":"}","rbrack":"]","rbrke":"⦌","rbrksld":"⦎","rbrkslu":"⦐","rcaron":"ř","rcedil":"ŗ","rceil":"⌉","rcub":"}","rcy":"р","rdca":"⤷","rdldhar":"⥩","rdquo":"”","rdquor":"”","rdsh":"↳","real":"ℜ","realine":"ℛ","realpart":"ℜ","reals":"ℝ","rect":"▭","re":"®","reg":"®","rfisht":"⥽","rfloor":"⌋","rfr":"𝔯","rhard":"⇁","rharu":"⇀","rharul":"⥬","rho":"ρ","rhov":"ϱ","rightarrow":"→","rightarrowtail":"↣","rightharpoondown":"⇁","rightharpoonup":"⇀","rightleftarrows":"⇄","rightleftharpoons":"⇌","rightrightarrows":"⇉","rightsquigarrow":"↝","rightthreetimes":"⋌","ring":"˚","risingdotseq":"≓","rlarr":"⇄","rlhar":"⇌","rlm":"‏","rmoust":"⎱","rmoustache":"⎱","rnmid":"⫮","roang":"⟭","roarr":"⇾","robrk":"⟧","ropar":"⦆","ropf":"𝕣","roplus":"⨮","rotimes":"⨵","rpar":")","rpargt":"⦔","rppolint":"⨒","rrarr":"⇉","rsaquo":"›","rscr":"𝓇","rsh":"↱","rsqb":"]","rsquo":"’","rsquor":"’","rthree":"⋌","rtimes":"⋊","rtri":"▹","rtrie":"⊵","rtrif":"▸","rtriltri":"⧎","ruluhar":"⥨","rx":"℞","sacute":"ś","sbquo":"‚","sc":"≻","scE":"⪴","scap":"⪸","scaron":"š","sccue":"≽","sce":"⪰","scedil":"ş","scirc":"ŝ","scnE":"⪶","scnap":"⪺","scnsim":"⋩","scpolint":"⨓","scsim":"≿","scy":"с","sdot":"⋅","sdotb":"⊡","sdote":"⩦","seArr":"⇘","searhk":"⤥","searr":"↘","searrow":"↘","sec":"§","sect":"§","semi":";","seswar":"⤩","setminus":"∖","setmn":"∖","sext":"✶","sfr":"𝔰","sfrown":"⌢","sharp":"♯","shchcy":"щ","shcy":"ш","shortmid":"∣","shortparallel":"∥","sh":"­","shy":"­","sigma":"σ","sigmaf":"ς","sigmav":"ς","sim":"∼","simdot":"⩪","sime":"≃","simeq":"≃","simg":"⪞","simgE":"⪠","siml":"⪝","simlE":"⪟","simne":"≆","simplus":"⨤","simrarr":"⥲","slarr":"←","smallsetminus":"∖","smashp":"⨳","smeparsl":"⧤","smid":"∣","smile":"⌣","smt":"⪪","smte":"⪬","smtes":"⪬︀","softcy":"ь","sol":"/","solb":"⧄","solbar":"⌿","sopf":"𝕤","spades":"♠","spadesuit":"♠","spar":"∥","sqcap":"⊓","sqcaps":"⊓︀","sqcup":"⊔","sqcups":"⊔︀","sqsub":"⊏","sqsube":"⊑","sqsubset":"⊏","sqsubseteq":"⊑","sqsup":"⊐","sqsupe":"⊒","sqsupset":"⊐","sqsupseteq":"⊒","squ":"□","square":"□","squarf":"▪","squf":"▪","srarr":"→","sscr":"𝓈","ssetmn":"∖","ssmile":"⌣","sstarf":"⋆","star":"☆","starf":"★","straightepsilon":"ϵ","straightphi":"ϕ","strns":"¯","sub":"⊂","subE":"⫅","subdot":"⪽","sube":"⊆","subedot":"⫃","submult":"⫁","subnE":"⫋","subne":"⊊","subplus":"⪿","subrarr":"⥹","subset":"⊂","subseteq":"⊆","subseteqq":"⫅","subsetneq":"⊊","subsetneqq":"⫋","subsim":"⫇","subsub":"⫕","subsup":"⫓","succ":"≻","succapprox":"⪸","succcurlyeq":"≽","succeq":"⪰","succnapprox":"⪺","succneqq":"⪶","succnsim":"⋩","succsim":"≿","sum":"∑","sung":"♪","sup":"⊃","sup1":"¹","sup2":"²","sup3":"³","supE":"⫆","supdot":"⪾","supdsub":"⫘","supe":"⊇","supedot":"⫄","suphsol":"⟉","suphsub":"⫗","suplarr":"⥻","supmult":"⫂","supnE":"⫌","supne":"⊋","supplus":"⫀","supset":"⊃","supseteq":"⊇","supseteqq":"⫆","supsetneq":"⊋","supsetneqq":"⫌","supsim":"⫈","supsub":"⫔","supsup":"⫖","swArr":"⇙","swarhk":"⤦","swarr":"↙","swarrow":"↙","swnwar":"⤪","szli":"ß","szlig":"ß","target":"⌖","tau":"τ","tbrk":"⎴","tcaron":"ť","tcedil":"ţ","tcy":"т","tdot":"⃛","telrec":"⌕","tfr":"𝔱","there4":"∴","therefore":"∴","theta":"θ","thetasym":"ϑ","thetav":"ϑ","thickapprox":"≈","thicksim":"∼","thinsp":" ","thkap":"≈","thksim":"∼","thor":"þ","thorn":"þ","tilde":"˜","time":"×","times":"×","timesb":"⊠","timesbar":"⨱","timesd":"⨰","tint":"∭","toea":"⤨","top":"⊤","topbot":"⌶","topcir":"⫱","topf":"𝕥","topfork":"⫚","tosa":"⤩","tprime":"‴","trade":"™","triangle":"▵","triangledown":"▿","triangleleft":"◃","trianglelefteq":"⊴","triangleq":"≜","triangleright":"▹","trianglerighteq":"⊵","tridot":"◬","trie":"≜","triminus":"⨺","triplus":"⨹","trisb":"⧍","tritime":"⨻","trpezium":"⏢","tscr":"𝓉","tscy":"ц","tshcy":"ћ","tstrok":"ŧ","twixt":"≬","twoheadleftarrow":"↞","twoheadrightarrow":"↠","uArr":"⇑","uHar":"⥣","uacut":"ú","uacute":"ú","uarr":"↑","ubrcy":"ў","ubreve":"ŭ","ucir":"û","ucirc":"û","ucy":"у","udarr":"⇅","udblac":"ű","udhar":"⥮","ufisht":"⥾","ufr":"𝔲","ugrav":"ù","ugrave":"ù","uharl":"↿","uharr":"↾","uhblk":"▀","ulcorn":"⌜","ulcorner":"⌜","ulcrop":"⌏","ultri":"◸","umacr":"ū","um":"¨","uml":"¨","uogon":"ų","uopf":"𝕦","uparrow":"↑","updownarrow":"↕","upharpoonleft":"↿","upharpoonright":"↾","uplus":"⊎","upsi":"υ","upsih":"ϒ","upsilon":"υ","upuparrows":"⇈","urcorn":"⌝","urcorner":"⌝","urcrop":"⌎","uring":"ů","urtri":"◹","uscr":"𝓊","utdot":"⋰","utilde":"ũ","utri":"▵","utrif":"▴","uuarr":"⇈","uum":"ü","uuml":"ü","uwangle":"⦧","vArr":"⇕","vBar":"⫨","vBarv":"⫩","vDash":"⊨","vangrt":"⦜","varepsilon":"ϵ","varkappa":"ϰ","varnothing":"∅","varphi":"ϕ","varpi":"ϖ","varpropto":"∝","varr":"↕","varrho":"ϱ","varsigma":"ς","varsubsetneq":"⊊︀","varsubsetneqq":"⫋︀","varsupsetneq":"⊋︀","varsupsetneqq":"⫌︀","vartheta":"ϑ","vartriangleleft":"⊲","vartriangleright":"⊳","vcy":"в","vdash":"⊢","vee":"∨","veebar":"⊻","veeeq":"≚","vellip":"⋮","verbar":"|","vert":"|","vfr":"𝔳","vltri":"⊲","vnsub":"⊂⃒","vnsup":"⊃⃒","vopf":"𝕧","vprop":"∝","vrtri":"⊳","vscr":"𝓋","vsubnE":"⫋︀","vsubne":"⊊︀","vsupnE":"⫌︀","vsupne":"⊋︀","vzigzag":"⦚","wcirc":"ŵ","wedbar":"⩟","wedge":"∧","wedgeq":"≙","weierp":"℘","wfr":"𝔴","wopf":"𝕨","wp":"℘","wr":"≀","wreath":"≀","wscr":"𝓌","xcap":"⋂","xcirc":"◯","xcup":"⋃","xdtri":"▽","xfr":"𝔵","xhArr":"⟺","xharr":"⟷","xi":"ξ","xlArr":"⟸","xlarr":"⟵","xmap":"⟼","xnis":"⋻","xodot":"⨀","xopf":"𝕩","xoplus":"⨁","xotime":"⨂","xrArr":"⟹","xrarr":"⟶","xscr":"𝓍","xsqcup":"⨆","xuplus":"⨄","xutri":"△","xvee":"⋁","xwedge":"⋀","yacut":"ý","yacute":"ý","yacy":"я","ycirc":"ŷ","ycy":"ы","ye":"¥","yen":"¥","yfr":"𝔶","yicy":"ї","yopf":"𝕪","yscr":"𝓎","yucy":"ю","yum":"ÿ","yuml":"ÿ","zacute":"ź","zcaron":"ž","zcy":"з","zdot":"ż","zeetrf":"ℨ","zeta":"ζ","zfr":"𝔷","zhcy":"ж","zigrarr":"⇝","zopf":"𝕫","zscr":"𝓏","zwj":"‍","zwnj":"‌"}')
    }, 6852: e => {
        "use strict";
        e.exports = JSON.parse('{"0":"�","128":"€","130":"‚","131":"ƒ","132":"„","133":"…","134":"†","135":"‡","136":"ˆ","137":"‰","138":"Š","139":"‹","140":"Œ","142":"Ž","145":"‘","146":"’","147":"“","148":"”","149":"•","150":"–","151":"—","152":"˜","153":"™","154":"š","155":"›","156":"œ","158":"ž","159":"Ÿ"}')
    }, 9357: e => {
        "use strict";
        e.exports = function (e) {
            return String(e).replace(/\s+/g, " ")
        }
    }, 6851: (e, t) => {
        "use strict";
        t.P = function (e, t) {
            var n = t || {}, r = !1 === n.padLeft ? "" : " ", i = n.padRight ? " " : "";
            "" === e[e.length - 1] && (e = e.concat(""));
            return e.join(i + "," + r).trim()
        }
    }, 8249: function (e, t, n) {
        var r;
        e.exports = (r = r || function (e, t) {
            var r;
            if ("undefined" != typeof window && window.crypto && (r = window.crypto), "undefined" != typeof self && self.crypto && (r = self.crypto), "undefined" != typeof globalThis && globalThis.crypto && (r = globalThis.crypto), !r && "undefined" != typeof window && window.msCrypto && (r = window.msCrypto), !r && void 0 !== n.g && n.g.crypto && (r = n.g.crypto), !r) try {
                r = n(2480)
            } catch (e) {
            }
            var i = function () {
                if (r) {
                    if ("function" == typeof r.getRandomValues) try {
                        return r.getRandomValues(new Uint32Array(1))[0]
                    } catch (e) {
                    }
                    if ("function" == typeof r.randomBytes) try {
                        return r.randomBytes(4).readInt32LE()
                    } catch (e) {
                    }
                }
                throw new Error("Native crypto module could not be used to get secure random number.")
            }, a = Object.create || function () {
                function e() {
                }

                return function (t) {
                    var n;
                    return e.prototype = t, n = new e, e.prototype = null, n
                }
            }(), o = {}, s = o.lib = {}, l = s.Base = {
                extend: function (e) {
                    var t = a(this);
                    return e && t.mixIn(e), t.hasOwnProperty("init") && this.init !== t.init || (t.init = function () {
                        t.$super.init.apply(this, arguments)
                    }), t.init.prototype = t, t.$super = this, t
                }, create: function () {
                    var e = this.extend();
                    return e.init.apply(e, arguments), e
                }, init: function () {
                }, mixIn: function (e) {
                    for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
                    e.hasOwnProperty("toString") && (this.toString = e.toString)
                }, clone: function () {
                    return this.init.prototype.extend(this)
                }
            }, c = s.WordArray = l.extend({
                init: function (e, n) {
                    e = this.words = e || [], this.sigBytes = n != t ? n : 4 * e.length
                }, toString: function (e) {
                    return (e || u).stringify(this)
                }, concat: function (e) {
                    var t = this.words, n = e.words, r = this.sigBytes, i = e.sigBytes;
                    if (this.clamp(), r % 4) for (var a = 0; a < i; a++) {
                        var o = n[a >>> 2] >>> 24 - a % 4 * 8 & 255;
                        t[r + a >>> 2] |= o << 24 - (r + a) % 4 * 8
                    } else for (var s = 0; s < i; s += 4) t[r + s >>> 2] = n[s >>> 2];
                    return this.sigBytes += i, this
                }, clamp: function () {
                    var t = this.words, n = this.sigBytes;
                    t[n >>> 2] &= 4294967295 << 32 - n % 4 * 8, t.length = e.ceil(n / 4)
                }, clone: function () {
                    var e = l.clone.call(this);
                    return e.words = this.words.slice(0), e
                }, random: function (e) {
                    for (var t = [], n = 0; n < e; n += 4) t.push(i());
                    return new c.init(t, e)
                }
            }), h = o.enc = {}, u = h.Hex = {
                stringify: function (e) {
                    for (var t = e.words, n = e.sigBytes, r = [], i = 0; i < n; i++) {
                        var a = t[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                        r.push((a >>> 4).toString(16)), r.push((15 & a).toString(16))
                    }
                    return r.join("")
                }, parse: function (e) {
                    for (var t = e.length, n = [], r = 0; r < t; r += 2) n[r >>> 3] |= parseInt(e.substr(r, 2), 16) << 24 - r % 8 * 4;
                    return new c.init(n, t / 2)
                }
            }, f = h.Latin1 = {
                stringify: function (e) {
                    for (var t = e.words, n = e.sigBytes, r = [], i = 0; i < n; i++) {
                        var a = t[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                        r.push(String.fromCharCode(a))
                    }
                    return r.join("")
                }, parse: function (e) {
                    for (var t = e.length, n = [], r = 0; r < t; r++) n[r >>> 2] |= (255 & e.charCodeAt(r)) << 24 - r % 4 * 8;
                    return new c.init(n, t)
                }
            }, p = h.Utf8 = {
                stringify: function (e) {
                    try {
                        return decodeURIComponent(escape(f.stringify(e)))
                    } catch (e) {
                        throw new Error("Malformed UTF-8 data")
                    }
                }, parse: function (e) {
                    return f.parse(unescape(encodeURIComponent(e)))
                }
            }, d = s.BufferedBlockAlgorithm = l.extend({
                reset: function () {
                    this._data = new c.init, this._nDataBytes = 0
                }, _append: function (e) {
                    "string" == typeof e && (e = p.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes
                }, _process: function (t) {
                    var n, r = this._data, i = r.words, a = r.sigBytes, o = this.blockSize, s = a / (4 * o),
                        l = (s = t ? e.ceil(s) : e.max((0 | s) - this._minBufferSize, 0)) * o, h = e.min(4 * l, a);
                    if (l) {
                        for (var u = 0; u < l; u += o) this._doProcessBlock(i, u);
                        n = i.splice(0, l), r.sigBytes -= h
                    }
                    return new c.init(n, h)
                }, clone: function () {
                    var e = l.clone.call(this);
                    return e._data = this._data.clone(), e
                }, _minBufferSize: 0
            }), m = (s.Hasher = d.extend({
                cfg: l.extend(), init: function (e) {
                    this.cfg = this.cfg.extend(e), this.reset()
                }, reset: function () {
                    d.reset.call(this), this._doReset()
                }, update: function (e) {
                    return this._append(e), this._process(), this
                }, finalize: function (e) {
                    return e && this._append(e), this._doFinalize()
                }, blockSize: 16, _createHelper: function (e) {
                    return function (t, n) {
                        return new e.init(n).finalize(t)
                    }
                }, _createHmacHelper: function (e) {
                    return function (t, n) {
                        return new m.HMAC.init(e, n).finalize(t)
                    }
                }
            }), o.algo = {});
            return o
        }(Math), r)
    }, 3465: function (e, t, n) {
        var r;
        e.exports = (r = n(8249), r.enc.Hex)
    }, 8010: function (e, t, n) {
        var r;
        e.exports = (r = n(8249), n(2153), n(9824), r.HmacSHA256)
    }, 9824: function (e, t, n) {
        var r, i, a, o;
        e.exports = (r = n(8249), a = (i = r).lib.Base, o = i.enc.Utf8, void (i.algo.HMAC = a.extend({
            init: function (e, t) {
                e = this._hasher = new e.init, "string" == typeof t && (t = o.parse(t));
                var n = e.blockSize, r = 4 * n;
                t.sigBytes > r && (t = e.finalize(t)), t.clamp();
                for (var i = this._oKey = t.clone(), a = this._iKey = t.clone(), s = i.words, l = a.words, c = 0; c < n; c++) s[c] ^= 1549556828, l[c] ^= 909522486;
                i.sigBytes = a.sigBytes = r, this.reset()
            }, reset: function () {
                var e = this._hasher;
                e.reset(), e.update(this._iKey)
            }, update: function (e) {
                return this._hasher.update(e), this
            }, finalize: function (e) {
                var t = this._hasher, n = t.finalize(e);
                return t.reset(), t.finalize(this._oKey.clone().concat(n))
            }
        })))
    }, 2153: function (e, t, n) {
        var r;
        e.exports = (r = n(8249), function (e) {
            var t = r, n = t.lib, i = n.WordArray, a = n.Hasher, o = t.algo, s = [], l = [];
            !function () {
                function t(t) {
                    for (var n = e.sqrt(t), r = 2; r <= n; r++) if (!(t % r)) return !1;
                    return !0
                }

                function n(e) {
                    return 4294967296 * (e - (0 | e)) | 0
                }

                for (var r = 2, i = 0; i < 64;) t(r) && (i < 8 && (s[i] = n(e.pow(r, .5))), l[i] = n(e.pow(r, 1 / 3)), i++), r++
            }();
            var c = [], h = o.SHA256 = a.extend({
                _doReset: function () {
                    this._hash = new i.init(s.slice(0))
                }, _doProcessBlock: function (e, t) {
                    for (var n = this._hash.words, r = n[0], i = n[1], a = n[2], o = n[3], s = n[4], h = n[5], u = n[6], f = n[7], p = 0; p < 64; p++) {
                        if (p < 16) c[p] = 0 | e[t + p]; else {
                            var d = c[p - 15], m = (d << 25 | d >>> 7) ^ (d << 14 | d >>> 18) ^ d >>> 3,
                                v = c[p - 2], g = (v << 15 | v >>> 17) ^ (v << 13 | v >>> 19) ^ v >>> 10;
                            c[p] = m + c[p - 7] + g + c[p - 16]
                        }
                        var M = r & i ^ r & a ^ i & a,
                            y = (r << 30 | r >>> 2) ^ (r << 19 | r >>> 13) ^ (r << 10 | r >>> 22),
                            b = f + ((s << 26 | s >>> 6) ^ (s << 21 | s >>> 11) ^ (s << 7 | s >>> 25)) + (s & h ^ ~s & u) + l[p] + c[p];
                        f = u, u = h, h = s, s = o + b | 0, o = a, a = i, i = r, r = b + (y + M) | 0
                    }
                    n[0] = n[0] + r | 0, n[1] = n[1] + i | 0, n[2] = n[2] + a | 0, n[3] = n[3] + o | 0, n[4] = n[4] + s | 0, n[5] = n[5] + h | 0, n[6] = n[6] + u | 0, n[7] = n[7] + f | 0
                }, _doFinalize: function () {
                    var t = this._data, n = t.words, r = 8 * this._nDataBytes, i = 8 * t.sigBytes;
                    return n[i >>> 5] |= 128 << 24 - i % 32, n[14 + (i + 64 >>> 9 << 4)] = e.floor(r / 4294967296), n[15 + (i + 64 >>> 9 << 4)] = r, t.sigBytes = 4 * n.length, this._process(), this._hash
                }, clone: function () {
                    var e = a.clone.call(this);
                    return e._hash = this._hash.clone(), e
                }
            });
            t.SHA256 = a._createHelper(h), t.HmacSHA256 = a._createHmacHelper(h)
        }(Math), r.SHA256)
    }, 8909: e => {
        "use strict";
        e.exports = function (e, t) {
            var n;
            if (null != t && "string" != typeof t && ("object" != typeof t || 0 === t.length)) throw new Error("Expected `string` or `Array.<string>` for `tagNames`, not `" + t + "`");
            if (!e || "object" != typeof e || "element" !== e.type || "string" != typeof e.tagName) return !1;
            if (null == t) return !0;
            if (n = e.tagName, "string" == typeof t) return n === t;
            return -1 !== t.indexOf(n)
        }
    }, 773: (e, t, n) => {
        "use strict";
        e.exports = n(5204)
    }, 5802: (e, t, n) => {
        "use strict";
        var r = n(1878);
        e.exports = function (e, t) {
            var n = t && t.children, i = n && n.length, a = -1, o = [];
            for (; ++a < i;) o[a] = r(e, n[a], a, t);
            return o.join("")
        }
    }, 1928: (e, t, n) => {
        "use strict";
        var r = n(7529), i = n(4860);
        e.exports = function (e, t) {
            var n = t.value;
            if (e.bogusComments) return "<?" + i(n, r(e.entities, {subset: s})) + ">";
            return "\x3c!--" + n.replace(a, (function (t) {
                return i(t, r(e.entities, {subset: o}))
            })) + "--\x3e"
        };
        var a = /^>|^->|<!--|-->|--!>|<!-$/g, o = ["<", ">"], s = [">"]
    }, 5966: e => {
        "use strict";
        var t = "\0", n = "&", r = "`", i = '"', a = "'", o = [" ", "\t", "\n", "\r", "\f"],
            s = o.concat(n, "/", ">", "="), l = o.concat(n, ">"), c = l.concat(t, i, a, "<", "=", r), h = [n, a],
            u = [n, i];
        e.exports = {
            name: [[s, s.concat(i, a, r)], [s.concat(t, i, a, "<"), s.concat(t, i, a, "<", r)]],
            unquoted: [[l, c], [c, c]],
            single: [[h, h.concat(i, r)], [h.concat(t), h.concat(t, i, r)]],
            double: [[u, u.concat(a, r)], [u.concat(t), u.concat(t, a, r)]]
        }
    }, 5842: (e, t, n) => {
        "use strict";
        var r = n(7529), i = n(932), a = n(4860);
        e.exports = function (e, t) {
            var n = e.upperDoctype ? s : o, r = e.tightDoctype ? "" : " ", i = t.name, a = t.public, c = t.system,
                h = ["<!" + n];
            i && (h.push(r, i), null != a ? h.push(" public", r, l(e, a)) : null != c && h.push(" system"), null != c && h.push(r, l(e, c)));
            return h.join("") + ">"
        };
        var o = "doctype", s = o.toUpperCase();

        function l(e, t) {
            var n = e.quote, o = e.alternative, s = String(t), l = i(s, n) > i(s, o) ? o : n;
            return l + a(s, r(e.entities, {subset: ["<", "&", l]})) + l
        }
    }, 4307: (e, t, n) => {
        "use strict";
        var r = n(7529), i = n(1218), a = n(9560), o = n(6582).P, s = n(6851).P, l = n(4860), c = n(932),
            h = n(5802), u = n(5966);
        e.exports = function (e, t, n, r) {
            var a, o, s, l, c, u, f = e.schema, d = t.tagName, m = "", v = t;
            "html" === f.space && "svg" === d && (e.schema = i);
            c = function (e, t) {
                var n, r, i, a, o, s, l = [];
                for (n in t) null != (r = t[n]) && (i = p(e, n, r)) && l.push(i);
                a = l.length, o = -1;
                for (; ++o < a;) i = l[o], s = null, e.tight && (s = i.charAt(i.length - 1)), o !== a - 1 && '"' !== s && "'" !== s && (l[o] = i + " ");
                return l.join("")
            }(e, t.properties), "svg" === e.schema.space ? (s = !1, o = !0, a = e.closeEmpty) : (s = e.omit, o = e.close, a = -1 !== e.voids.indexOf(d.toLowerCase()), "template" === d && (v = t.content));
            l = h(e, v), a = !l && a, !c && s && s.opening(t, n, r) || (m = "<" + d + (c ? " " + c : ""), a && o && (u = c.charAt(c.length - 1), (!e.tightClose || "/" === u || "svg" === e.schema.space && u && '"' !== u && "'" !== u) && (m += " "), m += "/"), m += ">");
            m += l, a || s && s.closing(t, n, r) || (m += "</" + d + ">");
            return e.schema = f, m
        };
        var f = "'";

        function p(e, t, n) {
            var i = e.schema, h = a(i, t), p = h.attribute;
            return !h.overloadedBoolean || n !== p && "" !== n ? (h.boolean || h.overloadedBoolean && "string" != typeof n) && (n = Boolean(n)) : n = !0, null == n || !1 === n || "number" == typeof n && isNaN(n) ? "" : (p = function (e, t) {
                var n = "html" === e.schema.space ? e.valid : 1, i = u.name[n][e.safe];
                return l(t, r(e.entities, {subset: i}))
            }(e, p), !0 === n ? p : p + function (e, t, n, i) {
                var a, h, p = e.entities, d = e.quote, m = e.alternative, v = e.smart;
                "object" == typeof n && "length" in n && (n = (i.commaSeparated ? s : o)(n, {padLeft: !e.tightLists}));
                !(n = String(n)) && e.collapseEmpty || (a = n, e.unquoted && (h = u.unquoted[e.valid][e.safe], a = l(n, r(p, {
                    subset: h,
                    attribute: !0
                }))), e.unquoted && a === n || (v && c(n, d) > c(n, m) && (d = m), h = (h = d === f ? u.single : u.double)["html" === e.schema.space ? e.valid : 1][e.safe], n = d + (n = l(n, r(p, {
                    subset: h,
                    attribute: !0
                }))) + d), n = n ? "=" + n : n);
                return n
            }(e, 0, n, h))
        }
    }, 5204: (e, t, n) => {
        "use strict";
        var r = n(7247), i = n(1218), a = n(4318), o = n(1600), s = n(1878);
        e.exports = function (e, t) {
            var n = t || {}, h = n.quote || l, u = h === l ? "'" : l, f = n.quoteSmart,
                p = e && "object" == typeof e && "length" in e ? {type: "root", children: e} : e;
            if (h !== l && "'" !== h) throw new Error("Invalid quote `" + h + "`, expected `'` or `" + '"`');
            void 0 !== n.allowDangerousHTML && (c || (c = !0, console.warn("Deprecation warning: `allowDangerousHTML` is a nonstandard option, use `allowDangerousHtml` instead")));
            return s({
                valid: n.allowParseErrors ? 0 : 1,
                safe: n.allowDangerousCharacters ? 0 : 1,
                schema: "svg" === n.space ? i : r,
                omit: n.omitOptionalTags && o,
                quote: h,
                alternative: u,
                smart: f,
                unquoted: Boolean(n.preferUnquoted),
                tight: n.tightAttributes,
                upperDoctype: Boolean(n.upperDoctype),
                tightDoctype: Boolean(n.tightDoctype),
                bogusComments: Boolean(n.bogusComments),
                tightLists: n.tightCommaSeparatedLists,
                tightClose: n.tightSelfClosing,
                collapseEmpty: n.collapseEmptyAttributes,
                dangerous: n.allowDangerousHtml || n.allowDangerousHTML,
                voids: n.voids || a.concat(),
                entities: n.entities || {},
                close: n.closeSelfClosing,
                closeEmpty: n.closeEmptyElements
            }, p)
        };
        var l = '"', c = !1
    }, 8639: (e, t, n) => {
        "use strict";
        var r = n(8145), i = n(8909), a = n(8115), o = n(3370).e, s = n(5254), l = r("comment"), c = "optgroup",
            h = ["option"].concat(c), u = ["dt", "dd"], f = ["menuitem", "hr", "menu"], p = ["rp", "rt"],
            d = ["tbody", "tfoot"], m = ["td", "th"], v = ["a", "audio", "del", "ins", "map", "noscript", "video"],
            g = ["address", "article", "aside", "blockquote", "details", "div", "dl", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "main", "menu", "nav", "ol", "p", "pre", "section", "table", "ul"];

        function M(e, t, n) {
            var r = o(n, t, !0);
            return !r || !l(r) && !a(r)
        }

        function y(e, t, n) {
            var r = o(n, t);
            return !r || i(r, p)
        }

        function b(e, t, n) {
            var r = o(n, t);
            return !r || i(r, m)
        }

        e.exports = s({
            html: function (e, t, n) {
                var r = o(n, t);
                return !r || !l(r)
            }, head: M, body: function (e, t, n) {
                var r = o(n, t);
                return !r || !l(r)
            }, p: function (e, t, n) {
                var r = o(n, t);
                return r ? i(r, g) : !n || !i(n, v)
            }, li: function (e, t, n) {
                var r = o(n, t);
                return !r || i(r, "li")
            }, dt: function (e, t, n) {
                var r = o(n, t);
                return r && i(r, u)
            }, dd: function (e, t, n) {
                var r = o(n, t);
                return !r || i(r, u)
            }, rt: y, rp: y, optgroup: function (e, t, n) {
                var r = o(n, t);
                return !r || i(r, c)
            }, option: function (e, t, n) {
                var r = o(n, t);
                return !r || i(r, h)
            }, menuitem: function (e, t, n) {
                var r = o(n, t);
                return !r || i(r, f)
            }, colgroup: M, caption: M, thead: function (e, t, n) {
                var r = o(n, t);
                return r && i(r, d)
            }, tbody: function (e, t, n) {
                var r = o(n, t);
                return !r || i(r, d)
            }, tfoot: function (e, t, n) {
                return !o(n, t)
            }, tr: function (e, t, n) {
                var r = o(n, t);
                return !r || i(r, "tr")
            }, td: b, th: b
        })
    }, 1600: (e, t, n) => {
        "use strict";
        t.opening = n(6014), t.closing = n(8639)
    }, 5254: e => {
        "use strict";
        e.exports = function (e) {
            return function (n, r, i) {
                var a = n.tagName;
                return !!t.call(e, a) && e[a](n, r, i)
            }
        };
        var t = {}.hasOwnProperty
    }, 6014: (e, t, n) => {
        "use strict";
        var r = n(8145), i = n(8909), a = n(3370).b, o = n(4414), s = n(4997), l = n(8115), c = n(8639),
            h = n(5254), u = r("comment"), f = ["title", "base"],
            p = ["meta", "link", "script", "style", "template"], d = ["thead", "tbody"];
        e.exports = h({
            html: function (e) {
                var t = o(e);
                return !t || !u(t)
            }, head: function (e) {
                var t, n, r = e.children, a = r.length, o = [], s = -1;
                for (; ++s < a;) if (t = r[s], n = t.tagName, i(t, f)) {
                    if (-1 !== o.indexOf(n)) return !1;
                    o.push(n)
                }
                return 0 !== a
            }, body: function (e) {
                var t = o(e, !0);
                return !t || !u(t) && !l(t) && !i(t, p)
            }, colgroup: function (e, t, n) {
                var r = a(n, t), l = o(e, !0);
                if (i(r, "colgroup") && c(r, s(n, r), n)) return !1;
                return l && i(l, "col")
            }, tbody: function (e, t, n) {
                var r = a(n, t), l = o(e);
                if (i(r, d) && c(r, s(n, r), n)) return !1;
                return l && i(l, "tr")
            }
        })
    }, 4414: (e, t, n) => {
        "use strict";
        var r = n(3370).e;
        e.exports = function (e, t) {
            return r(e, -1, t)
        }
    }, 4997: e => {
        "use strict";
        e.exports = function (e, t) {
            return e && e.children && e.children.indexOf(t)
        }
    }, 3370: (e, t, n) => {
        "use strict";
        var r = n(3560);

        function i(e) {
            return function (t, n, i) {
                var a = t && t.children, o = n + e, s = a && a[o];
                if (!i) for (; s && r(s);) s = a[o += e];
                return s
            }
        }

        t.b = i(-1), t.e = i(1)
    }, 8115: (e, t, n) => {
        "use strict";
        var r = n(8145), i = n(3560);
        e.exports = function (e) {
            return a(e) && i(e.value.charAt(0))
        };
        var a = r("text")
    }, 1878: (e, t, n) => {
        "use strict";
        e.exports = function (e, t, n, a) {
            var o = t && t.type;
            if (!o) throw new Error("Expected node, not `" + t + "`");
            if (!r.call(i, o)) throw new Error("Cannot compile unknown node `" + o + "`");
            return i[o](e, t, n, a)
        };
        var r = {}.hasOwnProperty, i = {};
        i.root = n(5802), i.text = n(9514), i.element = n(4307), i.doctype = n(5842), i.comment = n(1928), i.raw = n(9044)
    }, 9044: (e, t, n) => {
        "use strict";
        var r = n(9514);
        e.exports = function (e, t) {
            return e.dangerous ? t.value : r(e, t)
        }
    }, 9514: (e, t, n) => {
        "use strict";
        var r = n(7529), i = n(4860);
        e.exports = function (e, t, n, a) {
            var o = t.value;
            return function (e) {
                return e && ("script" === e.tagName || "style" === e.tagName)
            }(a) ? o : i(o, r(e.entities, {subset: ["<", "&"]}))
        }
    }, 3560: e => {
        "use strict";
        e.exports = function (e) {
            var n;
            if (e && "object" == typeof e && "text" === e.type) n = e.value || ""; else {
                if ("string" != typeof e) return !1;
                n = e
            }
            return "" === n.replace(t, "")
        };
        var t = /[ \t\n\f\r]/g
    }, 4318: e => {
        "use strict";
        e.exports = JSON.parse('["area","base","basefont","bgsound","br","col","command","embed","frame","hr","image","img","input","isindex","keygen","link","menuitem","meta","nextid","param","source","track","wbr"]')
    }, 5717: e => {
        "function" == typeof Object.create ? e.exports = function (e, t) {
            t && (e.super_ = t, e.prototype = Object.create(t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }))
        } : e.exports = function (e, t) {
            if (t) {
                e.super_ = t;
                var n = function () {
                };
                n.prototype = t.prototype, e.prototype = new n, e.prototype.constructor = e
            }
        }
    }, 6260: e => {
        "use strict";
        e.exports = function (e) {
            var t = "string" == typeof e ? e.charCodeAt(0) : e;
            return t >= 97 && t <= 122 || t >= 65 && t <= 90
        }
    }, 7961: (e, t, n) => {
        "use strict";
        var r = n(6260), i = n(6195);
        e.exports = function (e) {
            return r(e) || i(e)
        }
    }, 8738: e => {
        e.exports = function (e) {
            return null != e && null != e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
        }
    }, 6195: e => {
        "use strict";
        e.exports = function (e) {
            var t = "string" == typeof e ? e.charCodeAt(0) : e;
            return t >= 48 && t <= 57
        }
    }, 9480: e => {
        "use strict";
        e.exports = function (e) {
            var t = "string" == typeof e ? e.charCodeAt(0) : e;
            return t >= 97 && t <= 102 || t >= 65 && t <= 70 || t >= 48 && t <= 57
        }
    }, 2139: e => {
        "use strict";
        e.exports = function (e) {
            return n.test("number" == typeof e ? t(e) : e.charAt(0))
        };
        var t = String.fromCharCode, n = /\s/
    }, 3017: e => {
        "use strict";
        e.exports = function (e) {
            return n.test("number" == typeof e ? t(e) : e.charAt(0))
        };
        var t = String.fromCharCode, n = /\w/
    }, 2123: e => {
        "use strict";
        e.exports = i;
        var t = ["\\", "`", "*", "{", "}", "[", "]", "(", ")", "#", "+", "-", ".", "!", "_", ">"],
            n = t.concat(["~", "|"]),
            r = n.concat(["\n", '"', "$", "%", "&", "'", ",", "/", ":", ";", "<", "=", "?", "@", "^"]);

        function i(e) {
            var i = e || {};
            return i.commonmark ? r : i.gfm ? n : t
        }

        i.default = t, i.gfm = n, i.commonmark = r
    }, 6630: (e, t, n) => {
        "use strict";
        var r = n(2854);
        e.exports = function (e, t) {
            return function (e) {
                return t;

                function t(t) {
                    var n = t && a(t);
                    return n && i.call(e, n) ? e[n] : null
                }
            }(function (e) {
                var t = {};
                if (!e || !e.type) throw new Error("mdast-util-definitions expected node");
                return r(e, "definition", n), t;

                function n(e) {
                    var n = a(e.identifier);
                    i.call(t, n) || (t[n] = e)
                }
            }(e))
        };
        var i = {}.hasOwnProperty;

        function a(e) {
            return e.toUpperCase()
        }
    }, 5426: (e, t, n) => {
        "use strict";
        e.exports = function (e, t) {
            var n, i, a = t.children || [], o = a.length, s = [], l = -1;
            for (; ++l < o;) (n = r(e, a[l], t)) && (l && "break" === a[l - 1].type && (n.value && (n.value = n.value.replace(/^\s+/, "")), (i = n.children && n.children[0]) && i.value && (i.value = i.value.replace(/^\s+/, ""))), s = s.concat(n));
            return s
        };
        var r = n(719)
    }, 1696: (e, t, n) => {
        "use strict";
        e.exports = function (e) {
            var t, n, o, s, l = e.footnoteById, c = e.footnoteOrder, h = c.length, u = -1, f = [];
            for (; ++u < h;) (t = l[c[u].toUpperCase()]) && (o = t.children.concat(), s = o[o.length - 1], n = {
                type: "link",
                url: "#fnref-" + t.identifier,
                data: {hProperties: {className: ["footnote-backref"]}},
                children: [{type: "text", value: "↩"}]
            }, s && "paragraph" === s.type || (s = {
                type: "paragraph",
                children: []
            }, o.push(s)), s.children.push(n), f.push({
                type: "listItem",
                data: {hProperties: {id: "fn-" + t.identifier}},
                children: o,
                position: t.position
            }));
            if (0 === f.length) return null;
            return e(null, "div", {className: ["footnotes"]}, a([r(e), i(e, {
                type: "list",
                ordered: !0,
                children: f
            })], !0))
        };
        var r = n(7552), i = n(7888), a = n(6115)
    }, 4590: (e, t, n) => {
        "use strict";
        e.exports = function (e, t) {
            return e(t, "blockquote", r(i(e, t), !0))
        };
        var r = n(6115), i = n(5426)
    }, 3562: (e, t, n) => {
        "use strict";
        e.exports = function (e, t) {
            return [e(t, "br"), r("text", "\n")]
        };
        var r = n(914)
    }, 7891: (e, t, n) => {
        "use strict";
        e.exports = function (e, t) {
            var n, i = t.value ? t.value + "\n" : "", a = t.lang && t.lang.match(/^[^ \t]+(?=[ \t]|$)/), o = {};
            a && (o.className = ["language-" + a]);
            n = e(t, "code", o, [r("text", i)]), t.meta && (n.data = {meta: t.meta});
            return e(t.position, "pre", [n])
        };
        var r = n(914)
    }, 9381: (e, t, n) => {
        "use strict";
        e.exports = function (e, t) {
            return e(t, "del", r(e, t))
        };
        var r = n(5426)
    }, 790: (e, t, n) => {
        "use strict";
        e.exports = function (e, t) {
            return e(t, "em", r(e, t))
        };
        var r = n(5426)
    }, 8235: (e, t, n) => {
        "use strict";
        e.exports = function (e, t) {
            var n = e.footnoteOrder, i = String(t.identifier);
            -1 === n.indexOf(i) && n.push(i);
            return e(t.position, "sup", {id: "fnref-" + i}, [e(t, "a", {
                href: "#fn-" + i,
                className: ["footnote-ref"]
            }, [r("text", t.label || i)])])
        };
        var r = n(914)
    }, 5758: (e, t, n) => {
        "use strict";
        e.exports = function (e, t) {
            var n = e.footnoteById, i = e.footnoteOrder, a = 1;
            for (; a in n;) a++;
            return a = String(a), i.push(a), n[a] = {
                type: "footnoteDefinition",
                identifier: a,
                children: [{type: "paragraph", children: t.children}],
                position: t.position
            }, r(e, {type: "footnoteReference", identifier: a, position: t.position})
        };
        var r = n(8235)
    }, 4890: (e, t, n) => {
        "use strict";
        e.exports = function (e, t) {
            return e(t, "h" + t.depth, r(e, t))
        };
        var r = n(5426)
    }, 2202: (e, t, n) => {
        "use strict";
        e.exports = function (e, t) {
            return e.dangerous ? e.augment(t, r("raw", t.value)) : null
        };
        var r = n(914)
    }, 1454: (e, t, n) => {
        "use strict";
        e.exports = function (e, t) {
            var n, a = e.definition(t.identifier);
            if (!a) return i(e, t);
            n = {src: r(a.url || ""), alt: t.alt}, null !== a.title && void 0 !== a.title && (n.title = a.title);
            return e(t, "img", n)
        };
        var r = n(729), i = n(713)
    }, 5037: (e, t, n) => {
        "use strict";
        var r = n(729);
        e.exports = function (e, t) {
            var n = {src: r(t.url), alt: t.alt};
            null !== t.title && void 0 !== t.title && (n.title = t.title);
            return e(t, "img", n)
        }
    }, 4617: (e, t, n) => {
        "use strict";

        function r() {
            return null
        }

        e.exports = {
            blockquote: n(4590),
            break: n(3562),
            code: n(7891),
            delete: n(9381),
            emphasis: n(790),
            footnoteReference: n(8235),
            footnote: n(5758),
            heading: n(4890),
            html: n(2202),
            imageReference: n(1454),
            image: n(5037),
            inlineCode: n(8409),
            linkReference: n(9266),
            link: n(404),
            listItem: n(4463),
            list: n(7888),
            paragraph: n(8346),
            root: n(8100),
            strong: n(4970),
            table: n(2605),
            text: n(989),
            thematicBreak: n(7552),
            toml: r,
            yaml: r,
            definition: r,
            footnoteDefinition: r
        }
    }, 8409: (e, t, n) => {
        "use strict";
        e.exports = function (e, t) {
            var n = t.value.replace(/\r?\n|\r/g, " ");
            return e(t, "code", [r("text", n)])
        };
        var r = n(914)
    }, 9266: (e, t, n) => {
        "use strict";
        e.exports = function (e, t) {
            var n, o = e.definition(t.identifier);
            if (!o) return i(e, t);
            n = {href: r(o.url || "")}, null !== o.title && void 0 !== o.title && (n.title = o.title);
            return e(t, "a", n, a(e, t))
        };
        var r = n(729), i = n(713), a = n(5426)
    }, 404: (e, t, n) => {
        "use strict";
        var r = n(729), i = n(5426);
        e.exports = function (e, t) {
            var n = {href: r(t.url)};
            null !== t.title && void 0 !== t.title && (n.title = t.title);
            return e(t, "a", n, i(e, t))
        }
    }, 4463: (e, t, n) => {
        "use strict";
        e.exports = function (e, t, n) {
            var o, s, l, c = i(e, t), h = c[0], u = n ? function (e) {
                var t = e.spread, n = e.children, r = n.length, i = -1;
                for (; !t && ++i < r;) t = a(n[i]);
                return t
            }(n) : a(t), f = {}, p = [];
            "boolean" == typeof t.checked && (h && "p" === h.tagName || (h = e(null, "p", []), c.unshift(h)), h.children.length > 0 && h.children.unshift(r("text", " ")), h.children.unshift(e(null, "input", {
                type: "checkbox",
                checked: t.checked,
                disabled: !0
            })), f.className = ["task-list-item"]);
            o = c.length, s = -1;
            for (; ++s < o;) l = c[s], (u || 0 !== s || "p" !== l.tagName) && p.push(r("text", "\n")), "p" !== l.tagName || u ? p.push(l) : p = p.concat(l.children);
            o && (u || "p" !== l.tagName) && p.push(r("text", "\n"));
            return e(t, "li", f, p)
        };
        var r = n(914), i = n(5426);

        function a(e) {
            var t = e.spread;
            return null == t ? e.children.length > 1 : t
        }
    }, 7888: (e, t, n) => {
        "use strict";
        e.exports = function (e, t) {
            var n, a, o = {}, s = t.ordered ? "ol" : "ul", l = -1;
            "number" == typeof t.start && 1 !== t.start && (o.start = t.start);
            n = i(e, t), a = n.length;
            for (; ++l < a;) if (n[l].properties.className && -1 !== n[l].properties.className.indexOf("task-list-item")) {
                o.className = ["contains-task-list"];
                break
            }
            return e(t, s, o, r(n, !0))
        };
        var r = n(6115), i = n(5426)
    }, 8346: (e, t, n) => {
        "use strict";
        e.exports = function (e, t) {
            return e(t, "p", r(e, t))
        };
        var r = n(5426)
    }, 8100: (e, t, n) => {
        "use strict";
        e.exports = function (e, t) {
            return e.augment(t, r("root", i(a(e, t))))
        };
        var r = n(914), i = n(6115), a = n(5426)
    }, 4970: (e, t, n) => {
        "use strict";
        e.exports = function (e, t) {
            return e(t, "strong", r(e, t))
        };
        var r = n(5426)
    }, 2605: (e, t, n) => {
        "use strict";
        e.exports = function (e, t) {
            var n, o, s, l, c, h = t.children, u = h.length, f = t.align || [], p = f.length, d = [];
            for (; u--;) {
                for (o = h[u].children, l = 0 === u ? "th" : "td", n = p || o.length, s = []; n--;) c = o[n], s[n] = e(c, l, {align: f[n]}, c ? a(e, c) : []);
                d[u] = e(h[u], "tr", i(s, !0))
            }
            return e(t, "table", i([e(d[0].position, "thead", i([d[0]], !0))].concat(d[1] ? e({
                start: r.start(d[1]),
                end: r.end(d[d.length - 1])
            }, "tbody", i(d.slice(1), !0)) : []), !0))
        };
        var r = n(7361), i = n(6115), a = n(5426)
    }, 989: (e, t, n) => {
        "use strict";
        e.exports = function (e, t) {
            return e.augment(t, r("text", String(t.value).replace(/[ \t]*(\r?\n|\r)[ \t]*/g, "$1")))
        };
        var r = n(914)
    }, 7552: e => {
        "use strict";
        e.exports = function (e, t) {
            return e(t, "hr")
        }
    }, 719: (e, t, n) => {
        "use strict";
        e.exports = function (e, t, n) {
            var r, i = t && t.type;
            if (!i) throw new Error("Expected node, got `" + t + "`");
            r = a.call(e.handlers, i) ? e.handlers[i] : e.passThrough && e.passThrough.indexOf(i) > -1 ? s : e.unknownHandler;
            return ("function" == typeof r ? r : o)(e, t, n)
        };
        var r = n(914), i = n(5426), a = {}.hasOwnProperty;

        function o(e, t) {
            return function (e) {
                var t = e.data || {};
                if (a.call(t, "hName") || a.call(t, "hProperties") || a.call(t, "hChildren")) return !1;
                return "value" in e
            }(t) ? e.augment(t, r("text", t.value)) : e(t, "div", i(e, t))
        }

        function s(e, t) {
            var n;
            return t.children ? ((n = Object.assign({}, t)).children = i(e, t), n) : t
        }
    }, 713: (e, t, n) => {
        "use strict";
        e.exports = function (e, t) {
            var n, a, o, s = t.referenceType, l = "]";
            "collapsed" === s ? l += "[]" : "full" === s && (l += "[" + (t.label || t.identifier) + "]");
            if ("imageReference" === t.type) return r("text", "![" + t.alt + l);
            n = i(e, t), (a = n[0]) && "text" === a.type ? a.value = "[" + a.value : n.unshift(r("text", "["));
            (o = n[n.length - 1]) && "text" === o.type ? o.value += l : n.push(r("text", l));
            return n
        };
        var r = n(914), i = n(5426)
    }, 6115: (e, t, n) => {
        "use strict";
        e.exports = function (e, t) {
            var n = [], i = -1, a = e.length;
            t && n.push(r("text", "\n"));
            for (; ++i < a;) i && n.push(r("text", "\n")), n.push(e[i]);
            t && e.length > 0 && n.push(r("text", "\n"));
            return n
        };
        var r = n(914)
    }, 729: e => {
        "use strict";
        var t = {};

        function n(e, r, i) {
            var a, o, s, l, c, h = "";
            for ("string" != typeof r && (i = r, r = n.defaultChars), void 0 === i && (i = !0), c = function (e) {
                var n, r, i = t[e];
                if (i) return i;
                for (i = t[e] = [], n = 0; n < 128; n++) r = String.fromCharCode(n), /^[0-9a-z]$/i.test(r) ? i.push(r) : i.push("%" + ("0" + n.toString(16).toUpperCase()).slice(-2));
                for (n = 0; n < e.length; n++) i[e.charCodeAt(n)] = e[n];
                return i
            }(r), a = 0, o = e.length; a < o; a++) if (s = e.charCodeAt(a), i && 37 === s && a + 2 < o && /^[0-9a-f]{2}$/i.test(e.slice(a + 1, a + 3))) h += e.slice(a, a + 3), a += 2; else if (s < 128) h += c[s]; else if (s >= 55296 && s <= 57343) {
                if (s >= 55296 && s <= 56319 && a + 1 < o && (l = e.charCodeAt(a + 1)) >= 56320 && l <= 57343) {
                    h += encodeURIComponent(e[a] + e[a + 1]), a++;
                    continue
                }
                h += "%EF%BF%BD"
            } else h += encodeURIComponent(e[a]);
            return h
        }

        n.defaultChars = ";/?:@&=+$,-_.!~*'()#", n.componentChars = "-_.!~*'()", e.exports = n
    }, 7621: (e, t, n) => {
        "use strict";
        var r = n(3407);
        e.exports = function (e) {
            return !!i.call(r, e) && r[e]
        };
        var i = {}.hasOwnProperty
    }, 7574: (e, t, n) => {
        "use strict";
        var r = n(6588), i = n(6852), a = n(6195), o = n(9480), s = n(7961), l = n(7621);
        e.exports = function (e, t) {
            var n, a, o = {};
            t || (t = {});
            for (a in f) n = t[a], o[a] = null == n ? f[a] : n;
            (o.position.indent || o.position.start) && (o.indent = o.position.indent || [], o.position = o.position.start);
            return function (e, t) {
                var n, a, o, f, w, k, x, C, A, L, E, S, H, T, V, O, N, P, I, D = t.additional, q = t.nonTerminated,
                    z = t.text, R = t.reference, Z = t.warning, B = t.textContext, j = t.referenceContext,
                    F = t.warningContext, U = t.position, _ = t.indent || [], $ = e.length, W = 0, G = -1,
                    K = U.column || 1, Y = U.line || 1, X = "", J = [];
                "string" == typeof D && (D = D.charCodeAt(0));
                O = Q(), C = Z ? ee : u, W--, $++;
                for (; ++W < $;) if (10 === w && (K = _[G] || 1), 38 === (w = e.charCodeAt(W))) {
                    if (9 === (x = e.charCodeAt(W + 1)) || 10 === x || 12 === x || 32 === x || 38 === x || 60 === x || x != x || D && x === D) {
                        X += h(w), K++;
                        continue
                    }
                    for (S = H = W + 1, I = H, 35 === x ? (I = ++S, 88 === (x = e.charCodeAt(I)) || 120 === x ? (T = d, I = ++S) : T = m) : T = p, n = "", E = "", f = "", V = g[T], I--; ++I < $ && V(x = e.charCodeAt(I));) f += h(x), T === p && c.call(r, f) && (n = f, E = r[f]);
                    (o = 59 === e.charCodeAt(I)) && (I++, (a = T === p && l(f)) && (n = f, E = a)), P = 1 + I - H, (o || q) && (f ? T === p ? (o && !E ? C(5, 1) : (n !== f && (P = 1 + (I = S + n.length) - S, o = !1), o || (A = n ? 1 : 3, t.attribute ? 61 === (x = e.charCodeAt(I)) ? (C(A, P), E = null) : s(x) ? E = null : C(A, P) : C(A, P))), k = E) : (o || C(2, P), y(k = parseInt(f, v[T])) ? (C(7, P), k = h(65533)) : k in i ? (C(6, P), k = i[k]) : (L = "", b(k) && C(6, P), k > 65535 && (L += h((k -= 65536) >>> 10 | 55296), k = 56320 | 1023 & k), k = L + h(k))) : T !== p && C(4, P)), k ? (te(), O = Q(), W = I - 1, K += I - H + 1, J.push(k), (N = Q()).offset++, R && R.call(j, k, {
                        start: O,
                        end: N
                    }, e.slice(H - 1, I)), O = N) : (f = e.slice(H - 1, I), X += f, K += f.length, W = I - 1)
                } else 10 === w && (Y++, G++, K = 0), w == w ? (X += h(w), K++) : te();
                return J.join("");

                function Q() {
                    return {line: Y, column: K, offset: W + (U.offset || 0)}
                }

                function ee(e, t) {
                    var n = Q();
                    n.column += t, n.offset += t, Z.call(F, M[e], n, e)
                }

                function te() {
                    X && (J.push(X), z && z.call(B, X, {start: O, end: Q()}), X = "")
                }
            }(e, o)
        };
        var c = {}.hasOwnProperty, h = String.fromCharCode, u = Function.prototype, f = {
            warning: null,
            reference: null,
            text: null,
            warningContext: null,
            referenceContext: null,
            textContext: null,
            position: {},
            additional: null,
            attribute: !1,
            nonTerminated: !0
        }, p = "named", d = "hexadecimal", m = "decimal", v = {hexadecimal: 16, decimal: 10}, g = {};
        g.named = s, g[m] = a, g[d] = o;
        var M = {};

        function y(e) {
            return e >= 55296 && e <= 57343 || e > 1114111
        }

        function b(e) {
            return e >= 1 && e <= 8 || 11 === e || e >= 13 && e <= 31 || e >= 127 && e <= 159 || e >= 64976 && e <= 65007 || 65535 == (65535 & e) || 65534 == (65535 & e)
        }

        M[1] = "Named character references must be terminated by a semicolon", M[2] = "Numeric character references must be terminated by a semicolon", M[3] = "Named character references cannot be empty", M[4] = "Numeric character references cannot be empty", M[5] = "Named character references must be known", M[6] = "Numeric character references cannot be disallowed", M[7] = "Numeric character references cannot be outside the permissible Unicode range"
    }, 9560: (e, t, n) => {
        "use strict";
        var r = n(6632), i = n(8805), a = n(7643), o = "data";
        e.exports = function (e, t) {
            var n = r(t), f = t, p = a;
            if (n in e.normal) return e.property[e.normal[n]];
            n.length > 4 && n.slice(0, 4) === o && s.test(t) && ("-" === t.charAt(4) ? f = function (e) {
                var t = e.slice(5).replace(l, u);
                return o + t.charAt(0).toUpperCase() + t.slice(1)
            }(t) : t = function (e) {
                var t = e.slice(4);
                if (l.test(t)) return e;
                "-" !== (t = t.replace(c, h)).charAt(0) && (t = "-" + t);
                return o + t
            }(t), p = i);
            return new p(f, t)
        };
        var s = /^data[-\w.:]+$/i, l = /-[a-z]/g, c = /[A-Z]/g;

        function h(e) {
            return "-" + e.toLowerCase()
        }

        function u(e) {
            return e.charAt(1).toUpperCase()
        }
    }, 7247: (e, t, n) => {
        "use strict";
        var r = n(9940), i = n(8289), a = n(5812), o = n(4397), s = n(7716), l = n(1805);
        e.exports = r([a, i, o, s, l])
    }, 7716: (e, t, n) => {
        "use strict";
        var r = n(7e3), i = n(7596), a = r.booleanish, o = r.number, s = r.spaceSeparated;
        e.exports = i({
            transform: function (e, t) {
                return "role" === t ? t : "aria-" + t.slice(4).toLowerCase()
            },
            properties: {
                ariaActiveDescendant: null,
                ariaAtomic: a,
                ariaAutoComplete: null,
                ariaBusy: a,
                ariaChecked: a,
                ariaColCount: o,
                ariaColIndex: o,
                ariaColSpan: o,
                ariaControls: s,
                ariaCurrent: null,
                ariaDescribedBy: s,
                ariaDetails: null,
                ariaDisabled: a,
                ariaDropEffect: s,
                ariaErrorMessage: null,
                ariaExpanded: a,
                ariaFlowTo: s,
                ariaGrabbed: a,
                ariaHasPopup: null,
                ariaHidden: a,
                ariaInvalid: null,
                ariaKeyShortcuts: null,
                ariaLabel: null,
                ariaLabelledBy: s,
                ariaLevel: o,
                ariaLive: null,
                ariaModal: a,
                ariaMultiLine: a,
                ariaMultiSelectable: a,
                ariaOrientation: null,
                ariaOwns: s,
                ariaPlaceholder: null,
                ariaPosInSet: o,
                ariaPressed: a,
                ariaReadOnly: a,
                ariaRelevant: null,
                ariaRequired: a,
                ariaRoleDescription: s,
                ariaRowCount: o,
                ariaRowIndex: o,
                ariaRowSpan: o,
                ariaSelected: a,
                ariaSetSize: o,
                ariaSort: null,
                ariaValueMax: o,
                ariaValueMin: o,
                ariaValueNow: o,
                ariaValueText: null,
                role: null
            }
        })
    }, 1805: (e, t, n) => {
        "use strict";
        var r = n(7e3), i = n(7596), a = n(855), o = r.boolean, s = r.overloadedBoolean, l = r.booleanish,
            c = r.number, h = r.spaceSeparated, u = r.commaSeparated;
        e.exports = i({
            space: "html",
            attributes: {
                acceptcharset: "accept-charset",
                classname: "class",
                htmlfor: "for",
                httpequiv: "http-equiv"
            },
            transform: a,
            mustUseProperty: ["checked", "multiple", "muted", "selected"],
            properties: {
                abbr: null,
                accept: u,
                acceptCharset: h,
                accessKey: h,
                action: null,
                allow: null,
                allowFullScreen: o,
                allowPaymentRequest: o,
                allowUserMedia: o,
                alt: null,
                as: null,
                async: o,
                autoCapitalize: null,
                autoComplete: h,
                autoFocus: o,
                autoPlay: o,
                capture: o,
                charSet: null,
                checked: o,
                cite: null,
                className: h,
                cols: c,
                colSpan: null,
                content: null,
                contentEditable: l,
                controls: o,
                controlsList: h,
                coords: c | u,
                crossOrigin: null,
                data: null,
                dateTime: null,
                decoding: null,
                default: o,
                defer: o,
                dir: null,
                dirName: null,
                disabled: o,
                download: s,
                draggable: l,
                encType: null,
                enterKeyHint: null,
                form: null,
                formAction: null,
                formEncType: null,
                formMethod: null,
                formNoValidate: o,
                formTarget: null,
                headers: h,
                height: c,
                hidden: o,
                high: c,
                href: null,
                hrefLang: null,
                htmlFor: h,
                httpEquiv: h,
                id: null,
                imageSizes: null,
                imageSrcSet: u,
                inputMode: null,
                integrity: null,
                is: null,
                isMap: o,
                itemId: null,
                itemProp: h,
                itemRef: h,
                itemScope: o,
                itemType: h,
                kind: null,
                label: null,
                lang: null,
                language: null,
                list: null,
                loop: o,
                low: c,
                manifest: null,
                max: null,
                maxLength: c,
                media: null,
                method: null,
                min: null,
                minLength: c,
                multiple: o,
                muted: o,
                name: null,
                nonce: null,
                noModule: o,
                noValidate: o,
                onAbort: null,
                onAfterPrint: null,
                onAuxClick: null,
                onBeforePrint: null,
                onBeforeUnload: null,
                onBlur: null,
                onCancel: null,
                onCanPlay: null,
                onCanPlayThrough: null,
                onChange: null,
                onClick: null,
                onClose: null,
                onContextMenu: null,
                onCopy: null,
                onCueChange: null,
                onCut: null,
                onDblClick: null,
                onDrag: null,
                onDragEnd: null,
                onDragEnter: null,
                onDragExit: null,
                onDragLeave: null,
                onDragOver: null,
                onDragStart: null,
                onDrop: null,
                onDurationChange: null,
                onEmptied: null,
                onEnded: null,
                onError: null,
                onFocus: null,
                onFormData: null,
                onHashChange: null,
                onInput: null,
                onInvalid: null,
                onKeyDown: null,
                onKeyPress: null,
                onKeyUp: null,
                onLanguageChange: null,
                onLoad: null,
                onLoadedData: null,
                onLoadedMetadata: null,
                onLoadEnd: null,
                onLoadStart: null,
                onMessage: null,
                onMessageError: null,
                onMouseDown: null,
                onMouseEnter: null,
                onMouseLeave: null,
                onMouseMove: null,
                onMouseOut: null,
                onMouseOver: null,
                onMouseUp: null,
                onOffline: null,
                onOnline: null,
                onPageHide: null,
                onPageShow: null,
                onPaste: null,
                onPause: null,
                onPlay: null,
                onPlaying: null,
                onPopState: null,
                onProgress: null,
                onRateChange: null,
                onRejectionHandled: null,
                onReset: null,
                onResize: null,
                onScroll: null,
                onSecurityPolicyViolation: null,
                onSeeked: null,
                onSeeking: null,
                onSelect: null,
                onSlotChange: null,
                onStalled: null,
                onStorage: null,
                onSubmit: null,
                onSuspend: null,
                onTimeUpdate: null,
                onToggle: null,
                onUnhandledRejection: null,
                onUnload: null,
                onVolumeChange: null,
                onWaiting: null,
                onWheel: null,
                open: o,
                optimum: c,
                pattern: null,
                ping: h,
                placeholder: null,
                playsInline: o,
                poster: null,
                preload: null,
                readOnly: o,
                referrerPolicy: null,
                rel: h,
                required: o,
                reversed: o,
                rows: c,
                rowSpan: c,
                sandbox: h,
                scope: null,
                scoped: o,
                seamless: o,
                selected: o,
                shape: null,
                size: c,
                sizes: null,
                slot: null,
                span: c,
                spellCheck: l,
                src: null,
                srcDoc: null,
                srcLang: null,
                srcSet: u,
                start: c,
                step: null,
                style: null,
                tabIndex: c,
                target: null,
                title: null,
                translate: null,
                type: null,
                typeMustMatch: o,
                useMap: null,
                value: l,
                width: c,
                wrap: null,
                align: null,
                aLink: null,
                archive: h,
                axis: null,
                background: null,
                bgColor: null,
                border: c,
                borderColor: null,
                bottomMargin: c,
                cellPadding: null,
                cellSpacing: null,
                char: null,
                charOff: null,
                classId: null,
                clear: null,
                code: null,
                codeBase: null,
                codeType: null,
                color: null,
                compact: o,
                declare: o,
                event: null,
                face: null,
                frame: null,
                frameBorder: null,
                hSpace: c,
                leftMargin: c,
                link: null,
                longDesc: null,
                lowSrc: null,
                marginHeight: c,
                marginWidth: c,
                noResize: o,
                noHref: o,
                noShade: o,
                noWrap: o,
                object: null,
                profile: null,
                prompt: null,
                rev: null,
                rightMargin: c,
                rules: null,
                scheme: null,
                scrolling: l,
                standby: null,
                summary: null,
                text: null,
                topMargin: c,
                valueType: null,
                version: null,
                vAlign: null,
                vLink: null,
                vSpace: c,
                allowTransparency: null,
                autoCorrect: null,
                autoSave: null,
                disablePictureInPicture: o,
                disableRemotePlayback: o,
                prefix: null,
                property: null,
                results: c,
                security: null,
                unselectable: null
            }
        })
    }, 5789: (e, t, n) => {
        "use strict";
        var r = n(7e3), i = n(7596), a = n(8740), o = r.boolean, s = r.number, l = r.spaceSeparated,
            c = r.commaSeparated, h = r.commaOrSpaceSeparated;
        e.exports = i({
            space: "svg", attributes: {
                accentHeight: "accent-height",
                alignmentBaseline: "alignment-baseline",
                arabicForm: "arabic-form",
                baselineShift: "baseline-shift",
                capHeight: "cap-height",
                className: "class",
                clipPath: "clip-path",
                clipRule: "clip-rule",
                colorInterpolation: "color-interpolation",
                colorInterpolationFilters: "color-interpolation-filters",
                colorProfile: "color-profile",
                colorRendering: "color-rendering",
                crossOrigin: "crossorigin",
                dataType: "datatype",
                dominantBaseline: "dominant-baseline",
                enableBackground: "enable-background",
                fillOpacity: "fill-opacity",
                fillRule: "fill-rule",
                floodColor: "flood-color",
                floodOpacity: "flood-opacity",
                fontFamily: "font-family",
                fontSize: "font-size",
                fontSizeAdjust: "font-size-adjust",
                fontStretch: "font-stretch",
                fontStyle: "font-style",
                fontVariant: "font-variant",
                fontWeight: "font-weight",
                glyphName: "glyph-name",
                glyphOrientationHorizontal: "glyph-orientation-horizontal",
                glyphOrientationVertical: "glyph-orientation-vertical",
                hrefLang: "hreflang",
                horizAdvX: "horiz-adv-x",
                horizOriginX: "horiz-origin-x",
                horizOriginY: "horiz-origin-y",
                imageRendering: "image-rendering",
                letterSpacing: "letter-spacing",
                lightingColor: "lighting-color",
                markerEnd: "marker-end",
                markerMid: "marker-mid",
                markerStart: "marker-start",
                navDown: "nav-down",
                navDownLeft: "nav-down-left",
                navDownRight: "nav-down-right",
                navLeft: "nav-left",
                navNext: "nav-next",
                navPrev: "nav-prev",
                navRight: "nav-right",
                navUp: "nav-up",
                navUpLeft: "nav-up-left",
                navUpRight: "nav-up-right",
                onAbort: "onabort",
                onActivate: "onactivate",
                onAfterPrint: "onafterprint",
                onBeforePrint: "onbeforeprint",
                onBegin: "onbegin",
                onCancel: "oncancel",
                onCanPlay: "oncanplay",
                onCanPlayThrough: "oncanplaythrough",
                onChange: "onchange",
                onClick: "onclick",
                onClose: "onclose",
                onCopy: "oncopy",
                onCueChange: "oncuechange",
                onCut: "oncut",
                onDblClick: "ondblclick",
                onDrag: "ondrag",
                onDragEnd: "ondragend",
                onDragEnter: "ondragenter",
                onDragExit: "ondragexit",
                onDragLeave: "ondragleave",
                onDragOver: "ondragover",
                onDragStart: "ondragstart",
                onDrop: "ondrop",
                onDurationChange: "ondurationchange",
                onEmptied: "onemptied",
                onEnd: "onend",
                onEnded: "onended",
                onError: "onerror",
                onFocus: "onfocus",
                onFocusIn: "onfocusin",
                onFocusOut: "onfocusout",
                onHashChange: "onhashchange",
                onInput: "oninput",
                onInvalid: "oninvalid",
                onKeyDown: "onkeydown",
                onKeyPress: "onkeypress",
                onKeyUp: "onkeyup",
                onLoad: "onload",
                onLoadedData: "onloadeddata",
                onLoadedMetadata: "onloadedmetadata",
                onLoadStart: "onloadstart",
                onMessage: "onmessage",
                onMouseDown: "onmousedown",
                onMouseEnter: "onmouseenter",
                onMouseLeave: "onmouseleave",
                onMouseMove: "onmousemove",
                onMouseOut: "onmouseout",
                onMouseOver: "onmouseover",
                onMouseUp: "onmouseup",
                onMouseWheel: "onmousewheel",
                onOffline: "onoffline",
                onOnline: "ononline",
                onPageHide: "onpagehide",
                onPageShow: "onpageshow",
                onPaste: "onpaste",
                onPause: "onpause",
                onPlay: "onplay",
                onPlaying: "onplaying",
                onPopState: "onpopstate",
                onProgress: "onprogress",
                onRateChange: "onratechange",
                onRepeat: "onrepeat",
                onReset: "onreset",
                onResize: "onresize",
                onScroll: "onscroll",
                onSeeked: "onseeked",
                onSeeking: "onseeking",
                onSelect: "onselect",
                onShow: "onshow",
                onStalled: "onstalled",
                onStorage: "onstorage",
                onSubmit: "onsubmit",
                onSuspend: "onsuspend",
                onTimeUpdate: "ontimeupdate",
                onToggle: "ontoggle",
                onUnload: "onunload",
                onVolumeChange: "onvolumechange",
                onWaiting: "onwaiting",
                onZoom: "onzoom",
                overlinePosition: "overline-position",
                overlineThickness: "overline-thickness",
                paintOrder: "paint-order",
                panose1: "panose-1",
                pointerEvents: "pointer-events",
                referrerPolicy: "referrerpolicy",
                renderingIntent: "rendering-intent",
                shapeRendering: "shape-rendering",
                stopColor: "stop-color",
                stopOpacity: "stop-opacity",
                strikethroughPosition: "strikethrough-position",
                strikethroughThickness: "strikethrough-thickness",
                strokeDashArray: "stroke-dasharray",
                strokeDashOffset: "stroke-dashoffset",
                strokeLineCap: "stroke-linecap",
                strokeLineJoin: "stroke-linejoin",
                strokeMiterLimit: "stroke-miterlimit",
                strokeOpacity: "stroke-opacity",
                strokeWidth: "stroke-width",
                tabIndex: "tabindex",
                textAnchor: "text-anchor",
                textDecoration: "text-decoration",
                textRendering: "text-rendering",
                typeOf: "typeof",
                underlinePosition: "underline-position",
                underlineThickness: "underline-thickness",
                unicodeBidi: "unicode-bidi",
                unicodeRange: "unicode-range",
                unitsPerEm: "units-per-em",
                vAlphabetic: "v-alphabetic",
                vHanging: "v-hanging",
                vIdeographic: "v-ideographic",
                vMathematical: "v-mathematical",
                vectorEffect: "vector-effect",
                vertAdvY: "vert-adv-y",
                vertOriginX: "vert-origin-x",
                vertOriginY: "vert-origin-y",
                wordSpacing: "word-spacing",
                writingMode: "writing-mode",
                xHeight: "x-height",
                playbackOrder: "playbackorder",
                timelineBegin: "timelinebegin"
            }, transform: a, properties: {
                about: h,
                accentHeight: s,
                accumulate: null,
                additive: null,
                alignmentBaseline: null,
                alphabetic: s,
                amplitude: s,
                arabicForm: null,
                ascent: s,
                attributeName: null,
                attributeType: null,
                azimuth: s,
                bandwidth: null,
                baselineShift: null,
                baseFrequency: null,
                baseProfile: null,
                bbox: null,
                begin: null,
                bias: s,
                by: null,
                calcMode: null,
                capHeight: s,
                className: l,
                clip: null,
                clipPath: null,
                clipPathUnits: null,
                clipRule: null,
                color: null,
                colorInterpolation: null,
                colorInterpolationFilters: null,
                colorProfile: null,
                colorRendering: null,
                content: null,
                contentScriptType: null,
                contentStyleType: null,
                crossOrigin: null,
                cursor: null,
                cx: null,
                cy: null,
                d: null,
                dataType: null,
                defaultAction: null,
                descent: s,
                diffuseConstant: s,
                direction: null,
                display: null,
                dur: null,
                divisor: s,
                dominantBaseline: null,
                download: o,
                dx: null,
                dy: null,
                edgeMode: null,
                editable: null,
                elevation: s,
                enableBackground: null,
                end: null,
                event: null,
                exponent: s,
                externalResourcesRequired: null,
                fill: null,
                fillOpacity: s,
                fillRule: null,
                filter: null,
                filterRes: null,
                filterUnits: null,
                floodColor: null,
                floodOpacity: null,
                focusable: null,
                focusHighlight: null,
                fontFamily: null,
                fontSize: null,
                fontSizeAdjust: null,
                fontStretch: null,
                fontStyle: null,
                fontVariant: null,
                fontWeight: null,
                format: null,
                fr: null,
                from: null,
                fx: null,
                fy: null,
                g1: c,
                g2: c,
                glyphName: c,
                glyphOrientationHorizontal: null,
                glyphOrientationVertical: null,
                glyphRef: null,
                gradientTransform: null,
                gradientUnits: null,
                handler: null,
                hanging: s,
                hatchContentUnits: null,
                hatchUnits: null,
                height: null,
                href: null,
                hrefLang: null,
                horizAdvX: s,
                horizOriginX: s,
                horizOriginY: s,
                id: null,
                ideographic: s,
                imageRendering: null,
                initialVisibility: null,
                in: null,
                in2: null,
                intercept: s,
                k: s,
                k1: s,
                k2: s,
                k3: s,
                k4: s,
                kernelMatrix: h,
                kernelUnitLength: null,
                keyPoints: null,
                keySplines: null,
                keyTimes: null,
                kerning: null,
                lang: null,
                lengthAdjust: null,
                letterSpacing: null,
                lightingColor: null,
                limitingConeAngle: s,
                local: null,
                markerEnd: null,
                markerMid: null,
                markerStart: null,
                markerHeight: null,
                markerUnits: null,
                markerWidth: null,
                mask: null,
                maskContentUnits: null,
                maskUnits: null,
                mathematical: null,
                max: null,
                media: null,
                mediaCharacterEncoding: null,
                mediaContentEncodings: null,
                mediaSize: s,
                mediaTime: null,
                method: null,
                min: null,
                mode: null,
                name: null,
                navDown: null,
                navDownLeft: null,
                navDownRight: null,
                navLeft: null,
                navNext: null,
                navPrev: null,
                navRight: null,
                navUp: null,
                navUpLeft: null,
                navUpRight: null,
                numOctaves: null,
                observer: null,
                offset: null,
                onAbort: null,
                onActivate: null,
                onAfterPrint: null,
                onBeforePrint: null,
                onBegin: null,
                onCancel: null,
                onCanPlay: null,
                onCanPlayThrough: null,
                onChange: null,
                onClick: null,
                onClose: null,
                onCopy: null,
                onCueChange: null,
                onCut: null,
                onDblClick: null,
                onDrag: null,
                onDragEnd: null,
                onDragEnter: null,
                onDragExit: null,
                onDragLeave: null,
                onDragOver: null,
                onDragStart: null,
                onDrop: null,
                onDurationChange: null,
                onEmptied: null,
                onEnd: null,
                onEnded: null,
                onError: null,
                onFocus: null,
                onFocusIn: null,
                onFocusOut: null,
                onHashChange: null,
                onInput: null,
                onInvalid: null,
                onKeyDown: null,
                onKeyPress: null,
                onKeyUp: null,
                onLoad: null,
                onLoadedData: null,
                onLoadedMetadata: null,
                onLoadStart: null,
                onMessage: null,
                onMouseDown: null,
                onMouseEnter: null,
                onMouseLeave: null,
                onMouseMove: null,
                onMouseOut: null,
                onMouseOver: null,
                onMouseUp: null,
                onMouseWheel: null,
                onOffline: null,
                onOnline: null,
                onPageHide: null,
                onPageShow: null,
                onPaste: null,
                onPause: null,
                onPlay: null,
                onPlaying: null,
                onPopState: null,
                onProgress: null,
                onRateChange: null,
                onRepeat: null,
                onReset: null,
                onResize: null,
                onScroll: null,
                onSeeked: null,
                onSeeking: null,
                onSelect: null,
                onShow: null,
                onStalled: null,
                onStorage: null,
                onSubmit: null,
                onSuspend: null,
                onTimeUpdate: null,
                onToggle: null,
                onUnload: null,
                onVolumeChange: null,
                onWaiting: null,
                onZoom: null,
                opacity: null,
                operator: null,
                order: null,
                orient: null,
                orientation: null,
                origin: null,
                overflow: null,
                overlay: null,
                overlinePosition: s,
                overlineThickness: s,
                paintOrder: null,
                panose1: null,
                path: null,
                pathLength: s,
                patternContentUnits: null,
                patternTransform: null,
                patternUnits: null,
                phase: null,
                ping: l,
                pitch: null,
                playbackOrder: null,
                pointerEvents: null,
                points: null,
                pointsAtX: s,
                pointsAtY: s,
                pointsAtZ: s,
                preserveAlpha: null,
                preserveAspectRatio: null,
                primitiveUnits: null,
                propagate: null,
                property: h,
                r: null,
                radius: null,
                referrerPolicy: null,
                refX: null,
                refY: null,
                rel: h,
                rev: h,
                renderingIntent: null,
                repeatCount: null,
                repeatDur: null,
                requiredExtensions: h,
                requiredFeatures: h,
                requiredFonts: h,
                requiredFormats: h,
                resource: null,
                restart: null,
                result: null,
                rotate: null,
                rx: null,
                ry: null,
                scale: null,
                seed: null,
                shapeRendering: null,
                side: null,
                slope: null,
                snapshotTime: null,
                specularConstant: s,
                specularExponent: s,
                spreadMethod: null,
                spacing: null,
                startOffset: null,
                stdDeviation: null,
                stemh: null,
                stemv: null,
                stitchTiles: null,
                stopColor: null,
                stopOpacity: null,
                strikethroughPosition: s,
                strikethroughThickness: s,
                string: null,
                stroke: null,
                strokeDashArray: h,
                strokeDashOffset: null,
                strokeLineCap: null,
                strokeLineJoin: null,
                strokeMiterLimit: s,
                strokeOpacity: s,
                strokeWidth: null,
                style: null,
                surfaceScale: s,
                syncBehavior: null,
                syncBehaviorDefault: null,
                syncMaster: null,
                syncTolerance: null,
                syncToleranceDefault: null,
                systemLanguage: h,
                tabIndex: s,
                tableValues: null,
                target: null,
                targetX: s,
                targetY: s,
                textAnchor: null,
                textDecoration: null,
                textRendering: null,
                textLength: null,
                timelineBegin: null,
                title: null,
                transformBehavior: null,
                type: null,
                typeOf: h,
                to: null,
                transform: null,
                u1: null,
                u2: null,
                underlinePosition: s,
                underlineThickness: s,
                unicode: null,
                unicodeBidi: null,
                unicodeRange: null,
                unitsPerEm: s,
                values: null,
                vAlphabetic: s,
                vMathematical: s,
                vectorEffect: null,
                vHanging: s,
                vIdeographic: s,
                version: null,
                vertAdvY: s,
                vertOriginX: s,
                vertOriginY: s,
                viewBox: null,
                viewTarget: null,
                visibility: null,
                width: null,
                widths: null,
                wordSpacing: null,
                writingMode: null,
                x: null,
                x1: null,
                x2: null,
                xChannelSelector: null,
                xHeight: s,
                y: null,
                y1: null,
                y2: null,
                yChannelSelector: null,
                z: null,
                zoomAndPan: null
            }
        })
    }, 855: (e, t, n) => {
        "use strict";
        var r = n(8740);
        e.exports = function (e, t) {
            return r(e, t.toLowerCase())
        }
    }, 8740: e => {
        "use strict";
        e.exports = function (e, t) {
            return t in e ? e[t] : t
        }
    }, 7596: (e, t, n) => {
        "use strict";
        var r = n(6632), i = n(9607), a = n(8805);
        e.exports = function (e) {
            var t, n, o = e.space, s = e.mustUseProperty || [], l = e.attributes || {}, c = e.properties,
                h = e.transform, u = {}, f = {};
            for (t in c) n = new a(t, h(l, t), c[t], o), -1 !== s.indexOf(t) && (n.mustUseProperty = !0), u[t] = n, f[r(t)] = t, f[r(n.attribute)] = t;
            return new i(u, f, o)
        }
    }, 8805: (e, t, n) => {
        "use strict";
        var r = n(7643), i = n(7e3);
        e.exports = s, s.prototype = new r, s.prototype.defined = !0;
        var a = ["boolean", "booleanish", "overloadedBoolean", "number", "commaSeparated", "spaceSeparated", "commaOrSpaceSeparated"],
            o = a.length;

        function s(e, t, n, s) {
            var c, h = -1;
            for (l(this, "space", s), r.call(this, e, t); ++h < o;) l(this, c = a[h], (n & i[c]) === i[c])
        }

        function l(e, t, n) {
            n && (e[t] = n)
        }
    }, 7643: e => {
        "use strict";
        e.exports = n;
        var t = n.prototype;

        function n(e, t) {
            this.property = e, this.attribute = t
        }

        t.space = null, t.attribute = null, t.property = null, t.boolean = !1, t.booleanish = !1, t.overloadedBoolean = !1, t.number = !1, t.commaSeparated = !1, t.spaceSeparated = !1, t.commaOrSpaceSeparated = !1, t.mustUseProperty = !1, t.defined = !1
    }, 9940: (e, t, n) => {
        "use strict";
        var r = n(7529), i = n(9607);
        e.exports = function (e) {
            var t, n, a = e.length, o = [], s = [], l = -1;
            for (; ++l < a;) t = e[l], o.push(t.property), s.push(t.normal), n = t.space;
            return new i(r.apply(null, o), r.apply(null, s), n)
        }
    }, 9607: e => {
        "use strict";
        e.exports = n;
        var t = n.prototype;

        function n(e, t, n) {
            this.property = e, this.normal = t, n && (this.space = n)
        }

        t.space = null, t.normal = {}, t.property = {}
    }, 7e3: (e, t) => {
        "use strict";
        var n = 0;

        function r() {
            return Math.pow(2, ++n)
        }

        t.boolean = r(), t.booleanish = r(), t.overloadedBoolean = r(), t.number = r(), t.spaceSeparated = r(), t.commaSeparated = r(), t.commaOrSpaceSeparated = r()
    }, 8289: (e, t, n) => {
        "use strict";
        var r = n(7596);
        e.exports = r({
            space: "xlink",
            transform: function (e, t) {
                return "xlink:" + t.slice(5).toLowerCase()
            },
            properties: {
                xLinkActuate: null,
                xLinkArcRole: null,
                xLinkHref: null,
                xLinkRole: null,
                xLinkShow: null,
                xLinkTitle: null,
                xLinkType: null
            }
        })
    }, 5812: (e, t, n) => {
        "use strict";
        var r = n(7596);
        e.exports = r({
            space: "xml", transform: function (e, t) {
                return "xml:" + t.slice(3).toLowerCase()
            }, properties: {xmlLang: null, xmlBase: null, xmlSpace: null}
        })
    }, 4397: (e, t, n) => {
        "use strict";
        var r = n(7596), i = n(855);
        e.exports = r({
            space: "xmlns",
            attributes: {xmlnsxlink: "xmlns:xlink"},
            transform: i,
            properties: {xmlns: null, xmlnsXLink: null}
        })
    }, 6632: e => {
        "use strict";
        e.exports = function (e) {
            return e.toLowerCase()
        }
    }, 1218: (e, t, n) => {
        "use strict";
        var r = n(9940), i = n(8289), a = n(5812), o = n(4397), s = n(7716), l = n(5789);
        e.exports = r([a, i, o, s, l])
    }, 6464: e => {
        "use strict";
        var t, n = "";
        e.exports = function (e, r) {
            if ("string" != typeof e) throw new TypeError("expected a string");
            if (1 === r) return e;
            if (2 === r) return e + e;
            var i = e.length * r;
            if (t !== e || void 0 === t) t = e, n = ""; else if (n.length >= i) return n.substr(0, i);
            for (; i > n.length && r > 1;) 1 & r && (n += e), r >>= 1, e += e;
            return n = (n += e).substr(0, i)
        }
    }, 6582: (e, t) => {
        "use strict";
        t.P = function (e) {
            return e.join(" ").trim()
        };
        var n = /[ \t\n\r\f]+/g
    }, 78: e => {
        "use strict";
        e.exports = function (e, t, n) {
            return function () {
                var r = n || this, i = r[e];
                return r[e] = !t, a;

                function a() {
                    r[e] = i
                }
            }
        }
    }, 832: e => {
        "use strict";
        e.exports = JSON.parse('["cent","copy","divide","gt","lt","not","para","times"]')
    }, 4860: (e, t, n) => {
        "use strict";
        var r = n(5848), i = n(6588), a = n(9480), o = n(6195), s = n(7961), l = n(832);
        e.exports = d, d.escape = function (e) {
            return d(e, {escapeOnly: !0, useNamedReferences: !0})
        };
        var c = {}.hasOwnProperty, h = function () {
                var e, t = {};
                for (e in r) t[r[e]] = e;
                return t
            }(), u = g(['"', "'", "<", ">", "&", "`"]), f = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
            p = /[\x01-\t\x0B\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g;

        function d(e, t) {
            var n = t || {}, r = n.subset, a = r ? g(r) : u, o = n.escapeOnly, d = n.omitOptionalSemicolons;
            return e = e.replace(a, M), r || o ? e : e.replace(f, (function (e, t, n) {
                return m(1024 * (e.charCodeAt(0) - 55296) + e.charCodeAt(1) - 56320 + 65536, n.charCodeAt(t + 2), d)
            })).replace(p, M);

            function M(e, t, r) {
                return function (e, t, n) {
                    var r, a, o, u, f = n.useShortestReferences, p = n.omitOptionalSemicolons;
                    (f || n.useNamedReferences) && c.call(h, e) && (r = function (e, t, n, r) {
                        var a = "&" + e;
                        if (n && c.call(i, e) && -1 === l.indexOf(e) && (!r || t && 61 !== t && !s(t))) return a;
                        return a + ";"
                    }(h[e], t, p, n.attribute));
                    !f && r || (o = m(a = e.charCodeAt(0), t, p), f && (u = v(a, t, p)).length < o.length && (o = u));
                    if (r && (!f || r.length < o.length)) return r;
                    return o
                }(e, r.charCodeAt(t + 1), n)
            }
        }

        function m(e, t, n) {
            var r = "&#x" + e.toString(16).toUpperCase();
            return n && t && !a(t) ? r : r + ";"
        }

        function v(e, t, n) {
            var r = "&#" + String(e);
            return n && t && !o(t) ? r : r + ";"
        }

        function g(e) {
            return new RegExp("[" + e.join("") + "]", "g")
        }
    }, 7257: e => {
        "use strict";
        e.exports = function (e) {
            var t = String(e), n = t.length;
            for (; "\n" === t.charAt(--n);) ;
            return t.slice(0, n + 1)
        }
    }, 2745: (e, t) => {
        (t = e.exports = function (e) {
            return e.replace(/^\s*|\s*$/g, "")
        }).left = function (e) {
            return e.replace(/^\s*/, "")
        }, t.right = function (e) {
            return e.replace(/\s*$/, "")
        }
    }, 3278: (e, t, n) => {
        "use strict";
        var r = n(7529), i = n(5717);
        e.exports = function (e) {
            var t, n, a;
            for (n in i(s, e), i(o, s), t = s.prototype) (a = t[n]) && "object" == typeof a && (t[n] = "concat" in a ? a.concat() : r(a));
            return s;

            function o(t) {
                return e.apply(this, t)
            }

            function s() {
                return this instanceof s ? e.apply(this, arguments) : new o(arguments)
            }
        }
    }, 914: e => {
        "use strict";
        e.exports = function (e, t, n) {
            var r;
            null != n || "object" == typeof t && !Array.isArray(t) || (n = t, t = {});
            r = Object.assign({type: String(e)}, t), Array.isArray(n) ? r.children = n : null != n && (r.value = String(n));
            return r
        }
    }, 1744: e => {
        "use strict";

        function t(e) {
            return e && "object" == typeof e ? e : {}
        }

        e.exports = function (e) {
            var n = t(t(e).position), r = t(n.start), i = t(n.end);
            return !(r.line && r.column && i.line && i.column)
        }
    }, 8145: e => {
        "use strict";

        function t(e) {
            if ("string" == typeof e) return function (e) {
                return t;

                function t(t) {
                    return Boolean(t && t.type === e)
                }
            }(e);
            if (null == e) return i;
            if ("object" == typeof e) return ("length" in e ? r : n)(e);
            if ("function" == typeof e) return e;
            throw new Error("Expected function, string, or object as test")
        }

        function n(e) {
            return function (t) {
                var n;
                for (n in e) if (t[n] !== e[n]) return !1;
                return !0
            }
        }

        function r(e) {
            var n = function (e) {
                for (var n = [], r = e.length, i = -1; ++i < r;) n[i] = t(e[i]);
                return n
            }(e), r = n.length;
            return function () {
                var e = -1;
                for (; ++e < r;) if (n[e].apply(this, arguments)) return !0;
                return !1
            }
        }

        function i() {
            return !0
        }

        e.exports = t
    }, 7361: e => {
        "use strict";
        var t = i("start"), n = i("end");

        function r(e) {
            return {start: t(e), end: n(e)}
        }

        function i(e) {
            return t.displayName = e, t;

            function t(t) {
                var n = t && t.position && t.position[e] || {};
                return {line: n.line || null, column: n.column || null, offset: isNaN(n.offset) ? null : n.offset}
            }
        }

        e.exports = r, r.start = t, r.end = n
    }, 3183: (e, t, n) => {
        "use strict";
        var r = n(2854);

        function i(e) {
            delete e.position
        }

        function a(e) {
            e.position = void 0
        }

        e.exports = function (e, t) {
            return r(e, t ? i : a), e
        }
    }, 5432: e => {
        "use strict";
        var t = {}.hasOwnProperty;

        function n(e) {
            return e && "object" == typeof e || (e = {}), i(e.line) + ":" + i(e.column)
        }

        function r(e) {
            return e && "object" == typeof e || (e = {}), n(e.start) + "-" + n(e.end)
        }

        function i(e) {
            return e && "number" == typeof e ? e : 1
        }

        e.exports = function (e) {
            if (!e || "object" != typeof e) return "";
            if (t.call(e, "position") || t.call(e, "type")) return r(e.position);
            if (t.call(e, "start") || t.call(e, "end")) return r(e);
            if (t.call(e, "line") || t.call(e, "column")) return n(e);
            return ""
        }
    }, 6750: e => {
        e.exports = function (e) {
            return e
        }
    }, 9294: (e, t, n) => {
        "use strict";
        e.exports = s;
        var r = n(8145), i = n(6750), a = "skip", o = !1;

        function s(e, t, n, s) {
            var f;

            function p(e, r, c) {
                var d, m = u(e) ? e : {};
                return h(m.type) && (d = h(m.tagName) ? m.tagName : h(m.name) ? m.name : void 0, v.displayName = "node (" + i(m.type + (d ? "<" + d + ">" : "")) + ")"), v;

                function v() {
                    var i, h = [];
                    return (t && !f(e, r, c[c.length - 1] || null) || (h = l(n(e, c)))[0] !== o) && e.children && h[0] !== a && (i = l(function (e, t) {
                        var n, r = -1, i = s ? -1 : 1, a = (s ? e.length : r) + i;
                        for (; a > r && a < e.length;) {
                            if ((n = p(e[a], a, t)())[0] === o) return n;
                            a = "number" == typeof n[1] ? n[1] : a + i
                        }
                    }(e.children, c.concat(e))))[0] === o ? i : h
                }
            }

            c(t) && !c(n) && (s = n, n = t, t = null), f = r(t), p(e, null, [])()
        }

        function l(e) {
            return u(e) && "length" in e ? e : "number" == typeof e ? [true, e] : [e]
        }

        function c(e) {
            return "function" == typeof e
        }

        function h(e) {
            return "string" == typeof e
        }

        function u(e) {
            return "object" == typeof e && null !== e
        }

        s.CONTINUE = true, s.SKIP = a, s.EXIT = o
    }, 2854: (e, t, n) => {
        "use strict";
        e.exports = s;
        var r = n(9294), i = r.CONTINUE, a = r.SKIP, o = r.EXIT;

        function s(e, t, n, i) {
            "function" == typeof t && "function" != typeof n && (i = n, n = t, t = null), r(e, t, (function (e, t) {
                var r = t[t.length - 1], i = r ? r.children.indexOf(e) : null;
                return n(e, i, r)
            }), i)
        }

        s.CONTINUE = i, s.SKIP = a, s.EXIT = o
    }, 4787: e => {
        "use strict";
        e.exports = function (e) {
            var t = String(e), n = [], r = /\r?\n|\r/g;
            for (; r.exec(t);) n.push(r.lastIndex);
            return n.push(t.length + 1), {
                toPoint: i, toPosition: i, toOffset: function (e) {
                    var t, r = e && e.line, i = e && e.column;
                    isNaN(r) || isNaN(i) || !(r - 1 in n) || (t = (n[r - 2] || 0) + i - 1 || 0);
                    return t > -1 && t < n[n.length - 1] ? t : -1
                }
            };

            function i(e) {
                var t = -1;
                if (e > -1 && e < n[n.length - 1]) for (; ++t < n.length;) if (n[t] > e) return {
                    line: t + 1,
                    column: e - (n[t - 1] || 0) + 1,
                    offset: e
                };
                return {}
            }
        }
    }, 734: (e, t, n) => {
        "use strict";
        var r = n(5432);

        function i() {
        }

        e.exports = o, i.prototype = Error.prototype, o.prototype = new i;
        var a = o.prototype;

        function o(e, t, n) {
            var i, a, o;
            "string" == typeof t && (n = t, t = null), i = function (e) {
                var t, n = [null, null];
                "string" == typeof e && (-1 === (t = e.indexOf(":")) ? n[1] = e : (n[0] = e.slice(0, t), n[1] = e.slice(t + 1)));
                return n
            }(n), a = r(t) || "1:1", o = {
                start: {line: null, column: null},
                end: {line: null, column: null}
            }, t && t.position && (t = t.position), t && (t.start ? (o = t, t = t.start) : o.start = t), e.stack && (this.stack = e.stack, e = e.message), this.message = e, this.name = a, this.reason = e, this.line = t ? t.line : null, this.column = t ? t.column : null, this.location = o, this.source = i[0], this.ruleId = i[1]
        }

        a.file = "", a.name = "", a.reason = "", a.message = "", a.stack = "", a.fatal = null, a.column = null, a.line = null
    }, 939: (e, t, n) => {
        "use strict";
        e.exports = n(5905)
    }, 5442: (e, t, n) => {
        "use strict";
        var r = n(8064), i = n(4228), a = n(8738);
        e.exports = l;
        var o = {}.hasOwnProperty, s = ["history", "path", "basename", "stem", "extname", "dirname"];

        function l(e) {
            var t, n;
            if (e) {
                if ("string" == typeof e || a(e)) e = {contents: e}; else if ("message" in e && "messages" in e) return e
            } else e = {};
            if (!(this instanceof l)) return new l(e);
            for (this.data = {}, this.messages = [], this.history = [], this.cwd = i.cwd(), n = -1; ++n < s.length;) t = s[n], o.call(e, t) && (this[t] = e[t]);
            for (t in e) s.indexOf(t) < 0 && (this[t] = e[t])
        }

        function c(e, t) {
            if (e && e.indexOf(r.sep) > -1) throw new Error("`" + t + "` cannot be a path: did not expect `" + r.sep + "`")
        }

        function h(e, t) {
            if (!e) throw new Error("`" + t + "` cannot be empty")
        }

        function u(e, t) {
            if (!e) throw new Error("Setting `" + t + "` requires `path` to be set too")
        }

        l.prototype.toString = function (e) {
            return (this.contents || "").toString(e)
        }, Object.defineProperty(l.prototype, "path", {
            get: function () {
                return this.history[this.history.length - 1]
            }, set: function (e) {
                h(e, "path"), this.path !== e && this.history.push(e)
            }
        }), Object.defineProperty(l.prototype, "dirname", {
            get: function () {
                return "string" == typeof this.path ? r.dirname(this.path) : void 0
            }, set: function (e) {
                u(this.path, "dirname"), this.path = r.join(e || "", this.basename)
            }
        }), Object.defineProperty(l.prototype, "basename", {
            get: function () {
                return "string" == typeof this.path ? r.basename(this.path) : void 0
            }, set: function (e) {
                h(e, "basename"), c(e, "basename"), this.path = r.join(this.dirname || "", e)
            }
        }), Object.defineProperty(l.prototype, "extname", {
            get: function () {
                return "string" == typeof this.path ? r.extname(this.path) : void 0
            }, set: function (e) {
                if (c(e, "extname"), u(this.path, "extname"), e) {
                    if (46 !== e.charCodeAt(0)) throw new Error("`extname` must start with `.`");
                    if (e.indexOf(".", 1) > -1) throw new Error("`extname` cannot contain multiple dots")
                }
                this.path = r.join(this.dirname, this.stem + (e || ""))
            }
        }), Object.defineProperty(l.prototype, "stem", {
            get: function () {
                return "string" == typeof this.path ? r.basename(this.path, this.extname) : void 0
            }, set: function (e) {
                h(e, "stem"), c(e, "stem"), this.path = r.join(this.dirname || "", e + (this.extname || ""))
            }
        })
    }, 5905: (e, t, n) => {
        "use strict";
        var r = n(734), i = n(5442);
        e.exports = i, i.prototype.message = function (e, t, n) {
            var i = new r(e, t, n);
            this.path && (i.name = this.path + ":" + i.name, i.file = this.path);
            return i.fatal = !1, this.messages.push(i), i
        }, i.prototype.info = function () {
            var e = this.message.apply(this, arguments);
            return e.fatal = null, e
        }, i.prototype.fail = function () {
            var e = this.message.apply(this, arguments);
            throw e.fatal = !0, e
        }
    }, 8064: (e, t) => {
        "use strict";

        function n(e) {
            var t, n;
            return r(e), t = 47 === e.charCodeAt(0), (n = function (e, t) {
                var n, r, i = "", a = 0, o = -1, s = 0, l = -1;
                for (; ++l <= e.length;) {
                    if (l < e.length) n = e.charCodeAt(l); else {
                        if (47 === n) break;
                        n = 47
                    }
                    if (47 === n) {
                        if (o === l - 1 || 1 === s) ; else if (o !== l - 1 && 2 === s) {
                            if (i.length < 2 || 2 !== a || 46 !== i.charCodeAt(i.length - 1) || 46 !== i.charCodeAt(i.length - 2)) if (i.length > 2) {
                                if ((r = i.lastIndexOf("/")) !== i.length - 1) {
                                    r < 0 ? (i = "", a = 0) : a = (i = i.slice(0, r)).length - 1 - i.lastIndexOf("/"), o = l, s = 0;
                                    continue
                                }
                            } else if (i.length) {
                                i = "", a = 0, o = l, s = 0;
                                continue
                            }
                            t && (i = i.length ? i + "/.." : "..", a = 2)
                        } else i.length ? i += "/" + e.slice(o + 1, l) : i = e.slice(o + 1, l), a = l - o - 1;
                        o = l, s = 0
                    } else 46 === n && s > -1 ? s++ : s = -1
                }
                return i
            }(e, !t)).length || t || (n = "."), n.length && 47 === e.charCodeAt(e.length - 1) && (n += "/"), t ? "/" + n : n
        }

        function r(e) {
            if ("string" != typeof e) throw new TypeError("Path must be a string. Received " + JSON.stringify(e))
        }

        t.basename = function (e, t) {
            var n, i, a, o, s = 0, l = -1;
            if (void 0 !== t && "string" != typeof t) throw new TypeError('"ext" argument must be a string');
            if (r(e), n = e.length, void 0 === t || !t.length || t.length > e.length) {
                for (; n--;) if (47 === e.charCodeAt(n)) {
                    if (a) {
                        s = n + 1;
                        break
                    }
                } else l < 0 && (a = !0, l = n + 1);
                return l < 0 ? "" : e.slice(s, l)
            }
            if (t === e) return "";
            i = -1, o = t.length - 1;
            for (; n--;) if (47 === e.charCodeAt(n)) {
                if (a) {
                    s = n + 1;
                    break
                }
            } else i < 0 && (a = !0, i = n + 1), o > -1 && (e.charCodeAt(n) === t.charCodeAt(o--) ? o < 0 && (l = n) : (o = -1, l = i));
            s === l ? l = i : l < 0 && (l = e.length);
            return e.slice(s, l)
        }, t.dirname = function (e) {
            var t, n, i;
            if (r(e), !e.length) return ".";
            t = -1, i = e.length;
            for (; --i;) if (47 === e.charCodeAt(i)) {
                if (n) {
                    t = i;
                    break
                }
            } else n || (n = !0);
            return t < 0 ? 47 === e.charCodeAt(0) ? "/" : "." : 1 === t && 47 === e.charCodeAt(0) ? "//" : e.slice(0, t)
        }, t.extname = function (e) {
            var t, n, i, a = -1, o = 0, s = -1, l = 0;
            r(e), i = e.length;
            for (; i--;) if (47 !== (n = e.charCodeAt(i))) s < 0 && (t = !0, s = i + 1), 46 === n ? a < 0 ? a = i : 1 !== l && (l = 1) : a > -1 && (l = -1); else if (t) {
                o = i + 1;
                break
            }
            if (a < 0 || s < 0 || 0 === l || 1 === l && a === s - 1 && a === o + 1) return "";
            return e.slice(a, s)
        }, t.join = function () {
            var e, t = -1;
            for (; ++t < arguments.length;) r(arguments[t]), arguments[t] && (e = void 0 === e ? arguments[t] : e + "/" + arguments[t]);
            return void 0 === e ? "." : n(e)
        }, t.sep = "/"
    }, 4228: (e, t) => {
        "use strict";
        t.cwd = function () {
            return "/"
        }
    }, 7529: e => {
        e.exports = function () {
            for (var e = {}, n = 0; n < arguments.length; n++) {
                var r = arguments[n];
                for (var i in r) t.call(r, i) && (e[i] = r[i])
            }
            return e
        };
        var t = Object.prototype.hasOwnProperty
    }, 5572: (e, t, n) => {
        "use strict";
        var r = n(3278), i = n(7529), a = n(4186);

        function o(e) {
            var t = this.data("settings"), n = r(a);
            n.prototype.options = i(n.prototype.options, t, e), this.Parser = n
        }

        e.exports = o, o.Parser = a
    }, 8204: e => {
        "use strict";
        e.exports = ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "legend", "li", "link", "main", "menu", "menuitem", "meta", "nav", "noframes", "ol", "optgroup", "option", "p", "param", "pre", "section", "source", "title", "summary", "table", "tbody", "td", "tfoot", "th", "thead", "title", "tr", "track", "ul"]
    }, 1819: (e, t, n) => {
        "use strict";
        var r = n(7529), i = n(7574);
        e.exports = function (e) {
            return n.raw = function (e, n, o) {
                return i(e, r(o, {position: t(n), warning: a}))
            }, n;

            function t(t) {
                for (var n = e.offset, r = t.line, i = []; ++r && r in n;) i.push((n[r] || 0) + 1);
                return {start: t, indent: i}
            }

            function n(n, r, o) {
                i(n, {position: t(r), warning: a, text: o, reference: o, textContext: e, referenceContext: e})
            }

            function a(t, n, r) {
                3 !== r && e.file.message(t, n)
            }
        }
    }, 3114: (e, t, n) => {
        "use strict";
        e.exports = {position: !0, gfm: !0, commonmark: !1, pedantic: !1, blocks: n(8204)}
    }, 563: e => {
        "use strict";
        e.exports = function (e, t) {
            var n = e.indexOf("\n", t);
            for (; n > t && " " === e.charAt(n - 1);) n--;
            return n
        }
    }, 6497: e => {
        "use strict";
        e.exports = function (e, t) {
            return e.indexOf("`", t)
        }
    }, 3723: e => {
        "use strict";
        e.exports = function (e, t) {
            return e.indexOf("~~", t)
        }
    }, 973: (e, t, n) => {
        "use strict";
        var r = n(6195), i = n(6260);

        function a(e) {
            return r(e) || i(e) || 43 === e || 45 === e || 46 === e || 95 === e
        }

        e.exports = function e(t, n) {
            var r, i;
            if (!this.options.gfm) return -1;
            if (-1 === (r = t.indexOf("@", n))) return -1;
            if ((i = r) === n || !a(t.charCodeAt(i - 1))) return e.call(this, t, r + 1);
            for (; i > n && a(t.charCodeAt(i - 1));) i--;
            return i
        }
    }, 2411: e => {
        "use strict";
        e.exports = function (e, t) {
            var n = e.indexOf("*", t), r = e.indexOf("_", t);
            if (-1 === r) return n;
            if (-1 === n) return r;
            return r < n ? r : n
        }
    }, 4681: e => {
        "use strict";
        e.exports = function (e, t) {
            return e.indexOf("\\", t)
        }
    }, 633: e => {
        "use strict";
        e.exports = function (e, t) {
            var n = e.indexOf("[", t), r = e.indexOf("![", t);
            if (-1 === r) return n;
            return n < r ? n : r
        }
    }, 1016: e => {
        "use strict";
        e.exports = function (e, t) {
            var n = e.indexOf("**", t), r = e.indexOf("__", t);
            if (-1 === r) return n;
            if (-1 === n) return r;
            return r < n ? r : n
        }
    }, 46: e => {
        "use strict";
        e.exports = function (e, t) {
            return e.indexOf("<", t)
        }
    }, 8637: e => {
        "use strict";
        e.exports = function (e, n) {
            var r, i, a, o = -1;
            if (!this.options.gfm) return o;
            i = t.length, r = -1;
            for (; ++r < i;) -1 !== (a = e.indexOf(t[r], n)) && (-1 === o || a < o) && (o = a);
            return o
        };
        var t = ["www.", "http://", "https://"]
    }, 4767: (e, t, n) => {
        "use strict";
        var r = n(7529), i = n(3183);
        e.exports = function () {
            var e, t = this, n = String(t.file), o = {line: 1, column: 1, offset: 0}, s = r(o);
            65279 === (n = n.replace(a, "\n")).charCodeAt(0) && (n = n.slice(1), s.column++, s.offset++);
            e = {
                type: "root",
                children: t.tokenizeBlock(n, s),
                position: {start: o, end: t.eof || r(o)}
            }, t.options.position || i(e, !0);
            return e
        };
        var a = /\r\n|\r/g
    }, 4186: (e, t, n) => {
        "use strict";
        var r = n(7529), i = n(78), a = n(4787), o = n(7678), s = n(1819), l = n(831);

        function c(e, t) {
            this.file = t, this.offset = {}, this.options = r(this.options), this.setOptions({}), this.inList = !1, this.inBlock = !1, this.inLink = !1, this.atStart = !0, this.toOffset = a(t).toOffset, this.unescape = o(this, "escape"), this.decode = s(this)
        }

        e.exports = c;
        var h = c.prototype;

        function u(e) {
            var t, n = [];
            for (t in e) n.push(t);
            return n
        }

        h.setOptions = n(5248), h.parse = n(4767), h.options = n(3114), h.exitStart = i("atStart", !0), h.enterList = i("inList", !1), h.enterLink = i("inLink", !1), h.enterBlock = i("inBlock", !1), h.interruptParagraph = [["thematicBreak"], ["list"], ["atxHeading"], ["fencedCode"], ["blockquote"], ["html"], ["setextHeading", {commonmark: !1}], ["definition", {commonmark: !1}]], h.interruptList = [["atxHeading", {pedantic: !1}], ["fencedCode", {pedantic: !1}], ["thematicBreak", {pedantic: !1}], ["definition", {commonmark: !1}]], h.interruptBlockquote = [["indentedCode", {commonmark: !0}], ["fencedCode", {commonmark: !0}], ["atxHeading", {commonmark: !0}], ["setextHeading", {commonmark: !0}], ["thematicBreak", {commonmark: !0}], ["html", {commonmark: !0}], ["list", {commonmark: !0}], ["definition", {commonmark: !1}]], h.blockTokenizers = {
            blankLine: n(9269),
            indentedCode: n(6167),
            fencedCode: n(1484),
            blockquote: n(8502),
            atxHeading: n(684),
            thematicBreak: n(8352),
            list: n(2866),
            setextHeading: n(1578),
            html: n(6494),
            definition: n(7742),
            table: n(308),
            paragraph: n(7006)
        }, h.inlineTokenizers = {
            escape: n(1796),
            autoLink: n(2768),
            url: n(26),
            email: n(4937),
            html: n(5810),
            link: n(7786),
            reference: n(977),
            strong: n(1248),
            emphasis: n(3391),
            deletion: n(5702),
            code: n(1243),
            break: n(4245),
            text: n(8825)
        }, h.blockMethods = u(h.blockTokenizers), h.inlineMethods = u(h.inlineTokenizers), h.tokenizeBlock = l("block"), h.tokenizeInline = l("inline"), h.tokenizeFactory = l
    }, 5248: (e, t, n) => {
        "use strict";
        var r = n(7529), i = n(2123), a = n(3114);
        e.exports = function (e) {
            var t, n, o = this, s = o.options;
            if (null == e) e = {}; else {
                if ("object" != typeof e) throw new Error("Invalid value `" + e + "` for setting `options`");
                e = r(e)
            }
            for (t in a) {
                if (null == (n = e[t]) && (n = s[t]), "blocks" !== t && "boolean" != typeof n || "blocks" === t && "object" != typeof n) throw new Error("Invalid value `" + n + "` for setting `options." + t + "`");
                e[t] = n
            }
            return o.options = e, o.escape = i(e), o
        }
    }, 2768: (e, t, n) => {
        "use strict";
        var r = n(2139), i = n(7574), a = n(46);
        e.exports = l, l.locator = a, l.notInLink = !0;
        var o = "mailto:", s = o.length;

        function l(e, t, n) {
            var a, l, c, h, u, f = this, p = "", d = t.length, m = 0, v = "", g = !1, M = "";
            if ("<" === t.charAt(0)) {
                for (m++, p = "<"; m < d && (a = t.charAt(m), !(r(a) || ">" === a || "@" === a || ":" === a && "/" === t.charAt(m + 1)));) v += a, m++;
                if (v) {
                    if (M += v, v = "", M += a = t.charAt(m), m++, "@" === a) g = !0; else {
                        if (":" !== a || "/" !== t.charAt(m + 1)) return;
                        M += "/", m++
                    }
                    for (; m < d && (a = t.charAt(m), !r(a) && ">" !== a);) v += a, m++;
                    if (a = t.charAt(m), v && ">" === a) return !!n || (c = M += v, p += M + a, (l = e.now()).column++, l.offset++, g && (M.slice(0, s).toLowerCase() === o ? (c = c.slice(s), l.column += s, l.offset += s) : M = o + M), h = f.inlineTokenizers, f.inlineTokenizers = {text: h.text}, u = f.enterLink(), c = f.tokenizeInline(c, l), f.inlineTokenizers = h, u(), e(p)({
                        type: "link",
                        title: null,
                        url: i(M, {nonTerminated: !1}),
                        children: c
                    }))
                }
            }
        }
    }, 9269: e => {
        "use strict";
        var t = /^[ \t]*(\n|$)/;
        e.exports = function (e, n, r) {
            var i, a = "", o = 0, s = n.length;
            for (; o < s && null != (i = t.exec(n.slice(o)));) o += i[0].length, a += i[0];
            if ("" === a) return;
            if (r) return !0;
            e(a)
        }
    }, 8502: (e, t, n) => {
        "use strict";
        var r = n(2745), i = n(7901);
        e.exports = function (e, t, n) {
            var a, o, s, l, c, h, u, f, p, d = this, m = d.offset, v = d.blockTokenizers, g = d.interruptBlockquote,
                M = e.now(), y = M.line, b = t.length, w = [], k = [], x = [], C = 0;
            for (; C < b && (" " === (o = t.charAt(C)) || "\t" === o);) C++;
            if (">" !== t.charAt(C)) return;
            if (n) return !0;
            C = 0;
            var A = null, L = !1;
            for (; C < b;) {
                for (l = t.indexOf("\n", C), u = C, f = !1, -1 === l && (l = b); C < b && (" " === (o = t.charAt(C)) || "\t" === o);) C++;
                if (">" === t.charAt(C) ? (C++, f = !0, " " === t.charAt(C) && C++) : C = u, c = t.slice(C, l), !f && !r(c)) {
                    C = u;
                    break
                }
                if (!f && (s = t.slice(C), i(g, v, d, [e, s, !0]))) break;
                if (0 === u) {
                    var E = c.match(/^\[!([^\]]+)\]([+\-]?)(?:\s|$)/);
                    if (E) {
                        let e = E[1], t = e, n = "", r = e.indexOf("|");
                        -1 !== r && (t = e.substr(0, r), n = e.substr(r + 1)), A = {
                            type: t.trim().toLowerCase().replace(/\s+/g, "-"),
                            fold: E[2],
                            data: n
                        };
                        var S = E[0].length;
                        C += S, (c = c.substr(S)).trim() && (L = !0)
                    }
                }
                h = u === C ? c : t.slice(u, l), x.push(C - u), w.push(h), k.push(c), C = l + 1
            }
            C = -1, b = x.length, a = e(w.join("\n"));
            for (; ++C < b;) m[y] = (m[y] || 0) + x[C], y++;
            return p = d.enterBlock(), d.options.breakOnce = L, k = d.tokenizeBlock(k.join("\n"), M), d.options.breakOnce = !1, p(), a({
                type: "blockquote",
                children: k,
                callout: A
            })
        }
    }, 4245: (e, t, n) => {
        "use strict";
        var r = n(563);
        e.exports = i, i.locator = r;

        function i(e, t, n) {
            for (var r, i = t.length, a = -1, o = ""; ++a < i;) {
                if ("\n" === (r = t.charAt(a))) {
                    if (a < 2) return;
                    return !!n || e(o += r)({type: "break"})
                }
                if (" " !== r) return;
                o += r
            }
        }
    }, 1484: e => {
        "use strict";
        e.exports = function (e, i, a) {
            var o, s, l, c, h, u, f, p, d, m, v, g, M, y = this, b = y.options.gfm, w = i.length + 1, k = 0, x = "";
            if (!b) return;
            for (; k < w && ((l = i.charAt(k)) === r || l === n);) x += l, k++;
            if (g = k, "~" !== (l = i.charAt(k)) && "`" !== l) return;
            k++, s = l, o = 1, x += l;
            for (; k < w && (l = i.charAt(k)) === s;) x += l, o++, k++;
            if (o < 3) return;
            for (; k < w && ((l = i.charAt(k)) === r || l === n);) x += l, k++;
            c = "", f = "";
            for (; k < w && (l = i.charAt(k)) !== t && ("`" !== s || l !== s);) l === r || l === n ? f += l : (c += f + l, f = ""), k++;
            if ((l = i.charAt(k)) && l !== t) return;
            if (a) return !0;
            (M = e.now()).column += x.length, M.offset += x.length, x += c, c = y.decode.raw(y.unescape(c), M), f && (x += f);
            f = "", m = "", v = "", p = "", d = "";
            var C = !0;
            for (; k < w;) if (l = i.charAt(k), p += m, d += v, m = "", v = "", l === t) {
                for (C ? (x += l, C = !1) : (m += l, v += l), f = "", k++; k < w && (l = i.charAt(k)) === r;) f += l, k++;
                if (m += f, v += f.slice(g), !(f.length >= 4)) {
                    for (f = ""; k < w && (l = i.charAt(k)) === s;) f += l, k++;
                    if (m += f, v += f, !(f.length < o)) {
                        for (f = ""; k < w && ((l = i.charAt(k)) === r || l === n);) m += l, v += l, k++;
                        if (!l || l === t) break
                    }
                }
            } else p += l, v += l, k++;
            x += p + m, k = -1, w = c.length;
            for (; ++k < w;) if ((l = c.charAt(k)) === r || l === n) h || (h = c.slice(0, k)); else if (h) {
                u = c.slice(k);
                break
            }
            return e(x)({type: "code", lang: h || c || null, meta: u || null, value: d})
        };
        var t = "\n", n = "\t", r = " "
    }, 6167: (e, t, n) => {
        "use strict";
        var r = n(6464), i = n(7257);
        e.exports = function (e, t, n) {
            var r, o, s, l = -1, c = t.length, h = "", u = "", f = "", p = "";
            for (; ++l < c;) if (r = t.charAt(l), s) if (s = !1, h += f, u += p, f = "", p = "", "\n" === r) f = r, p = r; else for (h += r, u += r; ++l < c;) {
                if (!(r = t.charAt(l)) || "\n" === r) {
                    p = r, f = r;
                    break
                }
                h += r, u += r
            } else if (" " === r && t.charAt(l + 1) === r && t.charAt(l + 2) === r && t.charAt(l + 3) === r) f += a, l += 3, s = !0; else if ("\t" === r) f += r, s = !0; else {
                for (o = ""; "\t" === r || " " === r;) o += r, r = t.charAt(++l);
                if ("\n" !== r) break;
                f += o + r, p += r
            }
            if (u) return !!n || e(h)({type: "code", lang: null, meta: null, value: i(u)})
        };
        var a = r(" ", 4)
    }, 1243: (e, t, n) => {
        "use strict";
        var r = n(6497);
        e.exports = i, i.locator = r;

        function i(e, t, n) {
            for (var r, i, a, o, s, l, c = t.length, h = 0; h < c && 96 === t.charCodeAt(h);) h++;
            if (0 !== h && h !== c) {
                for (r = h, s = t.charCodeAt(h); h < c;) {
                    if (o = s, s = t.charCodeAt(h + 1), 96 === o) {
                        if (void 0 === i && (i = h), a = h + 1, 96 !== s && a - i === r) {
                            l = !0;
                            break
                        }
                    } else void 0 !== i && (i = void 0, a = void 0);
                    h++
                }
                if (l) {
                    if (n) return !0;
                    if (h = r, c = i, o = t.charCodeAt(h), s = t.charCodeAt(c - 1), l = !1, c - h > 2 && (32 === o || 10 === o) && (32 === s || 10 === s)) {
                        for (h++, c--; h < c;) {
                            if (32 !== (o = t.charCodeAt(h)) && 10 !== o) {
                                l = !0;
                                break
                            }
                            h++
                        }
                        !0 === l && (r++, i--)
                    }
                    return e(t.slice(0, a))({type: "inlineCode", value: t.slice(r, i)})
                }
            }
        }
    }, 7742: (e, t, n) => {
        "use strict";
        var r = n(2139), i = n(6749);
        e.exports = function (e, t, n) {
            var r, u, f, p, d, m, v, g, M = this, y = M.options.commonmark, b = 0, w = t.length, k = "";
            for (; b < w && ((p = t.charAt(b)) === s || p === o);) k += p, b++;
            if ("[" !== (p = t.charAt(b))) return;
            b++, k += p, f = "";
            for (; b < w && (p = t.charAt(b)) !== l;) "\\" === p && (f += p, b++, p = t.charAt(b)), f += p, b++;
            if (!f || t.charAt(b) !== l || ":" !== t.charAt(b + 1)) return;
            m = f, b = (k += f + l + ":").length, f = "";
            for (; b < w && ((p = t.charAt(b)) === o || p === s || p === a);) k += p, b++;
            if (p = t.charAt(b), f = "", r = k, "<" === p) {
                for (b++; b < w && c(p = t.charAt(b));) f += p, b++;
                if ((p = t.charAt(b)) === c.delimiter) k += "<" + f + p, b++; else {
                    if (y) return;
                    b -= f.length + 1, f = ""
                }
            }
            if (!f) {
                for (; b < w && h(p = t.charAt(b));) f += p, b++;
                k += f
            }
            if (!f) return;
            v = f, f = "";
            for (; b < w && ((p = t.charAt(b)) === o || p === s || p === a);) f += p, b++;
            p = t.charAt(b), d = null, '"' === p ? d = '"' : "'" === p ? d = "'" : "(" === p && (d = ")");
            if (d) {
                if (!f) return;
                for (b = (k += f + p).length, f = ""; b < w && (p = t.charAt(b)) !== d;) {
                    if (p === a) {
                        if (b++, (p = t.charAt(b)) === a || p === d) return;
                        f += a
                    }
                    f += p, b++
                }
                if ((p = t.charAt(b)) !== d) return;
                u = k, k += f + p, b++, g = f, f = ""
            } else f = "", b = k.length;
            for (; b < w && ((p = t.charAt(b)) === o || p === s);) k += p, b++;
            if (!(p = t.charAt(b)) || p === a) return !!n || (r = e(r).test().end, v = M.decode.raw(M.unescape(v), r, {nonTerminated: !1}), g && (u = e(u).test().end, g = M.decode.raw(M.unescape(g), u)), e(k)({
                type: "definition",
                identifier: i(m),
                label: m,
                title: g || null,
                url: v
            }))
        };
        var a = "\n", o = "\t", s = " ", l = "]";

        function c(e) {
            return ">" !== e && "[" !== e && e !== l
        }

        function h(e) {
            return "[" !== e && e !== l && !r(e)
        }

        c.delimiter = ">"
    }, 5702: (e, t, n) => {
        "use strict";
        var r = n(2139), i = n(3723);
        e.exports = o, o.locator = i;
        var a = "~";

        function o(e, t, n) {
            var i, o, s, l = "", c = "", h = "", u = "";
            if (this.options.gfm && t.charAt(0) === a && t.charAt(1) === a && !r(t.charAt(2))) for (i = 1, o = t.length, (s = e.now()).column += 2, s.offset += 2; ++i < o;) {
                if (!((l = t.charAt(i)) !== a || c !== a || h && r(h))) return !!n || e("~~" + u + "~~")({
                    type: "delete",
                    children: this.tokenizeInline(u, s)
                });
                u += c, h = c, c = l
            }
        }
    }, 4937: (e, t, n) => {
        "use strict";
        var r = n(7574), i = n(6195), a = n(6260), o = n(973);
        e.exports = s, s.locator = o, s.notInLink = !0;

        function s(e, t, n) {
            var o, s, l, c, h = this, u = h.options.gfm, f = h.inlineTokenizers, p = 0, d = t.length, m = -1;
            if (u) {
                for (o = t.charCodeAt(p); i(o) || a(o) || 43 === o || 45 === o || 46 === o || 95 === o;) o = t.charCodeAt(++p);
                if (0 !== p && 64 === o) {
                    for (p++; p < d && (o = t.charCodeAt(p), i(o) || a(o) || 45 === o || 46 === o || 95 === o);) p++, -1 === m && 46 === o && (m = p);
                    if (-1 !== m && m !== p && 45 !== o && 95 !== o) return 46 === o && p--, s = t.slice(0, p), !!n || (c = h.enterLink(), h.inlineTokenizers = {text: f.text}, l = h.tokenizeInline(s, e.now()), h.inlineTokenizers = f, c(), e(s)({
                        type: "link",
                        title: null,
                        url: "mailto:" + r(s, {nonTerminated: !1}),
                        children: l
                    }))
                }
            }
        }
    }, 3391: (e, t, n) => {
        "use strict";
        var r = n(2745), i = n(3017), a = n(2139), o = n(2411);
        e.exports = s, s.locator = o;

        function s(e, t, n) {
            var o, s, l, c, h, u, f, p = 0, d = t.charAt(p);
            if (!("*" !== d && "_" !== d || (s = this.options.pedantic, h = d, l = d, u = t.length, p++, c = "", d = "", s && a(t.charAt(p))))) for (; p < u;) {
                if (f = d, !((d = t.charAt(p)) !== l || s && a(f))) {
                    if ((d = t.charAt(++p)) !== l) {
                        if (!r(c) || f === l) return;
                        if (!s && "_" === l && i(d)) {
                            c += l;
                            continue
                        }
                        return !!n || ((o = e.now()).column++, o.offset++, e(h + c + l)({
                            type: "emphasis",
                            children: this.tokenizeInline(c, o)
                        }))
                    }
                    c += l
                }
                s || "\\" !== d || (c += d, d = t.charAt(++p)), c += d, p++
            }
        }
    }, 1796: (e, t, n) => {
        "use strict";
        var r = n(4681);
        e.exports = i, i.locator = r;

        function i(e, t, n) {
            var r, i;
            if ("\\" === t.charAt(0) && (r = t.charAt(1), -1 !== this.escape.indexOf(r))) return !!n || (i = "\n" === r ? {type: "break"} : {
                type: "text",
                value: r
            }, e("\\" + r)(i))
        }
    }, 684: e => {
        "use strict";
        e.exports = function (e, i, a) {
            var o, s, l, c = this.options.pedantic, h = i.length + 1, u = -1, f = e.now(), p = "", d = "";
            for (; ++u < h;) {
                if ((o = i.charAt(u)) !== n && o !== t) {
                    u--;
                    break
                }
                p += o
            }
            l = 0;
            for (; ++u <= h;) {
                if ((o = i.charAt(u)) !== r) {
                    u--;
                    break
                }
                p += o, l++
            }
            if (l > 6) return;
            if (!l || !c && i.charAt(u + 1) === r) return;
            h = i.length + 1, s = "";
            for (; ++u < h;) {
                if ((o = i.charAt(u)) !== n && o !== t) {
                    u--;
                    break
                }
                s += o
            }
            if (!c && 0 === s.length && o && "\n" !== o) return;
            if (a) return !0;
            p += s, s = "", d = "";
            for (; ++u < h && (o = i.charAt(u)) && "\n" !== o;) if (o === n || o === t || o === r) {
                for (; o === n || o === t;) s += o, o = i.charAt(++u);
                if (c || !d || s || o !== r) {
                    for (; o === r;) s += o, o = i.charAt(++u);
                    for (; o === n || o === t;) s += o, o = i.charAt(++u);
                    u--
                } else d += o
            } else d += s + o, s = "";
            return f.column += p.length, f.offset += p.length, e(p += d + s)({
                type: "heading",
                depth: l,
                children: this.tokenizeInline(d, f)
            })
        };
        var t = "\t", n = " ", r = "#"
    }, 1578: e => {
        "use strict";
        e.exports = function (e, t, n) {
            var r, i, a, o, s, l = e.now(), c = t.length, h = -1, u = "";
            for (; ++h < c;) {
                if (" " !== (a = t.charAt(h)) || h >= 3) {
                    h--;
                    break
                }
                u += a
            }
            r = "", i = "";
            for (; ++h < c;) {
                if ("\n" === (a = t.charAt(h))) {
                    h--;
                    break
                }
                " " === a || "\t" === a ? i += a : (r += i + a, i = "")
            }
            if (l.column += u.length, l.offset += u.length, u += r + i, a = t.charAt(++h), o = t.charAt(++h), "\n" !== a || "=" !== o && "-" !== o) return;
            u += a, i = o, s = "=" === o ? 1 : 2;
            for (; ++h < c;) {
                if ((a = t.charAt(h)) !== o) {
                    if ("\n" !== a) return;
                    h--;
                    break
                }
                i += a
            }
            if (n) return !0;
            return e(u + i)({type: "heading", depth: s, children: this.tokenizeInline(r, l)})
        }
    }, 6494: (e, t, n) => {
        "use strict";
        var r = n(1537).g;
        e.exports = function (e, t, n) {
            var r, v, g, M, y, b, w, k = this.options.blocks.join("|"),
                x = new RegExp("^</?(" + k + ")(?=(\\s|/?>|$))", "i"), C = t.length, A = 0,
                L = [[i, a, !0], [o, s, !0], [l, c, !0], [h, u, !0], [f, p, !0], [x, d, !0], [m, d, !1]];
            for (; A < C && ("\t" === (M = t.charAt(A)) || " " === M);) A++;
            if ("<" !== t.charAt(A)) return;
            r = -1 === (r = t.indexOf("\n", A + 1)) ? C : r, v = t.slice(A, r), g = -1, y = L.length;
            for (; ++g < y;) if (L[g][0].test(v)) {
                b = L[g];
                break
            }
            if (!b) return;
            if (n) return b[2];
            if (A = r, !b[1].test(v)) for (; A < C;) {
                if (r = -1 === (r = t.indexOf("\n", A + 1)) ? C : r, v = t.slice(A + 1, r), b[1].test(v)) {
                    v && (A = r);
                    break
                }
                A = r
            }
            return w = t.slice(0, A), e(w)({type: "html", value: w})
        };
        var i = /^<(script|pre|style)(?=(\s|>|$))/i, a = /<\/(script|pre|style)>/i, o = /^<!--/, s = /-->/,
            l = /^<\?/, c = /\?>/, h = /^<![A-Za-z]/, u = />/, f = /^<!\[CDATA\[/, p = /]]>/, d = /^$/,
            m = new RegExp(r.source + "\\s*$")
    }, 5810: (e, t, n) => {
        "use strict";
        var r = n(6260), i = n(46), a = n(1537)._;
        e.exports = l, l.locator = i;
        var o = /^<a /i, s = /^<\/a>/i;

        function l(e, t, n) {
            var i, l, c = this, h = t.length;
            if (!("<" !== t.charAt(0) || h < 3) && (i = t.charAt(1), (r(i) || "?" === i || "!" === i || "/" === i) && (l = t.match(a)))) return !!n || (l = l[0], !c.inLink && o.test(l) ? c.inLink = !0 : c.inLink && s.test(l) && (c.inLink = !1), e(l)({
                type: "html",
                value: l
            }))
        }
    }, 7786: (e, t, n) => {
        "use strict";
        var r = n(2139), i = n(633);
        e.exports = l, l.locator = i;
        var a = "(", o = ")", s = "\\";

        function l(e, t, n) {
            var i, l, c, h, u, f, p, d, m, v, g, M, y, b, w, k, x, C, A = this, L = "", E = 0, S = t.charAt(0),
                H = A.options.pedantic, T = A.options.commonmark, V = A.options.gfm;
            if ("!" === S && (d = !0, L = S, S = t.charAt(++E)), "[" === S && (d || !A.inLink)) {
                for (L += S, b = "", E++, g = t.length, y = 0, (k = e.now()).column += E, k.offset += E; E < g;) {
                    if (f = S = t.charAt(E), "`" === S) {
                        for (l = 1; "`" === t.charAt(E + 1);) f += S, E++, l++;
                        c ? l >= c && (c = 0) : c = l
                    } else if (S === s) E++, f += t.charAt(E); else if (c && !V || "[" !== S) {
                        if ((!c || V) && "]" === S) {
                            if (!y) {
                                if (t.charAt(E + 1) !== a) return;
                                f += a, i = !0, E++;
                                break
                            }
                            y--
                        }
                    } else y++;
                    b += f, f = "", E++
                }
                if (i) {
                    for (m = b, L += b + f, E++; E < g && (S = t.charAt(E), r(S));) L += S, E++;
                    if (b = "", h = L, "<" === (S = t.charAt(E))) {
                        for (E++, h += "<"; E < g && ">" !== (S = t.charAt(E));) {
                            if (T && "\n" === S) return;
                            b += S, E++
                        }
                        if (">" !== t.charAt(E)) return;
                        L += "<" + b + ">", w = b, E++
                    } else {
                        for (S = null, f = ""; E < g && (S = t.charAt(E), !f || !('"' === S || "'" === S || T && S === a));) {
                            if (r(S)) {
                                if (!H) break;
                                f += S
                            } else {
                                if (S === a) y++; else if (S === o) {
                                    if (0 === y) break;
                                    y--
                                }
                                b += f, f = "", S === s && (b += s, S = t.charAt(++E)), b += S
                            }
                            E++
                        }
                        w = b, E = (L += b).length
                    }
                    for (b = ""; E < g && (S = t.charAt(E), r(S));) b += S, E++;
                    if (S = t.charAt(E), L += b, b && ('"' === S || "'" === S || T && S === a)) if (E++, b = "", v = S === a ? o : S, u = L += S, T) {
                        for (; E < g && (S = t.charAt(E)) !== v;) S === s && (b += s, S = t.charAt(++E)), E++, b += S;
                        if ((S = t.charAt(E)) !== v) return;
                        for (M = b, L += b + S, E++; E < g && (S = t.charAt(E), r(S));) L += S, E++
                    } else for (f = ""; E < g;) {
                        if ((S = t.charAt(E)) === v) p && (b += v + f, f = ""), p = !0; else if (p) {
                            if (S === o) {
                                L += b + v + f, M = b;
                                break
                            }
                            r(S) ? f += S : (b += v + f + S, f = "", p = !1)
                        } else b += S;
                        E++
                    }
                    if (t.charAt(E) === o) return !!n || (L += o, w = A.decode.raw(A.unescape(w), e(h).test().end, {nonTerminated: !1}), M && (u = e(u).test().end, M = A.decode.raw(A.unescape(M), u)), C = {
                        type: d ? "image" : "link",
                        title: M || null,
                        url: w
                    }, d ? C.alt = A.decode.raw(A.unescape(m), k) || null : (x = A.enterLink(), C.children = A.tokenizeInline(m, k), x()), e(L)(C))
                }
            }
        }
    }, 2866: (e, t, n) => {
        "use strict";
        var r = n(2745), i = n(6464), a = n(6195), o = n(8930), s = n(9460), l = n(7901);
        e.exports = function (e, t, n) {
            var i, o, s, f, p, d, m, v, M, y, b, w, k, x, C, A, L, E, S, H, T, V, O, N = this,
                P = N.options.commonmark, I = N.options.pedantic, D = N.blockTokenizers, q = N.interruptList, z = 0,
                R = t.length, Z = null, B = !1;
            for (; z < R && ((f = t.charAt(z)) === u || f === c);) z++;
            if ("*" === (f = t.charAt(z)) || "+" === f || "-" === f) p = f, s = !1; else {
                for (s = !0, o = ""; z < R && (f = t.charAt(z), a(f));) o += f, z++;
                if (f = t.charAt(z), !o || !("." === f || P && ")" === f)) return;
                if (n && "1" !== o) return;
                Z = parseInt(o, 10), p = f
            }
            if ((f = t.charAt(++z)) !== c && f !== u && (I || f !== h && "" !== f)) return;
            if (n) return !0;
            z = 0, x = [], C = [], A = [];
            for (; z < R;) {
                for (d = t.indexOf(h, z), m = z, v = !1, O = !1, -1 === d && (d = R), i = 0; z < R;) {
                    if ((f = t.charAt(z)) === u) i += 4 - i % 4; else {
                        if (f !== c) break;
                        i++
                    }
                    z++
                }
                if (L && i >= L.indent && (O = !0), f = t.charAt(z), M = null, !O) {
                    if ("*" === f || "+" === f || "-" === f) M = f, z++, i++; else {
                        for (o = ""; z < R && (f = t.charAt(z), a(f));) o += f, z++;
                        f = t.charAt(z), z++, o && ("." === f || P && ")" === f) && (M = f, i += o.length + 1)
                    }
                    if (M) if ((f = t.charAt(z)) === u) i += 4 - i % 4, z++; else if (f === c) {
                        for (V = z + 4; z < V && t.charAt(z) === c;) z++, i++;
                        z === V && t.charAt(z) === c && (z -= 3, i -= 3)
                    } else f !== h && "" !== f && (M = null)
                }
                if (M) {
                    if (!I && p !== M) break;
                    v = !0
                } else P || O || t.charAt(m) !== c ? P && L && (O = i >= L.indent || i > 4) : O = !0, v = !1, z = m;
                if (b = t.slice(m, d), y = m === z ? b : t.slice(z, d), ("*" === M || "_" === M || "-" === M) && D.thematicBreak.call(N, e, b, !0)) break;
                if (w = k, k = !v && !r(y).length, O && L) L.value = L.value.concat(A, b), C = C.concat(A, b), A = []; else if (v) 0 !== A.length && (B = !0, L.value.push(""), L.trail = A.concat()), L = {
                    value: [b],
                    indent: i,
                    trail: []
                }, x.push(L), C = C.concat(A, b), A = []; else if (k) {
                    if (w && !P) break;
                    A.push(b)
                } else {
                    if (w) break;
                    if (l(q, D, N, [e, b, !0])) break;
                    L.value = L.value.concat(A, b), C = C.concat(A, b), A = []
                }
                z = d + 1
            }
            H = e(C.join(h)).reset({
                type: "list",
                ordered: s,
                start: Z,
                spread: B,
                children: []
            }), E = N.enterList(), S = N.enterBlock(), z = -1, R = x.length;
            for (; ++z < R;) L = x[z].value.join(h), T = e.now(), e(L)(g(N, L, T), H), L = x[z].trail.join(h), z !== R - 1 && (L += h), e(L);
            return E(), S(), H
        };
        var c = " ", h = "\n", u = "\t", f = /\n\n(?!\s*$)/, p = /^\[(.)][ \t]/,
            d = /^([ \t]*)([*+-]|\d+[.)])( {1,4}(?! )| |\t|$|(?=\n))([^\n]*)/,
            m = /^([ \t]*)([*+-]|\d+[.)])([ \t]+)/, v = /^( {1,4}|\t)?/gm;

        function g(e, t, n) {
            var r, i, a = e.offset, o = e.options.pedantic ? M : y, s = null, l = null;
            return t = o.apply(null, arguments), e.options.gfm && (r = t.match(p)) && (i = r[0].length, s = " " !== r[1], l = r[1], a[n.line] += i, t = t.slice(i)), {
                type: "listItem",
                spread: f.test(t),
                checked: s,
                checklist: l,
                children: e.tokenizeBlock(t, n)
            }
        }

        function M(e, t, n) {
            var r = e.offset, i = n.line;
            return t = t.replace(m, a), i = n.line, t.replace(v, a);

            function a(e) {
                return r[i] = (r[i] || 0) + e.length, i++, ""
            }
        }

        function y(e, t, n) {
            var r, a, l, u, f, p, m, v = e.offset, g = n.line;
            for (u = (t = t.replace(d, (function (e, t, n, o, s) {
                a = t + n + o, l = s, Number(n) < 10 && a.length % 2 == 1 && (n = c + n);
                return (r = t + i(c, n.length) + o) + l
            }))).split(h), (f = s(t, o(r).indent).split(h))[0] = l, v[g] = (v[g] || 0) + a.length, g++, p = 0, m = u.length; ++p < m;) v[g] = (v[g] || 0) + u[p].length - f[p].length, g++;
            return f.join(h)
        }
    }, 7006: (e, t, n) => {
        "use strict";
        var r = n(2745), i = n(7257), a = n(7901);
        e.exports = function (e, t, n) {
            var s, l, c, h, u, f = this, p = f.options.commonmark, d = f.blockTokenizers, m = f.interruptParagraph,
                v = t.indexOf(o), g = t.length;
            for (; v < g;) {
                if (-1 === v) {
                    v = g;
                    break
                }
                if (t.charAt(v + 1) === o) break;
                if (p) {
                    for (h = 0, s = v + 1; s < g;) {
                        if ("\t" === (c = t.charAt(s))) {
                            h = 4;
                            break
                        }
                        if (" " !== c) break;
                        h++, s++
                    }
                    if (h >= 4 && c !== o) {
                        v = t.indexOf(o, v + 1);
                        continue
                    }
                }
                if (l = t.slice(v + 1), a(m, d, f, [e, l, !0])) break;
                if (s = v, -1 !== (v = t.indexOf(o, v + 1)) && "" === r(t.slice(s, v))) {
                    v = s;
                    break
                }
            }
            if (l = t.slice(0, v), n) return !0;
            return u = e.now(), l = i(l), e(l)({type: "paragraph", children: f.tokenizeInline(l, u)})
        };
        var o = "\n"
    }, 977: (e, t, n) => {
        "use strict";
        var r = n(2139), i = n(633), a = n(6749);
        e.exports = u, u.locator = i;
        var o = "link", s = "full", l = "[", c = "\\", h = "]";

        function u(e, t, n) {
            var i, u, f, p, d, m, v, g, M = this, y = M.options.commonmark, b = t.charAt(0), w = 0, k = t.length,
                x = "", C = "", A = o, L = "shortcut";
            if ("!" === b && (A = "image", C = b, b = t.charAt(++w)), b === l) {
                for (w++, C += b, m = "", g = 0; w < k;) {
                    if ((b = t.charAt(w)) === l) v = !0, g++; else if (b === h) {
                        if (!g) break;
                        g--
                    }
                    b === c && (m += c, b = t.charAt(++w)), m += b, w++
                }
                if (x = m, i = m, (b = t.charAt(w)) === h) {
                    if (w++, x += b, m = "", !y) for (; w < k && (b = t.charAt(w), r(b));) m += b, w++;
                    if ((b = t.charAt(w)) === l) {
                        for (u = "", m += b, w++; w < k && (b = t.charAt(w)) !== l && b !== h;) b === c && (u += c, b = t.charAt(++w)), u += b, w++;
                        (b = t.charAt(w)) === h ? (L = u ? s : "collapsed", m += u + b, w++) : u = "", x += m, m = ""
                    } else {
                        if (!i) return;
                        u = i
                    }
                    if (L === s || !v) return x = C + x, A === o && M.inLink ? null : !!n || ((f = e.now()).column += C.length, f.offset += C.length, p = {
                        type: A + "Reference",
                        identifier: a(u = L === s ? u : i),
                        label: u,
                        referenceType: L
                    }, A === o ? (d = M.enterLink(), p.children = M.tokenizeInline(i, f), d()) : p.alt = M.decode.raw(M.unescape(i), f) || null, e(x)(p))
                }
            }
        }
    }, 1248: (e, t, n) => {
        "use strict";
        var r = n(2745), i = n(2139), a = n(1016);
        e.exports = o, o.locator = a;

        function o(e, t, n) {
            var a, o, s, l, c, h, u, f = 0, p = t.charAt(f);
            if (!("*" !== p && "_" !== p || t.charAt(++f) !== p || (o = this.options.pedantic, c = (s = p) + s, h = t.length, f++, l = "", p = "", o && i(t.charAt(f))))) for (; f < h;) {
                if (u = p, !((p = t.charAt(f)) !== s || t.charAt(f + 1) !== s || o && i(u)) && (p = t.charAt(f + 2)) !== s) {
                    if (!r(l)) return;
                    return !!n || ((a = e.now()).column += 2, a.offset += 2, e(c + l + c)({
                        type: "strong",
                        children: this.tokenizeInline(l, a)
                    }))
                }
                o || "\\" !== p || (l += p, p = t.charAt(++f)), l += p, f++
            }
        }
    }, 308: (e, t, n) => {
        "use strict";
        var r = n(2139);
        e.exports = function (e, t, n) {
            var s, l, c, h, u, f, p, d, m, v, g, M, y, b, w, k, x, C, A, L, E;
            if (!this.options.gfm) return;
            s = 0, w = 0, f = t.length + 1, p = [];
            for (; s < f;) {
                if (A = t.indexOf(i, s), L = t.indexOf("|", s + 1), -1 === A && (A = t.length), -1 === L || L > A) {
                    if (w < 2) return;
                    break
                }
                p.push(t.slice(s, A)), w++, s = A + 1
            }
            h = p.join(i), l = p.splice(1, 1)[0] || [], s = 0, f = l.length, w--, c = !1, g = [];
            for (; s < f;) {
                if ("|" === (m = l.charAt(s))) {
                    if (v = null, !1 === c) {
                        if (!1 === E) return
                    } else g.push(c), c = !1;
                    E = !1
                } else if ("-" === m) v = !0, c = c || null; else if (":" === m) c = c === a ? "center" : v && null === c ? "right" : a; else if (!r(m)) return;
                s++
            }
            !1 !== c && g.push(c);
            if (g.length < 1) return;
            if (n) return !0;
            b = -1, x = [], C = e(h).reset({type: "table", align: g, children: x});
            for (; ++b < w;) {
                for (k = p[b], u = {
                    type: "tableRow",
                    children: []
                }, b && e(i), e(k).reset(u, C), f = k.length + 1, s = 0, d = "", M = "", y = !0; s < f;) {
                    if ("" === (m = k.charAt(s)) || "|" === m) if (y) e(m); else {
                        if ((M || m) && !y) {
                            h = M, d.length > 1 && (m ? (h += d.slice(0, -1), d = d.charAt(d.length - 1)) : (h += d, d = ""));
                            let t = o(h), {start: n, end: r} = t, i = h.slice(n, h.length - r), a = e.now();
                            a.offset += n, a.column += n, e(h)({
                                type: "tableCell",
                                padding: t,
                                children: this.tokenizeInline(i, a)
                            }, u)
                        }
                        e(d + m), d = "", M = ""
                    } else d && (M += d, d = ""), M += m, "\\" === m && s !== f - 2 && (M += k.charAt(s + 1), s++);
                    y = !1, s++
                }
                b || e(i + l)
            }
            return C
        };
        var i = "\n", a = "left";

        function o(e) {
            let t = 0, n = 0;
            for (let n = 0, r = e.length; n < r; n++) {
                let r = e[n];
                if ("\t" !== r && " " !== r) break;
                t += 1
            }
            for (let r = e.length - 1; r >= t; r--) {
                let t = e[r];
                if ("\t" !== t && " " !== t) break;
                n += 1
            }
            return {start: t, end: n}
        }
    }, 8825: e => {
        "use strict";
        e.exports = function (e, t, n) {
            var r, i, a, o, s, l, c, h, u, f, p = this;
            if (n) return !0;
            r = p.inlineMethods, o = r.length, i = p.inlineTokenizers, a = -1, u = t.length;
            for (; ++a < o;) "text" !== (h = r[a]) && i[h] && ((c = i[h].locator) || e.file.fail("Missing locator: `" + h + "`"), -1 !== (l = c.call(p, t, 1)) && l < u && (u = l));
            s = t.slice(0, u), f = e.now(), p.decode(s, f, (function (t, n, r) {
                e(r || t)({type: "text", value: t})
            }))
        }
    }, 8352: e => {
        "use strict";
        e.exports = function (e, t, n) {
            var r, i, a, o, s = -1, l = t.length + 1, c = "";
            for (; ++s < l && ("\t" === (r = t.charAt(s)) || " " === r);) c += r;
            if ("*" !== r && "-" !== r && "_" !== r) return;
            i = r, c += r, a = 1, o = "";
            for (; ++s < l;) if ((r = t.charAt(s)) === i) a++, c += o + i, o = ""; else {
                if (" " !== r) return a >= 3 && (!r || "\n" === r) ? (c += o, !!n || e(c)({type: "thematicBreak"})) : void 0;
                o += r
            }
        }
    }, 26: (e, t, n) => {
        "use strict";
        var r = n(932), i = n(7574), a = n(6195), o = n(6260), s = n(2139), l = n(8637);
        e.exports = c, c.locator = l, c.notInLink = !0;

        function c(e, t, n) {
            var l, c, h, u, f, p, d, m, v, g, M, y, b, w, k = this, x = k.options.gfm, C = k.inlineTokenizers,
                A = t.length, L = -1, E = !1;
            if (x) {
                if ("www." === t.slice(0, 4)) E = !0, u = 4; else if ("http://" === t.slice(0, 7).toLowerCase()) u = 7; else {
                    if ("https://" !== t.slice(0, 8).toLowerCase()) return;
                    u = 8
                }
                for (L = u - 1, h = u, l = []; u < A;) if (46 !== (d = t.charCodeAt(u))) {
                    if (!a(d) && !o(d) && 45 !== d && 95 !== d) break;
                    u++
                } else {
                    if (L === u - 1) break;
                    l.push(u), L = u, u++
                }
                if (46 === d && (l.pop(), u--), void 0 !== l[0] && (c = l.length < 2 ? h : l[l.length - 2] + 1, -1 === t.slice(c, u).indexOf("_"))) {
                    if (n) return !0;
                    for (m = u, f = u; u < A && (d = t.charCodeAt(u), !s(d) && 60 !== d);) u++, 33 === d || 42 === d || 44 === d || 46 === d || 58 === d || 63 === d || 95 === d || 126 === d || (m = u);
                    if (u = m, 41 === t.charCodeAt(u - 1)) for (p = t.slice(f, u), v = r(p, "("), g = r(p, ")"); g > v;) u = f + p.lastIndexOf(")"), p = t.slice(f, u), g--;
                    if (59 === t.charCodeAt(u - 1) && (u--, o(t.charCodeAt(u - 1)))) {
                        for (m = u - 2; o(t.charCodeAt(m));) m--;
                        38 === t.charCodeAt(m) && (u = m)
                    }
                    return M = t.slice(0, u), b = i(M, {nonTerminated: !1}), E && (b = "http://" + b), w = k.enterLink(), k.inlineTokenizers = {text: C.text}, y = k.tokenizeInline(M, e.now()), k.inlineTokenizers = C, w(), e(M)({
                        type: "link",
                        title: null,
                        url: b,
                        children: y
                    })
                }
            }
        }
    }, 831: e => {
        "use strict";

        function t(e) {
            var t, n;
            return "text" !== e.type || !e.position || (t = e.position.start, n = e.position.end, t.line !== n.line || n.column - t.column === e.value.length)
        }

        function n(e, t) {
            return e.value += t.value, e
        }

        function r(e, t) {
            return this.options.commonmark || this.options.gfm ? t : (e.children = e.children.concat(t.children), e)
        }

        e.exports = function (e) {
            return function (i, a) {
                var o, s, l, c, h, u = this, f = u.offset, p = [], d = u[e + "Methods"], m = u[e + "Tokenizers"],
                    v = a.line, g = a.column;
                if (!i) return p;
                A.now = b, A.file = u.file, M("");
                for (; i;) {
                    for (o = -1, s = d.length, c = !1; ++o < s && (!(l = m[d[o]]) || l.onlyAtStart && !u.atStart || l.notInList && u.inList || l.notInBlock && u.inBlock || l.notInLink && u.inLink || (h = i.length, l.apply(u, [A, i]), !(c = h !== i.length)));) ;
                    c || u.file.fail(new Error("Infinite loop"), A.now())
                }
                return u.eof = b(), p;

                function M(e) {
                    for (var t = -1, n = e.indexOf("\n"); -1 !== n;) v++, t = n, n = e.indexOf("\n", n + 1);
                    -1 === t ? g += e.length : g = e.length - t, v in f && (-1 !== t ? g += f[v] : g <= f[v] && (g = f[v] + 1))
                }

                function y() {
                    var e = [], t = v + 1;
                    return function () {
                        for (var n = v + 1; t < n;) e.push((f[t] || 0) + 1), t++;
                        return e
                    }
                }

                function b() {
                    var e = {line: v, column: g};
                    return e.offset = u.toOffset(e), e
                }

                function w(e) {
                    this.start = e, this.end = b()
                }

                function k(e) {
                    i.slice(0, e.length) !== e && u.file.fail(new Error("Incorrectly eaten value: please report this warning on https://git.io/vg5Ft"), b())
                }

                function x() {
                    var e = b();
                    return t;

                    function t(t, n) {
                        var r = t.position, i = r ? r.start : e, a = [], o = r && r.end.line, s = e.line;
                        if (t.position = new w(i), r && n && r.indent) {
                            if (a = r.indent, o < s) {
                                for (; ++o < s;) a.push((f[o] || 0) + 1);
                                a.push(e.column)
                            }
                            n = a.concat(n)
                        }
                        return t.position.indent = n || [], t
                    }
                }

                function C(e, i) {
                    var a = i ? i.children : p, o = a[a.length - 1];
                    return o && e.type === o.type && ("text" === e.type || "blockquote" === e.type) && t(o) && t(e) && (e = ("text" === e.type ? n : r).call(u, o, e)), e !== o && a.push(e), u.atStart && 0 !== p.length && u.exitStart(), e
                }

                function A(e) {
                    var t = y(), n = x(), r = b();
                    return k(e), a.reset = o, o.test = s, a.test = s, i = i.slice(e.length), M(e), t = t(), a;

                    function a(e, r) {
                        return n(C(n(e), r), t)
                    }

                    function o() {
                        var t = a.apply(null, arguments);
                        return v = r.line, g = r.column, i = e + i, t
                    }

                    function s() {
                        var t = n({});
                        return v = r.line, g = r.column, i = e + i, t.position
                    }
                }
            }
        }
    }, 7678: e => {
        "use strict";
        e.exports = function (e, n) {
            return function (r) {
                var i, a = 0, o = r.indexOf(t), s = e[n], l = [];
                for (; -1 !== o;) l.push(r.slice(a, o)), a = o + 1, (i = r.charAt(a)) && -1 !== s.indexOf(i) || l.push(t), o = r.indexOf(t, a + 1);
                return l.push(r.slice(a)), l.join("")
            }
        };
        var t = "\\"
    }, 8930: e => {
        "use strict";
        e.exports = function (e) {
            var t, n = 0, r = 0, i = e.charAt(n), a = {}, o = 0;
            for (; "\t" === i || " " === i;) {
                for (r += t = "\t" === i ? 4 : 1, t > 1 && (r = Math.floor(r / t) * t); o < r;) a[++o] = n;
                i = e.charAt(++n)
            }
            return {indent: r, stops: a}
        }
    }, 1537: (e, t) => {
        "use strict";
        var n = "<[A-Za-z][A-Za-z0-9\\-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^\"'=<>`\\u0000-\\u0020]+|'[^']*'|\"[^\"]*\"))?)*\\s*\\/?>",
            r = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>";
        t.g = new RegExp("^(?:" + n + "|" + r + ")"), t._ = new RegExp("^(?:" + n + "|" + r + "|\x3c!----\x3e|\x3c!--(?:-?[^>-])(?:-?[^-])*--\x3e|<[?].*?[?]>|<![A-Za-z]+\\s+[^>]*>|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>)")
    }, 7901: e => {
        "use strict";
        e.exports = function (e, t, n, r) {
            var i, a, o = e.length, s = -1;
            for (; ++s < o;) if (i = e[s], (void 0 === (a = i[1] || {}).pedantic || a.pedantic === n.options.pedantic) && (void 0 === a.commonmark || a.commonmark === n.options.commonmark) && t[i[0]].apply(n, r)) return !0;
            return !1
        }
    }, 6749: (e, t, n) => {
        "use strict";
        var r = n(9357);
        e.exports = function (e) {
            return r(e).toLowerCase()
        }
    }, 9460: (e, t, n) => {
        "use strict";
        var r = n(2745), i = n(6464), a = n(8930);
        e.exports = function (e, t) {
            var n, o, s, l = e.split("\n"), c = l.length + 1, h = 1 / 0, u = [];
            l.unshift(i(" ", t) + "!");
            for (; c--;) if (o = a(l[c]), u[c] = o.stops, 0 !== r(l[c]).length) {
                if (!o.indent) {
                    h = 1 / 0;
                    break
                }
                o.indent > 0 && o.indent < h && (h = o.indent)
            }
            if (h !== 1 / 0) for (c = l.length; c--;) {
                for (s = u[c], n = h; n && !(n in s);) n--;
                l[c] = l[c].slice(s[n] + 1)
            }
            return l.shift(), l.join("\n")
        }
    }, 2480: () => {
    }
}
const cache = {}

function require(r) {
    var i = cache[r];
    if (void 0 !== i) return i.exports;
    var a = cache[r] = {exports: {}};
    return __modules[r].call(a.exports, a, a.exports, require), a.exports
}

require.n = e => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return require.d(t, {a: t}), t
}
require.d = (e, t) => {
    for (var r in t) require.o(t, r) && !require.o(e, r) && Object.defineProperty(e, r, {enumerable: !0, get: t[r]})
}
require.g = function () {
    if ("object" == typeof globalThis) return globalThis;
    try {
        return this || new Function("return this")()
    } catch (e) {
        if ("object" == typeof window) return window
    }
}()
require.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)
require.r = e => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
}

;(() => {
    // enhance.js 模块
    function globalEnhance() {
        function defineProperty(obj, key, value) {
            Object.defineProperty(obj, key, {value: value, enumerable: !1, configurable: !0, writable: !0})
        }

        function defineGetter(obj, key, getter) {
            Object.defineProperty(obj, key, {get: getter, enumerable: !1, configurable: !0})
        }

        for (var n = window, r = 0, i = ["TouchEvent"]; r < i.length; r++) {
            var a = i[r];
            void 0 === n[a] && (n[a] = function () {
            })
        }
        try {
            var o = window.matchMedia;
            o && !o("(prefers-color-scheme: dark)").addEventListener && (window.matchMedia = function (e) {
                var t = o(e);
                return t.addEventListener || (t.addEventListener = function (e, t) {
                    this.addListener(t)
                }), t.removeEventListener || (t.removeEventListener = function (e, t) {
                    this.removeListener(t)
                }), t
            })
        } catch (e) {
            console.error(e)
        }

        window.ResizeObserver || (window.ResizeObserver = function () {
            function e() {
            }

            return e.prototype.observe = function () {
            }, e.prototype.unobserve = function () {
            }, e.prototype.disconnect = function () {
            }, e
        }())
        Object.isEmpty || defineProperty(Object, "isEmpty", function (e) {
            for (var t in e) if (e.hasOwnProperty(t)) return !1;
            return !0
        })
        Object.each || (Object.each = function (e, t, n) {
            for (var r in e) if (e.hasOwnProperty(r) && !1 === t.call(n, e[r], r)) return !1;
            return !0
        })
        Array.combine || (Array.combine = function (e) {
            for (var t = 0, n = 0, r = e; n < r.length; n++) {
                t += r[n].length
            }
            for (var i = new Array(t), a = 0, o = 0, s = e; o < s.length; o++) for (var l = 0, c = s[o]; l < c.length; l++) {
                var h = c[l];
                i[a] = h, a++
            }
            return i
        })
        Array.prototype.first || defineProperty(Array.prototype, "first", function () {
            if (0 !== this.length) return this[0]
        })
        Array.prototype.last || defineProperty(Array.prototype, "last", function () {
            if (0 !== this.length) return this[this.length - 1]
        })
        Array.prototype.contains || defineProperty(Array.prototype, "contains", function (e) {
            return -1 !== this.indexOf(e)
        })
        Array.prototype.remove || defineProperty(Array.prototype, "remove", function (e) {
            for (var t = this.length - 1; t >= 0; t--) this[t] === e && this.splice(t, 1)
        })
        Array.prototype.shuffle || defineProperty(Array.prototype, "shuffle", function () {
            for (var e, t, n = this.length; 0 !== n;) t = Math.floor(Math.random() * n), e = this[n -= 1], this[n] = this[t], this[t] = e;
            return this
        })
        Array.prototype.findLastIndex || defineProperty(Array.prototype, "findLastIndex", function (e) {
            for (var t = this.length - 1; t <= 0; t--) if (e(this[t], t)) return t;
            return -1
        })
        Array.prototype.unique || defineProperty(Array.prototype, "unique", function () {
            return Array.from(new Set(this).values())
        })
        Math.clamp || (Math.clamp = function (e, t, n) {
            return Math.min(Math.max(e, t), n)
        })
        Math.square || (Math.square = function (e) {
            return e * e
        })
        String.isString || (String.isString = function (e) {
            return "string" == typeof e || e instanceof String
        })
        String.prototype.contains || (String.prototype.contains = function (e) {
            return -1 !== this.indexOf(e)
        })
        String.prototype.startsWith || (String.prototype.startsWith = function (e, t) {
            return this.substr(!t || t < 0 ? 0 : +t, e.length) === e
        })
        String.prototype.endsWith || (String.prototype.endsWith = function (e, t) {
            var n = void 0 === t || t > this.length ? this.length : t;
            return this.substring(n - e.length, n) === e
        })
        String.prototype.format || (String.prototype.format = function () {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            return this.replace(/{(\d+)}/g, (function (t, n) {
                return void 0 !== e[n] ? e[n] : t
            }))
        })
        Number.isNumber || defineProperty(Number, "isNumber", function (e) {
            return "number" == typeof e
        })
        defineProperty(window, "isBoolean", function (e) {
            return "boolean" == typeof e
        })

        let s = function (node) {
            var t = node.nodeType;
            if (1 === t || 9 === t || 11 === t) {
                if ("string" == typeof node.textContent) return node.textContent;
                for (var n = [], r = node.firstChild; r; r = r.nextSibling) n.push(s(r));
                return n.join("")
            }
            return (3 === t || 4 === t) && node.nodeValue || ""
        }

        function setCssStyles(e) {
            var t = this.style;
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
        }

        function setCssProps(e) {
            var t = this.style;
            for (var n in e) e.hasOwnProperty(n) && t.setProperty(n, e[n])
        }

        Element.prototype.getText = function () {
            return s(this)
        }
        Element.prototype.setText = function (e) {
            !function (e, t) {
                if (t instanceof DocumentFragment || t instanceof Node) return e.empty(), void e.appendChild(t);
                String.isString(t) || (t = String(t));
                var n = e.nodeType;
                1 !== n && 9 !== n && 11 !== n || (e.textContent = t)
            }(this, e)
        }
        Element.prototype.addClass = function () {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            this.addClasses(e)
        }
        Element.prototype.addClasses = function (e) {
            if (e) for (var t = 0; t < e.length; t++) this.classList.add(e[t])
        }
        Element.prototype.removeClass = function () {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            this.removeClasses(e)
        }
        Element.prototype.removeClasses = function (e) {
            for (var t = 0; t < e.length; t++) this.classList.remove(e[t])
        }
        Element.prototype.toggleClass = function (e, t) {
            e instanceof Array || (e = [e]), t ? this.addClasses(e) : this.removeClasses(e)
        }
        Element.prototype.hasClass = function (e) {
            return this.classList.contains(e)
        }
        ;[Element.prototype, Document.prototype, DocumentFragment.prototype].forEach(function (t) {
            defineProperty(t, "prepend", (function () {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                for (var n = document.createDocumentFragment(), r = 0, i = e; r < i.length; r++) {
                    var a = i[r];
                    n.appendChild(a instanceof Node ? a : document.createTextNode(String(a)))
                }
                this.insertBefore(n, this.firstChild)
            }))
        })
        Node.prototype.detach = function () {
            this.parentNode && this.parentNode.removeChild(this)
        }
        Node.prototype.empty = function () {
            for (; this.lastChild;) this.removeChild(this.lastChild)
        }
        Node.prototype.insertAfter = function (e, t) {
            return t ? this.insertBefore(e, t.nextSibling) : this.insertBefore(e, this.firstChild), e
        }
        Node.prototype.indexOf = function (e) {
            return Array.prototype.indexOf.call(this.childNodes, e)
        }
        Node.prototype.setChildrenInPlace = function (e) {
            for (var t = this.firstChild, n = new Set(e), r = 0, i = e; r < i.length; r++) {
                for (var a = i[r]; t && !n.has(t);) {
                    var o = t;
                    t = t.nextSibling, this.removeChild(o)
                }
                a !== t ? this.insertBefore(a, t) : t = t.nextSibling
            }
            for (; t;) {
                o = t;
                t = t.nextSibling, this.removeChild(o)
            }
        }
        Node.prototype.appendText = function (e) {
            this.appendChild(document.createTextNode(e))
        }
        Node.prototype.instanceOf = function (e) {
            if (this instanceof e) return !0;
            var t = this.win[e.name];
            return !!(t && this instanceof t) || !!((t = this.constructorWin[e.name]) && this instanceof t)
        }
        defineGetter(Node.prototype, "doc", function () {
            return this.ownerDocument || document
        })
        defineGetter(Node.prototype, "win", function () {
            return this.doc.defaultView || window
        })
        Node.prototype.constructorWin = window
        Element.prototype.setAttr = function (key, attr) {
            null === attr ? this.removeAttribute(key) : this.setAttribute(key, String(attr))
        }
        Element.prototype.setAttrs = function (attrs) {
            for (var t in attrs) if (attrs.hasOwnProperty(t)) {
                var n = attrs[t];
                this.setAttr(t, n)
            }
        }
        Element.prototype.getAttr = Element.prototype.getAttribute
        defineProperty(Element.prototype, "matchParent", function (selector, currentTarget) {
            if (this.matches(selector)) {
                return this
            }
            if (this === currentTarget) {
                return null;
            }
            let parentElement = this.parentElement;
            return parentElement ? parentElement.matchParent(selector, currentTarget) : null
        })
        Element.prototype.getCssPropertyValue = function (e, t) {
            return getComputedStyle(this, t).getPropertyValue(e).trim()
        }
        defineProperty(Element.prototype, "isActiveElement", function () {
            for (var e = this; e;) {
                if (e.doc.activeElement !== e) return !1;
                var t = e.win.frameElement;
                if (!t) return e.win === activeWindow;
                e = t
            }
            return !1
        })
        HTMLElement.prototype.show || (HTMLElement.prototype.show = function () {
            if ("none" === this.style.display) {
                this.style.display = this.getAttribute("data-display") || ""
                this.removeAttribute("data-display")
            }
        })
        HTMLElement.prototype.hide || (HTMLElement.prototype.hide = function () {
            let display = this.style.display;
            if ("none" !== display) {
                this.style.display = "none"
                display
                    ? this.setAttribute("data-display", display)
                    : this.removeAttribute("data-display")
            }
        })
        HTMLElement.prototype.toggle || (HTMLElement.prototype.toggle = function (show) {
            show ? this.show() : this.hide()
        })
        HTMLElement.prototype.toggleVisibility || (HTMLElement.prototype.toggleVisibility = function (visibility) {
            this.style.visibility = visibility ? "" : "hidden"
        })
        defineProperty(HTMLElement.prototype, "isShown", function () {
            return !!this.offsetParent
        })
        defineGetter(HTMLElement.prototype, "innerWidth", function () {
            let style = getComputedStyle(this),
                paddingLeft = parseFloat(style.paddingLeft),
                paddingRight = parseFloat(style.paddingRight);
            isNaN(paddingLeft) && (paddingLeft = 0)
            isNaN(paddingRight) && (paddingRight = 0)
            return this.scrollWidth - paddingLeft - paddingRight
        })
        defineGetter(HTMLElement.prototype, "innerHeight", function () {
            let style = getComputedStyle(this),
                paddingTop = parseFloat(style.paddingTop),
                paddingBottom = parseFloat(style.paddingBottom);
            isNaN(paddingTop) && (paddingTop = 0)
            isNaN(paddingBottom) && (paddingBottom = 0)
            return this.scrollHeight - paddingTop - paddingBottom
        })
        defineProperty(HTMLElement.prototype, "setCssStyles", setCssStyles)
        defineProperty(SVGElement.prototype, "setCssStyles", setCssStyles)
        defineProperty(HTMLElement.prototype, "setCssProps", setCssProps)
        defineProperty(SVGElement.prototype, "setCssProps", setCssProps)
        defineProperty(HTMLElement.prototype, "addEventListeners", function (listeners) {
            for (let key in listeners) {
                if (listeners.hasOwnProperty(key)) {
                    let type = key, callback = listeners[type];
                    if ("function" == typeof callback) {
                        this.addEventListener(type, callback)
                    }
                }
            }
        })
        window.fish = function (selectors) {
            return document.querySelector(selectors)
        }
        window.fishAll = function (selectors) {
            return Array.prototype.slice.call(document.querySelectorAll(selectors))
        }
        Element.prototype.find = function (selectors) {
            return this.querySelector(selectors)
        }
        Element.prototype.findAll = function (selectors) {
            return Array.prototype.slice.call(this.querySelectorAll(selectors))
        }
        Element.prototype.findAllSelf = function (selectors) {
            var t = Array.prototype.slice.call(this.querySelectorAll(selectors));
            return this.matches(selectors) && t.unshift(this), t
        }
        DocumentFragment.prototype.find = function (selectors) {
            return this.querySelector(selectors)
        }
        DocumentFragment.prototype.findAll = function (selectors) {
            return Array.prototype.slice.call(this.querySelectorAll(selectors))
        }

        Node.prototype.createEl = function (tagName, options, cb) {
            return "string" == typeof options && (options = {cls: options}), (options = options || {}).parent = this, createEl(tagName, options, cb)
        }
        Node.prototype.createDiv = function (options, cb) {
            return this.createEl("div", options, cb)
        }
        Node.prototype.createSpan = function (options, cb) {
            return this.createEl("span", options, cb)
        }
        Node.prototype.createSvg = function (qualifiedName, options, cb) {
            return "string" == typeof options && (options = {cls: options}), (options = options || {}).parent = this, createSvg(qualifiedName, options, cb)
        }

        window.createEl = function (tagName, options, cb) {
            var r = document.createElement(tagName);
            "string" == typeof options && (options = {cls: options});
            var i = options || {}, a = i.cls, o = i.text, s = i.attr, l = i.title, c = i.value, h = i.placeholder,
                u = i.type, f = i.parent, p = i.prepend, d = i.href;
            for (var m in a && (Array.isArray(a) ? r.className = a.join(" ") : r.className = a), o && r.setText(o), s && r.setAttrs(s), void 0 !== l && (r.title = l), void 0 !== c && (r instanceof HTMLInputElement || r instanceof HTMLSelectElement || r instanceof HTMLOptionElement) && (r.value = c), u && r instanceof HTMLInputElement && (r.type = u), u && r instanceof HTMLStyleElement && r.setAttribute("type", u), h && r instanceof HTMLInputElement && (r.placeholder = h), d && (r instanceof HTMLAnchorElement || r instanceof HTMLLinkElement || r instanceof HTMLBaseElement) && (r.href = d), cb && cb(r), f && (p ? f.insertBefore(r, f.firstChild) : f.appendChild(r)), options) if (options.hasOwnProperty(m) && m.startsWith("on")) {
                var v = m, g = options[v];
                "function" == typeof g && r.addEventListener(v.substring(2), g)
            }
            return r
        }
        window.createDiv = function (options, cb) {
            return createEl("div", options, cb)
        }
        window.createSpan = function (options, cb) {
            return createEl("span", options, cb)
        }
        window.createSvg = function (qualifiedName, options, cb) {
            var r, i = document.createElementNS("http://www.w3.org/2000/svg", qualifiedName);
            "string" == typeof options && (options = {cls: options});
            var a = options || {}, o = a.cls, s = a.attr, l = a.parent, c = a.prepend;
            return o && (Array.isArray(o) ? (r = i.classList).add.apply(r, o) : i.classList.add(o)), s && i.setAttrs(s), cb && cb(i), l && (c ? l.insertBefore(i, l.firstChild) : l.appendChild(i)), i
        }
        window.createFragment = function (cb) {
            var t = document.createDocumentFragment();
            return cb && cb(t), t
        };

        let on = function (type, selector, listener, options) {
            let events = this._EVENTS
            if (!events) {
                events = {}
                this._EVENTS = events
            }
            let queue = events[type]
            if (!queue) {
                queue = []
                events[type] = queue
            }
            let callback = function (evt) {
                let target = evt.target
                if (target.matchParent) {
                    let parent = target.matchParent(selector, evt.currentTarget);
                    if (parent) {
                        listener.call(this, evt, parent)
                    }
                }
            }
            queue.push({
                selector: selector,
                listener: listener,
                options: options,
                callback: callback
            })
            this.addEventListener(type, callback, options)
        }
        let off = function (type, selector, n, options) {
            var i = this, a = this._EVENTS;
            if (a) {
                var o = a[type];
                o && (a[type] = o.filter((function (a) {
                    if (a.selector === selector && a.listener === n && a.options === options) {
                        var o = a.callback;
                        return i.removeEventListener(type, o, options), !1
                    }
                    return !0
                })))
            }
        }
        HTMLElement.prototype.on = on
        HTMLElement.prototype.off = off
        Document.prototype.on = on
        Document.prototype.off = off
        HTMLElement.prototype.onClickEvent = function (listener, options) {
            this.addEventListener("click", listener, options), this.addEventListener("auxclick", listener, options)
        }
        HTMLElement.prototype.trigger = function (type) {
            var t = document.createEvent("HTMLEvents");
            t.initEvent(type, !0, !1), this.dispatchEvent(t)
        }
        defineGetter(UIEvent.prototype, "targetNode", function () {
            return this.target
        })
        defineGetter(UIEvent.prototype, "win", function () {
            return this.view || window
        })
        defineGetter(UIEvent.prototype, "doc", function () {
            return this.win.document
        })
        UIEvent.prototype.instanceOf = function (e) {
            if (this instanceof e) return !0;
            var t = this.view;
            if (!t) return !1;
            var n = t[e.name];
            return !(!n || n === e) && this instanceof n
        }

        let f = new WeakMap()
        HTMLElement.prototype.onNodeInserted = function (e, t) {
            var n = this, r = function (r) {
                n.isShown() && (t && i(), "node-inserted" === r.animationName && e())
            }, i = function () {
                n.removeEventListener("animationstart", r);
                var e = (f.get(n) || 0) - 1;
                e <= 0 ? (f.delete(n), n.removeClass("node-insert-event")) : f.set(n, e)
            };
            return f.set(this, (f.get(this) || 0) + 1), this.addClass("node-insert-event"), this.addEventListener("animationstart", r), i
        }
        HTMLElement.prototype.onWindowMigrated = function (e) {
            var t = this, n = this.win;
            return this.onNodeInserted((function () {
                var r = t.win;
                r !== n && e(n = r)
            }))
        }


        window.ajax = function (options) {
            let method = options.method,
                url = options.url,
                success = options.success,
                error = options.error,
                data = options.data,
                headers = options.headers,
                withCredentials = options.withCredentials;
            method = method || "GET";
            let xhr = new XMLHttpRequest()
            options.req = xhr
            xhr.open(method, url, true)
            xhr.onload = function () {
                let status = xhr.status, response = xhr.response;
                if (status >= 200 && status < 400) {
                    success && success(response, xhr)
                } else {
                    error && error(response, xhr)
                }
            }
            xhr.onerror = function (e) {
                error && error(e, xhr)
            }
            if (headers) {
                for (let key in headers) {
                    if (headers.hasOwnProperty(key)) {
                        xhr.setRequestHeader(key, headers[key])
                    }
                }
            }
            xhr.withCredentials = withCredentials || false
            if (data) {
                if (undefined === withCredentials) {
                    xhr.withCredentials = true
                }
                if (String.isString(data)) {
                    xhr.send(data)
                } else if (data instanceof ArrayBuffer) {
                    xhr.setRequestHeader("Content-Type", "application/octet-stream")
                    xhr.send(data)
                } else {
                    xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8")
                    xhr.send(JSON.stringify(data))
                }
            } else {
                xhr.send()
            }
        }
        window.ajaxPromise = function (options) {
            return new Promise(function (resolve, reject) {
                options.success = resolve
                options.error = function (e, t) {
                    return reject(t)
                }
                ajax(options)
            })
        }
        window.ready = function (cb) {
            if ("loading" !== document.readyState) {
                cb()
            } else {
                document.addEventListener("DOMContentLoaded", cb)
            }
        }
        window.sleep = function (duration) {
            return new Promise(function (resolve) {
                return window.setTimeout(resolve, duration)
            })
        }
        window.nextFrame = function () {
            return new Promise(function (resolve) {
                return window.requestAnimationFrame(function () {
                    return resolve()
                })
            })
        }
        window.activeWindow = window
        window.activeDocument = document
    }

    globalEnhance()
    window.globalEnhance = globalEnhance


    const obsidian_api = {}
    require.r(obsidian_api)
    require.d(obsidian_api, {
        Component: () => Component,
        Events: () => Events,
        MarkdownPreviewRenderer: () => MarkdownPreviewRenderer,
        MarkdownRenderChild: () => MarkdownRenderChild,
        Publish: () => Publish
    })

    let setPrototypeOf = function (obj, proto) {
        return (setPrototypeOf = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
            e.__proto__ = t
        } || function (e, t) {
            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        })(obj, proto)
    };

    function extend(cls, base) {
        if ("function" != typeof base && null !== base) throw new TypeError("Class extends value " + String(base) + " is not a constructor or null");

        function n() {
            this.constructor = cls
        }

        setPrototypeOf(cls, base), cls.prototype = null === base ? Object.create(base) : (n.prototype = base.prototype, new n)
    }

    function a(thisArg, args, PromiseImpl, fn) {
        return new (PromiseImpl || (PromiseImpl = Promise))((function (i, a) {
            function o(e) {
                try {
                    l(fn.next(e))
                } catch (e) {
                    a(e)
                }
            }

            function s(e) {
                try {
                    l(fn.throw(e))
                } catch (e) {
                    a(e)
                }
            }

            function l(e) {
                var t;
                e.done ? i(e.value) : (t = e.value, t instanceof PromiseImpl ? t : new PromiseImpl((function (e) {
                    e(t)
                }))).then(o, s)
            }

            l((fn = fn.apply(thisArg, args || [])).next())
        }))
    }

    function o(e, t) {
        var n, r, i, a, o = {
            label: 0, sent: function () {
                if (1 & i[0]) throw i[1];
                return i[1]
            }, trys: [], ops: []
        };
        return a = {
            next: s(0),
            throw: s(1),
            return: s(2)
        }, "function" == typeof Symbol && (a[Symbol.iterator] = function () {
            return this
        }), a;

        function s(s) {
            return function (l) {
                return function (s) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; a && (a = 0, s[0] && (o = 0)), o;) try {
                        if (n = 1, r && (i = 2 & s[0] ? r.return : s[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, s[1])).done) return i;
                        switch (r = 0, i && (s = [2 & s[0], i.value]), s[0]) {
                            case 0:
                            case 1:
                                i = s;
                                break;
                            case 4:
                                return o.label++, {value: s[1], done: !1};
                            case 5:
                                o.label++, r = s[1], s = [0];
                                continue;
                            case 7:
                                s = o.ops.pop(), o.trys.pop();
                                continue;
                            default:
                                if (!(i = o.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                                    o = 0;
                                    continue
                                }
                                if (3 === s[0] && (!i || s[1] > i[0] && s[1] < i[3])) {
                                    o.label = s[1];
                                    break
                                }
                                if (6 === s[0] && o.label < i[1]) {
                                    o.label = i[1], i = s;
                                    break
                                }
                                if (i && o.label < i[2]) {
                                    o.label = i[2], o.ops.push(s);
                                    break
                                }
                                i[2] && o.ops.pop(), o.trys.pop();
                                continue
                        }
                        s = t.call(e, o)
                    } catch (e) {
                        s = [6, e], r = 0
                    } finally {
                        n = i = 0
                    }
                    if (5 & s[0]) throw s[1];
                    return {value: s[0] ? s[1] : void 0, done: !0}
                }([s, l])
            }
        }
    }

    function s(e, t, n) {
        if (n || 2 === arguments.length) for (var r, i = 0, a = t.length; i < a; i++) !r && i in t || (r || (r = Array.prototype.slice.call(t, 0, i)), r[i] = t[i]);
        return e.concat(r || Array.prototype.slice.call(t))
    }

    function l(e) {
        return this instanceof l ? (this.v = e, this) : new l(e)
    }

    function c(e, t, n) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var r, i = n.apply(e, t || []), a = [];
        return r = {}, o("next"), o("throw"), o("return"), r[Symbol.asyncIterator] = function () {
            return this
        }, r;

        function o(e) {
            i[e] && (r[e] = function (t) {
                return new Promise((function (n, r) {
                    a.push([e, t, n, r]) > 1 || s(e, t)
                }))
            })
        }

        function s(e, t) {
            try {
                (n = i[e](t)).value instanceof l ? Promise.resolve(n.value.v).then(c, h) : u(a[0][2], n)
            } catch (e) {
                u(a[0][3], e)
            }
            var n
        }

        function c(e) {
            s("next", e)
        }

        function h(e) {
            s("throw", e)
        }

        function u(e, t) {
            e(t), a.shift(), a.length && s(a[0][0], a[0][1])
        }
    }


    let h = require(773),
        u = require.n(h),
        f = require(6630),
        p = require.n(f),
        d = require(939),
        m = require.n(d);
    const v = Symbol.for("yaml.alias"),
        g = Symbol.for("yaml.document"),
        M = Symbol.for("yaml.map"),
        y = Symbol.for("yaml.pair"),
        b = Symbol.for("yaml.scalar"),
        w = Symbol.for("yaml.seq"),
        k = Symbol.for("yaml.node.type"),
        x = e => !!e && "object" == typeof e && e[k] === v,
        C = e => !!e && "object" == typeof e && e[k] === g,
        A = e => !!e && "object" == typeof e && e[k] === M,
        L = e => !!e && "object" == typeof e && e[k] === y,
        E = e => !!e && "object" == typeof e && e[k] === b,
        S = e => !!e && "object" == typeof e && e[k] === w;

    function H(e) {
        if (e && "object" == typeof e) switch (e[k]) {
            case M:
            case w:
                return !0
        }
        return !1
    }

    function T(e) {
        if (e && "object" == typeof e) switch (e[k]) {
            case v:
            case M:
            case b:
            case w:
                return !0
        }
        return !1
    }

    class V {
        constructor(e) {
            Object.defineProperty(this, k, {value: e})
        }
    }

    const O = Symbol("break visit"),
        N = Symbol("skip children"),
        P = Symbol("remove node");

    function I(e, t) {
        if (C(e)) {
            D(null, e.contents, t, Object.freeze([e])) === P && (e.contents = null)
        } else D(null, e, t, Object.freeze([]))
    }

    function D(e, t, n, r) {
        let i;
        if ("function" == typeof n ? i = n(e, t, r) : A(t) ? n.Map && (i = n.Map(e, t, r)) : S(t) ? n.Seq && (i = n.Seq(e, t, r)) : L(t) ? n.Pair && (i = n.Pair(e, t, r)) : E(t) ? n.Scalar && (i = n.Scalar(e, t, r)) : x(t) && n.Alias && (i = n.Alias(e, t, r)), T(i) || L(i)) {
            const t = r[r.length - 1];
            if (H(t)) t.items[e] = i; else if (L(t)) "key" === e ? t.key = i : t.value = i; else {
                if (!C(t)) {
                    const e = x(t) ? "alias" : "scalar";
                    throw new Error(`Cannot replace node with ${e} parent`)
                }
                t.contents = i
            }
            return D(e, i, n, r)
        }
        if ("symbol" != typeof i) if (H(t)) {
            r = Object.freeze(r.concat(t));
            for (let e = 0; e < t.items.length; ++e) {
                const i = D(e, t.items[e], n, r);
                if ("number" == typeof i) e = i - 1; else {
                    if (i === O) return O;
                    i === P && (t.items.splice(e, 1), e -= 1)
                }
            }
        } else if (L(t)) {
            r = Object.freeze(r.concat(t));
            const e = D("key", t.key, n, r);
            if (e === O) return O;
            e === P && (t.key = null);
            const i = D("value", t.value, n, r);
            if (i === O) return O;
            i === P && (t.value = null)
        }
        return i
    }

    I.BREAK = O
    I.SKIP = N
    I.REMOVE = P
    const q = {"!": "%21", ",": "%2C", "[": "%5B", "]": "%5D", "{": "%7B", "}": "%7D"};

    class z {
        constructor(e, t) {
            this.marker = null, this.yaml = Object.assign({}, z.defaultYaml, e), this.tags = Object.assign({}, z.defaultTags, t)
        }

        atDocument() {
            const e = new z(this.yaml, this.tags);
            switch (this.yaml.version) {
                case"1.1":
                    this.atNextDocument = !0;
                    break;
                case"1.2":
                    this.atNextDocument = !1, this.yaml = {
                        explicit: z.defaultYaml.explicit,
                        version: "1.2"
                    }, this.tags = Object.assign({}, z.defaultTags)
            }
            return e
        }

        add(e, t) {
            this.atNextDocument && (this.yaml = {
                explicit: z.defaultYaml.explicit,
                version: "1.1"
            }, this.tags = Object.assign({}, z.defaultTags), this.atNextDocument = !1);
            const n = e.trim().split(/[ \t]+/), r = n.shift();
            switch (r) {
                case"%TAG": {
                    if (2 !== n.length && (t(0, "%TAG directive should contain exactly two parts"), n.length < 2)) return !1;
                    const [e, r] = n;
                    return this.tags[e] = r, !0
                }
                case"%YAML": {
                    if (this.yaml.explicit = !0, n.length < 1) return t(0, "%YAML directive should contain exactly one part"), !1;
                    const [e] = n;
                    return "1.1" === e || "1.2" === e ? (this.yaml.version = e, !0) : (t(6, `Unsupported YAML version ${e}`, !0), !1)
                }
                default:
                    return t(0, `Unknown directive ${r}`, !0), !1
            }
        }

        tagName(e, t) {
            if ("!" === e) return "!";
            if ("!" !== e[0]) return t(`Not a valid tag: ${e}`), null;
            if ("<" === e[1]) {
                const n = e.slice(2, -1);
                return "!" === n || "!!" === n ? (t(`Verbatim tags aren't resolved, so ${e} is invalid.`), null) : (">" !== e[e.length - 1] && t("Verbatim tags must end with a >"), n)
            }
            const [, n, r] = e.match(/^(.*!)([^!]*)$/);
            r || t(`The ${e} tag has no suffix`);
            const i = this.tags[n];
            return i ? i + decodeURIComponent(r) : "!" === n ? e : (t(`Could not resolve tag: ${e}`), null)
        }

        tagString(e) {
            for (const [t, n] of Object.entries(this.tags)) if (e.startsWith(n)) return t + e.substring(n.length).replace(/[!,[\]{}]/g, (e => q[e]));
            return "!" === e[0] ? e : `!<${e}>`
        }

        toString(e) {
            const t = this.yaml.explicit ? [`%YAML ${this.yaml.version || "1.2"}`] : [],
                n = Object.entries(this.tags);
            let r;
            if (e && n.length > 0 && T(e.contents)) {
                const t = {};
                I(e.contents, ((e, n) => {
                    T(n) && n.tag && (t[n.tag] = !0)
                })), r = Object.keys(t)
            } else r = [];
            for (const [i, a] of n) "!!" === i && "tag:yaml.org,2002:" === a || e && !r.some((e => e.startsWith(a))) || t.push(`%TAG ${i} ${a}`);
            return t.join("\n")
        }
    }

    function R(e, t, n) {
        if (Array.isArray(e)) return e.map(((e, t) => R(e, String(t), n)));
        if (e && "function" == typeof e.toJSON) {
            if (!n) return e.toJSON(t);
            const r = n.anchors && n.anchors.get(e);
            r && (n.onCreate = e => {
                r.res = e, delete n.onCreate
            });
            const i = e.toJSON(t, n);
            return r && n.onCreate && n.onCreate(i), i
        }
        return n && n.keep || "bigint" != typeof e ? e : Number(e)
    }

    z.defaultYaml = {explicit: !1, version: "1.2"}
    z.defaultTags = {"!!": "tag:yaml.org,2002:"}

    class Z extends V {
        constructor(e) {
            super(v), this.source = e, Object.defineProperty(this, "tag", {
                set() {
                    throw new Error("Alias nodes cannot have tags")
                }
            })
        }

        toJSON(e, t) {
            if (!t) return R(this.source, "string" == typeof e ? e : null, t);
            const {anchors: n, maxAliasCount: r} = t, i = n && n.get(this.source);
            if (!i || void 0 === i.res) {
                throw new ReferenceError("This should not happen: Alias anchor was not resolved?")
            }
            if (r >= 0 && (i.count += 1, 0 === i.aliasCount && (i.aliasCount = B(this.source, n)), i.count * i.aliasCount > r)) {
                throw new ReferenceError("Excessive alias count indicates a resource exhaustion attack")
            }
            return i.res
        }

        toString({anchors: e, doc: t, implicitKey: n, inStringifyKey: r}, i, a) {
            let o = Object.keys(e).find((t => e[t] === this.source));
            if (!o && r && (o = t.anchors.getName(this.source) || t.anchors.newName()), o) return `*${o}${n ? " " : ""}`;
            const s = t.anchors.getName(this.source) ? "Alias node must be after source node" : "Source node not found for alias node";
            throw new Error(`${s} [${this.range}]`)
        }
    }

    function B(e, t) {
        if (x(e)) {
            const n = t && t.get(e.source);
            return n ? n.count * n.aliasCount : 0
        }
        if (H(e)) {
            let n = 0;
            for (const r of e.items) {
                const e = B(r, t);
                e > n && (n = e)
            }
            return n
        }
        if (L(e)) {
            const n = B(e.key, t), r = B(e.value, t);
            return Math.max(n, r)
        }
        return 1
    }

    const j = e => !e || "function" != typeof e && "object" != typeof e;

    class F extends V {
        constructor(e) {
            super(b), this.value = e
        }

        toJSON(e, t) {
            return t && t.keep ? this.value : R(this.value, e, t)
        }

        toString() {
            return String(this.value)
        }
    }

    F.BLOCK_FOLDED = "BLOCK_FOLDED"
    F.BLOCK_LITERAL = "BLOCK_LITERAL"
    F.PLAIN = "PLAIN"
    F.QUOTE_DOUBLE = "QUOTE_DOUBLE"
    F.QUOTE_SINGLE = "QUOTE_SINGLE"

    function U(e, t, n) {
        var r, i;
        if (T(e)) return e;
        if (L(e)) {
            const t = null === (i = (r = n.schema.map).createNode) || void 0 === i ? void 0 : i.call(r, n.schema, null, n);
            return t.items.push(e), t
        }
        (e instanceof String || e instanceof Number || e instanceof Boolean || "function" == typeof BigInt && e instanceof BigInt) && (e = e.valueOf());
        const {onAlias: a, onTagObj: o, prevObjects: s} = n, {map: l, seq: c, tags: h} = n.schema;
        t && t.startsWith("!!") && (t = "tag:yaml.org,2002:" + t.slice(2));
        let u = function (e, t, n) {
            if (t) {
                const e = n.filter((e => e.tag === t)), r = e.find((e => !e.format)) || e[0];
                if (!r) throw new Error(`Tag ${t} not found`);
                return r
            }
            return n.find((t => t.identify && t.identify(e) && !t.format))
        }(e, t, h);
        if (!u) {
            if (e && "function" == typeof e.toJSON && (e = e.toJSON()), !e || "object" != typeof e) return new F(e);
            u = e instanceof Map ? l : Symbol.iterator in Object(e) ? c : l
        }
        o && (o(u), delete n.onTagObj);
        const f = {value: void 0, node: void 0};
        if (e && "object" == typeof e) {
            const t = s.get(e);
            if (t) return a(t);
            f.value = e, s.set(e, f)
        }
        const p = (null == u ? void 0 : u.createNode) ? u.createNode(n.schema, e, n) : new F(e);
        return t && (p.tag = t), f.node = p, p
    }

    function _(e, t, n) {
        return n ? n.includes("\n") ? `${e}\n` + n.replace(/^/gm, `${t || ""}#`) : e.endsWith(" ") ? `${e}#${n}` : `${e} #${n}` : e
    }

    const $ = "flow",
        W = "block",
        G = "quoted"

    function K(e, t, n = "flow", {
        indentAtStart: r,
        lineWidth: i = 80,
        minContentWidth: a = 20,
        onFold: o,
        onOverflow: s
    } = {}) {
        if (!i || i < 0) return e;
        const l = Math.max(1 + a, 1 + i - t.length);
        if (e.length <= l) return e;
        const c = [], h = {};
        let u, f, p = i - t.length;
        "number" == typeof r && (r > i - Math.max(2, a) ? c.push(0) : p = i - r);
        let d, m = !1, v = -1, g = -1, M = -1;
        for (n === W && (v = Y(e, v), -1 !== v && (p = v + l)); d = e[v += 1];) {
            if (n === G && "\\" === d) {
                switch (g = v, e[v + 1]) {
                    case"x":
                        v += 3;
                        break;
                    case"u":
                        v += 5;
                        break;
                    case"U":
                        v += 9;
                        break;
                    default:
                        v += 1
                }
                M = v
            }
            if ("\n" === d) n === W && (v = Y(e, v)), p = v + l, u = void 0; else {
                if (" " === d && f && " " !== f && "\n" !== f && "\t" !== f) {
                    const t = e[v + 1];
                    t && " " !== t && "\n" !== t && "\t" !== t && (u = v)
                }
                if (v >= p) if (u) c.push(u), p = u + l, u = void 0; else if (n === G) {
                    for (; " " === f || "\t" === f;) f = d, d = e[v += 1], m = !0;
                    const t = v > M + 1 ? v - 2 : g - 1;
                    if (h[t]) return e;
                    c.push(t), h[t] = !0, p = t + l, u = void 0
                } else m = !0
            }
            f = d
        }
        if (m && s && s(), 0 === c.length) return e;
        o && o();
        let y = e.slice(0, c[0]);
        for (let r = 0; r < c.length; ++r) {
            const i = c[r], a = c[r + 1] || e.length;
            0 === i ? y = `\n${t}${e.slice(0, a)}` : (n === G && h[i] && (y += `${e[i]}\\`), y += `\n${t}${e.slice(i + 1, a)}`)
        }
        return y
    }

    function Y(e, t) {
        let n = e[t + 1];
        for (; " " === n || "\t" === n;) {
            do {
                n = e[t += 1]
            } while (n && "\n" !== n);
            n = e[t + 1]
        }
        return t
    }

    const X = e => ({
            indentAtStart: e.indentAtStart,
            lineWidth: e.options.lineWidth,
            minContentWidth: e.options.minContentWidth
        }),
        J = e => /^(%|---|\.\.\.)/m.test(e);

    function Q(e, t) {
        const n = JSON.stringify(e);
        if (t.options.doubleQuotedAsJSON) return n;
        const {implicitKey: r} = t, i = t.options.doubleQuotedMinMultiLineLength,
            a = t.indent || (J(e) ? "  " : "");
        let o = "", s = 0;
        for (let e = 0, t = n[e]; t; t = n[++e]) if (" " === t && "\\" === n[e + 1] && "n" === n[e + 2] && (o += n.slice(s, e) + "\\ ", e += 1, s = e, t = "\\"), "\\" === t) switch (n[e + 1]) {
            case"u": {
                o += n.slice(s, e);
                const t = n.substr(e + 2, 4);
                switch (t) {
                    case"0000":
                        o += "\\0";
                        break;
                    case"0007":
                        o += "\\a";
                        break;
                    case"000b":
                        o += "\\v";
                        break;
                    case"001b":
                        o += "\\e";
                        break;
                    case"0085":
                        o += "\\N";
                        break;
                    case"00a0":
                        o += "\\_";
                        break;
                    case"2028":
                        o += "\\L";
                        break;
                    case"2029":
                        o += "\\P";
                        break;
                    default:
                        "00" === t.substr(0, 2) ? o += "\\x" + t.substr(2) : o += n.substr(e, 6)
                }
                e += 5, s = e + 1
            }
                break;
            case"n":
                if (r || '"' === n[e + 2] || n.length < i) e += 1; else {
                    for (o += n.slice(s, e) + "\n\n"; "\\" === n[e + 2] && "n" === n[e + 3] && '"' !== n[e + 4];) o += "\n", e += 2;
                    o += a, " " === n[e + 2] && (o += "\\"), e += 1, s = e + 1
                }
                break;
            default:
                e += 1
        }
        return o = s ? o + n.slice(s) : n, r ? o : K(o, a, G, X(t))
    }

    function ee(e, t) {
        if (t.implicitKey) {
            if (/\n/.test(e)) return Q(e, t)
        } else if (/[ \t]\n|\n[ \t]/.test(e)) return Q(e, t);
        const n = t.indent || (J(e) ? "  " : ""), r = "'" + e.replace(/'/g, "''").replace(/\n+/g, `$&\n${n}`) + "'";
        return t.implicitKey ? r : K(r, n, $, X(t))
    }

    function te({comment: e, type: t, value: n}, r, i, a) {
        if (/\n[\t ]+$/.test(n) || /^\s*$/.test(n)) return Q(n, r);
        const o = r.indent || (r.forceBlockIndent || J(n) ? "  " : ""), s = o ? "2" : "1",
            l = t !== F.BLOCK_FOLDED && (t === F.BLOCK_LITERAL || !function (e, t, n) {
                if (!t || t < 0) return !1;
                const r = t - n, i = e.length;
                if (i <= r) return !1;
                for (let t = 0, n = 0; t < i; ++t) if ("\n" === e[t]) {
                    if (t - n > r) return !0;
                    if (n = t + 1, i - n <= r) return !1
                }
                return !0
            }(n, r.options.lineWidth, o.length));
        let c = l ? "|" : ">";
        if (!n) return c + "\n";
        let h = "", u = "";
        if (n = n.replace(/[\n\t ]*$/, (e => {
            const t = e.indexOf("\n");
            return -1 === t ? c += "-" : n !== e && t === e.length - 1 || (c += "+", a && a()), u = e.replace(/\n$/, ""), ""
        })).replace(/^[\n ]*/, (e => {
            -1 !== e.indexOf(" ") && (c += s);
            const t = e.match(/ +$/);
            return t ? (h = e.slice(0, -t[0].length), t[0]) : (h = e, "")
        })), u && (u = u.replace(/\n+(?!\n|$)/g, `$&${o}`)), h && (h = h.replace(/\n+/g, `$&${o}`)), e && (c += " #" + e.replace(/ ?[\r\n]+/g, " "), i && i()), !n) return `${c}${s}\n${o}${u}`;
        if (l) return n = n.replace(/\n+/g, `$&${o}`), `${c}\n${o}${h}${n}${u}`;
        n = n.replace(/\n+/g, "\n$&").replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g, "$1$2").replace(/\n+/g, `$&${o}`);
        const f = K(`${h}${n}${u}`, o, W, X(r));
        return `${c}\n${o}${f}`
    }

    function ne(e, t, n, r) {
        const {implicitKey: i, inFlow: a} = t,
            o = "string" == typeof e.value ? e : Object.assign({}, e, {value: String(e.value)});
        let {type: s} = e;
        s !== F.QUOTE_DOUBLE && /[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(o.value) && (s = F.QUOTE_DOUBLE);
        const l = e => {
            switch (e) {
                case F.BLOCK_FOLDED:
                case F.BLOCK_LITERAL:
                    return i || a ? Q(o.value, t) : te(o, t, n, r);
                case F.QUOTE_DOUBLE:
                    return Q(o.value, t);
                case F.QUOTE_SINGLE:
                    return ee(o.value, t);
                case F.PLAIN:
                    return function (e, t, n, r) {
                        var i;
                        const {comment: a, type: o, value: s} = e, {
                            actualString: l,
                            implicitKey: c,
                            indent: h,
                            inFlow: u
                        } = t;
                        if (c && /[\n[\]{},]/.test(s) || u && /[[\]{},]/.test(s)) return Q(s, t);
                        if (!s || /^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(s)) {
                            const i = -1 !== s.indexOf('"'), a = -1 !== s.indexOf("'");
                            let o;
                            return o = i && !a ? ee : a && !i ? Q : t.options.singleQuote ? ee : Q, c || u || -1 === s.indexOf("\n") ? o(s, t) : te(e, t, n, r)
                        }
                        if (!c && !u && o !== F.PLAIN && -1 !== s.indexOf("\n")) return te(e, t, n, r);
                        if ("" === h && J(s)) return t.forceBlockIndent = !0, te(e, t, n, r);
                        const f = s.replace(/\n+/g, `$&\n${h}`);
                        if (l) for (const e of t.doc.schema.tags) if (e.default && "tag:yaml.org,2002:str" !== e.tag && (null === (i = e.test) || void 0 === i ? void 0 : i.test(f))) return Q(s, t);
                        const p = c ? f : K(f, h, $, X(t));
                        return !a || u || -1 === p.indexOf("\n") && -1 === a.indexOf("\n") ? p : (n && n(), function (e, t, n) {
                            return n ? `#${n.replace(/[\s\S]^/gm, `$&${t}#`)}\n${t}${e}` : e
                        }(p, h, a))
                    }(o, t, n, r);
                default:
                    return null
            }
        };
        let c = l(s);
        if (null === c) {
            const {defaultKeyType: e, defaultStringType: n} = t.options, r = i && e || n;
            if (c = l(r), null === c) throw new Error(`Unsupported default string type ${r}`)
        }
        return c
    }

    const re = (e, t) => ({
        anchors: Object.create(null),
        doc: e,
        indent: "",
        indentStep: "number" == typeof t.indent ? " ".repeat(t.indent) : "  ",
        options: Object.assign({
            defaultKeyType: null,
            defaultStringType: "PLAIN",
            directives: null,
            doubleQuotedAsJSON: !1,
            doubleQuotedMinMultiLineLength: 40,
            falseStr: "false",
            indentSeq: !0,
            lineWidth: 80,
            minContentWidth: 20,
            nullStr: "null",
            simpleKeys: !1,
            singleQuote: !1,
            trueStr: "true"
        }, t)
    });

    function ie(e, t, n, r) {
        if (L(e)) return e.toString(t, n, r);
        if (x(e)) return e.toString(t);
        let i;
        const a = T(e) ? e : t.doc.createNode(e, {onTagObj: e => i = e});
        i || (i = function (e, t) {
            if (t.tag) {
                const n = e.filter((e => e.tag === t.tag));
                if (n.length > 0) return n.find((e => e.format === t.format)) || n[0]
            }
            let n, r;
            if (E(t)) {
                r = t.value;
                const i = e.filter((e => e.identify && e.identify(r)));
                n = i.find((e => e.format === t.format)) || i.find((e => !e.format))
            } else r = t, n = e.find((e => e.nodeClass && r instanceof e.nodeClass));
            if (!n) {
                const e = r && r.constructor ? r.constructor.name : typeof r;
                throw new Error(`Tag not resolved for ${e} value`)
            }
            return n
        }(t.doc.schema.tags, a));
        const o = function (e, t, {anchors: n, doc: r}) {
            const i = [], a = r.anchors.getName(e);
            return a && (n[a] = e, i.push(`&${a}`)), e.tag ? i.push(r.directives.tagString(e.tag)) : t.default || i.push(r.directives.tagString(t.tag)), i.join(" ")
        }(a, i, t);
        o.length > 0 && (t.indentAtStart = (t.indentAtStart || 0) + o.length + 1);
        const s = "function" == typeof i.stringify ? i.stringify(a, t, n, r) : E(a) ? ne(a, t, n, r) : a.toString(t, n, r);
        return o ? E(a) || "{" === s[0] || "[" === s[0] ? `${o} ${s}` : `${o}\n${t.indent}${s}` : s
    }

    function ae(e, t, n) {
        let r = n;
        for (let e = t.length - 1; e >= 0; --e) {
            const n = t[e];
            if ("number" == typeof n && Number.isInteger(n) && n >= 0) {
                const e = [];
                e[n] = r, r = e
            } else {
                const e = {};
                Object.defineProperty(e, "symbol" == typeof n ? n : String(n), {
                    value: r,
                    writable: !0,
                    enumerable: !0,
                    configurable: !0
                }), r = e
            }
        }
        return U(r, void 0, {
            onAlias() {
                throw new Error("Repeated objects are not supported here")
            }, prevObjects: new Map, schema: e
        })
    }

    const oe = e => null == e || "object" == typeof e && !!e[Symbol.iterator]().next().done;

    class se extends V {
        constructor(e, t) {
            super(e), Object.defineProperty(this, "schema", {
                value: t,
                configurable: !0,
                enumerable: !1,
                writable: !0
            })
        }

        addIn(e, t) {
            if (oe(e)) this.add(t); else {
                const [n, ...r] = e, i = this.get(n, !0);
                if (H(i)) i.addIn(r, t); else {
                    if (void 0 !== i || !this.schema) throw new Error(`Expected YAML collection at ${n}. Remaining path: ${r}`);
                    this.set(n, ae(this.schema, r, t))
                }
            }
        }

        deleteIn([e, ...t]) {
            if (0 === t.length) return this.delete(e);
            const n = this.get(e, !0);
            if (H(n)) return n.deleteIn(t);
            throw new Error(`Expected YAML collection at ${e}. Remaining path: ${t}`)
        }

        getIn([e, ...t], n) {
            const r = this.get(e, !0);
            return 0 === t.length ? !n && E(r) ? r.value : r : H(r) ? r.getIn(t, n) : void 0
        }

        hasAllNullValues(e) {
            return this.items.every((t => {
                if (!t || T(t)) return !1;
                const n = t.value;
                return null == n || e && E(n) && null == n.value && !n.commentBefore && !n.comment && !n.tag
            }))
        }

        hasIn([e, ...t]) {
            if (0 === t.length) return this.has(e);
            const n = this.get(e, !0);
            return !!H(n) && n.hasIn(t)
        }

        setIn([e, ...t], n) {
            if (0 === t.length) this.set(e, n); else {
                const r = this.get(e, !0);
                if (H(r)) r.setIn(t, n); else {
                    if (void 0 !== r || !this.schema) throw new Error(`Expected YAML collection at ${e}. Remaining path: ${t}`);
                    this.set(e, ae(this.schema, t, n))
                }
            }
        }

        _toString(e, {blockItem: t, flowChars: n, itemIndent: r}, i, a) {
            const {indent: o, indentStep: s} = e, l = this.flow || e.inFlow;
            l && (r += s), e = Object.assign({}, e, {indent: r, inFlow: l, type: null});
            let c = !1, h = !1;
            const u = this.items.reduce(((t, n, i) => {
                let a = null;
                if (T(n) || L(n)) {
                    if (!c && n.spaceBefore && t.push({
                        type: "comment",
                        str: ""
                    }), n.commentBefore) for (const e of n.commentBefore.match(/^.*$/gm)) t.push({
                        type: "comment",
                        str: `#${e}`
                    });
                    n.comment && (a = n.comment);
                    const e = n;
                    l && (!c && n.spaceBefore || n.commentBefore || n.comment || e.key && (e.key.commentBefore || e.key.comment) || e.value && (e.value.commentBefore || e.value.comment)) && (h = !0)
                }
                c = !1;
                let o = ie(n, e, (() => a = null), (() => c = !0));
                return l && !h && o.includes("\n") && (h = !0), l && i < this.items.length - 1 && (o += ","), o = _(o, r, a), c && (a || l) && (c = !1), t.push({
                    type: "item",
                    str: o
                }), t
            }), []);
            let f;
            if (0 === u.length) f = n.start + n.end; else if (l) {
                const {start: e, end: t} = n, r = u.map((e => e.str));
                if (h || r.reduce(((e, t) => e + t.length + 2), 2) > se.maxFlowStringSingleLineLength) {
                    f = e;
                    for (const e of r) f += e ? `\n${s}${o}${e}` : "\n";
                    f += `\n${o}${t}`
                } else f = `${e} ${r.join(" ")} ${t}`
            } else {
                const e = u.map(t);
                f = e.shift() || "";
                for (const t of e) f += t ? `\n${o}${t}` : "\n"
            }
            return this.comment ? (f += "\n" + this.comment.replace(/^/gm, `${o}#`), i && i()) : c && a && a(), f
        }
    }

    function le(e, t) {
        "debug" !== e && "warn" !== e || ("undefined" != typeof process && process.emitWarning ? process.emitWarning(t) : console.warn(t))
    }

    function ce(e, t, n) {
        const r = U(e, void 0, n), i = U(t, void 0, n);
        return new ue(r, i)
    }

    se.maxFlowStringSingleLineLength = 60;

    function he(e, t, n) {
        if (!x(n) || !A(n.source)) throw new Error("Merge sources must be map aliases");
        const r = n.source.toJSON(null, e, Map);
        for (const [e, n] of r) t instanceof Map ? t.has(e) || t.set(e, n) : t instanceof Set ? t.add(e) : Object.prototype.hasOwnProperty.call(t, e) || Object.defineProperty(t, e, {
            value: n,
            writable: !0,
            enumerable: !0,
            configurable: !0
        });
        return t
    }

    class ue extends V {
        constructor(e, t = null) {
            super(y), this.key = e, this.value = t
        }

        get commentBefore() {
            return T(this.key) ? this.key.commentBefore : void 0
        }

        set commentBefore(e) {
            if (null == this.key && (this.key = new F(null)), !T(this.key)) {
                throw new Error("Pair.commentBefore is an alias for Pair.key.commentBefore. To set it, the key must be a Node.")
            }
            this.key.commentBefore = e
        }

        get spaceBefore() {
            return T(this.key) ? this.key.spaceBefore : void 0
        }

        set spaceBefore(e) {
            if (null == this.key && (this.key = new F(null)), !T(this.key)) {
                throw new Error("Pair.spaceBefore is an alias for Pair.key.spaceBefore. To set it, the key must be a Node.")
            }
            this.key.spaceBefore = e
        }

        addToJSMap(e, t) {
            if (e && e.doc.schema.merge && ((n = this.key) === ue.MERGE_KEY || E(n) && n.value === ue.MERGE_KEY && (!n.type || n.type === F.PLAIN))) if (S(this.value)) for (const n of this.value.items) he(e, t, n); else if (Array.isArray(this.value)) for (const n of this.value) he(e, t, n); else he(e, t, this.value); else {
                const n = R(this.key, "", e);
                if (t instanceof Map) {
                    const r = R(this.value, n, e);
                    t.set(n, r)
                } else if (t instanceof Set) t.add(n); else {
                    const r = function (e, t, n) {
                        if (null === t) return "";
                        if ("object" != typeof t) return String(t);
                        if (T(e) && n && n.doc) {
                            const t = re(n.doc, {});
                            t.inFlow = !0, t.inStringifyKey = !0;
                            const r = e.toString(t);
                            if (!n.mapKeyWarned) {
                                let e = JSON.stringify(r);
                                e.length > 40 && (e = e.substring(0, 36) + '..."'), le(n.doc.options.logLevel, `Keys with collection values will be stringified due to JS Object restrictions: ${e}. Set mapAsMap: true to use object keys.`), n.mapKeyWarned = !0
                            }
                            return r
                        }
                        return JSON.stringify(t)
                    }(this.key, n, e), i = R(this.value, r, e);
                    r in t ? Object.defineProperty(t, r, {
                        value: i,
                        writable: !0,
                        enumerable: !0,
                        configurable: !0
                    }) : t[r] = i
                }
            }
            var n;
            return t
        }

        toJSON(e, t) {
            const n = t && t.mapAsMap ? new Map : {};
            return this.addToJSMap(t, n)
        }

        toString(e, t, n) {
            if (!e || !e.doc) return JSON.stringify(this);
            const {allNullValues: r, doc: i, indent: a, indentStep: o, options: {indentSeq: s, simpleKeys: l}} = e;
            let {key: c, value: h} = this, u = T(c) && c.comment || null;
            if (l) {
                if (u) throw new Error("With simple keys, key nodes cannot have comments");
                if (H(c)) {
                    throw new Error("With simple keys, collection cannot be used as a key value")
                }
            }
            let f = !l && (!c || u && null == h || H(c) || (E(c) ? c.type === F.BLOCK_FOLDED || c.type === F.BLOCK_LITERAL : "object" == typeof c));
            e = Object.assign({}, e, {allNullValues: !1, implicitKey: !f && (l || !r), indent: a + o});
            let p = !1, d = ie(c, e, (() => u = null), (() => p = !0));
            if (!f && !e.inFlow && d.length > 1024) {
                if (l) throw new Error("With simple keys, single line scalar must not span more than 1024 characters");
                f = !0
            }
            if (r && (!l || e.inFlow) || null == h && (f || e.inFlow)) return d = _(d, e.indent, u), this.comment ? (u && !this.comment.includes("\n") ? d += `\n${e.indent || ""}#${this.comment}` : d = _(d, e.indent, this.comment), t && t()) : p && !u && n && n(), e.inFlow && !f ? d : `? ${d}`;
            d = f ? `? ${_(d, e.indent, u)}\n${a}:` : _(`${d}:`, e.indent, u), this.comment && (!u || f || this.comment.includes("\n") ? d = _(d, e.indent, this.comment) : d += `\n${e.indent || ""}#${this.comment}`, t && t());
            let m = "", v = null;
            if (T(h)) {
                if (h.spaceBefore && (m = "\n"), h.commentBefore) {
                    m += `\n${h.commentBefore.replace(/^/gm, `${e.indent}#`)}`
                }
                v = h.comment
            } else h && "object" == typeof h && (h = i.createNode(h));
            e.implicitKey = !1, f || u || this.comment || !E(h) || (e.indentAtStart = d.length + 1), p = !1, s || !(o.length >= 2) || e.inFlow || f || !S(h) || h.flow || h.tag || i.anchors.getName(h) || (e.indent = e.indent.substr(2));
            const g = ie(h, e, (() => v = null), (() => p = !0));
            let M = " ";
            if (m || u || this.comment) M = `${m}\n${e.indent}`; else if (!f && H(h)) {
                ("[" === g[0] || "{" === g[0]) && !g.includes("\n") || (M = `\n${e.indent}`)
            } else "\n" === g[0] && (M = "");
            return p && !v && n && n(), _(d + M + g, e.indent, v)
        }
    }

    ue.MERGE_KEY = "<<";
    const fe = {
        anchorPrefix: "a",
        intAsBigInt: !1,
        keepUndefined: !1,
        logLevel: "warn",
        prettyErrors: !0,
        strict: !0,
        version: "1.2"
    };

    class pe extends se {
        constructor(e) {
            super(w, e), this.items = []
        }

        static get tagName() {
            return "tag:yaml.org,2002:seq"
        }

        add(e) {
            this.items.push(e)
        }

        delete(e) {
            const t = de(e);
            if ("number" != typeof t) return !1;
            return this.items.splice(t, 1).length > 0
        }

        get(e, t) {
            const n = de(e);
            if ("number" != typeof n) return;
            const r = this.items[n];
            return !t && E(r) ? r.value : r
        }

        has(e) {
            const t = de(e);
            return "number" == typeof t && t < this.items.length
        }

        set(e, t) {
            const n = de(e);
            if ("number" != typeof n) throw new Error(`Expected a valid index, not ${e}.`);
            const r = this.items[n];
            E(r) && j(t) ? r.value = t : this.items[n] = t
        }

        toJSON(e, t) {
            const n = [];
            t && t.onCreate && t.onCreate(n);
            let r = 0;
            for (const e of this.items) n.push(R(e, String(r++), t));
            return n
        }

        toString(e, t, n) {
            return e ? super._toString(e, {
                blockItem: e => "comment" === e.type ? e.str : `- ${e.str}`,
                flowChars: {start: "[", end: "]"},
                itemIndent: (e.indent || "") + "  "
            }, t, n) : JSON.stringify(this)
        }
    }

    function de(e) {
        let t = E(e) ? e.value : e;
        return t && "string" == typeof t && (t = Number(t)), "number" == typeof t && Number.isInteger(t) && t >= 0 ? t : null
    }

    class me {
        constructor(e) {
            this.map = Object.create(null), this.prefix = e
        }

        createAlias(e, t) {
            return this.setAnchor(e, t), new Z(e)
        }

        createMergePair(...e) {
            const t = new F(ue.MERGE_KEY), n = e.map((e => {
                if (x(e)) {
                    if (A(e.source)) return e
                } else if (A(e)) return this.createAlias(e);
                throw new Error("Merge sources must be Map nodes or their Aliases")
            }));
            if (1 === n.length) return new ue(t, n[0]);
            const r = new pe;
            return r.items = n, new ue(t, r)
        }

        getName(e) {
            return Object.keys(this.map).find((t => this.map[t] === e))
        }

        getNames() {
            return Object.keys(this.map)
        }

        getNode(e) {
            return this.map[e]
        }

        newName(e) {
            e || (e = this.prefix);
            const t = Object.keys(this.map);
            for (let n = 1; ; ++n) {
                const r = `${e}${n}`;
                if (!t.includes(r)) return r
            }
        }

        setAnchor(e, t) {
            const {map: n} = this;
            if (!e) return t ? (delete n[t], t) : null;
            if (!E(e) && !H(e)) throw new Error("Anchors may only be set for Scalar, Seq and Map nodes");
            if (t) {
                if (/[\x00-\x19\s,[\]{}]/.test(t)) throw new Error("Anchor names must not contain whitespace or control characters");
                const r = n[t];
                r && r !== e && (n[this.newName(t)] = r)
            }
            const r = Object.keys(n).find((t => n[t] === e));
            if (r) {
                if (!t || r === t) return r;
                delete n[r]
            } else t || (t = this.newName());
            return n[t] = e, t
        }
    }

    function ve({format: e, minFractionDigits: t, tag: n, value: r}) {
        if ("bigint" == typeof r) return String(r);
        const i = "number" == typeof r ? r : Number(r);
        if (!isFinite(i)) return isNaN(i) ? ".nan" : i < 0 ? "-.inf" : ".inf";
        let a = JSON.stringify(r);
        if (!e && t && (!n || "tag:yaml.org,2002:float" === n) && /^\d/.test(a)) {
            let e = a.indexOf(".");
            e < 0 && (e = a.length, a += ".");
            let n = t - (a.length - e - 1);
            for (; n-- > 0;) a += "0"
        }
        return a
    }

    function ge(e, t) {
        const n = E(t) ? t.value : t;
        for (const r of e) if (L(r)) {
            if (r.key === t || r.key === n) return r;
            if (E(r.key) && r.key.value === n) return r
        }
    }

    class Me extends se {
        constructor(e) {
            super(M, e), this.items = []
        }

        static get tagName() {
            return "tag:yaml.org,2002:map"
        }

        add(e, t) {
            let n;
            n = L(e) ? e : new ue(e && "object" == typeof e && "key" in e ? e.key : e, e.value);
            const r = ge(this.items, n.key), i = this.schema && this.schema.sortMapEntries;
            if (r) {
                if (!t) throw new Error(`Key ${n.key} already set`);
                E(r.value) && j(n.value) ? r.value.value = n.value : r.value = n.value
            } else if (i) {
                const e = this.items.findIndex((e => i(n, e) < 0));
                -1 === e ? this.items.push(n) : this.items.splice(e, 0, n)
            } else this.items.push(n)
        }

        delete(e) {
            const t = ge(this.items, e);
            if (!t) return !1;
            return this.items.splice(this.items.indexOf(t), 1).length > 0
        }

        get(e, t) {
            const n = ge(this.items, e), r = n && n.value;
            return !t && E(r) ? r.value : r
        }

        has(e) {
            return !!ge(this.items, e)
        }

        set(e, t) {
            this.add(new ue(e, t), !0)
        }

        toJSON(e, t, n) {
            const r = n ? new n : t && t.mapAsMap ? new Map : {};
            t && t.onCreate && t.onCreate(r);
            for (const e of this.items) e.addToJSMap(t, r);
            return r
        }

        toString(e, t, n) {
            if (!e) return JSON.stringify(this);
            for (const e of this.items) if (!L(e)) throw new Error(`Map items must all be pairs; found ${JSON.stringify(e)} instead`);
            return !e.allNullValues && this.hasAllNullValues(!1) && (e = Object.assign({}, e, {allNullValues: !0})), super._toString(e, {
                blockItem: e => e.str,
                flowChars: {start: "{", end: "}"},
                itemIndent: e.indent || ""
            }, t, n)
        }
    }

    const ye = {
        collection: "map",
        createNode: function (e, t, n) {
            const {keepUndefined: r, replacer: i} = n, a = new Me(e), o = (e, o) => {
                if ("function" == typeof i) o = i.call(t, e, o); else if (Array.isArray(i) && !i.includes(e)) return;
                (void 0 !== o || r) && a.items.push(ce(e, o, n))
            };
            if (t instanceof Map) for (const [e, n] of t) o(e, n); else if (t && "object" == typeof t) for (const e of Object.keys(t)) o(e, t[e]);
            return "function" == typeof e.sortMapEntries && a.items.sort(e.sortMapEntries), a
        },
        default: !0,
        nodeClass: Me,
        tag: "tag:yaml.org,2002:map",
        resolve: (e, t) => (A(e) || t("Expected a mapping for this tag"), e)
    };
    const be = {
            collection: "seq",
            createNode: function (e, t, n) {
                const {replacer: r} = n, i = new pe(e);
                if (t && Symbol.iterator in Object(t)) {
                    let e = 0;
                    for (let a of t) {
                        if ("function" == typeof r) {
                            const n = t instanceof Set ? a : String(e++);
                            a = r.call(t, n, a)
                        }
                        i.items.push(U(a, void 0, n))
                    }
                }
                return i
            },
            default: !0,
            nodeClass: pe,
            tag: "tag:yaml.org,2002:seq",
            resolve: (e, t) => (S(e) || t("Expected a sequence for this tag"), e)
        },
        we = [ye, be, {
            identify: e => "string" == typeof e,
            default: !0,
            tag: "tag:yaml.org,2002:str",
            resolve: e => e,
            stringify: (e, t, n, r) => ne(e, t = Object.assign({actualString: !0}, t), n, r)
        }],
        ke = e => "bigint" == typeof e || Number.isInteger(e),
        xe = (e, t, n, {intAsBigInt: r}) => r ? BigInt(e) : parseInt(e.substring(t), n);

    function Ce(e, t, n) {
        const {value: r} = e;
        return ke(r) && r >= 0 ? n + r.toString(t) : ve(e)
    }

    const Ae = {
            identify: e => null == e,
            createNode: () => new F(null),
            default: !0,
            tag: "tag:yaml.org,2002:null",
            test: /^(?:~|[Nn]ull|NULL)?$/,
            resolve: () => new F(null),
            stringify: ({source: e}, t) => e && Ae.test.test(e) ? e : t.options.nullStr
        },
        Le = {
            identify: e => "boolean" == typeof e,
            default: !0,
            tag: "tag:yaml.org,2002:bool",
            test: /^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,
            resolve: e => new F("t" === e[0] || "T" === e[0]),
            stringify({source: e, value: t}, n) {
                if (e && Le.test.test(e)) {
                    if (t === ("t" === e[0] || "T" === e[0])) return e
                }
                return t ? n.options.trueStr : n.options.falseStr
            }
        },
        Ee = {
            identify: e => ke(e) && e >= 0,
            default: !0,
            tag: "tag:yaml.org,2002:int",
            format: "OCT",
            test: /^0o[0-7]+$/,
            resolve: (e, t, n) => xe(e, 2, 8, n),
            stringify: e => Ce(e, 8, "0o")
        },
        Se = {
            identify: ke,
            default: !0,
            tag: "tag:yaml.org,2002:int",
            test: /^[-+]?[0-9]+$/,
            resolve: (e, t, n) => xe(e, 0, 10, n),
            stringify: ve
        },
        He = {
            identify: e => ke(e) && e >= 0,
            default: !0,
            tag: "tag:yaml.org,2002:int",
            format: "HEX",
            test: /^0x[0-9a-fA-F]+$/,
            resolve: (e, t, n) => xe(e, 2, 16, n),
            stringify: e => Ce(e, 16, "0x")
        },
        Te = {
            identify: e => "number" == typeof e,
            default: !0,
            tag: "tag:yaml.org,2002:float",
            test: /^(?:[-+]?\.(?:inf|Inf|INF|nan|NaN|NAN))$/,
            resolve: e => "nan" === e.slice(-3).toLowerCase() ? NaN : "-" === e[0] ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY,
            stringify: ve
        },
        Ve = {
            identify: e => "number" == typeof e,
            default: !0,
            tag: "tag:yaml.org,2002:float",
            format: "EXP",
            test: /^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/,
            resolve: e => parseFloat(e),
            stringify: ({value: e}) => Number(e).toExponential()
        },
        Oe = {
            identify: e => "number" == typeof e,
            default: !0,
            tag: "tag:yaml.org,2002:float",
            test: /^[-+]?(?:\.[0-9]+|[0-9]+\.[0-9]*)$/,
            resolve(e) {
                const t = new F(parseFloat(e)), n = e.indexOf(".");
                return -1 !== n && "0" === e[e.length - 1] && (t.minFractionDigits = e.length - n - 1), t
            },
            stringify: ve
        },
        Ne = we.concat([Ae, Le, Ee, Se, He, Te, Ve, Oe]);

    function Pe(e) {
        return "bigint" == typeof e || Number.isInteger(e)
    }

    const Ie = ({value: e}) => JSON.stringify(e),
        De = [ye, be].concat([{
            identify: e => "string" == typeof e,
            default: !0,
            tag: "tag:yaml.org,2002:str",
            resolve: e => e,
            stringify: Ie
        }, {
            identify: e => null == e,
            createNode: () => new F(null),
            default: !0,
            tag: "tag:yaml.org,2002:null",
            test: /^null$/,
            resolve: () => null,
            stringify: Ie
        }, {
            identify: e => "boolean" == typeof e,
            default: !0,
            tag: "tag:yaml.org,2002:bool",
            test: /^true|false$/,
            resolve: e => "true" === e,
            stringify: Ie
        }, {
            identify: Pe,
            default: !0,
            tag: "tag:yaml.org,2002:int",
            test: /^-?(?:0|[1-9][0-9]*)$/,
            resolve: (e, t, {intAsBigInt: n}) => n ? BigInt(e) : parseInt(e, 10),
            stringify: ({value: e}) => Pe(e) ? e.toString() : JSON.stringify(e)
        }, {
            identify: e => "number" == typeof e,
            default: !0,
            tag: "tag:yaml.org,2002:float",
            test: /^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,
            resolve: e => parseFloat(e),
            stringify: Ie
        }], {
            default: !0,
            tag: "",
            test: /^/,
            resolve: (e, t) => (t(`Unresolved plain scalar ${JSON.stringify(e)}`), e)
        }),
        qe = {
            identify: e => e instanceof Uint8Array, default: !1, tag: "tag:yaml.org,2002:binary", resolve(e, t) {
                if ("function" == typeof Buffer) return Buffer.from(e, "base64");
                if ("function" == typeof atob) {
                    const t = atob(e.replace(/[\n\r]/g, "")), n = new Uint8Array(t.length);
                    for (let e = 0; e < t.length; ++e) n[e] = t.charCodeAt(e);
                    return n
                }
                return t("This environment does not support reading binary tags; either Buffer or atob is required"), e
            }, stringify({comment: e, type: t, value: n}, r, i, a) {
                const o = n;
                let s;
                if ("function" == typeof Buffer) s = o instanceof Buffer ? o.toString("base64") : Buffer.from(o.buffer).toString("base64"); else {
                    if ("function" != typeof btoa) throw new Error("This environment does not support writing binary tags; either Buffer or btoa is required");
                    {
                        let e = "";
                        for (let t = 0; t < o.length; ++t) e += String.fromCharCode(o[t]);
                        s = btoa(e)
                    }
                }
                if (t || (t = F.BLOCK_LITERAL), t !== F.QUOTE_DOUBLE) {
                    const e = Math.max(r.options.lineWidth - r.indent.length, r.options.minContentWidth),
                        n = Math.ceil(s.length / e), i = new Array(n);
                    for (let t = 0, r = 0; t < n; ++t, r += e) i[t] = s.substr(r, e);
                    s = i.join(t === F.BLOCK_LITERAL ? "\n" : " ")
                }
                return ne({comment: e, type: t, value: s}, r, i, a)
            }
        };

    function ze(e, t) {
        if (S(e)) for (let n = 0; n < e.items.length; ++n) {
            let r = e.items[n];
            if (!L(r)) {
                if (A(r)) {
                    r.items.length > 1 && t("Each pair must have its own sequence indicator");
                    const e = r.items[0] || new ue(null);
                    r.commentBefore && (e.commentBefore = e.commentBefore ? `${r.commentBefore}\n${e.commentBefore}` : r.commentBefore), r.comment && (e.comment = e.comment ? `${r.comment}\n${e.comment}` : r.comment), r = e
                }
                e.items[n] = L(r) ? r : new ue(r)
            }
        } else t("Expected a sequence for this tag");
        return e
    }

    function Re(e, t, n) {
        const {replacer: r} = n, i = new pe(e);
        i.tag = "tag:yaml.org,2002:pairs";
        let a = 0;
        if (t && Symbol.iterator in Object(t)) for (let e of t) {
            let o, s;
            if ("function" == typeof r && (e = r.call(t, String(a++), e)), Array.isArray(e)) {
                if (2 !== e.length) throw new TypeError(`Expected [key, value] tuple: ${e}`);
                o = e[0], s = e[1]
            } else if (e && e instanceof Object) {
                const t = Object.keys(e);
                if (1 !== t.length) throw new TypeError(`Expected { key: value } tuple: ${e}`);
                o = t[0], s = e[o]
            } else o = e;
            i.items.push(ce(o, s, n))
        }
        return i
    }

    const Ze = {collection: "seq", default: !1, tag: "tag:yaml.org,2002:pairs", resolve: ze, createNode: Re};

    class Be extends pe {
        constructor() {
            super(), this.add = Me.prototype.add.bind(this), this.delete = Me.prototype.delete.bind(this), this.get = Me.prototype.get.bind(this), this.has = Me.prototype.has.bind(this), this.set = Me.prototype.set.bind(this), this.tag = Be.tag
        }

        toJSON(e, t) {
            if (!t) return super.toJSON(e);
            const n = new Map;
            t && t.onCreate && t.onCreate(n);
            for (const e of this.items) {
                let r, i;
                if (L(e) ? (r = R(e.key, "", t), i = R(e.value, r, t)) : r = R(e, "", t), n.has(r)) throw new Error("Ordered maps must not include duplicate keys");
                n.set(r, i)
            }
            return n
        }
    }

    Be.tag = "tag:yaml.org,2002:omap";
    const je = {
        collection: "seq",
        identify: e => e instanceof Map,
        nodeClass: Be,
        default: !1,
        tag: "tag:yaml.org,2002:omap",
        resolve(e, t) {
            const n = ze(e, t), r = [];
            for (const {key: e} of n.items) E(e) && (r.includes(e.value) ? t(`Ordered maps must not include duplicate keys: ${e.value}`) : r.push(e.value));
            return Object.assign(new Be, n)
        },
        createNode(e, t, n) {
            const r = Re(e, t, n), i = new Be;
            return i.items = r.items, i
        }
    };

    class Fe extends Me {
        constructor(e) {
            super(e), this.tag = Fe.tag
        }

        add(e) {
            let t;
            t = L(e) ? e : "object" == typeof e && "key" in e && "value" in e && null === e.value ? new ue(e.key, null) : new ue(e, null);
            ge(this.items, t.key) || this.items.push(t)
        }

        get(e, t) {
            const n = ge(this.items, e);
            return !t && L(n) ? E(n.key) ? n.key.value : n.key : n
        }

        set(e, t) {
            if ("boolean" != typeof t) throw new Error("Expected boolean value for set(key, value) in a YAML set, not " + typeof t);
            const n = ge(this.items, e);
            n && !t ? this.items.splice(this.items.indexOf(n), 1) : !n && t && this.items.push(new ue(e))
        }

        toJSON(e, t) {
            return super.toJSON(e, t, Set)
        }

        toString(e, t, n) {
            if (!e) return JSON.stringify(this);
            if (this.hasAllNullValues(!0)) return super.toString(Object.assign({}, e, {allNullValues: !0}), t, n);
            throw new Error("Set items must all have null values")
        }
    }

    Fe.tag = "tag:yaml.org,2002:set";
    const Ue = {
        collection: "map",
        identify: e => e instanceof Set,
        nodeClass: Fe,
        default: !1,
        tag: "tag:yaml.org,2002:set",
        resolve(e, t) {
            if (A(e)) {
                if (e.hasAllNullValues(!0)) return Object.assign(new Fe, e);
                t("Set items must all have null values")
            } else t("Expected a mapping for this tag");
            return e
        },
        createNode(e, t, n) {
            const {replacer: r} = n, i = new Fe(e);
            if (t && Symbol.iterator in Object(t)) for (let e of t) "function" == typeof r && (e = r.call(t, e, e)), i.items.push(ce(e, null, n));
            return i
        }
    };

    function _e(e, t) {
        const n = e[0], r = "-" === n || "+" === n ? e.substring(1) : e, i = e => t ? BigInt(e) : Number(e),
            a = r.replace(/_/g, "").split(":").reduce(((e, t) => e * i(60) + i(t)), i(0));
        return "-" === n ? i(-1) * a : a
    }

    function $e(e) {
        let {value: t} = e, n = e => e;
        if ("bigint" == typeof t) n = e => BigInt(e); else if (isNaN(t) || !isFinite(t)) return ve(e);
        let r = "";
        t < 0 && (r = "-", t *= n(-1));
        const i = n(60), a = [t % i];
        return t < 60 ? a.unshift(0) : (t = (t - a[0]) / i, a.unshift(t % i), t >= 60 && (t = (t - a[0]) / i, a.unshift(t))), r + a.map((e => e < 10 ? "0" + String(e) : String(e))).join(":").replace(/000000\d*$/, "")
    }

    const We = {
            identify: e => "bigint" == typeof e || Number.isInteger(e),
            default: !0,
            tag: "tag:yaml.org,2002:int",
            format: "TIME",
            test: /^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+$/,
            resolve: (e, t, {intAsBigInt: n}) => _e(e, n),
            stringify: $e
        },
        Ge = {
            identify: e => "number" == typeof e,
            default: !0,
            tag: "tag:yaml.org,2002:float",
            format: "TIME",
            test: /^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*$/,
            resolve: e => _e(e, !1),
            stringify: $e
        },
        Ke = {
            identify: e => e instanceof Date,
            default: !0,
            tag: "tag:yaml.org,2002:timestamp",
            test: RegExp("^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:(?:t|T|[ \\t]+)([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?)?$"),
            resolve(e) {
                const t = e.match(Ke.test);
                if (!t) throw new Error("!!timestamp expects a date, starting with yyyy-mm-dd");
                const [, n, r, i, a, o, s] = t.map(Number), l = t[7] ? Number((t[7] + "00").substr(1, 3)) : 0;
                let c = Date.UTC(n, r - 1, i, a || 0, o || 0, s || 0, l);
                const h = t[8];
                if (h && "Z" !== h) {
                    let e = _e(h, !1);
                    Math.abs(e) < 30 && (e *= 60), c -= 6e4 * e
                }
                return new Date(c)
            },
            stringify: ({value: e}) => e.toISOString().replace(/((T00:00)?:00)?\.000Z$/, "")
        },
        Ye = {
            identify: e => null == e,
            createNode: () => new F(null),
            default: !0,
            tag: "tag:yaml.org,2002:null",
            test: /^(?:~|[Nn]ull|NULL)?$/,
            resolve: () => new F(null),
            stringify: ({source: e}, t) => e && Ye.test.test(e) ? e : t.options.nullStr
        };

    function Xe({value: e, source: t}, n) {
        return t && (e ? Je : Qe).test.test(t) ? t : e ? n.options.trueStr : n.options.falseStr
    }

    const Je = {
            identify: e => !0 === e,
            default: !0,
            tag: "tag:yaml.org,2002:bool",
            test: /^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,
            resolve: () => new F(!0),
            stringify: Xe
        },
        Qe = {
            identify: e => !1 === e,
            default: !0,
            tag: "tag:yaml.org,2002:bool",
            test: /^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/i,
            resolve: () => new F(!1),
            stringify: Xe
        },
        et = e => "bigint" == typeof e || Number.isInteger(e);

    function tt(e, t, n, {intAsBigInt: r}) {
        const i = e[0];
        if ("-" !== i && "+" !== i || (t += 1), e = e.substring(t).replace(/_/g, ""), r) {
            switch (n) {
                case 2:
                    e = `0b${e}`;
                    break;
                case 8:
                    e = `0o${e}`;
                    break;
                case 16:
                    e = `0x${e}`
            }
            const t = BigInt(e);
            return "-" === i ? BigInt(-1) * t : t
        }
        const a = parseInt(e, n);
        return "-" === i ? -1 * a : a
    }

    function nt(e, t, n) {
        const {value: r} = e;
        if (et(r)) {
            const e = r.toString(t);
            return r < 0 ? "-" + n + e.substr(1) : n + e
        }
        return ve(e)
    }

    const rt = we.concat([Ye, Je, Qe, {
            identify: et,
            default: !0,
            tag: "tag:yaml.org,2002:int",
            format: "BIN",
            test: /^[-+]?0b[0-1_]+$/,
            resolve: (e, t, n) => tt(e, 2, 2, n),
            stringify: e => nt(e, 2, "0b")
        }, {
            identify: et,
            default: !0,
            tag: "tag:yaml.org,2002:int",
            format: "OCT",
            test: /^[-+]?0[0-7_]+$/,
            resolve: (e, t, n) => tt(e, 1, 8, n),
            stringify: e => nt(e, 8, "0")
        }, {
            identify: et,
            default: !0,
            tag: "tag:yaml.org,2002:int",
            test: /^[-+]?[0-9][0-9_]*$/,
            resolve: (e, t, n) => tt(e, 0, 10, n),
            stringify: ve
        }, {
            identify: et,
            default: !0,
            tag: "tag:yaml.org,2002:int",
            format: "HEX",
            test: /^[-+]?0x[0-9a-fA-F_]+$/,
            resolve: (e, t, n) => tt(e, 2, 16, n),
            stringify: e => nt(e, 16, "0x")
        }, {
            identify: e => "number" == typeof e,
            default: !0,
            tag: "tag:yaml.org,2002:float",
            test: /^[-+]?\.(?:inf|Inf|INF|nan|NaN|NAN)$/,
            resolve: e => "nan" === e.slice(-3).toLowerCase() ? NaN : "-" === e[0] ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY,
            stringify: ve
        }, {
            identify: e => "number" == typeof e,
            default: !0,
            tag: "tag:yaml.org,2002:float",
            format: "EXP",
            test: /^[-+]?(?:[0-9][0-9_]*)?(?:\.[0-9_]*)?[eE][-+]?[0-9]+$/,
            resolve: e => parseFloat(e.replace(/_/g, "")),
            stringify: ({value: e}) => Number(e).toExponential()
        }, {
            identify: e => "number" == typeof e,
            default: !0,
            tag: "tag:yaml.org,2002:float",
            test: /^[-+]?(?:[0-9][0-9_]*)?\.[0-9_]*$/,
            resolve(e) {
                const t = new F(parseFloat(e.replace(/_/g, ""))), n = e.indexOf(".");
                if (-1 !== n) {
                    const r = e.substring(n + 1).replace(/_/g, "");
                    "0" === r[r.length - 1] && (t.minFractionDigits = r.length)
                }
                return t
            },
            stringify: ve
        }], qe, je, Ze, Ue, We, Ge, Ke),
        it = {core: Ne, failsafe: we, json: De, yaml11: rt},
        at = {
            binary: qe,
            bool: Le,
            float: Oe,
            floatExp: Ve,
            floatNaN: Te,
            floatTime: Ge,
            int: Se,
            intHex: He,
            intOct: Ee,
            intTime: We,
            map: ye,
            null: Ae,
            omap: je,
            pairs: Ze,
            seq: be,
            set: Ue,
            timestamp: Ke
        };
    const ot = (e, t) => e.key < t.key ? -1 : e.key > t.key ? 1 : 0,
        st = {
            "tag:yaml.org,2002:binary": at.binary,
            "tag:yaml.org,2002:omap": at.omap,
            "tag:yaml.org,2002:pairs": at.pairs,
            "tag:yaml.org,2002:set": at.set,
            "tag:yaml.org,2002:timestamp": at.timestamp
        };

    class lt {
        constructor({customTags: e, merge: t, resolveKnownTags: n, schema: r, sortMapEntries: i}) {
            this.map = at.map, this.seq = at.seq, this.merge = !!t, this.name = r || "core", this.knownTags = n ? st : {}, this.tags = function (e, t, n, r) {
                let i = e[r.replace(/\W/g, "")];
                if (!i) {
                    const t = Object.keys(e).map((e => JSON.stringify(e))).join(", ");
                    throw new Error(`Unknown schema "${r}"; use one of ${t}`)
                }
                if (Array.isArray(n)) for (const e of n) i = i.concat(e); else "function" == typeof n && (i = n(i.slice()));
                return i.map((e => {
                    if ("string" != typeof e) return e;
                    const n = t[e];
                    if (n) return n;
                    const r = Object.keys(t).map((e => JSON.stringify(e))).join(", ");
                    throw new Error(`Unknown custom tag "${e}"; use one of ${r}`)
                }))
            }(it, at, e, this.name), this.sortMapEntries = !0 === i ? ot : i || null
        }
    }

    function ct(e, t, n, r) {
        if (r && "object" == typeof r) if (Array.isArray(r)) for (let t = 0, n = r.length; t < n; ++t) {
            const n = r[t], i = ct(e, r, String(t), n);
            void 0 === i ? delete r[t] : i !== n && (r[t] = i)
        } else if (r instanceof Map) for (const t of Array.from(r.keys())) {
            const n = r.get(t), i = ct(e, r, t, n);
            void 0 === i ? r.delete(t) : i !== n && r.set(t, i)
        } else if (r instanceof Set) for (const t of Array.from(r)) {
            const n = ct(e, r, t, t);
            void 0 === n ? r.delete(t) : n !== t && (r.delete(t), r.add(n))
        } else for (const [t, n] of Object.entries(r)) {
            const i = ct(e, r, t, n);
            void 0 === i ? delete r[t] : i !== n && (r[t] = i)
        }
        return e.call(t, n, r)
    }

    class ht {
        constructor(e, t, n) {
            let r;
            this.commentBefore = null, this.comment = null, this.errors = [], this.warnings = [], Object.defineProperty(this, k, {value: g}), "function" == typeof t || Array.isArray(t) ? r = t : void 0 === n && t && (n = t, t = void 0);
            const i = Object.assign({}, fe, n);
            this.options = i, this.anchors = new me(this.options.anchorPrefix);
            let {version: a} = i;
            (null == n ? void 0 : n.directives) ? (this.directives = n.directives.atDocument(), this.directives.yaml.explicit && (a = this.directives.yaml.version)) : this.directives = new z({version: a}), this.setSchema(a, n), this.contents = void 0 === e ? null : this.createNode(e, {replacer: r})
        }

        add(e) {
            ut(this.contents) && this.contents.add(e)
        }

        addIn(e, t) {
            ut(this.contents) && this.contents.addIn(e, t)
        }

        createNode(e, {flow: t, keepUndefined: n, onTagObj: r, replacer: i, tag: a} = {}) {
            if ("function" == typeof i) e = i.call({"": e}, "", e); else if (Array.isArray(i)) {
                const e = e => "number" == typeof e || e instanceof String || e instanceof Number,
                    t = i.filter(e).map(String);
                t.length > 0 && (i = i.concat(t))
            }
            "boolean" != typeof n && (n = !!this.options.keepUndefined);
            const o = [], s = U(e, a, {
                keepUndefined: n, onAlias(e) {
                    const t = new Z(e);
                    return o.push(t), t
                }, onTagObj: r, prevObjects: new Map, replacer: i, schema: this.schema
            });
            for (const e of o) {
                e.source = e.source.node;
                let t = this.anchors.getName(e.source);
                t || (t = this.anchors.newName(), this.anchors.map[t] = e.source)
            }
            return t && H(s) && (s.flow = !0), s
        }

        createPair(e, t, n = {}) {
            const r = this.createNode(e, n), i = this.createNode(t, n);
            return new ue(r, i)
        }

        delete(e) {
            return !!ut(this.contents) && this.contents.delete(e)
        }

        deleteIn(e) {
            return oe(e) ? null != this.contents && (this.contents = null, !0) : !!ut(this.contents) && this.contents.deleteIn(e)
        }

        get(e, t) {
            return H(this.contents) ? this.contents.get(e, t) : void 0
        }

        getIn(e, t) {
            return oe(e) ? !t && E(this.contents) ? this.contents.value : this.contents : H(this.contents) ? this.contents.getIn(e, t) : void 0
        }

        has(e) {
            return !!H(this.contents) && this.contents.has(e)
        }

        hasIn(e) {
            return oe(e) ? void 0 !== this.contents : !!H(this.contents) && this.contents.hasIn(e)
        }

        set(e, t) {
            null == this.contents ? this.contents = ae(this.schema, [e], t) : ut(this.contents) && this.contents.set(e, t)
        }

        setIn(e, t) {
            oe(e) ? this.contents = t : null == this.contents ? this.contents = ae(this.schema, Array.from(e), t) : ut(this.contents) && this.contents.setIn(e, t)
        }

        setSchema(e, t) {
            let n;
            switch (String(e)) {
                case"1.1":
                    this.directives.yaml.version = "1.1", n = Object.assign({
                        merge: !0,
                        resolveKnownTags: !1,
                        schema: "yaml-1.1"
                    }, t);
                    break;
                case"1.2":
                    this.directives.yaml.version = "1.2", n = Object.assign({
                        merge: !1,
                        resolveKnownTags: !0,
                        schema: "core"
                    }, t);
                    break;
                default: {
                    const t = JSON.stringify(e);
                    throw new Error(`Expected '1.1' or '1.2' as version, but found: ${t}`)
                }
            }
            this.schema = new lt(n)
        }

        toJS({json: e, jsonArg: t, mapAsMap: n, maxAliasCount: r, onAnchor: i, reviver: a} = {}) {
            const o = Object.values(this.anchors.map).map((e => [e, {alias: [], aliasCount: 0, count: 1}])),
                s = o.length > 0 ? new Map(o) : null, l = {
                    anchors: s,
                    doc: this,
                    keep: !e,
                    mapAsMap: !0 === n,
                    mapKeyWarned: !1,
                    maxAliasCount: "number" == typeof r ? r : 100,
                    stringify: ie
                }, c = R(this.contents, t || "", l);
            if ("function" == typeof i && s) for (const {count: e, res: t} of s.values()) i(t, e);
            return "function" == typeof a ? ct(a, {"": c}, "", c) : c
        }

        toJSON(e, t) {
            return this.toJS({json: !0, jsonArg: e, mapAsMap: !1, onAnchor: t})
        }

        toString(e = {}) {
            if (this.errors.length > 0) throw new Error("Document with errors cannot be stringified");
            if ("indent" in e && (!Number.isInteger(e.indent) || Number(e.indent) <= 0)) {
                const t = JSON.stringify(e.indent);
                throw new Error(`"indent" option must be a positive integer, not ${t}`)
            }
            const t = [];
            let n = !0 === e.directives;
            if (!1 !== e.directives) {
                const e = this.directives.toString(this);
                e ? (t.push(e), n = !0) : this.directives.marker && (n = !0)
            }
            n && t.push("---"), this.commentBefore && (1 !== t.length && t.unshift(""), t.unshift(this.commentBefore.replace(/^/gm, "#")));
            const r = re(this, e);
            let i = !1, a = null;
            if (this.contents) {
                T(this.contents) && (this.contents.spaceBefore && n && t.push(""), this.contents.commentBefore && t.push(this.contents.commentBefore.replace(/^/gm, "#")), r.forceBlockIndent = !!this.comment, a = this.contents.comment);
                const e = a ? void 0 : () => i = !0;
                let o = ie(this.contents, r, (() => a = null), e);
                a && (o = _(o, "", a)), "|" !== o[0] && ">" !== o[0] || "---" !== t[t.length - 1] ? t.push(o) : t[t.length - 1] = `--- ${o}`
            } else t.push(ie(this.contents, r));
            return this.comment && (i && !a || "" === t[t.length - 1] || t.push(""), t.push(this.comment.replace(/^/gm, "#"))), t.join("\n") + "\n"
        }
    }

    function ut(e) {
        if (H(e)) return !0;
        throw new Error("Expected a YAML collection as document contents")
    }

    class ft extends Error {
        constructor(e, t, n) {
            if (!n) throw new Error(`Invalid arguments for new ${e}`);
            super(), this.name = e, this.message = n, this.offset = t
        }
    }

    class pt extends ft {
        constructor(e, t) {
            super("YAMLParseError", e, t)
        }
    }

    class dt extends ft {
        constructor(e, t) {
            super("YAMLWarning", e, t)
        }
    }

    const mt = (e, t) => n => {
        if (-1 === n.offset) return;
        n.linePos = t.linePos(n.offset);
        const {line: r, col: i} = n.linePos;
        n.message += ` at line ${r}, column ${i}`;
        let a = i - 1, o = e.substring(t.lineStarts[r - 1], t.lineStarts[r]).replace(/[\n\r]+$/, "");
        if (a >= 60 && o.length > 80) {
            const e = Math.min(a - 39, o.length - 79);
            o = "…" + o.substring(e), a -= e - 1
        }
        if (o.length > 80 && (o = o.substring(0, 79) + "…"), r > 1 && /^ *$/.test(o.substring(0, a))) {
            let n = e.substring(t.lineStarts[r - 2], t.lineStarts[r - 1]);
            n.length > 80 && (n = n.substring(0, 79) + "…\n"), o = n + o
        }
        if (/[^ ]/.test(o)) {
            const e = " ".repeat(a) + "^";
            n.message += `:\n\n${o}\n${e}\n`
        }
    };

    function vt(e, t, n, r, i, a) {
        let o = 0, s = !1, l = n, c = n, h = "", u = !1, f = !1, p = "", d = "", m = "", v = null, g = null;
        for (const n of t) {
            switch (n.type) {
                case"space":
                    l && "doc-start" !== r && "\t" === n.source[0] && a(i + o, "Tabs are not allowed as indentation"), c = !0;
                    break;
                case"comment": {
                    e.options.strict && !c && a(i + o, "Comments must be separated from other tokens by white space characters");
                    const t = n.source.substring(1);
                    u ? h += p + t : h = t, u = !0, p = "";
                    break
                }
                case"newline":
                    l && !u && (s = !0), l = !0, f = !0, c = !0, p += n.source;
                    break;
                case"anchor":
                    d && a(i + o, "A node can have at most one anchor"), d = n.source.substring(1), null === g && (g = i + o), l = !1, c = !1;
                    break;
                case"tag": {
                    m && a(i + o, "A node can have at most one tag");
                    const t = e.directives.tagName(n.source, (e => a(i, e)));
                    t && (m = t), null === g && (g = i + o), l = !1, c = !1;
                    break
                }
                case r:
                    v = {indent: n.indent, offset: i + o}, l = !1, c = !1;
                    break;
                default:
                    a(i + o, `Unexpected ${n.type} token`), l = !1, c = !1
            }
            n.source && (o += n.source.length)
        }
        return {
            found: v,
            spaceBefore: s,
            comment: h,
            hasNewline: f,
            anchor: d,
            tagName: m,
            length: o,
            start: null != g ? g : i + o
        }
    }

    function gt(e) {
        if (!e) return null;
        switch (e.type) {
            case"alias":
            case"scalar":
            case"double-quoted-scalar":
            case"single-quoted-scalar":
                return e.source.includes("\n");
            case"flow-collection":
                for (const t of e.items) switch (t.type) {
                    case"newline":
                        return !0;
                    case"alias":
                    case"scalar":
                    case"double-quoted-scalar":
                    case"single-quoted-scalar":
                    case"flow-collection":
                        if (gt(t)) return !0
                }
                return !1;
            default:
                return !0
        }
    }

    const Mt = "All mapping items must start at the same column";

    function yt(e, t, n, r) {
        let i = "";
        if (e) {
            let a = !1, o = !1, s = "";
            for (const {source: l, type: c} of e) {
                switch (c) {
                    case"space":
                        a = !0;
                        break;
                    case"comment": {
                        n && !a && r(t, "Comments must be separated from other tokens by white space characters");
                        const e = l.substring(1);
                        o ? i += s + e : i = e, o = !0, s = "";
                        break
                    }
                    case"newline":
                        o && (s += l), a = !0;
                        break;
                    default:
                        r(t, `Unexpected ${c} at node end`)
                }
                t += l.length
            }
        }
        return {comment: i, offset: t}
    }

    function bt(e, t, n, r, i, a) {
        let o;
        switch (n.type) {
            case"block-map":
                o = function ({composeNode: e, composeEmptyNode: t}, n, {indent: r, items: i, offset: a}, o, s) {
                    var l;
                    const c = a, h = new Me(n.schema);
                    o && n.anchors.setAnchor(h, o);
                    for (const {start: o, key: c, sep: u, value: f} of i) {
                        const i = vt(n, o, !0, "explicit-key-ind", a, s), p = !i.found;
                        if (p) {
                            if (c && ("block-seq" === c.type ? s(a, "A block sequence may not be used as an implicit map key") : "indent" in c && c.indent !== r && s(a, Mt)), !i.anchor && !i.tagName && !u) {
                                i.comment && (h.comment ? h.comment += "\n" + i.comment : h.comment = i.comment);
                                continue
                            }
                        } else (null === (l = i.found) || void 0 === l ? void 0 : l.indent) !== r && s(a, Mt);
                        a += i.length, p && gt(c) && s(a, "Implicit keys need to be on a single line");
                        const d = a, m = c ? e(n, c, i, s) : t(n, a, o, null, i, s);
                        a = m.range[1];
                        const v = vt(n, u || [], !c || "block-scalar" === c.type, "map-value-ind", a, s);
                        if (a += v.length, v.found) {
                            p && ("block-map" !== (null == f ? void 0 : f.type) || v.hasNewline || s(a, "Nested mappings are not allowed in compact mappings"), n.options.strict && i.start < v.found.offset - 1024 && s(a, "The : indicator must be at most 1024 chars after the start of an implicit block mapping key"));
                            const r = f ? e(n, f, v, s) : t(n, a, u, null, v, s);
                            a = r.range[1], h.items.push(new ue(m, r))
                        } else p && s(d, "Implicit map keys need to be followed by map values"), v.comment && (m.comment ? m.comment += "\n" + v.comment : m.comment = v.comment), h.items.push(new ue(m))
                    }
                    return h.range = [c, a], h
                }(e, t, n, r, a);
                break;
            case"block-seq":
                o = function ({composeNode: e, composeEmptyNode: t}, n, {items: r, offset: i}, a, o) {
                    const s = i, l = new pe(n.schema);
                    a && n.anchors.setAnchor(l, a);
                    for (const {start: a, value: s} of r) {
                        const r = vt(n, a, !0, "seq-item-ind", i, o);
                        if (i += r.length, !r.found) {
                            if (!(r.anchor || r.tagName || s)) {
                                r.comment && (l.comment = r.comment);
                                continue
                            }
                            o(i, s && "block-seq" === s.type ? "All sequence items must start at the same column" : "Sequence item without - indicator")
                        }
                        const c = s ? e(n, s, r, o) : t(n, i, a, null, r, o);
                        i = c.range[1], l.items.push(c)
                    }
                    return l.range = [s, i], l
                }(e, t, n, r, a);
                break;
            case"flow-collection":
                o = function ({composeNode: e, composeEmptyNode: t}, n, r, i, a) {
                    const o = "{" === r.start.source, s = o ? new Me(n.schema) : new pe(n.schema);
                    s.flow = !0, i && n.anchors.setAnchor(s, i);
                    let l = null, c = null, h = !1, u = "", f = !1, p = !1, d = "", m = "", v = "",
                        g = r.offset + 1, M = !1, y = !1, b = !1, w = !1, k = null;

                    function x() {
                        const e = {spaceBefore: h, comment: u, anchor: m, tagName: v};
                        return h = !1, u = "", p = !1, d = "", m = "", v = "", e
                    }

                    function C(e) {
                        if (c ? p && (c.comment = u) : c = t(n, g, r.items, e, x(), a), o || y) s.items.push(l ? new ue(l, c) : new ue(c)); else {
                            const e = s;
                            if (l) {
                                const t = new Me(n.schema);
                                t.flow = !0, t.items.push(new ue(l, c)), e.items.push(t)
                            } else e.items.push(c)
                        }
                    }

                    for (let i = 0; i < r.items.length; ++i) {
                        const A = r.items[i];
                        let E = !0;
                        switch (A.type) {
                            case"space":
                                f = !0;
                                break;
                            case"comment": {
                                n.options.strict && !f && a(g, "Comments must be separated from other tokens by white space characters");
                                const e = A.source.substring(1);
                                p ? u += d + e : u = e, M = !1, p = !0, d = "";
                                break
                            }
                            case"newline":
                                if (M && !p && (h = !0), b) {
                                    if (p) {
                                        let e = s.items[s.items.length - 1];
                                        L(e) && (e = e.value || e.key), T(e) ? e.comment = u : a(g, "Error adding trailing comment to node"), u = "", p = !1
                                    }
                                    b = !1
                                } else d += A.source, o || l || !c || (w = !0);
                                M = !0, f = !0;
                                break;
                            case"anchor":
                                m && a(g, "A node can have at most one anchor"), m = A.source.substring(1), M = !1, b = !1, f = !1;
                                break;
                            case"tag": {
                                v && a(g, "A node can have at most one tag");
                                const e = n.directives.tagName(A.source, (e => a(g, e)));
                                e && (v = e), M = !1, b = !1, f = !1;
                                break
                            }
                            case"explicit-key-ind":
                                (m || v) && a(g, "Anchors and tags must be after the ? indicator"), y = !0, M = !1, b = !1, f = !1;
                                break;
                            case"map-value-ind":
                                if (l) {
                                    if (c) {
                                        a(g, "Missing {} around pair used as mapping key");
                                        const e = new Me(n.schema);
                                        e.flow = !0, e.items.push(new ue(l, c)), e.range = [l.range[0], c.range[1]], l = e, c = null
                                    }
                                } else if (c) {
                                    if (n.options.strict) {
                                        const e = "Implicit keys of flow sequence pairs need to be on a single line";
                                        if (w) a(g, e); else if (k) {
                                            gt(k) && a(g, e);
                                            const t = "offset" in k && k.offset;
                                            "number" == typeof t && t < g - 1024 && a(g, "The : indicator must be at most 1024 chars after the start of an implicit flow sequence key"), k = null
                                        }
                                    }
                                    l = c, c = null
                                } else l = t(n, g, r.items, i, x(), a);
                                p && (l.comment = u, u = "", p = !1), y = !1, b = !1, f = !1;
                                break;
                            case"comma":
                                l || c || m || v || y ? C(i) : a(g, "Unexpected , in flow " + (o ? "map" : "sequence")), l = null, c = null, y = !1, b = !0, f = !1, w = !1, k = null;
                                break;
                            case"block-map":
                            case"block-seq":
                                a(g, "Block collections are not allowed within flow collections");
                            default:
                                c && a(g, "Missing , between flow collection items"), o || l || y || (k = A), c = e(n, A, x(), a), g = c.range[1], M = !1, E = !1, b = !1, f = !1
                        }
                        E && (g += A.source.length)
                    }
                    (l || c || m || v || y) && C(r.items.length);
                    const A = o ? "}" : "]", [E, ...S] = r.end;
                    E && E.source === A || a(g, `Expected flow ${o ? "map" : "sequence"} to end with ${A}`);
                    if (E && (g += E.source.length), S.length > 0) {
                        const e = yt(S, g, n.options.strict, a);
                        e.comment && (s.comment = u), g = e.offset
                    }
                    return s.range = [r.offset, g], s
                }(e, t, n, r, a)
        }
        if (!i) return o;
        const s = o.constructor;
        if ("!" === i || i === s.tagName) return o.tag = s.tagName, o;
        const l = A(o) ? "map" : "seq";
        let c = t.schema.tags.find((e => e.collection === l && e.tag === i));
        if (!c) {
            const e = t.schema.knownTags[i];
            if (!e || e.collection !== l) return a(o.range[0], `Unresolved tag: ${i}`, !0), o.tag = i, o;
            t.schema.tags.push(Object.assign({}, e, {default: !1})), c = e
        }
        const h = c.resolve(o, (e => a(o.range[0], e)), t.options), u = T(h) ? h : new F(h);
        return u.range = o.range, u.tag = i, (null == c ? void 0 : c.format) && (u.format = c.format), u
    }

    function wt(e, t, n) {
        const r = function ({offset: e, props: t}, n, r) {
            if ("block-scalar-header" !== t[0].type) return r(e, "Block scalar header not found"), null;
            const {source: i} = t[0], a = i[0];
            let o = 0, s = "", l = -1;
            for (let t = 1; t < i.length; ++t) {
                const n = i[t];
                if (s || "-" !== n && "+" !== n) {
                    const r = Number(n);
                    !o && r ? o = r : -1 === l && (l = e + t)
                } else s = n
            }
            -1 !== l && r(l, `Block scalar header includes extra characters: ${i}`);
            let c = !1, h = "", u = i.length;
            for (let i = 1; i < t.length; ++i) {
                const a = t[i];
                switch (a.type) {
                    case"space":
                        c = !0;
                    case"newline":
                        u += a.source.length;
                        break;
                    case"comment":
                        if (n && !c) {
                            r(e + u, "Comments must be separated from other tokens by white space characters")
                        }
                        u += a.source.length, h = a.source.substring(1);
                        break;
                    case"error":
                        r(e + u, a.message), u += a.source.length;
                        break;
                    default: {
                        r(e + u, `Unexpected token in block scalar header: ${a.type}`);
                        const t = a.source;
                        t && "string" == typeof t && (u += t.length)
                    }
                }
            }
            return {mode: a, indent: o, chomp: s, comment: h, length: u}
        }(e, t, n);
        if (!r) return {value: "", type: null, comment: "", length: 0};
        const i = ">" === r.mode ? F.BLOCK_FOLDED : F.BLOCK_LITERAL, a = e.source ? function (e) {
            const t = e.split(/\n( *)/), n = t[0], r = n.match(/^( *)/),
                i = [r && r[1] ? [r[1], n.slice(r[1].length)] : ["", n]];
            for (let e = 1; e < t.length; e += 2) i.push([t[e], t[e + 1]]);
            return i
        }(e.source) : [];
        let o = a.length;
        for (let e = a.length - 1; e >= 0; --e) {
            const t = a[e][1];
            if ("" !== t && "\r" !== t) break;
            o = e
        }
        if (!e.source || 0 === o) {
            const t = "+" === r.chomp ? a.map((e => e[0])).join("\n") : "";
            let n = r.length;
            return e.source && (n += e.source.length), {value: t, type: i, comment: r.comment, length: n}
        }
        let s = e.indent + r.indent, l = e.offset + r.length, c = 0;
        for (let e = 0; e < o; ++e) {
            const [t, i] = a[e];
            if ("" !== i && "\r" !== i) {
                if (t.length < s) {
                    const e = "Block scalars with more-indented leading empty lines must use an explicit indentation indicator";
                    n(l + t.length, e)
                }
                0 === r.indent && (s = t.length), c = e;
                break
            }
            0 === r.indent && t.length > s && (s = t.length), l += t.length + i.length + 1
        }
        let h = "", u = "", f = !1;
        for (let e = 0; e < c; ++e) h += a[e][0].slice(s) + "\n";
        for (let e = c; e < o; ++e) {
            let [t, o] = a[e];
            l += t.length + o.length + 1;
            const c = "\r" === o[o.length - 1];
            if (c && (o = o.slice(0, -1)), o && t.length < s) {
                const e = `Block scalar lines must not be less indented than their ${r.indent ? "explicit indentation indicator" : "first line"}`;
                n(l - o.length - (c ? 2 : 1), e), t = ""
            }
            i === F.BLOCK_LITERAL ? (h += u + t.slice(s) + o, u = "\n") : t.length > s || "\t" === o[0] ? (" " === u ? u = "\n" : f || "\n" !== u || (u = "\n\n"), h += u + t.slice(s) + o, u = "\n", f = !0) : "" === o ? "\n" === u ? h += "\n" : u = "\n" : (h += u + o, u = " ", f = !1)
        }
        switch (r.chomp) {
            case"-":
                break;
            case"+":
                for (let e = o; e < a.length; ++e) h += "\n" + a[e][0].slice(s);
                "\n" !== h[h.length - 1] && (h += "\n");
                break;
            default:
                h += "\n"
        }
        return {value: h, type: i, comment: r.comment, length: r.length + e.source.length}
    }

    function kt({offset: e, type: t, source: n, end: r}, i, a) {
        let o, s;
        const l = (t, n) => a(e + t, n);
        switch (t) {
            case"scalar":
                o = F.PLAIN, s = function (e, t) {
                    switch (e[0]) {
                        case"\t":
                            t(0, "Plain value cannot start with a tab character");
                            break;
                        case"|":
                        case">":
                            t(0, `Plain value cannot start with block scalar indicator ${e[0]}`);
                            break;
                        case"@":
                        case"`":
                            t(0, `Plain value cannot start with reserved character ${e[0]}`);
                            break
                    }
                    return xt(e.trim())
                }(n, l);
                break;
            case"single-quoted-scalar":
                o = F.QUOTE_SINGLE, s = function (e, t) {
                    "'" === e[e.length - 1] && 1 !== e.length || t(e.length, "Missing closing 'quote");
                    return xt(e.slice(1, -1)).replace(/''/g, "'")
                }(n, l);
                break;
            case"double-quoted-scalar":
                o = F.QUOTE_DOUBLE, s = function (e, t) {
                    let n = "";
                    for (let r = 1; r < e.length - 1; ++r) {
                        const i = e[r];
                        if ("\r" !== i || "\n" !== e[r + 1]) if ("\n" === i) {
                            const {fold: t, offset: i} = Ct(e, r);
                            n += t, r = i
                        } else if ("\\" === i) {
                            let i = e[++r];
                            const a = At[i];
                            if (a) n += a; else if ("\n" === i) for (i = e[r + 1]; " " === i || "\t" === i;) i = e[1 + ++r]; else if ("x" === i || "u" === i || "U" === i) {
                                const a = {x: 2, u: 4, U: 8}[i];
                                n += Lt(e, r + 1, a, t), r += a
                            } else {
                                const i = e.substr(r - 1, 2);
                                t(r - 1, `Invalid escape sequence ${i}`), n += i
                            }
                        } else if (" " === i || "\t" === i) {
                            const t = r;
                            let a = e[r + 1];
                            for (; " " === a || "\t" === a;) a = e[1 + ++r];
                            "\n" !== a && (n += r > t ? e.slice(t, r + 1) : i)
                        } else n += i
                    }
                    '"' === e[e.length - 1] && 1 !== e.length || t(e.length, 'Missing closing "quote');
                    return n
                }(n, l);
                break;
            default:
                return a(e, `Expected a flow scalar value, but found: ${t}`), {
                    value: "",
                    type: null,
                    comment: "",
                    length: n.length
                }
        }
        const c = yt(r, 0, i, l);
        return {value: s, type: o, comment: c.comment, length: n.length + c.offset}
    }

    function xt(e) {
        const t = e.split(/[ \t]*\r?\n[ \t]*/);
        let n = t[0], r = " ";
        for (let e = 1; e < t.length - 1; ++e) {
            const i = t[e];
            "" === i ? "\n" === r ? n += r : r = "\n" : (n += r + i, r = " ")
        }
        return t.length > 1 && (n += r + t[t.length - 1]), n
    }

    function Ct(e, t) {
        let n = "", r = e[t + 1];
        for (; !(" " !== r && "\t" !== r && "\n" !== r && "\r" !== r || "\r" === r && "\n" !== e[t + 2]);) "\n" === r && (n += "\n"), r = e[(t += 1) + 1];
        return n || (n = " "), {fold: n, offset: t}
    }

    const At = {
        0: "\0",
        a: "",
        b: "\b",
        e: "",
        f: "\f",
        n: "\n",
        r: "\r",
        t: "\t",
        v: "\v",
        N: "",
        _: " ",
        L: "\u2028",
        P: "\u2029",
        " ": " ",
        '"': '"',
        "/": "/",
        "\\": "\\",
        "\t": "\t"
    };

    function Lt(e, t, n, r) {
        const i = e.substr(t, n), a = i.length === n && /^[0-9a-fA-F]+$/.test(i) ? parseInt(i, 16) : NaN;
        if (isNaN(a)) {
            const i = e.substr(t - 2, n + 2);
            return r(t - 2, `Invalid escape sequence ${i}`), i
        }
        return String.fromCodePoint(a)
    }

    function Et(e, t, n, r, i) {
        const {offset: a} = t, {
                value: o,
                type: s,
                comment: l,
                length: c
            } = "block-scalar" === t.type ? wt(t, e.options.strict, i) : kt(t, e.options.strict, i),
            h = r ? function (e, t, n, r) {
                var i;
                if ("!" === n) return St(e);
                const a = [];
                for (const t of e.tags) if (!t.collection && t.tag === n) {
                    if (!t.default || !t.test) return t;
                    a.push(t)
                }
                for (const e of a) if (null === (i = e.test) || void 0 === i ? void 0 : i.test(t)) return e;
                const o = e.knownTags[n];
                if (o && !o.collection) return e.tags.push(Object.assign({}, o, {default: !1, test: void 0})), o;
                return r(0, `Unresolved tag: ${n}`, "tag:yaml.org,2002:str" !== n), St(e)
            }(e.schema, o, r, i) : function (e, t, n) {
                var r;
                if (n) for (const n of e.tags) if (n.default && (null === (r = n.test) || void 0 === r ? void 0 : r.test(t))) return n;
                return St(e)
            }(e.schema, o, "scalar" === t.type);
        let u;
        try {
            const t = h ? h.resolve(o, (e => i(a, e)), e.options) : o;
            u = E(t) ? t : new F(t)
        } catch (e) {
            i(a, e.message), u = new F(o)
        }
        return u.range = [a, a + c], u.source = o, s && (u.type = s), r && (u.tag = r), (null == h ? void 0 : h.format) && (u.format = h.format), l && (u.comment = l), n && e.anchors.setAnchor(u, n), u
    }

    const St = e => e.tags.find((e => !e.collection && "tag:yaml.org,2002:str" === e.tag));

    function Ht(e, t, n) {
        if (t) {
            null === n && (n = t.length);
            for (let r = n - 1; r >= 0; --r) {
                let n = t[r];
                switch (n.type) {
                    case"space":
                    case"comment":
                    case"newline":
                        e -= n.source.length;
                        continue
                }
                for (n = t[++r]; "space" === (null == n ? void 0 : n.type);) e += n.source.length, n = t[++r];
                break
            }
        }
        return e
    }

    const Tt = {composeNode: Vt, composeEmptyNode: Ot};

    function Vt(e, t, n, r) {
        const {spaceBefore: i, comment: a, anchor: o, tagName: s} = n;
        let l;
        switch (t.type) {
            case"alias":
                l = function (e, {offset: t, source: n, end: r}, i) {
                    const a = n.substring(1), o = e.anchors.getNode(a);
                    o || i(t, `Aliased anchor not found: ${a}`);
                    const s = new Z(o), l = yt(r, t + n.length, e.options.strict, i);
                    s.range = [t, l.offset], l.comment && (s.comment = l.comment);
                    return s
                }(e, t, r), (o || s) && r(t.offset, "An alias node must not specify any properties");
                break;
            case"scalar":
            case"single-quoted-scalar":
            case"double-quoted-scalar":
            case"block-scalar":
                l = Et(e, t, o, s, r);
                break;
            case"block-map":
            case"block-seq":
            case"flow-collection":
                l = bt(Tt, e, t, o, s, r);
                break;
            default:
                throw console.log(t), new Error(`Unsupporten token type: ${t.type}`)
        }
        return i && (l.spaceBefore = !0), a && ("scalar" === t.type && "" === t.source ? l.comment = a : l.commentBefore = a), l
    }

    function Ot(e, t, n, r, {spaceBefore: i, comment: a, anchor: o, tagName: s}, l) {
        const c = Et(e, {type: "scalar", offset: Ht(t, n, r), indent: -1, source: ""}, o, s, l);
        return i && (c.spaceBefore = !0), a && (c.comment = a), c
    }

    function Nt(e) {
        let t = "", n = !1, r = !1;
        for (let i = 0; i < e.length; ++i) {
            const a = e[i];
            switch (a[0]) {
                case"#":
                    t += ("" === t ? "" : r ? "\n\n" : "\n") + a.substring(1), n = !0, r = !1;
                    break;
                case"%":
                    "#" !== e[i + 1][0] && (i += 1), n = !1;
                    break;
                default:
                    n || (r = !0), n = !1
            }
        }
        return {comment: t, afterEmptyLine: r}
    }

    class Pt {
        constructor(e, t = {}) {
            this.doc = null, this.atDirectives = !1, this.prelude = [], this.errors = [], this.warnings = [], this.onError = (e, t, n) => {
                n ? this.warnings.push(new dt(e, t)) : this.errors.push(new pt(e, t))
            }, this.next = e => {
                switch (e.type) {
                    case"directive":
                        this.directives.add(e.source, this.onError), this.prelude.push(e.source), this.atDirectives = !0;
                        break;
                    case"document": {
                        const t = function (e, t, {offset: n, start: r, value: i, end: a}, o) {
                            const s = Object.assign({directives: t}, e), l = new ht(void 0, s),
                                c = vt(l, r, !0, "doc-start", n, o);
                            c.found && (l.directives.marker = !0), l.contents = i ? Vt(l, i, c, o) : Ot(l, n + c.length, r, null, c, o);
                            const h = yt(a, l.contents.range[1], !1, o);
                            return h.comment && (l.comment = h.comment), l.range = [n, h.offset], l
                        }(this.options, this.directives, e, this.onError);
                        this.decorate(t, !1), this.doc && this.onDocument(this.doc), this.doc = t, this.atDirectives = !1;
                        break
                    }
                    case"byte-order-mark":
                    case"space":
                        break;
                    case"comment":
                    case"newline":
                        this.prelude.push(e.source);
                        break;
                    case"error": {
                        const t = e.source ? `${e.message}: ${JSON.stringify(e.source)}` : e.message,
                            n = new pt(-1, t);
                        this.atDirectives || !this.doc ? this.errors.push(n) : this.doc.errors.push(n);
                        break
                    }
                    case"doc-end": {
                        if (!this.doc) {
                            const t = "Unexpected doc-end without preceding document";
                            this.errors.push(new pt(e.offset, t));
                            break
                        }
                        const t = yt(e.end, e.offset + e.source.length, this.doc.options.strict, this.onError);
                        if (this.decorate(this.doc, !0), t.comment) {
                            const e = this.doc.comment;
                            this.doc.comment = e ? `${e}\n${t.comment}` : t.comment
                        }
                        this.doc.range[1] = t.offset;
                        break
                    }
                    default:
                        this.errors.push(new pt(-1, `Unsupported token ${e.type}`))
                }
            }, this.directives = new z({version: (null == t ? void 0 : t.version) || fe.version}), this.onDocument = e, this.options = t
        }

        decorate(e, t) {
            const {comment: n, afterEmptyLine: r} = Nt(this.prelude);
            if (n) {
                const i = e.contents;
                if (t) e.comment = e.comment ? `${e.comment}\n${n}` : n; else if (r || e.directives.marker || !i) e.commentBefore = n; else if (H(i) && !i.flow && i.items.length > 0) {
                    const e = i.items[0], t = e.commentBefore;
                    e.commentBefore = t ? `${n}\n${t}` : n
                } else {
                    const e = i.commentBefore;
                    i.commentBefore = e ? `${n}\n${e}` : n
                }
            }
            t ? (Array.prototype.push.apply(e.errors, this.errors), Array.prototype.push.apply(e.warnings, this.warnings)) : (e.errors = this.errors, e.warnings = this.warnings), this.prelude = [], this.errors = [], this.warnings = []
        }

        streamInfo() {
            return {
                comment: Nt(this.prelude).comment,
                directives: this.directives,
                errors: this.errors,
                warnings: this.warnings
            }
        }

        end(e = !1, t = -1) {
            if (this.doc) this.decorate(this.doc, !0), this.onDocument(this.doc), this.doc = null; else if (e) {
                const e = Object.assign({directives: this.directives}, this.options), n = new ht(void 0, e);
                this.atDirectives && this.onError(t, "Missing directives-end indicator line"), n.range = [0, t], this.decorate(n, !1), this.onDocument(n)
            }
        }
    }

    class It {
        constructor() {
            this.lineStarts = [], this.addNewLine = e => this.lineStarts.push(e), this.linePos = e => {
                let t = 0, n = this.lineStarts.length;
                for (; t < n;) {
                    const r = t + n >> 1;
                    this.lineStarts[r] < e ? t = r + 1 : n = r
                }
                if (this.lineStarts[t] === e) return {line: t + 1, col: 1};
                if (0 === t) return {line: 0, col: e};
                return {line: t, col: e - this.lineStarts[t - 1] + 1}
            }
        }
    }

    const Dt = "";

    function qt(e) {
        switch (e) {
            case void 0:
            case" ":
            case"\n":
            case"\r":
            case"\t":
                return !0;
            default:
                return !1
        }
    }

    const zt = [",", "[", "]", "{", "}"], Rt = [" ", ",", "[", "]", "{", "}", "\n", "\r", "\t"],
        Zt = e => !e || Rt.includes(e);

    class Bt {
        constructor(e) {
            this.atEnd = !1, this.blockScalarIndent = -1, this.blockScalarKeep = !1, this.buffer = "", this.flowKey = !1, this.flowLevel = 0, this.indentNext = 0, this.indentValue = 0, this.next = null, this.pos = 0, this.push = e
        }

        lex(e, t) {
            e && (this.buffer = this.buffer ? this.buffer + e : e), this.atEnd = !t;
            let n = this.next || "stream";
            for (; n && (t || this.hasChars(1));) n = this.parseNext(n)
        }

        atLineEnd() {
            let e = this.pos, t = this.buffer[e];
            for (; " " === t || "\t" === t;) t = this.buffer[++e];
            return !t || "#" === t || "\n" === t || "\r" === t && "\n" === this.buffer[e + 1]
        }

        charAt(e) {
            return this.buffer[this.pos + e]
        }

        continueScalar(e) {
            let t = this.buffer[e];
            if (this.indentNext > 0) {
                let n = 0;
                for (; " " === t;) t = this.buffer[++n + e];
                if ("\r" === t) {
                    const t = this.buffer[n + e + 1];
                    if ("\n" === t || !t && !this.atEnd) return e + n + 1
                }
                return "\n" === t || n >= this.indentNext || !t && !this.atEnd ? e + n : -1
            }
            if ("-" === t || "." === t) {
                const t = this.buffer.substr(e, 3);
                if (("---" === t || "..." === t) && qt(this.buffer[e + 3])) return -1
            }
            return e
        }

        getLine() {
            let e = this.buffer.indexOf("\n", this.pos);
            return -1 === e ? this.atEnd ? this.buffer.substring(this.pos) : null : ("\r" === this.buffer[e - 1] && (e -= 1), this.buffer.substring(this.pos, e))
        }

        hasChars(e) {
            return this.pos + e <= this.buffer.length
        }

        setNext(e) {
            return this.buffer = this.buffer.substring(this.pos), this.pos = 0, this.next = e, null
        }

        peek(e) {
            return this.buffer.substr(this.pos, e)
        }

        parseNext(e) {
            switch (e) {
                case"stream":
                    return this.parseStream();
                case"line-start":
                    return this.parseLineStart();
                case"block-start":
                    return this.parseBlockStart();
                case"doc":
                    return this.parseDocument();
                case"flow":
                    return this.parseFlowCollection();
                case"quoted-scalar":
                    return this.parseQuotedScalar();
                case"block-scalar":
                    return this.parseBlockScalar();
                case"plain-scalar":
                    return this.parsePlainScalar()
            }
        }

        parseStream() {
            let e = this.getLine();
            if (null === e) return this.setNext("stream");
            if ("\ufeff" === e[0] && (this.pushCount(1), e = e.substring(1)), "%" === e[0]) {
                let t = e.length;
                const n = e.indexOf("#");
                if (-1 !== n) {
                    const r = e[n - 1];
                    " " !== r && "\t" !== r || (t = n - 1)
                }
                for (; ;) {
                    const n = e[t - 1];
                    if (" " !== n && "\t" !== n) break;
                    t -= 1
                }
                const r = this.pushCount(t) + this.pushSpaces(!0);
                return this.pushCount(e.length - r), this.pushNewline(), "stream"
            }
            if (this.atLineEnd()) {
                const t = this.pushSpaces(!0);
                return this.pushCount(e.length - t), this.pushNewline(), "stream"
            }
            return this.push(""), this.parseLineStart()
        }

        parseLineStart() {
            const e = this.charAt(0);
            if (!e && !this.atEnd) return this.setNext("line-start");
            if ("-" === e || "." === e) {
                if (!this.atEnd && !this.hasChars(4)) return this.setNext("line-start");
                const e = this.peek(3);
                if ("---" === e && qt(this.charAt(3))) return this.pushCount(3), this.indentValue = 0, this.indentNext = 0, "doc";
                if ("..." === e && qt(this.charAt(3))) return this.pushCount(3), "stream"
            }
            return this.indentValue = this.pushSpaces(!1), this.indentNext > this.indentValue && !qt(this.charAt(1)) && (this.indentNext = this.indentValue), this.parseBlockStart()
        }

        parseBlockStart() {
            const [e, t] = this.peek(2);
            if (!t && !this.atEnd) return this.setNext("block-start");
            if (("-" === e || "?" === e || ":" === e) && qt(t)) {
                const e = this.pushCount(1) + this.pushSpaces(!0);
                return this.indentNext = this.indentValue + 1, this.indentValue += e, this.parseBlockStart()
            }
            return "doc"
        }

        parseDocument() {
            this.pushSpaces(!0);
            const e = this.getLine();
            if (null === e) return this.setNext("doc");
            let t = this.pushIndicators();
            switch (e[t]) {
                case"#":
                    this.pushCount(e.length - t);
                case void 0:
                    return this.pushNewline(), this.parseLineStart();
                case"{":
                case"[":
                    return this.pushCount(1), this.flowKey = !1, this.flowLevel = 1, "flow";
                case"}":
                case"]":
                    return this.pushCount(1), "doc";
                case"*":
                    return this.pushUntil(Zt), "doc";
                case'"':
                case"'":
                    return this.parseQuotedScalar();
                case"|":
                case">":
                    return t += this.parseBlockScalarHeader(), t += this.pushSpaces(!0), this.pushCount(e.length - t), this.pushNewline(), this.parseBlockScalar();
                default:
                    return this.parsePlainScalar()
            }
        }

        parseFlowCollection() {
            let e, t, n = -1;
            do {
                e = this.pushNewline(), t = this.pushSpaces(!0), e > 0 && (this.indentValue = n = t)
            } while (e + t > 0);
            const r = this.getLine();
            if (null === r) return this.setNext("flow");
            if (-1 !== n && n < this.indentNext || 0 === n && (r.startsWith("---") || r.startsWith("...")) && qt(r[3])) {
                if (!(n === this.indentNext - 1 && 1 === this.flowLevel && ("]" === r[0] || "}" === r[0]))) return this.flowLevel = 0, this.push(""), this.parseLineStart()
            }
            let i = 0;
            for (; "," === r[i];) i += this.pushCount(1) + this.pushSpaces(!0);
            switch (i += this.pushIndicators(), r[i]) {
                case void 0:
                    return "flow";
                case"#":
                    return this.pushCount(r.length - i), "flow";
                case"{":
                case"[":
                    return this.pushCount(1), this.flowKey = !1, this.flowLevel += 1, "flow";
                case"}":
                case"]":
                    return this.pushCount(1), this.flowKey = !0, this.flowLevel -= 1, this.flowLevel ? "flow" : "doc";
                case"*":
                    return this.pushUntil(Zt), "flow";
                case'"':
                case"'":
                    return this.flowKey = !0, this.parseQuotedScalar();
                case":": {
                    const e = this.charAt(1);
                    if (this.flowKey || qt(e) || "," === e) return this.pushCount(1), this.pushSpaces(!0), "flow"
                }
                default:
                    return this.flowKey = !1, this.parsePlainScalar()
            }
        }

        parseQuotedScalar() {
            const e = this.charAt(0);
            let t = this.buffer.indexOf(e, this.pos + 1);
            if ("'" === e) for (; -1 !== t && "'" === this.buffer[t + 1];) t = this.buffer.indexOf("'", t + 2); else for (; -1 !== t;) {
                let e = 0;
                for (; "\\" === this.buffer[t - 1 - e];) e += 1;
                if (e % 2 == 0) break;
                t = this.buffer.indexOf('"', t + 1)
            }
            let n = this.buffer.indexOf("\n", this.pos);
            if (-1 !== n && n < t) {
                for (; -1 !== n && n < t;) {
                    const e = this.continueScalar(n + 1);
                    if (-1 === e) break;
                    n = this.buffer.indexOf("\n", e)
                }
                -1 !== n && n < t && (t = n - 1)
            }
            if (-1 === t) {
                if (!this.atEnd) return this.setNext("quoted-scalar");
                t = this.buffer.length
            }
            return this.pushToIndex(t + 1, !1), this.flowLevel ? "flow" : "doc"
        }

        parseBlockScalarHeader() {
            this.blockScalarIndent = -1, this.blockScalarKeep = !1;
            let e = this.pos;
            for (; ;) {
                const t = this.buffer[++e];
                if ("+" === t) this.blockScalarKeep = !0; else if (t > "0" && t <= "9") this.blockScalarIndent = Number(t) - 1; else if ("-" !== t) break
            }
            return this.pushUntil((e => qt(e) || "#" === e))
        }

        parseBlockScalar() {
            let e, t = this.pos - 1, n = 0;
            e:for (let r = this.pos; e = this.buffer[r]; ++r) switch (e) {
                case" ":
                    n += 1;
                    break;
                case"\n":
                    t = r, n = 0;
                    break;
                case"\r": {
                    const e = this.buffer[r + 1];
                    if (!e && !this.atEnd) return this.setNext("block-scalar");
                    if ("\n" === e) break
                }
                default:
                    break e
            }
            if (!e && !this.atEnd) return this.setNext("block-scalar");
            if (n >= this.indentNext) {
                -1 === this.blockScalarIndent ? this.indentNext = n : this.indentNext += this.blockScalarIndent;
                do {
                    const e = this.continueScalar(t + 1);
                    if (-1 === e) break;
                    t = this.buffer.indexOf("\n", e)
                } while (-1 !== t);
                if (-1 === t) {
                    if (!this.atEnd) return this.setNext("block-scalar");
                    t = this.buffer.length
                }
            }
            if (!this.blockScalarKeep) for (; ;) {
                let e = t - 1, n = this.buffer[e];
                for ("\r" === n && (n = this.buffer[--e]); " " === n || "\t" === n;) n = this.buffer[--e];
                if (!("\n" === n && e >= this.pos)) break;
                t = e
            }
            return this.push(Dt), this.pushToIndex(t + 1, !0), this.parseLineStart()
        }

        parsePlainScalar() {
            const e = this.flowLevel > 0;
            let t, n = this.pos - 1, r = this.pos - 1;
            for (; t = this.buffer[++r];) if (":" === t) {
                const t = this.buffer[r + 1];
                if (qt(t) || e && "," === t) break;
                n = r
            } else if (qt(t)) {
                const i = this.buffer[r + 1];
                if ("#" === i || e && zt.includes(i)) break;
                if ("\r" === t && ("\n" === i ? (r += 1, t = "\n") : n = r), "\n" === t) {
                    const e = this.continueScalar(r + 1);
                    if (-1 === e) break;
                    r = Math.max(r, e - 2)
                }
            } else {
                if (e && zt.includes(t)) break;
                n = r
            }
            return t || this.atEnd ? (this.push(Dt), this.pushToIndex(n + 1, !0), e ? "flow" : "doc") : this.setNext("plain-scalar")
        }

        pushCount(e) {
            return e > 0 ? (this.push(this.buffer.substr(this.pos, e)), this.pos += e, e) : 0
        }

        pushToIndex(e, t) {
            const n = this.buffer.slice(this.pos, e);
            return n ? (this.push(n), this.pos += n.length, n.length) : (t && this.push(""), 0)
        }

        pushIndicators() {
            switch (this.charAt(0)) {
                case"!":
                    if ("<" === this.charAt(1)) return this.pushVerbatimTag() + this.pushSpaces(!0) + this.pushIndicators();
                case"&":
                    return this.pushUntil(Zt) + this.pushSpaces(!0) + this.pushIndicators();
                case":":
                case"?":
                case"-":
                    if (qt(this.charAt(1))) return 0 === this.flowLevel && (this.indentNext = this.indentValue + 1), this.pushCount(1) + this.pushSpaces(!0) + this.pushIndicators()
            }
            return 0
        }

        pushVerbatimTag() {
            let e = this.pos + 2, t = this.buffer[e];
            for (; !qt(t) && ">" !== t;) t = this.buffer[++e];
            return this.pushToIndex(">" === t ? e + 1 : e, !1)
        }

        pushNewline() {
            const e = this.buffer[this.pos];
            return "\n" === e ? this.pushCount(1) : "\r" === e && "\n" === this.charAt(1) ? this.pushCount(2) : 0
        }

        pushSpaces(e) {
            let t, n = this.pos - 1;
            do {
                t = this.buffer[++n]
            } while (" " === t || e && "\t" === t);
            const r = n - this.pos;
            return r > 0 && (this.push(this.buffer.substr(this.pos, r)), this.pos = n), r
        }

        pushUntil(e) {
            let t = this.pos, n = this.buffer[t];
            for (; !e(n);) n = this.buffer[++t];
            return this.pushToIndex(t, !1)
        }
    }

    function jt(e, t) {
        for (let n = 0; n < e.length; ++n) if (e[n].type === t) return !0;
        return !1
    }

    function Ft(e) {
        for (let t = 0; t < e.length; ++t) switch (e[t].type) {
            case"space":
            case"comment":
            case"newline":
                break;
            default:
                return !0
        }
        return !1
    }

    function Ut(e) {
        let t = !1;
        for (let n = 0; n < e.length; ++n) switch (e[n].type) {
            case"space":
                break;
            case"comment":
                t = !0;
                break;
            case"newline":
                if (!t) return !1;
                break;
            default:
                return !1
        }
        if (t) for (let t = e.length - 1; t >= 0; --t) switch (e[t].type) {
            case"space":
                break;
            case"newline":
                return !0;
            default:
                return !1
        }
        return !1
    }

    function _t(e) {
        switch (e.type) {
            case"document":
                return e.start;
            case"block-map": {
                const t = e.items[e.items.length - 1];
                return t.sep || t.start
            }
            case"block-seq":
                return e.items[e.items.length - 1].start;
            default:
                return []
        }
    }

    function $t(e) {
        var t;
        if (0 === e.length) return [];
        let n = e.length;
        e:for (; --n >= 0;) switch (e[n].type) {
            case"explicit-key-ind":
            case"map-value-ind":
            case"seq-item-ind":
            case"newline":
                break e
        }
        for (; "space" === (null === (t = e[++n]) || void 0 === t ? void 0 : t.type);) ;
        return e.splice(n, e.length)
    }

    class Wt {
        constructor(e, t) {
            this.atNewLine = !0, this.atScalar = !1, this.indent = 0, this.offset = 0, this.onKeyLine = !1, this.stack = [], this.source = "", this.type = "", this.next = e => {
                if (this.source = e, this.atScalar) return this.atScalar = !1, this.step(), void (this.offset += e.length);
                const t = function (e) {
                    switch (e) {
                        case"\ufeff":
                            return "byte-order-mark";
                        case"":
                            return "doc-mode";
                        case"":
                            return "flow-error-end";
                        case Dt:
                            return "scalar";
                        case"---":
                            return "doc-start";
                        case"...":
                            return "doc-end";
                        case"":
                        case"\n":
                        case"\r\n":
                            return "newline";
                        case"-":
                            return "seq-item-ind";
                        case"?":
                            return "explicit-key-ind";
                        case":":
                            return "map-value-ind";
                        case"{":
                            return "flow-map-start";
                        case"}":
                            return "flow-map-end";
                        case"[":
                            return "flow-seq-start";
                        case"]":
                            return "flow-seq-end";
                        case",":
                            return "comma"
                    }
                    switch (e[0]) {
                        case" ":
                        case"\t":
                            return "space";
                        case"#":
                            return "comment";
                        case"%":
                            return "directive-line";
                        case"*":
                            return "alias";
                        case"&":
                            return "anchor";
                        case"!":
                            return "tag";
                        case"'":
                            return "single-quoted-scalar";
                        case'"':
                            return "double-quoted-scalar";
                        case"|":
                        case">":
                            return "block-scalar-header"
                    }
                    return null
                }(e);
                if (t) if ("scalar" === t) this.atNewLine = !1, this.atScalar = !0, this.type = "scalar"; else {
                    switch (this.type = t, this.step(), t) {
                        case"newline":
                            this.atNewLine = !0, this.indent = 0, this.onNewLine && this.onNewLine(this.offset + e.length);
                            break;
                        case"space":
                            this.atNewLine && " " === e[0] && (this.indent += e.length);
                            break;
                        case"explicit-key-ind":
                        case"map-value-ind":
                        case"seq-item-ind":
                            this.atNewLine && (this.indent += e.length);
                            break;
                        case"doc-mode":
                            return;
                        default:
                            this.atNewLine = !1
                    }
                    this.offset += e.length
                } else {
                    const t = `Not a YAML token: ${e}`;
                    this.pop({type: "error", offset: this.offset, message: t, source: e}), this.offset += e.length
                }
            }, this.lexer = new Bt(this.next), this.push = e, this.onNewLine = t
        }

        parse(e, t = !1) {
            this.onNewLine && 0 === this.offset && this.onNewLine(0), this.lexer.lex(e, t), t || this.end()
        }

        end() {
            for (; this.stack.length > 0;) this.pop()
        }

        get sourceToken() {
            return {type: this.type, indent: this.indent, source: this.source}
        }

        step() {
            const e = this.peek(1);
            if ("doc-end" !== this.type || e && "doc-end" === e.type) {
                if (!e) return this.stream();
                switch (e.type) {
                    case"document":
                        return this.document(e);
                    case"alias":
                    case"scalar":
                    case"single-quoted-scalar":
                    case"double-quoted-scalar":
                        return this.scalar(e);
                    case"block-scalar":
                        return this.blockScalar(e);
                    case"block-map":
                        return this.blockMap(e);
                    case"block-seq":
                        return this.blockSequence(e);
                    case"flow-collection":
                        return this.flowCollection(e);
                    case"doc-end":
                        return this.documentEnd(e)
                }
                this.pop()
            } else {
                for (; this.stack.length > 0;) this.pop();
                this.stack.push({type: "doc-end", offset: this.offset, source: this.source})
            }
        }

        peek(e) {
            return this.stack[this.stack.length - e]
        }

        pop(e) {
            const t = e || this.stack.pop();
            if (t) if (0 === this.stack.length) this.push(t); else {
                const e = this.peek(1);
                switch ("block-scalar" !== t.type && "flow-collection" !== t.type || (t.indent = "indent" in e ? e.indent : -1), e.type) {
                    case"document":
                        e.value = t;
                        break;
                    case"block-scalar":
                        e.props.push(t);
                        break;
                    case"block-map": {
                        const n = e.items[e.items.length - 1];
                        if (n.value) return e.items.push({start: [], key: t, sep: []}), void (this.onKeyLine = !0);
                        if (!n.sep) return Object.assign(n, {
                            key: t,
                            sep: []
                        }), void (this.onKeyLine = !jt(n.start, "explicit-key-ind"));
                        n.value = t;
                        break
                    }
                    case"block-seq": {
                        const n = e.items[e.items.length - 1];
                        n.value ? e.items.push({start: [], value: t}) : n.value = t;
                        break
                    }
                    case"flow-collection":
                        e.items.push(t);
                        break;
                    default:
                        this.pop(), this.pop(t)
                }
                if (!("document" !== e.type && "block-map" !== e.type && "block-seq" !== e.type || "block-map" !== t.type && "block-seq" !== t.type)) {
                    const n = t.items[t.items.length - 1];
                    n && !n.sep && !n.value && n.start.length > 0 && !Ft(n.start) && (0 === t.indent || n.start.every((e => "comment" !== e.type || e.indent < t.indent))) && ("document" === e.type ? e.end = n.start : e.items.push({start: n.start}), t.items.splice(-1, 1))
                }
            } else {
                const e = "Tried to pop an empty stack";
                this.push({type: "error", source: "", message: e})
            }
        }

        stream() {
            switch (this.type) {
                case"directive-line":
                    return void this.push({type: "directive", source: this.source});
                case"byte-order-mark":
                case"space":
                case"comment":
                case"newline":
                    return void this.push(this.sourceToken);
                case"doc-mode":
                case"doc-start": {
                    const e = {type: "document", offset: this.offset, start: []};
                    return "doc-start" === this.type && e.start.push(this.sourceToken), void this.stack.push(e)
                }
            }
            this.push({
                type: "error",
                offset: this.offset,
                message: `Unexpected ${this.type} token in YAML stream`,
                source: this.source
            })
        }

        document(e) {
            if (e.value) return this.lineEnd(e);
            switch (this.type) {
                case"doc-start":
                    return void (Ft(e.start) ? (this.pop(), this.step()) : e.start.push(this.sourceToken));
                case"anchor":
                case"tag":
                case"space":
                case"comment":
                case"newline":
                    return void e.start.push(this.sourceToken)
            }
            const t = this.startBlockValue(e);
            t ? this.stack.push(t) : this.push({
                type: "error",
                offset: this.offset,
                message: `Unexpected ${this.type} token in YAML document`,
                source: this.source
            })
        }

        scalar(e) {
            if ("map-value-ind" === this.type) {
                const t = $t(_t(this.peek(2)));
                let n;
                e.end ? (n = e.end, n.push(this.sourceToken), delete e.end) : n = [this.sourceToken];
                const r = {
                    type: "block-map",
                    offset: e.offset,
                    indent: e.indent,
                    items: [{start: t, key: e, sep: n}]
                };
                this.onKeyLine = !0, this.stack[this.stack.length - 1] = r
            } else this.lineEnd(e)
        }

        blockScalar(e) {
            switch (this.type) {
                case"space":
                case"comment":
                case"newline":
                    return void e.props.push(this.sourceToken);
                case"scalar":
                    if (e.source = this.source, this.atNewLine = !0, this.indent = 0, this.onNewLine) {
                        let e = this.source.indexOf("\n") + 1;
                        for (; 0 !== e;) this.onNewLine(this.offset + e), e = this.source.indexOf("\n", e) + 1
                    }
                    this.pop();
                    break;
                default:
                    this.pop(), this.step()
            }
        }

        blockMap(e) {
            var t;
            const n = e.items[e.items.length - 1];
            switch (this.type) {
                case"newline":
                    if (this.onKeyLine = !1, !n.sep && Ut(n.start)) {
                        const r = e.items[e.items.length - 2],
                            i = null === (t = null == r ? void 0 : r.value) || void 0 === t ? void 0 : t.end;
                        if (Array.isArray(i)) return Array.prototype.push.apply(i, n.start), void (n.start = [this.sourceToken])
                    }
                case"space":
                case"comment":
                    return void (n.value ? e.items.push({start: [this.sourceToken]}) : n.sep ? n.sep.push(this.sourceToken) : n.start.push(this.sourceToken))
            }
            if (this.indent >= e.indent) {
                const t = !this.onKeyLine && this.indent === e.indent && (n.sep || Ft(n.start));
                switch (this.type) {
                    case"anchor":
                    case"tag":
                        return void (t || n.value ? (e.items.push({start: [this.sourceToken]}), this.onKeyLine = !0) : n.sep ? n.sep.push(this.sourceToken) : n.start.push(this.sourceToken));
                    case"explicit-key-ind":
                        return n.sep || jt(n.start, "explicit-key-ind") ? t || n.value ? e.items.push({start: [this.sourceToken]}) : this.stack.push({
                            type: "block-map",
                            offset: this.offset,
                            indent: this.indent,
                            items: [{start: [this.sourceToken]}]
                        }) : n.start.push(this.sourceToken), void (this.onKeyLine = !0);
                    case"map-value-ind":
                        if (n.sep) if (n.value || t && !jt(n.start, "explicit-key-ind")) e.items.push({
                            start: [],
                            key: null,
                            sep: [this.sourceToken]
                        }); else if (jt(n.sep, "map-value-ind")) this.stack.push({
                            type: "block-map",
                            offset: this.offset,
                            indent: this.indent,
                            items: [{start: [], key: null, sep: [this.sourceToken]}]
                        }); else if (jt(n.start, "explicit-key-ind") && function (e) {
                            switch (null == e ? void 0 : e.type) {
                                case"alias":
                                case"scalar":
                                case"single-quoted-scalar":
                                case"double-quoted-scalar":
                                case"flow-collection":
                                    return !0;
                                default:
                                    return !1
                            }
                        }(n.key) && !jt(n.sep, "newline")) {
                            const e = $t(n.start), t = n.key, r = n.sep;
                            r.push(this.sourceToken), delete n.key, delete n.sep, this.stack.push({
                                type: "block-map",
                                offset: this.offset,
                                indent: this.indent,
                                items: [{start: e, key: t, sep: r}]
                            })
                        } else n.sep.push(this.sourceToken); else Object.assign(n, {
                            key: null,
                            sep: [this.sourceToken]
                        });
                        return void (this.onKeyLine = !0);
                    case"alias":
                    case"scalar":
                    case"single-quoted-scalar":
                    case"double-quoted-scalar": {
                        const r = this.flowScalar(this.type);
                        return void (t || n.value ? (e.items.push({
                            start: [],
                            key: r,
                            sep: []
                        }), this.onKeyLine = !0) : n.sep ? this.stack.push(r) : (Object.assign(n, {
                            key: r,
                            sep: []
                        }), this.onKeyLine = !0))
                    }
                    default: {
                        const r = this.startBlockValue(e);
                        if (r) return t && "block-seq" !== r.type && jt(n.start, "explicit-key-ind") && e.items.push({start: []}), void this.stack.push(r)
                    }
                }
            }
            this.pop(), this.step()
        }

        blockSequence(e) {
            var t;
            const n = e.items[e.items.length - 1];
            switch (this.type) {
                case"newline":
                    if (!n.value && Ut(n.start)) {
                        const r = e.items[e.items.length - 2],
                            i = null === (t = null == r ? void 0 : r.value) || void 0 === t ? void 0 : t.end;
                        if (Array.isArray(i)) return Array.prototype.push.apply(i, n.start), void (n.start = [this.sourceToken])
                    }
                case"space":
                case"comment":
                    return void (n.value ? e.items.push({start: [this.sourceToken]}) : n.start.push(this.sourceToken));
                case"anchor":
                case"tag":
                    if (n.value || this.indent <= e.indent) break;
                    return void n.start.push(this.sourceToken);
                case"seq-item-ind":
                    if (this.indent !== e.indent) break;
                    return void (n.value || jt(n.start, "seq-item-ind") ? e.items.push({start: [this.sourceToken]}) : n.start.push(this.sourceToken))
            }
            if (this.indent > e.indent) {
                const t = this.startBlockValue(e);
                if (t) return this.stack.push(t)
            }
            this.pop(), this.step()
        }

        flowCollection(e) {
            if ("flow-error-end" === this.type) {
                let e;
                do {
                    this.pop(), e = this.peek(1)
                } while (e && "flow-collection" === e.type)
            } else if (0 === e.end.length) {
                switch (this.type) {
                    case"space":
                    case"comment":
                    case"newline":
                    case"comma":
                    case"explicit-key-ind":
                    case"map-value-ind":
                    case"anchor":
                    case"tag":
                        return void e.items.push(this.sourceToken);
                    case"alias":
                    case"scalar":
                    case"single-quoted-scalar":
                    case"double-quoted-scalar":
                        return void e.items.push(this.flowScalar(this.type));
                    case"flow-map-end":
                    case"flow-seq-end":
                        return void e.end.push(this.sourceToken)
                }
                const t = this.startBlockValue(e);
                if (t) return this.stack.push(t);
                this.pop(), this.step()
            } else {
                const t = this.peek(2);
                if ("block-map" !== t.type || "map-value-ind" !== this.type && ("newline" !== this.type || t.items[t.items.length - 1].sep)) if ("map-value-ind" === this.type && "flow-collection" !== t.type) {
                    const n = $t(_t(t)), r = e.end.splice(1, e.end.length);
                    r.push(this.sourceToken);
                    const i = {
                        type: "block-map",
                        offset: e.offset,
                        indent: e.indent,
                        items: [{start: n, key: e, sep: r}]
                    };
                    this.onKeyLine = !0, this.stack[this.stack.length - 1] = i
                } else this.lineEnd(e); else this.pop(), this.step()
            }
        }

        flowScalar(e) {
            if (this.onNewLine) {
                let e = this.source.indexOf("\n") + 1;
                for (; 0 !== e;) this.onNewLine(this.offset + e), e = this.source.indexOf("\n", e) + 1
            }
            return {type: e, offset: this.offset, indent: this.indent, source: this.source}
        }

        startBlockValue(e) {
            switch (this.type) {
                case"alias":
                case"scalar":
                case"single-quoted-scalar":
                case"double-quoted-scalar":
                    return this.flowScalar(this.type);
                case"block-scalar-header":
                    return {
                        type: "block-scalar",
                        offset: this.offset,
                        indent: this.indent,
                        props: [this.sourceToken]
                    };
                case"flow-map-start":
                case"flow-seq-start":
                    return {
                        type: "flow-collection",
                        offset: this.offset,
                        indent: this.indent,
                        start: this.sourceToken,
                        items: [],
                        end: []
                    };
                case"seq-item-ind":
                    return {
                        type: "block-seq",
                        offset: this.offset,
                        indent: this.indent,
                        items: [{start: [this.sourceToken]}]
                    };
                case"explicit-key-ind":
                    return this.onKeyLine = !0, {
                        type: "block-map",
                        offset: this.offset,
                        indent: this.indent,
                        items: [{start: [this.sourceToken]}]
                    };
                case"map-value-ind": {
                    this.onKeyLine = !0;
                    const t = $t(_t(e));
                    return {
                        type: "block-map",
                        offset: this.offset,
                        indent: this.indent,
                        items: [{start: t, key: null, sep: [this.sourceToken]}]
                    }
                }
            }
            return null
        }

        documentEnd(e) {
            "doc-mode" !== this.type && (e.end ? e.end.push(this.sourceToken) : e.end = [this.sourceToken], "newline" === this.type && this.pop())
        }

        lineEnd(e) {
            switch (this.type) {
                case"comma":
                case"doc-start":
                case"doc-end":
                case"flow-seq-end":
                case"flow-map-end":
                case"map-value-ind":
                    this.pop(), this.step();
                    break;
                case"newline":
                    this.onKeyLine = !1;
                case"space":
                case"comment":
                default:
                    e.end ? e.end.push(this.sourceToken) : e.end = [this.sourceToken], "newline" === this.type && this.pop()
            }
        }
    }

    function Gt(e) {
        const t = !e || !1 !== e.prettyErrors;
        return {lineCounter: e && e.lineCounter || t && new It || null, prettyErrors: t}
    }

    function Kt(e, t, n) {
        let r;
        "function" == typeof t ? r = t : void 0 === n && t && "object" == typeof t && (n = t);
        const i = function (e, t) {
            const {lineCounter: n, prettyErrors: r} = Gt(t);
            let i = null;
            const a = new Pt((e => {
                if (i) {
                    if ("silent" !== i.options.logLevel) {
                        const t = "Source contains multiple documents; please use YAML.parseAllDocuments()";
                        i.errors.push(new pt(e.range[0], t))
                    }
                } else i = e
            }), t);
            return new Wt(a.next, null == n ? void 0 : n.addNewLine).parse(e), a.end(!0, e.length), r && n && (i.errors.forEach(mt(e, n)), i.warnings.forEach(mt(e, n))), i
        }(e, n);
        if (!i) return null;
        if (i.warnings.forEach((e => le(i.options.logLevel, e))), i.errors.length > 0) {
            if ("silent" !== i.options.logLevel) throw i.errors[0];
            i.errors = []
        }
        return i.toJS(Object.assign({reviver: r}, n))
    }

    var Yt = require(914),
        Xt = require.n(Yt),
        Jt = require(2854),
        Qt = require.n(Jt),
        en = require(5572),
        tn = Xt(),
        nn = en.Parser,
        rn = function () {
            function e() {
                this.transformers = []
            }

            return e.prototype.addTransformer = function (e) {
                this.transformers.push(e)
            }, e.prototype.removeTransformer = function (e) {
                for (var t = this.transformers, n = 0; n < t.length;) t[n] === e ? t.splice(n, 1) : n++
            }, e
        }();

    function an(e, t, n, r, i) {
        r.locator = i;
        var a = e.prototype.inlineTokenizers, o = e.prototype.inlineMethods;
        a[t] = r, o.splice(o.indexOf(n), 0, t)
    }

    function on(e, t, n, r, i) {
        r.locator = i;
        var a = e.prototype.blockTokenizers, o = e.prototype.blockMethods;
        a[t] = r, o.splice(o.indexOf(n), 0, t)
    }

    function sn(e, t, n) {
        for (var r = 0; r < e.length && e[r][0] !== t; r++) ;
        e.splice(r + 1, 0, [n])
    }

    var ln = Qt();
    var cn = require(914),
        hn = require(2854),
        un = require(7361),
        fn = require(1744),
        pn = require(6630),
        dn = require(719),
        mn = require(5426),
        vn = require(6115),
        gn = require(1696),
        Mn = require(4617),
        yn = {}.hasOwnProperty,
        bn = !1;

    function wn(e, t) {
        var n = function (e, t) {
            var n = t || {};
            void 0 === n.allowDangerousHTML || bn || (bn = !0, console.warn("mdast-util-to-hast: deprecation: `allowDangerousHTML` is nonstandard, use `allowDangerousHtml` instead"));
            var r = n.allowDangerousHtml || n.allowDangerousHTML, i = {};
            return o.dangerous = r, o.definition = n.definitions || pn(e), o.footnoteById = i, o.footnoteOrder = [], o.augment = a, o.handlers = Object.assign({}, Mn, n.handlers), o.unknownHandler = n.unknownHandler, o.passThrough = n.passThrough, hn(e, "footnoteDefinition", (function (e) {
                var t = String(e.identifier).toUpperCase();
                yn.call(i, t) || (i[t] = e)
            })), o;

            function a(e, t) {
                var n, r;
                return e && e.data && ((n = e.data).hName && ("element" !== t.type && (t = {
                    type: "element",
                    tagName: "",
                    properties: {},
                    children: []
                }), t.tagName = n.hName), "element" === t.type && n.hProperties && (t.properties = Object.assign({}, t.properties, n.hProperties)), t.children && n.hChildren && (t.children = n.hChildren)), r = e && e.position ? e : {position: e}, fn(r) || (t.position = {
                    start: un.start(r),
                    end: un.end(r)
                }), t
            }

            function o(e, t, n, r) {
                return null == r && "object" == typeof n && "length" in n && (r = n, n = {}), a(e, {
                    type: "element",
                    tagName: t,
                    properties: n || {},
                    children: r || []
                })
            }
        }(e, t), r = dn(n, e), i = gn(n);
        return i && (r.children = r.children.concat(cn("text", "\n"), i)), r
    }

    var kn = 32, xn = 91;

    function Cn(e, t, n, r) {
        for (var i = e.length, a = -1; ++a < i;) if (t[e[a][0]].apply(n, r)) return !0;
        return !1
    }

    function An(e) {
        return !(!e.startsWith("./") && !e.startsWith("../")) || -1 === e.indexOf(":")
    }

    var Ln = /\u00A0/g;

    function En(e) {
        return e.replace(Ln, " ")
    }

    function Sn(e) {
        return e.split("#").filter((function (e) {
            return !!e
        })).join(" > ").trim()
    }

    function Hn(e) {
        var t = "", n = e.indexOf("|"), r = n > 0;
        return r ? (t = e.substr(n + 1).trim(), e = e.substr(0, n).trim()) : t = Sn(e = e.trim()), e.endsWith("\\") && (e = e.substr(0, e.length - 1)), {
            href: e = En(e).trim(),
            title: t,
            isAlias: r
        }
    }

    function Tn(e, t) {
        var n = function (e) {
            var t = e.match(/^\s*([0-9]+)\s*(?:x\s*([0-9]+)\s*)?$/);
            return t ? {x: parseInt(t[1]), y: t[2] ? parseInt(t[2]) : 0} : null
        }(e);
        if (!n) return !1;
        var r = n.x, i = n.y, a = t.data = t.data || {}, o = a.hProperties = a.hProperties || {};
        return o.width = String(r), 0 !== i && (o.height = String(i)), !0
    }

    var Vn = /^#[^\u2000-\u206F\u2E00-\u2E7F'!"#$%&()*+,.:;<=>?@^`{|}~\[\]\\\s]+/;
    var On = nn;
    On.globalOptions = {breaks: !0, commonmark: !0};
    var Nn = new rn, Pn = new rn, In = {};

    // 解析 markdown 的 ast
    function Dn(markdown) {
        let t = m()(markdown)
        let n = new On(String(t), t)
        n.setOptions(On.globalOptions);
        let ast = n.parse()
        for (let i = 0, transformers = Nn.transformers; i < transformers.length; i++) {
            transformers[i](ast, markdown)
        }
        return ast
    }

    !function (e) {
        var t = /\s/, n = function (e) {
            return t.test(e)
        }, r = "==";
        an(e, "mark", "text", (function (e, t, i) {
            if (this.options.gfm && t.substr(0, 2) === r && "====" !== t.substr(0, 4) && !n(t.charAt(2))) {
                var a = "", o = "", s = "", l = "", c = 1, h = t.length, u = e.now();
                for (u.column += 2, u.offset += 2; ++c < h;) {
                    if (!("=" !== (a = t.charAt(c)) || "=" !== o || s && n(s))) return !!i || e(r + l + r)({
                        type: "mark",
                        children: this.tokenizeInline(l, u),
                        data: {hName: "mark"}
                    });
                    l += o, s = o, o = a
                }
            }
        }), (function (e, t) {
            return e.indexOf(r, t)
        }))
    }(On),
        function (e) {
            var t = /!?\[\[/g, n = /^(!?)\[\[(.+?)]]/;
            an(e, "ilink", "link", (function (e, t, r) {
                var i = n.exec(t);
                if (i) {
                    var a = i[2].trim();
                    if (-1 !== a.indexOf("[[")) return !1;
                    if (r) return !0;
                    var o = "!" === i[1], s = Hn(a), l = s.href, c = s.title, h = s.isAlias;
                    if (o) return e(i[0])({
                        type: "iembed",
                        href: l,
                        title: c,
                        data: {
                            hName: "span",
                            hProperties: {className: "internal-embed", src: l, alt: c},
                            hChildren: [{type: "text", value: c}]
                        }
                    });
                    var u = {className: "internal-link", href: l, dataHref: l};
                    return h && (u["aria-label"] = Sn(l), u["data-tooltip-position"] = "top"), e(i[0])({
                        type: "ilink",
                        href: l,
                        title: c,
                        data: {hName: "a", hProperties: u, hChildren: [{type: "text", value: c}]}
                    })
                }
            }), (function (e, n) {
                t.lastIndex = n;
                var r = t.exec(e);
                return r ? r.index : -1
            }))
        }(On),
        function (e) {
            var t = /^#\d+$/, n = /\s/;
            an(e, "tag", "image", (function (e, n, r) {
                var i = Vn.exec(n);
                if (i) {
                    var a = i[0];
                    return !t.test(a) && (!!r || e(a)({
                        type: "tag",
                        tag: a,
                        data: {
                            hName: "a",
                            hProperties: {className: "tag", href: a},
                            hChildren: [{type: "text", value: a}]
                        }
                    }))
                }
            }), (function (e, t) {
                for (var r = t; -1 !== (r = e.indexOf("#", r));) {
                    if (r <= 0) return r;
                    var i = e.charAt(r - 1);
                    if (n.test(i)) return r;
                    r++
                }
            }))
        }(On),
        function (e) {
            function t(e) {
                if ("boolean" == typeof e.checked) {
                    var t = e, n = t.data = t.data || {}, r = n.hProperties = n.hProperties || {};
                    r.className = "task-list-item", e.checked && (r.className += " is-checked"), e.checklist && (r.dataTask = e.checklist);
                    var i = t.children[0];
                    i && "paragraph" === i.type && (t = i), t.children.unshift({
                        type: "checklist",
                        data: {
                            hName: "input",
                            hProperties: {className: "task-list-item-checkbox", type: "checkbox", checked: e.checked}
                        },
                        position: e.position
                    }), delete e.checked
                }
            }

            e.addTransformer((function (e) {
                ln(e, "listItem", t)
            }))
        }(Nn),
        function (e) {
            an(e, "math", "text", (function (e, t, n) {
                var r, i, a, o, s, l, c, h = t.length, u = !1, f = !1, p = 0;
                if (92 === t.charCodeAt(p) && (f = !0, p++), 36 === t.charCodeAt(p)) {
                    if (p++, f) return !!n || e(t.slice(0, p))({type: "text", value: "$"});
                    if (36 === t.charCodeAt(p) && (u = !0, p++), a = t.charCodeAt(p), u || 32 !== a && 9 !== a) {
                        for (o = p; p < h;) {
                            if (i = a, a = t.charCodeAt(p + 1), 36 === i) {
                                if (r = t.charCodeAt(p - 1), !u && (32 !== r && 9 !== r && (a != a || a < 48 || a > 57)) || u && 36 === a) {
                                    if (s = p - 1, p++, u) for (var d = ++p; d < h;) {
                                        var m = t.charAt(d);
                                        if ("\n" === m) {
                                            p = d + 1;
                                            break
                                        }
                                        if (!/\s/.test(m)) break;
                                        d++
                                    }
                                    l = p;
                                    break
                                }
                            } else 92 === i && (p++, a = t.charCodeAt(p + 1));
                            p++
                        }
                        if (void 0 !== l) return !!n || (c = t.slice(o, s + 1), e(t.slice(0, l))({
                            type: "inlineMath",
                            value: c,
                            data: {
                                hName: "span",
                                hProperties: {className: u ? "math math-block" : "math math-inline"},
                                hChildren: [{type: "text", value: c}]
                            }
                        }))
                    }
                }
            }), (function (e, t) {
                return e.indexOf("$", t)
            }))
        }(On),
        function (e) {
            on(e, "math", "fencedCode", (function (e, t, n) {
                for (var r, i, a, o, s, l, c, h, u, f, p, d = t.length, m = 0; m < d && 32 === t.charCodeAt(m);) m++;
                for (s = m; m < d && 36 === t.charCodeAt(m);) m++;
                if (!((l = m - s) < 2)) {
                    for (; m < d && 32 === t.charCodeAt(m);) m++;
                    for (c = m; m < d;) {
                        if (36 === (r = t.charCodeAt(m))) return;
                        if (10 === r) break;
                        m++
                    }
                    if (10 === t.charCodeAt(m)) {
                        if (n) return !0;
                        for (i = [], c !== m && i.push(t.slice(c, m)), m++, a = -1 === (a = t.indexOf("\n", m + 1)) ? d : a; m < d;) {
                            for (h = !1, f = m, p = a, o = a, u = 0; o > f && 32 === t.charCodeAt(o - 1);) o--;
                            for (; o > f && 36 === t.charCodeAt(o - 1);) u++, o--;
                            for (l <= u && t.indexOf("$", f) === o && (h = !0, p = o); f <= p && f - m < s && 32 === t.charCodeAt(f);) f++;
                            if (h) for (; p > f && 32 === t.charCodeAt(p - 1);) p--;
                            if (h && f === p || i.push(t.slice(f, p)), h) break;
                            m = a + 1, a = -1 === (a = t.indexOf("\n", m + 1)) ? d : a
                        }
                        return i = i.join("\n"), e(t.slice(0, a))({
                            type: "math",
                            value: i,
                            data: {
                                hName: "div",
                                hProperties: {className: "math math-block"},
                                hChildren: [{type: "text", value: i}]
                            }
                        })
                    }
                }
            }));
            var t = e.prototype;
            sn(t.interruptParagraph, "fencedCode", "math"), sn(t.interruptList, "fencedCode", "math"), sn(t.interruptBlockquote, "fencedCode", "math")
        }(On),
        function (e) {
            for (var t = e.prototype, n = t.blockMethods, r = [], i = 0; i < n.length; i++) {
                var a = n[i];
                "newline" !== a && "indentedCode" !== a && "paragraph" !== a && "footnoteDefinition" !== a && r.push([a])
            }
            r.push(["footnoteDefinition"]), t.interruptFootnoteDefinition = r, an(e, "inlineNote", "reference", (function (e, t, n) {
                var r, i, a, o, s, l, c, h = t.length + 1, u = 0, f = 0;
                if (94 === t.charCodeAt(u++) && t.charCodeAt(u++) === xn) {
                    for (a = u; u < h;) {
                        if ((i = t.charCodeAt(u)) != i) return;
                        if (void 0 === l) if (92 === i) u += 2; else if (i === xn) f++, u++; else if (93 === i) {
                            if (0 === f) {
                                o = u, u++;
                                break
                            }
                            f--, u++
                        } else if (96 === i) {
                            for (s = u, l = 1; 96 === t.charCodeAt(s + l);) l++;
                            u += l
                        } else u++; else if (96 === i) {
                            for (s = u, c = 1; 96 === t.charCodeAt(s + c);) c++;
                            u += c, l === c && (l = void 0), c = void 0
                        } else u++
                    }
                    if (void 0 !== o) return !!n || ((r = e.now()).column += 2, r.offset += 2, e(t.slice(0, u))({
                        type: "footnote",
                        children: this.tokenizeInline(t.slice(a, o), r)
                    }))
                }
            }), (function (e, t) {
                return e.indexOf("^[", t)
            })), on(e, "footnoteDefinition", "definition", (function (e, t, n) {
                for (var r, i, a, s, l, c, h, u, f, p, d, m, v, g = this, M = g.interruptFootnoteDefinition, y = g.offset, b = t.length + 1, w = 0, k = []; w < b && (9 === (s = t.charCodeAt(w)) || s === kn);) w++;
                if (t.charCodeAt(w++) === xn && 94 === t.charCodeAt(w++)) {
                    for (i = w; w < b;) {
                        if ((s = t.charCodeAt(w)) != s || 10 === s || 9 === s || s === kn) return;
                        if (93 === s) {
                            a = w, w++;
                            break
                        }
                        w++
                    }
                    if (void 0 !== a && i !== a && 58 === t.charCodeAt(w++)) {
                        if (n) return !0;
                        for (r = t.slice(i, a), l = e.now(), f = 0, p = 0, d = w, m = []; w < b;) {
                            if ((s = t.charCodeAt(w)) != s || 10 === s) v = {
                                start: f,
                                contentStart: d || w,
                                contentEnd: w,
                                end: w
                            }, m.push(v), 10 === s && (f = w + 1, p = 0, d = void 0, v.end = f); else if (void 0 !== p) if (s === kn || 9 === s) (p += s === kn ? 1 : 4 - p % 4) > 4 && (p = void 0, d = w); else {
                                if (p < 4 && v && (v.contentStart === v.contentEnd || Cn(M, o, g, [e, t.slice(w, 1024), !0]))) break;
                                p = void 0, d = w
                            }
                            w++
                        }
                        for (w = -1, b = m.length; b > 0 && (v = m[b - 1]).contentStart === v.contentEnd;) b--;
                        for (c = e(t.slice(0, v.contentEnd)); ++w < b;) v = m[w], y[l.line + w] = (y[l.line + w] || 0) + (v.contentStart - v.start), k.push(t.slice(v.contentStart, v.end));
                        return h = g.enterBlock(), u = g.tokenizeBlock(k.join(""), l), h(), c({
                            type: "footnoteDefinition",
                            identifier: r.toLowerCase(),
                            label: r,
                            children: u
                        })
                    }
                }
            })), an(e, "footnoteCall", "reference", (function (e, t, n) {
                var r, i, a, o, s = t.length + 1, l = 0;
                if (t.charCodeAt(l++) === xn && 94 === t.charCodeAt(l++)) {
                    for (i = l; l < s;) {
                        if ((o = t.charCodeAt(l)) != o || 10 === o || 9 === o || o === kn) return;
                        if (93 === o) {
                            a = l, l++;
                            break
                        }
                        l++
                    }
                    if (void 0 !== a && i !== a) return !!n || (r = t.slice(i, a), e(t.slice(0, l))({
                        type: "footnoteReference",
                        identifier: r.toLowerCase(),
                        label: r
                    }))
                }
            }), (function (e, t) {
                return e.indexOf("[", t)
            }));
            var o = t.blockTokenizers, s = t.inlineTokenizers, l = o.definition, c = s.reference;

            function h(e, t, n) {
                var r = 0;
                if (33 === t.charCodeAt(r) && r++, t.charCodeAt(r) === xn && 94 !== t.charCodeAt(r + 1)) return c.call(this, e, t, n)
            }

            o.definition = function (e, t, n) {
                for (var r = 0, i = t.charCodeAt(r); i === kn || 9 === i;) i = t.charCodeAt(++r);
                if (i === xn && 94 !== t.charCodeAt(r + 1)) return l.call(this, e, t, n)
            }, s.reference = h, h.locator = c.locator
        }(On),
        function (e) {
            var t = e.prototype.inlineTokenizers, n = t.break, r = function (e, t, r) {
                if (!this.options.breaks && !this.options.breakOnce) return n.call(this, e, t, r);
                for (var i, a = t.length, o = -1; ++o < a;) {
                    if (10 === (i = t.charCodeAt(o))) return this.options.breakOnce = !1, !!r || e(t.slice(0, o + 1))({type: "break"});
                    if (32 !== i) return
                }
            };
            r.locator = n.locator, t.break = r
        }(On),
        function (e) {
            var t = "---", n = t.length, r = function (e, r, i) {
                if (r.slice(0, n) === t && "\n" === r.charAt(n)) {
                    for (var a = r.indexOf(t, n); -1 !== a && "\n" !== r.charAt(a - 1);) a = r.indexOf(t, a + n);
                    return -1 !== a ? !!i || e(r.slice(0, a + t.length))({
                        type: "yaml",
                        value: r.slice(t.length + 1, a - 1)
                    }) : void 0
                }
            };
            r.onlyAtStart = !0;
            var i = e.prototype;
            i.blockMethods.unshift("frontmatter"), i.blockTokenizers.frontmatter = r
        }(On),
        function (e) {
            var t = /^\^([a-zA-Z0-9\-]+)$/, n = /\s/;
            an(e, "blockid", "text", (function (e, n, r) {
                var i = t.exec(n);
                if (i) {
                    var a = i[1];
                    return !!r || e(i[0])({type: "blockid", id: a})
                }
            }), (function (e, t) {
                for (var r = t; -1 !== (r = e.indexOf("^", r));) {
                    if (r <= 0) return -1;
                    var i = e.charAt(r - 1);
                    if (n.test(i)) return r;
                    r++
                }
            }));
            var r = /^\^([a-zA-Z0-9\-]+)(?=$|\n$|\n\n)/;
            on(e, "blockid", "paragraph", (function (e, t, n) {
                var i = r.exec(t);
                if (i) {
                    var a = i[1];
                    return !!n || e(i[0])({type: "blockid", id: a})
                }
            }))
        }(On),
        function (e) {
            e.addTransformer((function (e) {
                ln(e, "link", (function (e, t, n) {
                    var r = e.url;
                    if (r && An(r)) {
                        var i = void 0;
                        try {
                            i = decodeURI(r)
                        } catch (e) {
                            return
                        }
                        var a = En(i).trim();
                        n.children[t] = {
                            type: "ilink",
                            href: a,
                            title: "",
                            converted: !0,
                            data: {
                                url: r,
                                hName: "a",
                                hProperties: {href: a, dataHref: a, className: "internal-link", title: e.title}
                            },
                            children: e.children,
                            position: e.position
                        }
                    }
                }))
            }))
        }(Nn),
        function (e) {
            e.addTransformer((function (e) {
                ln(e, "image", (function (e, t, n) {
                    var r = e.url;
                    if (r && An(r)) {
                        var i = void 0;
                        try {
                            i = decodeURI(r)
                        } catch (e) {
                            return
                        }
                        var a = En(i).trim();
                        n.children[t] = {
                            type: "iembed",
                            href: a,
                            title: e.alt,
                            data: {hName: "div", hProperties: {className: "internal-embed", src: a, alt: e.alt}},
                            children: e.children,
                            position: e.position
                        }
                    }
                }))
            }))
        }(Nn),
        function (e) {
            e.addTransformer((function (e) {
                var t = [], n = {}, r = {};

                function i(e, t, n) {
                    var r = String(t + 1), i = r;
                    n > 0 && (i += "-" + n), e.type = "fnRef", e.data = {
                        hName: "sup",
                        hProperties: {className: "footnote-ref", "data-footnote-id": "fnref-" + i}
                    }, e.children = [{
                        type: "element",
                        data: {
                            hName: "a",
                            hProperties: {className: "footnote-link", href: "#fn-" + r},
                            hChildren: [{type: "text", value: "[" + i + "]"}]
                        }
                    }]
                }

                ln(e, "footnoteDefinition", (function (e) {
                    var t = String(e.identifier);
                    r[":" + t] = -1, n[":" + t] = {children: e.children, position: e.position}
                })), ln(e, ["footnote", "footnoteReference"], (function (e) {
                    if ("footnote" === e.type) {
                        var a = t.length, o = String(a);
                        t.push({count: 1, identifier: o}), n[o] = {
                            children: e.children,
                            position: e.position
                        }, i(e, a, 0)
                    } else {
                        o = String(e.identifier);
                        if (!r.hasOwnProperty(":" + o)) return e.type = "text", void (e.value = o);
                        -1 === (a = r[":" + o]) && (a = t.length, r[":" + o] = a, t.push({
                            count: 0,
                            identifier: ":" + o
                        }));
                        var s = t[a], l = s.count;
                        s.count++, i(e, a, l)
                    }
                }));
                for (var a = [], o = 0; o < t.length; o++) {
                    var s = t[o], l = n[s.identifier];
                    if (l) {
                        var c = l.children, h = c[c.length - 1];
                        h && "paragraph" === h.type && (c = h.children);
                        for (var u = String(o + 1), f = 0; f < s.count; f++) {
                            var p = u;
                            f > 0 && (p += "-" + f), c.push({
                                type: "element",
                                data: {
                                    hName: "a",
                                    hProperties: {className: "footnote-backref footnote-link", href: "#fnref-" + p},
                                    hChildren: [{type: "text", value: "↩︎"}]
                                }
                            })
                        }
                        a.push({
                            type: "listItem",
                            synthetic: !0,
                            data: {hProperties: {"data-footnote-id": "fn-" + u}},
                            children: l.children,
                            position: l.position
                        })
                    }
                }
                if (0 !== a.length) {
                    var d, m = e.children[e.children.length - 1],
                        v = {start: d = m ? m.position.end : {line: 1, column: 1, offset: 0}, end: d};
                    e.children = e.children.concat({type: "text", value: "\n", position: v}, {
                        type: "element",
                        position: v,
                        data: {hName: "section", hProperties: {className: "footnotes"}},
                        children: [{type: "thematicBreak", position: v}, {
                            type: "list",
                            position: v,
                            ordered: !0,
                            start: 1,
                            spread: !1,
                            children: a
                        }]
                    })
                }
            }))
        }(Nn),
        function (e) {
            e.addTransformer((function (e) {
                ln(e, "image", (function (e) {
                    var t = e.alt;
                    if (t) {
                        var n = t.lastIndexOf("|");
                        if (-1 !== n) Tn(t.substr(n + 1), e) && (e.alt = t.substr(0, n))
                    }
                }))
            }))
        }(Nn),
        function (e) {
            e.addTransformer((function (e) {
                ln(e, "iembed", (function (e) {
                    var t = e.title;
                    if (t) {
                        var n = t.lastIndexOf("|");
                        if (-1 !== n) Tn(t.substr(n + 1), e) && (t = t.substr(0, n)); else Tn(t, e) && (t = "");
                        t || (t = e.href), e.data.hProperties.alt = t
                    }
                }))
            }))
        }(Nn),
        function (e, t) {
            t.blockid = function () {
                return null
            }, e.addTransformer((function (e) {
                for (var t, n = e.children, r = function (e) {
                    var r = n[e];
                    if ("blockid" === r.type) {
                        if (e > 0) n[e - 1].id = r.id;
                        return n.splice(e, 1), e--, t = e, "continue"
                    }
                    if ("list" === r.type) return ln(r, "listItem", (function (e) {
                        var t = null;
                        ln(e, ["list", "blockid"], (function (e) {
                            return "list" === e.type ? "skip" : (t = e.id, !1)
                        })), t && (e.id = t)
                    })), t = e, "continue";
                    var i = null;
                    ln(r, "blockid", (function (e) {
                        i = e.id
                    })), i && (r.id = i), t = e
                }, i = 0; i < n.length; i++) r(i), i = t
            }))
        }(Nn, In),
        function (e) {
            e.addTransformer((function (e, t) {
                ln(e, "heading", (function (e, n, r) {
                    var i = function (e, t) {
                        var n = t.position.end, r = t.position.end, i = t.children;
                        return i.length > 0 && (n = i[0].position.start, r = i[i.length - 1].position.end), e.substring(n.offset, r.offset).trim()
                    }(t, e);
                    e.data = {hProperties: {dataHeading: i}}
                }))
            }))
        }(Nn),
        function (e, t) {
            t.callout = function (e, t) {
                var n = t.callout, r = n.color, i = null;
                if (r) {
                    r = r.replace(/^#([a-f\d])([a-f\d])([a-f\d])$/i, (function (e, t, n, r) {
                        return "#" + t + t + n + n + r + r
                    }));
                    var a = /^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(r);
                    a && (i = "--callout-color: " + [parseInt(a[1], 16), parseInt(a[2], 16), parseInt(a[3], 16)].join(",") + ";")
                }
                return e(t, "div", {
                    className: "callout",
                    dataCallout: n.type,
                    dataCalloutIcon: n.icon,
                    dataCalloutFold: n.fold,
                    dataCalloutMetadata: n.data,
                    style: i
                }, mn(e, t))
            }, t["callout-title"] = function (e, t) {
                return e(t, "div", {className: "callout-title"}, [e({}, "div", {className: "callout-icon"}), e({}, "div", {className: "callout-title-inner"}, mn(e, t))])
            }, t["callout-content"] = function (e, t) {
                return e(t, "div", {className: "callout-content"}, vn(mn(e, t), !0))
            }, e.addTransformer((function (e) {
                ln(e, "blockquote", (function (e) {
                    var t = e.callout;
                    if (t) {
                        e.type = "callout";
                        var n = [], r = e.children, i = r && r[0];
                        if (i && i.position.start.line === e.position.start.line) if ("paragraph" === i.type) {
                            for (var a = i.children, o = 0, s = void 0; o < a.length; o++) if ("break" === a[o].type) {
                                s = a[o];
                                break
                            }
                            var l = r.slice(1);
                            s ? (n.push({
                                type: "callout-title",
                                position: {start: i.position.start, end: s.position.start},
                                children: a.slice(0, o)
                            }), i.position.start = s.position.end, i.children = a.slice(o + 1), l.unshift(i)) : n.push({
                                type: "callout-title",
                                position: i.position,
                                children: a
                            }), l.length > 0 && n.push({
                                type: "callout-content",
                                position: {start: l[0].position.start, end: l[l.length - 1].position.end},
                                children: l
                            })
                        } else {
                            n.push({type: "callout-title", position: i.position, children: [i]});
                            var c = r[1];
                            if (c) {
                                var h = c.position.start, u = r[r.length - 1].position.end;
                                n.push({type: "callout-content", position: {start: h, end: u}, children: r.slice(1)})
                            }
                        } else {
                            var f = {start: e.position.start, end: e.position.start},
                                p = t.type.trim().replace(/\-/g, " ").toLowerCase();
                            p = p.charAt(0).toUpperCase() + p.substr(1), n.push({
                                type: "callout-title",
                                position: f,
                                children: [{type: "text", value: p, position: f}]
                            }), i && n.push({type: "callout-content", position: e.position, children: r})
                        }
                        e.children = n
                    }
                }))
            }))
        }(Nn, In),
        function (e) {
            function t(e) {
                var t = e.properties;
                if (t && !t.className) {
                    t.className = "external-link", t.target = "_blank", t.rel = "noopener";
                    var n = "", r = e.children;
                    r && r.length > 0 && (n = r[0].value), t.href !== n && (t["aria-label"] = t.href, t["data-tooltip-position"] = "top")
                }
            }

            e.addTransformer((function (e) {
                ln(e, {type: "element", tagName: "a"}, t)
            }))
        }(Pn),
        function (e, t) {
            t.yaml = function (e, t) {
                var n = t.value || "";
                return e(t.position, "pre", {className: "frontmatter"}, [e(t, "code", {className: "language-yaml"}, [tn("text", n)])])
            }
        }(0, In),
        function (e, t) {
            var n = /^%%(.+?)%%/;
            an(e, "comment", "text", (function (e, t, r) {
                var i = n.exec(t);
                if (i) {
                    if (r) return !0;
                    var a = e.now();
                    return a.column += 2, a.offset += 2, e(i[0])({
                        type: "comment",
                        children: this.tokenizeInline(i[1], a)
                    })
                }
            }), (function (e, t) {
                return e.indexOf("%%", t)
            })), t.comment = function () {
                return null
            }, on(e, "comment", "fencedCode", (function (e, t, n) {
                for (var r = t.length, i = 0; i < r && 32 === t.charCodeAt(i);) i++;
                for (var a = i; i < r && 37 === t.charCodeAt(i);) i++;
                var o = i - a;
                if (!(o < 2)) {
                    for (var s = i; i < r;) {
                        var l = t.charCodeAt(i);
                        if (37 === l) return;
                        if (10 === l) break;
                        i++
                    }
                    if (n) return !0;
                    for (var c = r, h = 0; i < r;) {
                        if (37 === t.charCodeAt(i)) {
                            if (o === ++h) {
                                c = i + 1;
                                break
                            }
                        } else h = 0;
                        i++
                    }
                    var u = t.substring(s, c - o), f = e.now();
                    return e(t.slice(0, c))({type: "comment", value: u, children: this.tokenizeInline(u, f)})
                }
            }));
            var r = e.prototype;
            sn(r.interruptParagraph, "fencedCode", "comment"), sn(r.interruptList, "fencedCode", "comment"), sn(r.interruptBlockquote, "fencedCode", "comment")
        }(On, In);

    let __hasOwnProperty = Object.prototype.hasOwnProperty;

    function zn(e, t, n) {
        if (!e) return null;
        var r = function (e, t) {
            if (!e) return null;
            if ("string" == typeof t) return __hasOwnProperty.call(e, t) ? e[t] : null;
            for (var n in e) if (__hasOwnProperty.call(e, n) && t.test(n)) return e[n];
            return null
        }(e, t);
        if (!r) return null;
        var i = [];
        if ("string" == typeof r && (r = r.split(/[,\n]/)), Array.isArray(r)) {
            for (var a = 0, o = r; a < o.length; a++) {
                var s = o[a];
                if ("string" == typeof s) if (n) for (var l = 0, c = s.split(/\s/g); l < c.length; l++) {
                    var h = c[l];
                    h && i.push(h)
                } else (s = s.trim()) && i.push(s)
            }
            return 0 === i.length ? null : i
        }
        return null
    }

    function Rn(e) {
        return e ? zn(e, /^alias(es)?$/i) : null
    }

    function Zn(e) {
        return p()(e)
    }

    function Bn(e) {
        var t = [];
        if (!e) return t;
        for (var n = 0, r = e; n < r.length; n++) {
            var i = r[n];
            t.push(jn(i))
        }
        return t
    }

    function jn(e) {
        if (!e) return "";
        var t = e.type;
        if ("iembed" === t) return e.href;
        if ("listItem" === t) {
            var n = Bn(e.children);
            return 1 === n.length ? n[0] + "\n" : n.join("\n")
        }
        if ("tag" === t) return e.tag;
        if ("comment" === t) return "";
        var r = e.value || e.alt || e.title || e.hasOwnProperty("children") && Bn(e.children).join("") || "";
        return "list" === t && e.start && (r = e.start + ". " + r), "paragraph" === t || "break" === t ? r += "\n" : r.endsWith("\n") && (r = r.substring(0, r.length - 1)), "tableCell" === t ? r += " " : "tableRow" === t && (r += "\n"), r
    }

    function Fn(e) {
        var t = Dn(e), n = {definitions: Zn(t)}, r = [], i = [], a = [], o = t.children, s = function (e) {
            var t = e.children[0];
            if (t && "yaml" === t.type) try {
                var n = Kt(t.value, void 0, {});
                if (n && "object" == typeof n && !Array.isArray(n)) return n || void 0
            } catch (e) {
                return null
            }
        }(t);
        t.children = [null];
        for (var l = function (e) {
            var s = o[e], l = 7;
            "heading" === s.type && (l = s.depth || 1);
            var c = s.position.start.line - 1, h = s.position.end.line - 1;
            ln(s, "checklist", (function (e) {
                var t = e.position.start.line - 1;
                e.data.hProperties["data-line"] = String(t - c)
            })), ln(s, "listItem", (function (e) {
                var t = e.position.start.line - 1, n = e.data = e.data || {};
                (n.hProperties = n.hProperties || {})["data-line"] = String(t - c)
            })), t.children[0] = s;
            var f = function (e, t) {
                (t = t || {}).allowDangerousHtml = !0, t.handlers = In;
                for (var n = wn(e, t), r = 0, i = Pn.transformers; r < i.length; r++) (0, i[r])(n, "");
                return u()(n, {allowDangerousHtml: !0})
            }(t, n);
            r.push(f), i.push([c, h]), a.push(l)
        }, c = 0; c < o.length; c++) l(c);
        return {sectionHtml: r, lineNumbers: i, levels: a, frontmatter: s}
    }

    function Un(e, t) {
        e.toggleClass("is-collapsed", t);
        var n = e.find(".collapse-icon");
        n && n.toggleClass("is-collapsed", t)
    }

    const Component = function () {
        function e() {
            this._loaded = false
            this._events = []
            this._children = []
        }

        e.prototype.load = function () {
            if (!this._loaded) {
                this._loaded = !0, this.onload();
                for (var e = 0, t = this._children.slice(); e < t.length; e++) {
                    t[e].load()
                }
            }
        }
        e.prototype.onload = function () {
        }
        e.prototype.unload = function () {
            if (this._loaded) {
                this._loaded = !1;
                for (var e = this._children, t = this._events; e.length > 0;) {
                    e.pop().unload()
                }
                for (; t.length > 0;) {
                    t.pop()()
                }
                this.onunload()
            }
        }
        e.prototype.onunload = function () {
        }
        e.prototype.addChild = function (e) {
            return this._children.push(e), this._loaded && e.load(), e
        }
        e.prototype.removeChild = function (e) {
            var t = this._children, n = t.indexOf(e);
            return -1 !== n && (t.splice(n, 1), e.unload()), e
        }
        e.prototype.register = function (e) {
            this._events.push(e)
        }
        e.prototype.registerEvent = function (e) {
            this.register((function () {
                return e.e.offref(e)
            }))
        }
        e.prototype.registerDomEvent = function (e, t, n, r) {
            e.addEventListener(t, n, r), this.register((function () {
                return e.removeEventListener(t, n, r)
            }))
        }
        e.prototype.registerScopeEvent = function (e) {
            this.register((function () {
                return e.scope.unregister(e)
            }))
        }
        e.prototype.registerInterval = function (e) {
            return this.register((function () {
                return clearInterval(e)
            })), e
        }
        return e
    }()

    let $n = {height: "", paddingTop: "", paddingBottom: "", marginTop: "", marginBottom: ""}
    let Wn = new WeakMap()

    let Gn = function () {
        function e(options) {
            this.from = {}
            this.to = {}
            this.end = {}
            let _opts = options || {},
                _duration = _opts.duration,
                duration = void 0 === _duration ? 100 : _duration,
                _fn = _opts.fn,
                fn = void 0 === _fn ? "ease-in-out" : _fn;
            this.duration = duration
            this.fn = fn
        }

        e.prototype.addProp = function (e, t, n, r) {
            return void 0 === r && (r = null), null !== t && (this.from[e] = t), null !== n && (this.to[e] = n), null !== r && (this.end[e] = r), this
        }
        return e
    }()

    function Kn(el, from) {
        for (let prop in from) {
            if (from.hasOwnProperty(prop)) {
                el.style[prop] = from[prop]
            }
        }
    }

    function Yn(e) {
        var t = window.getComputedStyle(e), n = {};
        for (var r in $n) if ($n.hasOwnProperty(r)) {
            var i = t[r];
            if (i && i.endsWith("px")) {
                var a = parseFloat(i.substr(0, i.length - 2));
                0 !== a && (n[r] = a)
            }
        }
        return n
    }

    function Xn(e, t) {
        var n = Wn.get(e);
        Wn.delete(e), n && (e.style.transition = "", Kn(e, n.props.end), n.win.clearTimeout(n.timer), e.removeEventListener("transitionend", n.fn), t || n.complete && n.complete())
    }

    var Jn = null;

    function transitionElement(el, props, complete) {
        Xn(el)
        Kn(el, props.from)
        let config = {
            props: props,
            fn: function () {
                return Xn(el)
            },
            timer: 0,
            complete: complete,
            win: el.win
        };
        Wn.set(el, config);
        if (null === Jn) {
            Jn = []
            setTimeout(function () {
                document.body.offsetHeight;
                var e = Jn;
                Jn = null;
                for (var t = 0, n = e; t < n.length; t++) {
                    (0, n[t])()
                }
            }, 0)
        }
        Jn.push(function () {
            el.style.transition = "all " + props.duration + "ms " + props.fn
            Kn(el, props.to)
            el.addEventListener("transitionend", function (t) {
                t.target === el && config.fn()
            })
            config.timer = config.win.setTimeout(config.fn, props.duration + 50)
        })
    }

    function er(e) {
        return new Promise((function (t) {
            return function (e, t) {
                Xn(e);
                var n = Yn(e), r = new Gn({duration: 100, fn: "cubic-bezier(.02, .01, .47, 1)"});
                for (var i in r.addProp("overflowY", "clip", "clip", ""), n) n.hasOwnProperty(i) && r.addProp(i, "0px", n[i] + "px", "");
                transitionElement(e, r, t)
            }(e, t)
        }))
    }

    function tr(e) {
        return new Promise((function (t) {
            return function (e, t) {
                Xn(e);
                var n = Yn(e), r = new Gn({duration: 100, fn: "cubic-bezier(.02, .01, .47, 1)"});
                for (var i in r.addProp("overflowY", "clip", "clip", ""), n) n.hasOwnProperty(i) && r.addProp(i, n[i] + "px", "0px", "");
                transitionElement(e, r, t)
            }(e, t)
        }))
    }

    function nr(e, t, n, r) {
        return a(this, void 0, Promise, (function () {
            return o(this, (function (i) {
                switch (i.label) {
                    case 0:
                        return n ? r ? [4, tr(e)] : [3, 2] : [3, 3];
                    case 1:
                        i.sent(), i.label = 2;
                    case 2:
                        return e.detach(), [3, 5];
                    case 3:
                        return e.show(), t.appendChild(e), r ? [4, er(e)] : [3, 5];
                    case 4:
                        i.sent(), i.label = 5;
                    case 5:
                        return [2]
                }
            }))
        }))
    }

    let __appVersion = navigator.appVersion,
        __os = -1 !== __appVersion.indexOf("Win")
            ? "Windows"
            : -1 !== __appVersion.indexOf("Mac")
                ? "MacOS"
                : -1 !== __appVersion.indexOf("X11") || -1 !== __appVersion.indexOf("Linux")
                    ? "Linux"
                    : "Unknown OS",
        __ua = navigator.userAgent.toLowerCase(),
        isMacOS = "MacOS" === __os,
        isWin = "Windows" === __os,
        isLinux = "Linux" === __os,
        isFirefox = __ua.indexOf("firefox") > -1,
        isSafari = /^((?!chrome|android).)*safari/i.test(__ua);


    function ur(e) {
        return isMacOS && 0 === e.button && e.ctrlKey
    }

    let Platform = {
        isDesktop: !1,
        isMobile: !1,
        isDesktopApp: !1,
        isMobileApp: !1,
        isIosApp: !1,
        isAndroidApp: !1,
        isPhone: !1,
        isTablet: !1,
        isMacOS: isMacOS,
        isWin: isWin,
        isLinux: isLinux,
        isSafari: isSafari,
        resourcePathPrefix: "file:///",
        get canExportPdf() {
            return Platform.isDesktopApp
        },
        get canPopoutWindow() {
            return Platform.isDesktopApp
        },
        get canStackTabs() {
            return !Platform.isPhone
        },
        get canSplit() {
            return !Platform.isPhone
        },
        mobileDeviceHeight: 0,
        mobileKeyboardHeight: 0,
        mobileSoftKeyboardVisible: !1
    };


    function pr(e, t) {
        var n = e[t];
        Object.defineProperty(e, t, {
            get: function () {
                return n
            }, set: function () {
            }
        })
    }

    var dr = /&(amp|lt|gt|quot);/g,
        mr = {"&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"'};

    function vr(e) {
        return mr[e]
    }

    function gr(e) {
        return e.replace(dr, vr)
    }

    var Mr = /[.?*+^$[\]\\(){}|-]/g;

    function yr(e) {
        return e.replace(Mr, "\\$&")
    }

    const UniqueFileLookup = function () {
        function e() {
            this.data = {}
        }

        e.prototype.add = function (e, t) {
            var n, r = this.data;
            r.hasOwnProperty(e) ? n = r[e] : r[e] = n = [], n.contains(t) || n.push(t)
        }
        e.prototype.remove = function (e, t) {
            var n = this.data;
            if (n.hasOwnProperty(e)) {
                var r = n[e];
                r.remove(t), 0 === r.length && delete n[e]
            }
        }
        e.prototype.removeKey = function (e) {
            delete this.data[e]
        }
        e.prototype.get = function (e) {
            return this.data.hasOwnProperty(e) ? this.data[e] : null
        }
        e.prototype.keys = function () {
            return Object.keys(this.data)
        }
        e.prototype.clear = function (e) {
            delete this.data[e]
        }
        e.prototype.clearAll = function () {
            this.data = {}
        }
        e.prototype.contains = function (e, t) {
            var n = this.data;
            if (n.hasOwnProperty(e)) {
                var r = n[e];
                return r && r.contains(t)
            }
            return !1
        }
        e.prototype.count = function () {
            var e = this.data, t = 0;
            for (var n in e) e.hasOwnProperty(n) && (t += e[n].length);
            return t
        }
        return e
    }();

    function genRandomHex(len) {
        const t = []
        for (let i = 0; i < len; i++) {
            t.push((16 * Math.random() | 0).toString(16))
        }
        return t.join("")
    }

    // (function () {
    //     function e() {
    //         this.data = new Map
    //     }
    //
    //     e.prototype.add = function (e, t) {
    //         var n = this.data;
    //         n.has(e) ? n.get(e).push(t) : n.set(e, [t])
    //     }, e.prototype.delete = function (e, t) {
    //         var n = this.data;
    //         if (n.has(e)) {
    //             var r = n.get(e);
    //             r.remove(t), 0 === r.length && n.delete(e)
    //         }
    //     }, e.prototype.get = function (e) {
    //         return this.data.get(e)
    //     }
    // })(), function () {
    //     function e() {
    //         this.data = new Map
    //     }
    //
    //     e.prototype.add = function (e, t) {
    //         var n = this.data;
    //         n.has(e) ? n.get(e).add(t) : n.set(e, new Set([t]))
    //     }, e.prototype.delete = function (e, t) {
    //         var n = this.data;
    //         if (n.has(e)) {
    //             var r = n.get(e);
    //             r.delete(t), 0 === r.size && n.delete(e)
    //         }
    //     }, e.prototype.get = function (e) {
    //         return this.data.get(e)
    //     }, e.prototype.getArray = function (e) {
    //         var t = this.data;
    //         return t.has(e) ? Array.from(t.get(e)) : []
    //     }
    // }();

    function kr(e, t, n) {
        void 0 === t && (t = 0), void 0 === n && (n = !1);
        var r = null, i = null, a = null, o = 0, s = activeWindow, l = function () {
            var t = i, n = a;
            return i = null, a = null, e.apply(t, n)
        }, c = function () {
            if (o) {
                var e = Date.now();
                if (e < o) return s = activeWindow, r = s.setTimeout(c, o - e), void (o = 0)
            }
            r = null, l()
        }, h = function () {
            for (var e = [], l = 0; l < arguments.length; l++) e[l] = arguments[l];
            return i = this, a = e, r ? n && (o = Date.now() + t) : (s = activeWindow, r = s.setTimeout(c, t)), h
        };
        return h.cancel = function () {
            return r && (s.clearTimeout(r), r = null), h
        }, h.run = function () {
            if (r) return s.clearTimeout(r), r = null, l()
        }, h
    }

    // window.queueMicrotask || window.setTimeout;

    function xr(e) {
        return a(this, void 0, void 0, (function () {
            var t;
            return o(this, (function (n) {
                return (t = {})[e.type] = e, [2, navigator.clipboard.write([new ClipboardItem(t)])]
            }))
        }))
    }

    function Cr(e, t) {
        return a(this, void 0, Promise, (function () {
            var n, r, i, a;
            return o(this, (function (o) {
                return n = e.getAttr("alt") || null, r = e.createEl("img", {attr: {alt: n}}), i = e.getAttr("width"), a = e.getAttr("height"), i && r.setAttr("width", i), a && r.setAttr("height", a), [2, new Promise((function (e) {
                    var n = function () {
                        return e()
                    };
                    r.addEventListener("load", n), r.addEventListener("error", n), activeWindow.setTimeout(n, 5e3), r.src = t
                }))]
            }))
        }))
    }

    function Ar(e, t) {
        return a(this, void 0, Promise, (function () {
            var n;
            return o(this, (function (r) {
                return n = e.createEl("audio", {
                    attr: {
                        controls: "",
                        controlsList: "nodownload"
                    }
                }), [2, new Promise((function (e) {
                    var r = function () {
                        return e()
                    };
                    n.addEventListener("loadedmetadata", r), n.addEventListener("error", r), activeWindow.setTimeout(r, 5e3), n.src = t
                }))]
            }))
        }))
    }

    function Lr(e, t) {
        return a(this, void 0, Promise, (function () {
            var n;
            return o(this, (function (r) {
                return n = e.createEl("video", {attr: {controls: ""}}), [2, new Promise((function (r) {
                    var i = function () {
                        n.style.height = "", r()
                    };
                    n.addEventListener("loadedmetadata", (function () {
                        0 === n.videoWidth && 0 === n.videoHeight ? (n.src = "", e.removeChild(n), Ar(e, t).then(i, i)) : i()
                    })), n.addEventListener("error", i), n.style.height = "0", activeWindow.setTimeout(i, 5e3), n.src = t
                }))]
            }))
        }))
    }

    function Er(e, t) {
        var n = activeWindow;
        if (t > 0 && n.requestIdleCallback) {
            var r = n.requestIdleCallback(e, {timeout: t});
            return {
                high: !1, cancel: function () {
                    return n.cancelIdleCallback(r)
                }
            }
        }
        var i = n.requestAnimationFrame(e);
        return {
            high: !0, cancel: function () {
                return n.cancelAnimationFrame(i)
            }
        }
    }

    function Sr(e, t) {
        var n = e.relatedTarget;
        return !n || !t.contains(n)
    }

    var Hr = /bot|crawl|spider/i.test(navigator.userAgent);
    var Tr = {sx: 0, sy: 0, ex: 0, ey: 0, t: 0};

    function Vr(e) {
        return Tr && Date.now() - Tr.t < 1e3 && (Math.abs(e.clientX - Tr.sx) < 5 && Math.abs(e.clientY - Tr.sy) < 5 || Math.abs(e.clientX - Tr.ex) < 5 && Math.abs(e.clientY - Tr.ey) < 5)
    }

    function Or(e, t, n) {
        return a(this, void 0, Promise, (function () {
            return o(this, (function (r) {
                return [2, new Promise((function (r) {
                    return e.toBlob(r, t, n)
                }))]
            }))
        }))
    }

    let scrollEventOption = false
    try {
        window.addEventListener("test", null, Object.defineProperty({}, "passive", {
            get: function () {
                scrollEventOption = {
                    passive: false
                }
            }
        }))
    } catch (e) {
    }

    function Pr(e, t, n) {
        var r, i, a;
        n = n || {}, t.show();
        var o = null !== (r = n.gap) && void 0 !== r ? r : 0,
            s = n.offsetParent || t.offsetParent || t.doc.documentElement,
            l = null !== (i = n.horizontalAlignment) && void 0 !== i ? i : "left",
            c = null !== (a = n.preventOverlap) && void 0 !== a && a, h = s.scrollTop + 10,
            u = s.scrollTop + s.clientHeight - 10, f = Math.min(e.top, u), p = Math.max(e.bottom, h),
            d = t.offsetHeight, m = e.top - h, v = u - e.bottom, g = 0, M = 0, y = "";
        v >= d + o ? (M = p + o, y = "bottom") : m >= d + o ? (M = f - o - d, y = "top") : c && m > v ? (M = Math.max(f - o - d, o), y = "top", g = m) : c ? (M = p + o, y = "bottom", g = v) : s.clientHeight < d + o ? (M = h, y = "overlap") : (M = u - d, y = "overlap");
        var b = s.scrollLeft + 10, w = s.scrollLeft + s.clientWidth - 10, k = t.offsetWidth,
            x = "left" === l ? e.left : e.right - k;
        return x < b ? x = b : x > w - k && (x = w - k), t.style.top = "".concat(M, "px"), t.style.left = "".concat(x, "px"), t.style.maxHeight = g > 0 ? "".concat(g, "px") : "", {
            top: M,
            left: x,
            vresult: y
        }
    }

    function Ir(e, t) {
        for (var n = 0, r = 0, i = t ? t.offsetParent : null; e && e !== t && e !== i;) {
            n += e.offsetTop, r += e.offsetLeft;
            for (var a = e.offsetParent, o = e.parentElement; o && o !== a;) n -= o.scrollTop, r -= o.scrollLeft, o = o.parentElement;
            a && a !== t && a !== i && (n -= a.scrollTop, r -= a.scrollLeft), e = a
        }
        return {top: n, left: r}
    }

    function loadScriptAsync(src, hooks) {
        let _loaded = false, r = null;
        return {
            get loaded() {
                return _loaded
            },
            get promise() {
                if (_loaded) {
                    return Promise.resolve();
                }
                if (!r) {
                    hooks && hooks.before && hooks.before();
                    let _promise = function (src) {
                        return new Promise(function (resolve, reject) {
                            var r = document.createElement("script");
                            r.type = "text/javascript", r.src = src, r.addEventListener("load", (function () {
                                return resolve(r)
                            })), r.addEventListener("error", (function (e) {
                                return reject(e)
                            })), document.body.appendChild(r)
                        })
                    }(src);
                    _promise.catch(function (e) {
                        e.detach(), r = null
                    })
                    r = _promise.then(function () {
                        _loaded = !0, r = null, hooks && hooks.after && hooks.after()
                    })
                }
                return r
            },
            then: function (e) {
                return _loaded ? Promise.resolve(e()) : this.promise.then(e)
            }
        }
    }

    function qr(e, t) {
        if (3 !== e.nodeType) for (var n = e.firstChild; n;) qr(n, t), n = n.nextSibling; else t.push(e)
    }

    function zr(e, t, n) {
        var r = [];
        qr(e, r);
        var i = r.map((function (e) {
            return e.textContent || ""
        }));
        return Rr(r, i, t, n)
    }

    function Rr(e, t, n, r) {
        for (var i = 0, a = null, o = -1, s = null, l = -1, c = 0; c < t.length; c++) {
            var h = i + t[c].length;
            if (i <= n && n <= h && (a = e[c], o = n - i), i <= r && r <= h) {
                s = e[c], l = r - i;
                break
            }
            i = h
        }
        if (a && s) {
            var u = document.createRange();
            return u.setStart(a, o), u.setEnd(s, l), u
        }
        return null
    }

    for (var Zr = new Map, Br = 0, jr = "a abbr acronym b bdi bdo big br button canvas cite code data del dfn em embed i iframe img input ins kbd label map mark meter noscript object outputpicture progress q ruby s samp select small span strong sub sup svg textarea time u tt var video wbr".split(" "); Br < jr.length; Br++) {
        var Fr = jr[Br];
        Zr.set(Fr, !0)
    }
    for (var Ur = 0, _r = "address article aside blockquote details dialog dd div dl dt fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 header hgroup hr li main nav ol p pre ul".split(" "); Ur < _r.length; Ur++) {
        Fr = _r[Ur];
        Zr.set(Fr, !1)
    }
    // new WeakMap;
    // devicePixelRatio;

    var $r = function () {
        function e() {
            this.queue = [], this.offset = 0
        }

        return e.prototype.get = function () {
            return this.queue
        }, Object.defineProperty(e.prototype, "length", {
            get: function () {
                return this.queue.length - this.offset
            }, enumerable: !1, configurable: !0
        }), e.prototype.isEmpty = function () {
            return 0 == this.queue.length
        }, e.prototype.enqueue = function (e) {
            this.queue.push(e)
        }, e.prototype.enqueueArray = function (e) {
            for (var t = this.queue, n = 0, r = e; n < r.length; n++) {
                var i = r[n];
                t.push(i)
            }
        }, e.prototype.remove = function (e) {
            for (var t = this.queue, n = t.length - 1; n >= this.offset; n--) t[n] === e && t.splice(n, 1)
        }, e.prototype.dequeue = function () {
            var e = this.queue, t = this.offset;
            if (0 != e.length) {
                var n = e[t];
                return e[t] = void 0, 2 * (t += 1) >= e.length && (this.queue = e.slice(t), t = 0), this.offset = t, n
            }
        }, e.prototype.peek = function () {
            return this.queue.length > 0 ? this.queue[this.offset] : void 0
        }, e
    }();
    !function () {
        function e() {
            this.promise = Promise.resolve()
        }

        e.prototype.queue = function (e) {
            var t = this.promise.then(e, e);
            return this.promise = t, t
        }
    }();

    function Wr() {
        var e = {promise: null, resolve: null, reject: null};
        return e.promise = new Promise((function (t, n) {
            e.resolve = t, e.reject = n
        })), e
    }

    const Runnable = function () {
        function e(e) {
            this.running = !1, this.cancelled = !1;
            var t = e || {}, n = t.onStart, r = t.onStop, i = t.onCancel;
            this.onStart = n || null, this.onStop = r || null, this.onCancel = i || null
        }

        return e.prototype.start = function () {
            this.running || (this.running = !0, this.onStart && this.onStart())
        }, e.prototype.stop = function () {
            this.running && (this.running = !1, this.onStop && this.onStop())
        }, e.prototype.cancel = function () {
            this.stop(), this.cancelled || (this.cancelled = !0, this.onCancel && this.onCancel())
        }, e.prototype.isRunning = function () {
            return this.running
        }, e.prototype.isCancelled = function () {
            return this.cancelled
        }, e
    }()

    // !function () {
    //     function e(e) {
    //         this.items = new $r, this.promise = null, this.runnable = new Runnable(e)
    //     }
    //
    //     e.prototype.addList = function (e) {
    //         this.items.enqueueArray(e), this.notify()
    //     }, e.prototype.add = function (e) {
    //         this.items.enqueue(e), this.notify()
    //     }, e.prototype.remove = function (e) {
    //         this.items.remove(e)
    //     }, e.prototype.notify = function () {
    //         var e = this.promise;
    //         e && (this.promise = null, setTimeout((function () {
    //             e && e.resolve()
    //         }), 0))
    //     }, e.prototype.cancel = function () {
    //         this.runnable.cancel()
    //     }, e.prototype.generator = function () {
    //         return c(this, arguments, (function () {
    //             var e, t;
    //             return o(this, (function (n) {
    //                 switch (n.label) {
    //                     case 0:
    //                         e = this.runnable, n.label = 1;
    //                     case 1:
    //                         return e.isCancelled() ? [4, l(void 0)] : [3, 3];
    //                     case 2:
    //                         return [2, n.sent()];
    //                     case 3:
    //                         return 0 !== (t = this.items).length ? [3, 5] : (e.stop(), [4, l((this.promise = Wr()).promise)]);
    //                     case 4:
    //                         return n.sent(), [3, 8];
    //                     case 5:
    //                         return e.start(), [4, l(t.dequeue())];
    //                     case 6:
    //                         return [4, n.sent()];
    //                     case 7:
    //                         n.sent(), n.label = 8;
    //                     case 8:
    //                         return [3, 1];
    //                     case 9:
    //                         return [2]
    //                 }
    //             }))
    //         }))
    //     }
    // }();
    // !function () {
    //     function e() {
    //         this.promises = []
    //     }
    //
    //     e.prototype.add = function (e) {
    //         this.promises.push(e())
    //     }, e.prototype.addPromise = function (e) {
    //         this.promises.push(e)
    //     }, e.prototype.isEmpty = function () {
    //         return 0 === this.promises.length
    //     }, e.prototype.promise = function () {
    //         return Promise.all(this.promises)
    //     }
    // }();

    loadScriptAsync("/lib/pdfjs/pdf.min.js", {
        after: function () {
            window.pdfjsLib.GlobalWorkerOptions.workerSrc = "/lib/pdfjs/pdf.worker.min.js", pr(window, "pdfjsLib"), pr(pdfjsLib.GlobalWorkerOptions, "workerSrc")
        }
    })
    loadScriptAsync("/lib/pdfjs/pdf.viewer.min.js", {
        after: function () {
            pr(window, "pdfjsViewer")
        }
    })
    loadScriptAsync("/lib/codemirror/modes.min.js")

    var Kr = {
        primaryColor: "var(--background-primary-alt)",
        fontFamily: "var(--font-mermaid)",
        secondaryColor: "var(--background-secondary)",
        tertiaryColor: "var(--background-secondary-alt)",
        primaryBorderColor: "var(--background-modifier-border)",
        primaryTextColor: "var(--text-normal)",
        secondaryBorderColor: "var(--background-modifier-border)",
        secondaryTextColor: "var(--text-normal)",
        tertiaryBorderColor: "var(--background-modifier-border)",
        tertiaryTextColor: "var(--text-normal)",
        noteBkgColor: "var(--background-primary-alt)",
        noteTextColor: "var(--text-normal)",
        noteBorderColor: "var(--background-modifier-border)",
        lineColor: "var(--text-normal)",
        textColor: "var(--text-normal)",
        mainBkg: "var(--background-primary)",
        errorBkgColor: "var(--background-primary)",
        errorTextColor: "var(--text-error)",
        taskTextDarkColor: "var(--text)",
        nodeBorder: "var(--text-muted)",
        actorTextColor: "var(--text-normal)",
        taskTextColor: "var(--text-normal)",
        requirementTextColor: "var(--text-normal)",
        tagLabelColor: "var(--text-normal)",
        transitionLabelColor: "var(--text-normal)",
        pieSectionTextColor: "var(--text-normal)",
        classText: "var(--text-normal)",
        stateLabelColor: "var(--text-normal)",
        nodeTextColor: "var(--text-normal)",
        signalTextColor: "var(--text-normal)",
        titleColor: "var(--text-normal)",
        transitionColor: "var(--text-normal)",
        compositeTitleBackground: "var(--background-primary-alt)",
        compositeBackground: "var(--background-primary)",
        requirementBackground: "var(--background-primary-alt)",
        requirementBorderColor: "var(--text-muted)",
        relationLabelBackground: "var(--background-secondary)",
        relationLabelColor: "var(--text-normal)",
        relationColor: "var(--text-normal)",
        labelTextColor: "var(--text-normal)",
        scaleLabelColor: "var(--text-normal)",
        edgeLabelBackground: "var(--background-secondary)",
        activationBorderColor: "var(--background-modifier-border)",
        sequenceNumberColor: "var(--background-primary)",
        activeTaskBkgColor: "var(--background-primary-alt)",
        fillType0: "var(--background-secondary-alt)",
        fillType1: "var(--background-secondary-alt)",
        faceColor: "var(--background-primary)",
        fillType2: "var(--background-primary-alt)",
        fillType3: "var(--background-primary-alt)",
        fillType4: "var(--background-primary-alt)",
        fillType5: "var(--background-primary-alt)",
        fillType6: "var(--background-primary-alt)",
        fillType7: "var(--background-primary-alt)",
        pieLegendTextColor: "var(--text-normal)",
        pie1: "#8dd3c7",
        pie2: "#ffffb3",
        pie3: "#bebada",
        pie4: "#fb8072",
        pie5: "#80b1d3",
        pie6: "#fdb462",
        pie7: "#b3de69",
        pie8: "#fccde5",
        pie9: "#d9d9d9",
        pie10: "#bc80bd",
        pie11: "#ccebc5",
        pie12: "#ffed6f",
        git0: "var(--color-red)",
        git1: "var(--color-orange)",
        git2: "var(--color-yellow)",
        git3: "var(--color-green)",
        git4: "var(--color-cyan)",
        git5: "var(--color-blue)",
        git6: "var(--color-purple)",
        git7: "var(--color-pink)",
        cScale0: "var(--color-red)",
        cScale1: "var(--color-orange)",
        cScale2: "var(--color-yellow)",
        cScale3: "var(--color-green)",
        cScale4: "var(--color-cyan)",
        cScale5: "var(--color-blue)",
        cScale6: "var(--color-purple)",
        cScale7: "var(--color-pink)"
    }
    for (var Yr = 0; Yr < 12; Yr++) {
        Kr["cScaleLabel" + Yr] = "var(--text-normal)";
    }
    var Xr = loadScriptAsync("/lib/mermaid.min.js", {
        after: function () {
            mermaid.initialize({
                startOnLoad: !1,
                theme: "base",
                securityLevel: "strict",
                themeCSS: "foreignObject{overflow: visible}#arrowhead,#sequencenumber,.cluster text,.label text,text,text.actor{fill:var(--text-normal)}line{stroke:var(--text-normal)}g>g>circle,g>g>path{stroke:var(--background-accent);color:var(--text-normal)}.label rect{display:none}.cluster rect{stroke-width:1px}.node circle,.node ellipse,.node path,.node polygon,.node rect{fill:var(--background-secondary-alt);stroke:var(--background-modifier-border);stroke-width:1px}.node .label{text-align:center}.node.clickable{cursor:pointer}.arrowheadPath{fill:var(--text-muted)}.edgePath .path{stroke:var(--text-muted);stroke-width:1.5px}.edgeLabel{background-color:var(--background-primary);text-align:center}.cluster rect{fill:var(--background-primary-alt);stroke:var(--background-modifier-border)}div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-size:12px;background:var(--background-secondary);border:1px solid var(--interactive-accent);border-radius:2px;pointer-events:none;z-index:100}.actor{stroke:var(--background-modifier-border);fill:var(--background-secondary-alt);font-family:inherit!important}text.actor{stroke:none}.actor-line{stroke:var(--text-muted)}.messageLine0,.messageLine1{stroke-width:1.5;stroke-dasharray:'2 2';stroke:var(--text-normal)}#crosshead path{fill:var(--text-normal)!important;stroke:var(--text-normal)!important}.messageText{fill:var(--text-normal);stroke:none;font-family:inherit!important}.labelBox{stroke:var(--background-modifier-border);fill:var(--background-secondary-alt)}.labelText,.loopText{fill:var(--text-normal);stroke:none}.loopLine{stroke-width:2;stroke-dasharray:'2 2';stroke:var(--background-modifier-border)}.activation0,.activation1,.activation2{fill:var(--background-secondary) stroke: var(--text-muted)}.section{stroke:none;opacity:.2}.section0,.section2{fill:var(--text-accent)}.section1,.section3{fill:#fff;opacity:.2}.sectionTitle0,.sectionTitle1,.sectionTitle2,.sectionTitle3{fill:var(--text-normal)}.sectionTitle{text-anchor:start;font-size:11px;text-height:14px}.grid .tick{stroke:var(--background-primary-alt);opacity:.8;shape-rendering:crispEdges}.grid path{stroke-width:0}.today{fill:none;stroke:#d42;stroke-width:2px}.task{stroke-width:2}.taskText{text-anchor:middle}.taskText:not([font-size]){font-size:11px}.taskTextOutsideRight{fill:var(--text-normal);text-anchor:start;font-size:11px}.taskTextOutsideLeft{fill:var(--text-normal);text-anchor:end;font-size:11px}.task.clickable,g.clickable{cursor:pointer}.taskText.clickable,.taskTextOutsideLeft.clickable,.taskTextOutsideRight.clickable{cursor:pointer;fill:#003163!important;font-weight:700}.taskText0,.taskText1,.taskText2,.taskText3{fill:#fff}.task0,.task1,.task2,.task3{fill:var(--interactive-accent);stroke:var(--interactive-accent)}.taskTextOutside0,.taskTextOutside1,.taskTextOutside2,.taskTextOutside3{fill:var(--text-normal)}.active0,.active1,.active2,.active3,g.classGroup rect,g.stateGroup rect{fill:var(--background-primary-alt); stroke: var(--background-modifier-border)}g.classGroup rect,g.stateGroup rect{stroke:var(--background-modifier-border)}.activeText0,.activeText1,.activeText2,.activeText3{fill:var(--text-normal)!important}.done0,.done1,.done2,.done3{stroke:var(--text-muted);fill:#bbb;stroke-width:2}.doneText0,.doneText1,.doneText2,.doneText3{fill:var(--text-normal)!important}.crit0,.crit1,.crit2,.crit3{stroke:#b1361b;fill:#d42;stroke-width:2}.activeCrit0,.activeCrit1,.activeCrit2,.activeCrit3,.classLabel .box{stroke:#b1361b;fill:var(--background-secondary-alt);stroke-width:2}.classLabel .box{stroke:none;stroke-width:0;opacity:.5}.doneCrit0,.doneCrit1,.doneCrit2,.doneCrit3{stroke:#b1361b;fill:#bbb;stroke-width:2;cursor:pointer;shape-rendering:crispEdges}.milestone{transform:rotate(45deg) scale(.8,.8)}.milestoneText{font-style:italic}.activeCritText0,.activeCritText1,.activeCritText2,.activeCritText3,.doneCritText0,.doneCritText1,.doneCritText2,.doneCritText3{fill:var(--text-normal)!important}.titleText{text-anchor:middle;font-size:18px;fill:var(--text-normal)}g.classGroup text{fill:var(--text-normal);stroke:none;font-size:11px}g.classGroup text .title{font-weight:bolder}#aggregationEnd,#aggregationStart,#compositionEnd,#compositionStart,g.classGroup line,g.stateGroup line{stroke:var(--background-modifier-border);stroke-width:1}.classLabel .label{font-size:11px}.relation{fill:none}.dashed-line{stroke-dasharray:3}#compositionEnd,#compositionStart{fill:var(--background-modifier-border)}#aggregationEnd,#aggregationStart{fill:var(--background-secondary-alt)}#dependencyEnd,#dependencyStart,#extensionEnd,#extensionStart{fill:var(--background-modifier-border);stroke:var(--background-modifier-border);stroke-width:1}.branch-label,.commit-id,.commit-msg{fill:#d3d3d3;color:#d3d3d3}.pieTitleText{text-anchor:middle;font-size:25px;fill:var(--text-normal)}.state-note text,g.stateGroup text{stroke:none;font-size:10px}g.stateGroup .state-title{font-weight:bolder;fill:var(--text-normal)}.stateGroup .composit{fill:#fff;border-bottom:1px}.stateGroup .alt-composit{fill:#e0e0e0;border-bottom:1px}.state-note{stroke:#645c10;fill:#f3edb3}.state-note text{fill:#000}.stateLabel .box{stroke:none;stroke-width:0;fill:var(--background-secondary-alt);opacity:.5}.stateLabel text{fill:var(--text-normal);font-size:10px;font-weight:700}.node circle.state-start{fill:var(--text-normal);stroke:var(--text-normal)}.node circle.state-end{stroke:var(--background-primary);stroke-width:2}#statediagram-barbEnd,g.stateGroup text{fill:var(--background-modifier-border)}.statediagram-cluster rect{stroke-width:1px}.statediagram-cluster rect,.statediagram-state .divider{stroke:var(--background-modifier-border)}.statediagram-cluster rect .inner{fill:var(--background-secondary-alt)}.statediagram-cluster.statediagram-cluster-alt .inner{fill:var(--background-secondary)}.cluster-label text,.node circle.state-end{fill:var(--text-normal)}.statediagram-state rect.divider{stroke-dasharray:10,10;fill:var(--background-secondary)}.note-edge{stroke-dasharray:5}.statediagram-note rect{fill:#f3edb3;stroke:#645c10;stroke-width:1px}.error-icon{fill:var(--background-modifier-error)}.error-text{fill:var(--text-error);stroke:var(--text-error)}",
                flowchart: {useMaxWidth: !1},
                sequence: {useMaxWidth: !1},
                gantt: {
                    useMaxWidth: !0, axisFormatter: [["%Y-%m-%d", function (e) {
                        return 1 === e.getDay()
                    }]]
                },
                journey: {useMaxWidth: !0},
                class: {useMaxWidth: !0},
                git: {useMaxWidth: !1},
                state: {useMaxWidth: !0},
                er: {useMaxWidth: !1, stroke: "var(--text-muted)"},
                pie: {useMaxWidth: !0}
            }), mermaid.mermaidAPI.updateSiteConfig({themeVariables: Kr})
        }
    });
    var Jr = loadScriptAsync("/lib/prism.min.js");
    var Qr = loadScriptAsync("/lib/mathjax/tex-chtml-full.js", {
        before: function () {
            window.MathJax = {
                tex: {
                    inlineMath: [],
                    displayMath: [],
                    processEscapes: !1,
                    processEnvironments: !1,
                    processRefs: !1
                },
                startup: {typeset: !1},
                options: {
                    enableMenu: !1,
                    menuOptions: {settings: {renderer: "CHTML"}},
                    renderActions: {assistiveMml: []},
                    safeOptions: {safeProtocols: {http: !0, https: !0, file: !0, javascript: !1, data: !1}}
                }
            }, localStorage.removeItem("MathJax-Menu-Settings")
        }
    });

    function renderMath(source, display) {
        return MathJax.tex2chtml(source, {display: display})
    }

    var ti = null,
        ni = 0,
        ri = null,
        ii = function () {
            var e = MathJax.chtmlStylesheet();
            ri && e === ri || (ri && ri.detach(), ri = e, document.head.appendChild(e)), ri.dataset.change = "1" === ri.dataset.change ? "2" : "1", ti.resolve(), ti = null
        };
    var ai = /^(?:https?:\/\/)?(?:www\.|m\.)?(?:youtube\.com|youtu\.be)(?:\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(?:\??(?:t|start)=([0-9]+))?(?:\S+)?$/,
        oi = /^(?:https?:\/\/)?(?:mobile\.)?twitter\.com\/.+\/(\d+)/;

    function si(e) {
        var t = createEl("iframe", "external-embed mod-receives-events");
        return t.setAttr("sandbox", "allow-forms allow-presentation allow-same-origin allow-scripts allow-modals allow-popups"), t.setAttr("allow", "fullscreen"), t.setAttr("frameborder", "0"), t.src = e, e.contains("platform.twitter.com") && (t.setAttr("scrolling", "no"), function (e, t) {
            e.addEventListener("framemessage", (function (e) {
                e.detail && t(e.detail)
            })), ci(e.win), e.onWindowMigrated((function () {
                return ci(e.win)
            }))
        }(t, (function (e) {
            var n = e.data;
            if (n) {
                var r = n["twttr.embed"];
                if (r && "twttr.private.resize" === r.method) {
                    var i = r.params[0].height;
                    Number.isNumber(i) && (t.style.height = String(Math.min(1e3, i)) + "px")
                }
            }
        }))), t
    }

    var li = new WeakSet()

    function ci(e) {
        li.has(e) || (li.add(e), e.addEventListener("message", (function (t) {
            for (var n = 0, r = e.document.body.findAll("iframe"); n < r.length; n++) {
                var i = r[n];
                if (i.contentWindow === t.source) return void i.dispatchEvent(new CustomEvent("framemessage", {
                    bubbles: !1,
                    detail: t
                }))
            }
        })))
    }

    const hi = {
        accessibility: [[1, 16, 4, 1], [6, "m18 19 1-7-6 1"], [6, "m5 8 3-3 5.5 3-2.36 3.5"], [6, "M4.24 14.5a5 5 0 0 0 6.88 6"], [6, "M13.76 17.5a5 5 0 0 0-6.88-6"]],
        activity: [[6, "M22 12h-4l-3 9L9 3l-3 9H2"]],
        "activity-square": [[5, 3, 3, 18, 18, 2], [6, "M17 12h-2l-2 5-2-10-2 5H7"]],
        "air-vent": [[6, "M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"], [6, "M6 8h12"], [6, "M18.3 17.7a2.5 2.5 0 0 1-3.16 3.83 2.53 2.53 0 0 1-1.14-2V12"], [6, "M6.6 15.6A2 2 0 1 0 10 17v-5"]],
        airplay: [[6, "M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"], [3, "12 15 17 21 7 21 12 15"]],
        "alarm-check": [[1, 12, 13, 8], [6, "M5 3 2 6"], [6, "m22 6-3-3"], [6, "M6.38 18.7 4 21"], [6, "M17.64 18.67 20 21"], [6, "m9 13 2 2 4-4"]],
        "alarm-clock": [[1, 12, 13, 8], [6, "M12 9v4l2 2"], [6, "M5 3 2 6"], [6, "m22 6-3-3"], [6, "M6.38 18.7 4 21"], [6, "M17.64 18.67 20 21"]],
        "alarm-clock-off": [[6, "M6.87 6.87a8 8 0 1 0 11.26 11.26"], [6, "M19.9 14.25a8 8 0 0 0-9.15-9.15"], [6, "m22 6-3-3"], [6, "M6.26 18.67 4 21"], [6, "m2 2 20 20"], [6, "M4 4 2 6"]],
        "alarm-minus": [[1, 12, 13, 8], [6, "M5 3 2 6"], [6, "m22 6-3-3"], [6, "M6.38 18.7 4 21"], [6, "M17.64 18.67 20 21"], [6, "M9 13h6"]],
        "alarm-plus": [[1, 12, 13, 8], [6, "M5 3 2 6"], [6, "m22 6-3-3"], [6, "M6.38 18.7 4 21"], [6, "M17.64 18.67 20 21"], [6, "M12 10v6"], [6, "M9 13h6"]],
        album: [[5, 3, 3, 18, 18, 2, 2], [2, "11 3 11 11 14 8 17 11 17 3"]],
        "alert-circle": [[1, 12, 12, 10], [0, 12, 8, 12, 12], [0, 12, 16, 12.01, 16]],
        "alert-octagon": [[3, "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"], [0, 12, 8, 12, 12], [0, 12, 16, 12.01, 16]],
        "alert-triangle": [[6, "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"], [6, "M12 9v4"], [6, "M12 17h.01"]],
        "align-center": [[0, 21, 6, 3, 6], [0, 17, 12, 7, 12], [0, 19, 18, 5, 18]],
        "align-center-horizontal": [[6, "M2 12h20"], [6, "M10 16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4"], [6, "M10 8V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4"], [6, "M20 16v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1"], [6, "M14 8V7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1"]],
        "align-center-vertical": [[6, "M12 2v20"], [6, "M8 10H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h4"], [6, "M16 10h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4"], [6, "M8 20H7a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1"], [6, "M16 14h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1"]],
        "align-end-horizontal": [[5, 4, 2, 6, 16, 2], [5, 14, 9, 6, 9, 2], [6, "M22 22H2"]],
        "align-end-vertical": [[5, 2, 4, 16, 6, 2], [5, 9, 14, 9, 6, 2], [6, "M22 22V2"]],
        "align-horizontal-distribute-center": [[5, 4, 5, 6, 14, 2], [5, 14, 7, 6, 10, 2], [6, "M17 22v-5"], [6, "M17 7V2"], [6, "M7 22v-3"], [6, "M7 5V2"]],
        "align-horizontal-distribute-end": [[5, 4, 5, 6, 14, 2], [5, 14, 7, 6, 10, 2], [6, "M10 2v20"], [6, "M20 2v20"]],
        "align-horizontal-distribute-start": [[5, 4, 5, 6, 14, 2], [5, 14, 7, 6, 10, 2], [6, "M4 2v20"], [6, "M14 2v20"]],
        "align-horizontal-justify-center": [[5, 2, 5, 6, 14, 2], [5, 16, 7, 6, 10, 2], [6, "M12 2v20"]],
        "align-horizontal-justify-end": [[5, 2, 5, 6, 14, 2], [5, 12, 7, 6, 10, 2], [6, "M22 2v20"]],
        "align-horizontal-justify-start": [[5, 6, 5, 6, 14, 2], [5, 16, 7, 6, 10, 2], [6, "M2 2v20"]],
        "align-horizontal-space-around": [[5, 9, 7, 6, 10, 2], [6, "M4 22V2"], [6, "M20 22V2"]],
        "align-horizontal-space-between": [[5, 3, 5, 6, 14, 2], [5, 15, 7, 6, 10, 2], [6, "M3 2v20"], [6, "M21 2v20"]],
        "align-justify": [[0, 3, 6, 21, 6], [0, 3, 12, 21, 12], [0, 3, 18, 21, 18]],
        "align-left": [[0, 21, 6, 3, 6], [0, 15, 12, 3, 12], [0, 17, 18, 3, 18]],
        "align-right": [[0, 21, 6, 3, 6], [0, 21, 12, 9, 12], [0, 21, 18, 7, 18]],
        "align-start-horizontal": [[5, 4, 6, 6, 16, 2], [5, 14, 6, 6, 9, 2], [6, "M22 2H2"]],
        "align-start-vertical": [[5, 6, 14, 9, 6, 2], [5, 6, 4, 16, 6, 2], [6, "M2 2v20"]],
        "align-vertical-distribute-center": [[5, 5, 14, 14, 6, 2], [5, 7, 4, 10, 6, 2], [6, "M22 7h-5"], [6, "M7 7H1"], [6, "M22 17h-3"], [6, "M5 17H2"]],
        "align-vertical-distribute-end": [[5, 5, 14, 14, 6, 2], [5, 7, 4, 10, 6, 2], [6, "M2 20h20"], [6, "M2 10h20"]],
        "align-vertical-distribute-start": [[5, 5, 14, 14, 6, 2], [5, 7, 4, 10, 6, 2], [6, "M2 14h20"], [6, "M2 4h20"]],
        "align-vertical-justify-center": [[5, 5, 16, 14, 6, 2], [5, 7, 2, 10, 6, 2], [6, "M2 12h20"]],
        "align-vertical-justify-end": [[5, 5, 12, 14, 6, 2], [5, 7, 2, 10, 6, 2], [6, "M2 22h20"]],
        "align-vertical-justify-start": [[5, 5, 16, 14, 6, 2], [5, 7, 6, 10, 6, 2], [6, "M2 2h20"]],
        "align-vertical-space-around": [[5, 7, 9, 10, 6, 2], [6, "M22 20H2"], [6, "M22 4H2"]],
        "align-vertical-space-between": [[5, 5, 15, 14, 6, 2], [5, 7, 3, 10, 6, 2], [6, "M2 21h20"], [6, "M2 3h20"]],
        ampersand: [[6, "M17.5 12c0 4.4-3.6 8-8 8A4.5 4.5 0 0 1 5 15.5c0-6 8-4 8-8.5a3 3 0 1 0-6 0c0 3 2.5 8.5 12 13"], [6, "M16 12h3"]],
        ampersands: [[6, "M10 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5"], [6, "M22 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5"]],
        anchor: [[1, 12, 5, 3], [0, 12, 22, 12, 8], [6, "M5 12H2a10 10 0 0 0 20 0h-3"]],
        angry: [[1, 12, 12, 10], [6, "M16 16s-1.5-2-4-2-4 2-4 2"], [6, "M7.5 8 10 9"], [6, "m14 9 2.5-1"], [6, "M9 10h0"], [6, "M15 10h0"]],
        annoyed: [[1, 12, 12, 10], [6, "M8 15h8"], [6, "M8 9h2"], [6, "M14 9h2"]],
        antenna: [[6, "M2 12 7 2"], [6, "m7 12 5-10"], [6, "m12 12 5-10"], [6, "m17 12 5-10"], [6, "M4.5 7h15"], [6, "M12 16v6"]],
        aperture: [[1, 12, 12, 10], [0, 14.31, 8, 20.05, 17.94], [0, 9.69, 8, 21.17, 8], [0, 7.38, 12, 13.12, 2.06], [0, 9.69, 16, 3.95, 6.06], [0, 14.31, 16, 2.83, 16], [0, 16.62, 12, 10.88, 21.94]],
        "app-window": [[5, 2, 4, 20, 16, 2], [6, "M10 4v4"], [6, "M2 8h20"], [6, "M6 4v4"]],
        apple: [[6, "M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"], [6, "M10 2c1 .5 2 2 2 5"]],
        archive: [[5, 2, 3, 20, 5, 1], [6, "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"], [6, "M10 12h4"]],
        "archive-restore": [[5, 2, 3, 20, 5, 1], [6, "M4 8v11a2 2 0 0 0 2 2h2"], [6, "M20 8v11a2 2 0 0 1-2 2h-2"], [6, "m9 15 3-3 3 3"], [6, "M12 12v9"]],
        "archive-x": [[5, 2, 3, 20, 5, 1], [6, "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"], [6, "m9.5 17 5-5"], [6, "m9.5 12 5 5"]],
        "area-chart": [[6, "M3 3v18h18"], [6, "M7 12v5h12V8l-5 5-4-4Z"]],
        armchair: [[6, "M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"], [6, "M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H7v-2a2 2 0 0 0-4 0Z"], [6, "M5 18v2"], [6, "M19 18v2"]],
        "arrow-big-down": [[6, "M15 6v6h4l-7 7-7-7h4V6h6z"]],
        "arrow-big-down-dash": [[6, "M15 5H9"], [6, "M15 9v3h4l-7 7-7-7h4V9h6z"]],
        "arrow-big-left": [[6, "M18 15h-6v4l-7-7 7-7v4h6v6z"]],
        "arrow-big-left-dash": [[6, "M19 15V9"], [6, "M15 15h-3v4l-7-7 7-7v4h3v6z"]],
        "arrow-big-right": [[6, "M6 9h6V5l7 7-7 7v-4H6V9z"]],
        "arrow-big-right-dash": [[6, "M5 9v6"], [6, "M9 9h3V5l7 7-7 7v-4H9V9z"]],
        "arrow-big-up": [[6, "M9 18v-6H5l7-7 7 7h-4v6H9z"]],
        "arrow-big-up-dash": [[6, "M9 19h6"], [6, "M9 15v-3H5l7-7 7 7h-4v3H9z"]],
        "arrow-down": [[6, "M12 5v14"], [6, "m19 12-7 7-7-7"]],
        "arrow-down-01": [[6, "m3 16 4 4 4-4"], [6, "M7 20V4"], [5, 15, 4, 4, 6, 0, 2], [6, "M17 20v-6h-2"], [6, "M15 20h4"]],
        "arrow-down-10": [[6, "m3 16 4 4 4-4"], [6, "M7 20V4"], [6, "M17 10V4h-2"], [6, "M15 10h4"], [5, 15, 14, 4, 6, 0, 2]],
        "arrow-down-az": [[6, "m3 16 4 4 4-4"], [6, "M7 20V4"], [6, "M20 8h-5"], [6, "M15 10V6.5a2.5 2.5 0 0 1 5 0V10"], [6, "M15 14h5l-5 6h5"]],
        "arrow-down-circle": [[1, 12, 12, 10], [6, "M12 8v8"], [6, "m8 12 4 4 4-4"]],
        "arrow-down-from-line": [[6, "M19 3H5"], [6, "M12 21V7"], [6, "m6 15 6 6 6-6"]],
        "arrow-down-left": [[6, "M17 7 7 17"], [6, "M17 17H7V7"]],
        "arrow-down-left-from-circle": [[6, "M2 12a10 10 0 1 1 10 10"], [6, "m2 22 10-10"], [6, "M8 22H2v-6"]],
        "arrow-down-left-square": [[5, 3, 3, 18, 18, 2], [6, "m16 8-8 8"], [6, "M16 16H8V8"]],
        "arrow-down-narrow-wide": [[6, "m3 16 4 4 4-4"], [6, "M7 20V4"], [6, "M11 4h4"], [6, "M11 8h7"], [6, "M11 12h10"]],
        "arrow-down-right": [[6, "m7 7 10 10"], [6, "M17 7v10H7"]],
        "arrow-down-right-from-circle": [[6, "M12 22a10 10 0 1 1 10-10"], [6, "M22 22 12 12"], [6, "M22 16v6h-6"]],
        "arrow-down-right-square": [[5, 3, 3, 18, 18, 2], [6, "m8 8 8 8"], [6, "M16 8v8H8"]],
        "arrow-down-square": [[5, 3, 3, 18, 18, 2], [6, "M12 8v8"], [6, "m8 12 4 4 4-4"]],
        "arrow-down-to-dot": [[6, "M12 2v14"], [6, "m19 9-7 7-7-7"], [1, 12, 21, 1]],
        "arrow-down-to-line": [[6, "M12 17V3"], [6, "m6 11 6 6 6-6"], [6, "M19 21H5"]],
        "arrow-down-up": [[6, "m3 16 4 4 4-4"], [6, "M7 20V4"], [6, "m21 8-4-4-4 4"], [6, "M17 4v16"]],
        "arrow-down-wide-narrow": [[6, "m3 16 4 4 4-4"], [6, "M7 20V4"], [6, "M11 4h10"], [6, "M11 8h7"], [6, "M11 12h4"]],
        "arrow-down-za": [[6, "m3 16 4 4 4-4"], [6, "M7 4v16"], [6, "M15 4h5l-5 6h5"], [6, "M15 20v-3.5a2.5 2.5 0 0 1 5 0V20"], [6, "M20 18h-5"]],
        "arrow-left": [[6, "m12 19-7-7 7-7"], [6, "M19 12H5"]],
        "arrow-left-circle": [[1, 12, 12, 10], [6, "M16 12H8"], [6, "m12 8-4 4 4 4"]],
        "arrow-left-from-line": [[6, "m9 6-6 6 6 6"], [6, "M3 12h14"], [6, "M21 19V5"]],
        "arrow-left-right": [[6, "M8 3 4 7l4 4"], [6, "M4 7h16"], [6, "m16 21 4-4-4-4"], [6, "M20 17H4"]],
        "arrow-left-square": [[5, 3, 3, 18, 18, 2], [6, "m12 8-4 4 4 4"], [6, "M16 12H8"]],
        "arrow-left-to-line": [[6, "M3 19V5"], [6, "m13 6-6 6 6 6"], [6, "M7 12h14"]],
        "arrow-right": [[6, "M5 12h14"], [6, "m12 5 7 7-7 7"]],
        "arrow-right-circle": [[1, 12, 12, 10], [6, "M8 12h8"], [6, "m12 16 4-4-4-4"]],
        "arrow-right-from-line": [[6, "M3 5v14"], [6, "M21 12H7"], [6, "m15 18 6-6-6-6"]],
        "arrow-right-left": [[6, "m16 3 4 4-4 4"], [6, "M20 7H4"], [6, "m8 21-4-4 4-4"], [6, "M4 17h16"]],
        "arrow-right-square": [[5, 3, 3, 18, 18, 2], [6, "M8 12h8"], [6, "m12 16 4-4-4-4"]],
        "arrow-right-to-line": [[6, "M17 12H3"], [6, "m11 18 6-6-6-6"], [6, "M21 5v14"]],
        "arrow-up": [[6, "m5 12 7-7 7 7"], [6, "M12 19V5"]],
        "arrow-up-01": [[6, "m3 8 4-4 4 4"], [6, "M7 4v16"], [5, 15, 4, 4, 6, 0, 2], [6, "M17 20v-6h-2"], [6, "M15 20h4"]],
        "arrow-up-10": [[6, "m3 8 4-4 4 4"], [6, "M7 4v16"], [6, "M17 10V4h-2"], [6, "M15 10h4"], [5, 15, 14, 4, 6, 0, 2]],
        "arrow-up-az": [[6, "m3 8 4-4 4 4"], [6, "M7 4v16"], [6, "M20 8h-5"], [6, "M15 10V6.5a2.5 2.5 0 0 1 5 0V10"], [6, "M15 14h5l-5 6h5"]],
        "arrow-up-circle": [[1, 12, 12, 10], [6, "m16 12-4-4-4 4"], [6, "M12 16V8"]],
        "arrow-up-down": [[6, "m21 16-4 4-4-4"], [6, "M17 20V4"], [6, "m3 8 4-4 4 4"], [6, "M7 4v16"]],
        "arrow-up-from-dot": [[6, "m5 9 7-7 7 7"], [6, "M12 16V2"], [1, 12, 21, 1]],
        "arrow-up-from-line": [[6, "m18 9-6-6-6 6"], [6, "M12 3v14"], [6, "M5 21h14"]],
        "arrow-up-left": [[6, "M7 17V7h10"], [6, "M17 17 7 7"]],
        "arrow-up-left-from-circle": [[6, "M2 8V2h6"], [6, "m2 2 10 10"], [6, "M12 2A10 10 0 1 1 2 12"]],
        "arrow-up-left-square": [[5, 3, 3, 18, 18, 2], [6, "M8 16V8h8"], [6, "M16 16 8 8"]],
        "arrow-up-narrow-wide": [[6, "m3 8 4-4 4 4"], [6, "M7 4v16"], [6, "M11 12h4"], [6, "M11 16h7"], [6, "M11 20h10"]],
        "arrow-up-right": [[6, "M7 7h10v10"], [6, "M7 17 17 7"]],
        "arrow-up-right-from-circle": [[6, "M22 12A10 10 0 1 1 12 2"], [6, "M22 2 12 12"], [6, "M16 2h6v6"]],
        "arrow-up-right-square": [[5, 3, 3, 18, 18, 2], [6, "M8 8h8v8"], [6, "m8 16 8-8"]],
        "arrow-up-square": [[5, 3, 3, 18, 18, 2], [6, "m16 12-4-4-4 4"], [6, "M12 16V8"]],
        "arrow-up-to-line": [[6, "M5 3h14"], [6, "m18 13-6-6-6 6"], [6, "M12 7v14"]],
        "arrow-up-wide-narrow": [[6, "m3 8 4-4 4 4"], [6, "M7 4v16"], [6, "M11 12h10"], [6, "M11 16h7"], [6, "M11 20h4"]],
        "arrow-up-za": [[6, "m3 8 4-4 4 4"], [6, "M7 4v16"], [6, "M15 4h5l-5 6h5"], [6, "M15 20v-3.5a2.5 2.5 0 0 1 5 0V20"], [6, "M20 18h-5"]],
        "arrows-up-from-line": [[6, "m4 6 3-3 3 3"], [6, "M7 17V3"], [6, "m14 6 3-3 3 3"], [6, "M17 17V3"], [6, "M4 21h16"]],
        asterisk: [[6, "M12 6v12"], [6, "M17.196 9 6.804 15"], [6, "m6.804 9 10.392 6"]],
        "at-sign": [[1, 12, 12, 4], [6, "M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"]],
        atom: [[1, 12, 12, 1], [6, "M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z"], [6, "M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z"]],
        award: [[1, 12, 8, 6], [6, "M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"]],
        axe: [[6, "m14 12-8.5 8.5a2.12 2.12 0 1 1-3-3L11 9"], [6, "M15 13 9 7l4-4 6 6h3a8 8 0 0 1-7 7z"]],
        "axis-3d": [[6, "M4 4v16h16"], [6, "m4 20 7-7"]],
        baby: [[6, "M9 12h.01"], [6, "M15 12h.01"], [6, "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"], [6, "M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"]],
        backpack: [[6, "M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"], [6, "M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"], [6, "M8 21v-5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5"], [6, "M8 10h8"], [6, "M8 18h8"]],
        badge: [[6, "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"]],
        "badge-alert": [[6, "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"], [0, 12, 8, 12, 12], [0, 12, 16, 12.01, 16]],
        "badge-cent": [[6, "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"], [6, "M12 7v10"], [6, "M15.4 10a4 4 0 1 0 0 4"]],
        "badge-check": [[6, "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"], [6, "m9 12 2 2 4-4"]],
        "badge-dollar-sign": [[6, "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"], [6, "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"], [6, "M12 18V6"]],
        "badge-euro": [[6, "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"], [6, "M7 12h5"], [6, "M15 9.4a4 4 0 1 0 0 5.2"]],
        "badge-help": [[6, "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"], [6, "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"], [0, 12, 17, 12.01, 17]],
        "badge-indian-rupee": [[6, "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"], [6, "M8 8h8"], [6, "M8 12h8"], [6, "m13 17-5-1h1a4 4 0 0 0 0-8"]],
        "badge-info": [[6, "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"], [0, 12, 16, 12, 12], [0, 12, 8, 12.01, 8]],
        "badge-japanese-yen": [[6, "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"], [6, "m9 8 3 3v7"], [6, "m12 11 3-3"], [6, "M9 12h6"], [6, "M9 16h6"]],
        "badge-minus": [[6, "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"], [0, 8, 12, 16, 12]],
        "badge-percent": [[6, "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"], [6, "m15 9-6 6"], [6, "M9 9h.01"], [6, "M15 15h.01"]],
        "badge-plus": [[6, "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"], [0, 12, 8, 12, 16], [0, 8, 12, 16, 12]],
        "badge-pound-sterling": [[6, "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"], [6, "M8 12h4"], [6, "M10 16V9.5a2.5 2.5 0 0 1 5 0"], [6, "M8 16h7"]],
        "badge-russian-ruble": [[6, "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"], [6, "M9 16h5"], [6, "M9 12h5a2 2 0 1 0 0-4h-3v9"]],
        "badge-swiss-franc": [[6, "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"], [6, "M11 17V8h4"], [6, "M11 12h3"], [6, "M9 16h4"]],
        "badge-x": [[6, "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"], [0, 15, 9, 9, 15], [0, 9, 9, 15, 15]],
        "baggage-claim": [[6, "M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2"], [6, "M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10"], [5, 8, 6, 13, 8, 1], [1, 18, 20, 2], [1, 9, 20, 2]],
        ban: [[1, 12, 12, 10], [6, "m4.9 4.9 14.2 14.2"]],
        banana: [[6, "M4 13c3.5-2 8-2 10 2a5.5 5.5 0 0 1 8 5"], [6, "M5.15 17.89c5.52-1.52 8.65-6.89 7-12C11.55 4 11.5 2 13 2c3.22 0 5 5.5 5 8 0 6.5-4.2 12-10.49 12C5.11 22 2 22 2 20c0-1.5 1.14-1.55 3.15-2.11Z"]],
        banknote: [[5, 2, 6, 20, 12, 2], [1, 12, 12, 2], [6, "M6 12h.01M18 12h.01"]],
        "bar-chart": [[0, 12, 20, 12, 10], [0, 18, 20, 18, 4], [0, 6, 20, 6, 16]],
        "bar-chart-2": [[0, 18, 20, 18, 10], [0, 12, 20, 12, 4], [0, 6, 20, 6, 14]],
        "bar-chart-3": [[6, "M3 3v18h18"], [6, "M18 17V9"], [6, "M13 17V5"], [6, "M8 17v-3"]],
        "bar-chart-4": [[6, "M3 3v18h18"], [6, "M13 17V9"], [6, "M18 17V5"], [6, "M8 17v-3"]],
        "bar-chart-big": [[6, "M3 3v18h18"], [5, 7, 10, 4, 7, 1], [5, 15, 5, 4, 12, 1]],
        "bar-chart-horizontal": [[6, "M3 3v18h18"], [6, "M7 16h8"], [6, "M7 11h12"], [6, "M7 6h3"]],
        "bar-chart-horizontal-big": [[6, "M3 3v18h18"], [5, 7, 5, 12, 4, 1], [5, 7, 13, 7, 4, 1]],
        barcode: [[6, "M3 5v14"], [6, "M8 5v14"], [6, "M12 5v14"], [6, "M17 5v14"], [6, "M21 5v14"]],
        baseline: [[6, "M4 20h16"], [6, "m6 16 6-12 6 12"], [6, "M8 12h8"]],
        bath: [[6, "M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"], [0, 10, 5, 8, 7], [0, 2, 12, 22, 12], [0, 7, 19, 7, 21], [0, 17, 19, 17, 21]],
        battery: [[5, 2, 7, 16, 10, 2, 2], [0, 22, 11, 22, 13]],
        "battery-charging": [[6, "M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2"], [6, "M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1"], [6, "m11 7-3 5h4l-3 5"], [0, 22, 11, 22, 13]],
        "battery-full": [[5, 2, 7, 16, 10, 2, 2], [0, 22, 11, 22, 13], [0, 6, 11, 6, 13], [0, 10, 11, 10, 13], [0, 14, 11, 14, 13]],
        "battery-low": [[5, 2, 7, 16, 10, 2, 2], [0, 22, 11, 22, 13], [0, 6, 11, 6, 13]],
        "battery-medium": [[5, 2, 7, 16, 10, 2, 2], [0, 22, 11, 22, 13], [0, 6, 11, 6, 13], [0, 10, 11, 10, 13]],
        "battery-warning": [[6, "M14 7h2a2 2 0 0 1 2 2v6c0 1-1 2-2 2h-2"], [6, "M6 7H4a2 2 0 0 0-2 2v6c0 1 1 2 2 2h2"], [0, 22, 11, 22, 13], [0, 10, 7, 10, 13], [0, 10, 17, 10, 17.01]],
        beaker: [[6, "M4.5 3h15"], [6, "M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3"], [6, "M6 14h12"]],
        bean: [[6, "M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z"], [6, "M5.341 10.62a4 4 0 1 0 5.279-5.28"]],
        "bean-off": [[6, "M9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22a13.96 13.96 0 0 0 9.9-4.1"], [6, "M10.75 5.093A6 6 0 0 1 22 8c0 2.411-.61 4.68-1.683 6.66"], [6, "M5.341 10.62a4 4 0 0 0 6.487 1.208M10.62 5.341a4.015 4.015 0 0 1 2.039 2.04"], [0, 2, 2, 22, 22]],
        bed: [[6, "M2 4v16"], [6, "M2 8h18a2 2 0 0 1 2 2v10"], [6, "M2 17h20"], [6, "M6 8v9"]],
        "bed-double": [[6, "M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8"], [6, "M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"], [6, "M12 4v6"], [6, "M2 18h20"]],
        "bed-single": [[6, "M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8"], [6, "M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4"], [6, "M3 18h18"]],
        beef: [[1, 12.5, 8.5, 2.5], [6, "M12.5 2a6.5 6.5 0 0 0-6.22 4.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3A6.5 6.5 0 0 0 12.5 2Z"], [6, "m18.5 6 2.19 4.5a6.48 6.48 0 0 1 .31 2 6.49 6.49 0 0 1-2.6 5.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5"]],
        beer: [[6, "M17 11h1a3 3 0 0 1 0 6h-1"], [6, "M9 12v6"], [6, "M13 12v6"], [6, "M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 2 11 2s2 1.5 3 1.5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z"], [6, "M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8"]],
        bell: [[6, "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"], [6, "M10.3 21a1.94 1.94 0 0 0 3.4 0"]],
        "bell-dot": [[6, "M19.4 14.9C20.2 16.4 21 17 21 17H3s3-2 3-9c0-3.3 2.7-6 6-6 .7 0 1.3.1 1.9.3"], [6, "M10.3 21a1.94 1.94 0 0 0 3.4 0"], [1, 18, 8, 3]],
        "bell-minus": [[6, "M18.4 12c.8 3.8 2.6 5 2.6 5H3s3-2 3-9c0-3.3 2.7-6 6-6 1.8 0 3.4.8 4.5 2"], [6, "M10.3 21a1.94 1.94 0 0 0 3.4 0"], [6, "M15 8h6"]],
        "bell-off": [[6, "M8.7 3A6 6 0 0 1 18 8a21.3 21.3 0 0 0 .6 5"], [6, "M17 17H3s3-2 3-9a4.67 4.67 0 0 1 .3-1.7"], [6, "M10.3 21a1.94 1.94 0 0 0 3.4 0"], [6, "m2 2 20 20"]],
        "bell-plus": [[6, "M19.3 14.8C20.1 16.4 21 17 21 17H3s3-2 3-9c0-3.3 2.7-6 6-6 1 0 1.9.2 2.8.7"], [6, "M10.3 21a1.94 1.94 0 0 0 3.4 0"], [6, "M15 8h6"], [6, "M18 5v6"]],
        "bell-ring": [[6, "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"], [6, "M10.3 21a1.94 1.94 0 0 0 3.4 0"], [6, "M4 2C2.8 3.7 2 5.7 2 8"], [6, "M22 8c0-2.3-.8-4.3-2-6"]],
        bike: [[1, 18.5, 17.5, 3.5], [1, 5.5, 17.5, 3.5], [1, 15, 5, 1], [6, "M12 17.5V14l-3-3 4-3 2 3h2"]],
        binary: [[5, 14, 14, 4, 6, 2], [5, 6, 4, 4, 6, 2], [6, "M6 20h4"], [6, "M14 10h4"], [6, "M6 14h2v6"], [6, "M14 4h2v6"]],
        biohazard: [[1, 12, 11.9, 2], [6, "M6.7 3.4c-.9 2.5 0 5.2 2.2 6.7C6.5 9 3.7 9.6 2 11.6"], [6, "m8.9 10.1 1.4.8"], [6, "M17.3 3.4c.9 2.5 0 5.2-2.2 6.7 2.4-1.2 5.2-.6 6.9 1.5"], [6, "m15.1 10.1-1.4.8"], [6, "M16.7 20.8c-2.6-.4-4.6-2.6-4.7-5.3-.2 2.6-2.1 4.8-4.7 5.2"], [6, "M12 13.9v1.6"], [6, "M13.5 5.4c-1-.2-2-.2-3 0"], [6, "M17 16.4c.7-.7 1.2-1.6 1.5-2.5"], [6, "M5.5 13.9c.3.9.8 1.8 1.5 2.5"]],
        bird: [[6, "M16 7h.01"], [6, "M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20"], [6, "m20 7 2 .5-2 .5"], [6, "M10 18v3"], [6, "M14 17.75V21"], [6, "M7 18a6 6 0 0 0 3.84-10.61"]],
        bitcoin: [[6, "M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727"]],
        blinds: [[6, "M3 3h18"], [6, "M20 7H8"], [6, "M20 11H8"], [6, "M10 19h10"], [6, "M8 15h12"], [6, "M4 3v14"], [1, 4, 19, 2]],
        blocks: [[5, 14, 3, 7, 7, 1], [6, "M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3"]],
        bluetooth: [[6, "m7 7 10 10-5 5V2l5 5L7 17"]],
        "bluetooth-connected": [[6, "m7 7 10 10-5 5V2l5 5L7 17"], [0, 18, 12, 21, 12], [0, 3, 12, 6, 12]],
        "bluetooth-off": [[6, "m17 17-5 5V12l-5 5"], [6, "m2 2 20 20"], [6, "M14.5 9.5 17 7l-5-5v4.5"]],
        "bluetooth-searching": [[6, "m7 7 10 10-5 5V2l5 5L7 17"], [6, "M20.83 14.83a4 4 0 0 0 0-5.66"], [6, "M18 12h.01"]],
        bold: [[6, "M14 12a4 4 0 0 0 0-8H6v8"], [6, "M15 20a4 4 0 0 0 0-8H6v8Z"]],
        bomb: [[1, 11, 13, 9], [6, "M14.35 4.65 16.3 2.7a2.41 2.41 0 0 1 3.4 0l1.6 1.6a2.4 2.4 0 0 1 0 3.4l-1.95 1.95"], [6, "m22 2-1.5 1.5"]],
        bone: [[6, "M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z"]],
        book: [[6, "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"]],
        "book-a": [[6, "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"], [6, "m8 13 4-7 4 7"], [6, "M9.1 11h5.7"]],
        "book-audio": [[6, "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"], [6, "M8 8v3"], [6, "M12 6v7"], [6, "M16 8v3"]],
        "book-check": [[6, "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"], [6, "m9 9.5 2 2 4-4"]],
        "book-copy": [[6, "M2 16V4a2 2 0 0 1 2-2h11"], [6, "M5 14H4a2 2 0 1 0 0 4h1"], [6, "M22 18H11a2 2 0 1 0 0 4h11V6H11a2 2 0 0 0-2 2v12"]],
        "book-dashed": [[6, "M20 22h-2"], [6, "M20 15v2h-2"], [6, "M4 19.5V15"], [6, "M20 8v3"], [6, "M18 2h2v2"], [6, "M4 11V9"], [6, "M12 2h2"], [6, "M12 22h2"], [6, "M12 17h2"], [6, "M8 22H6.5a2.5 2.5 0 0 1 0-5H8"], [6, "M4 5v-.5A2.5 2.5 0 0 1 6.5 2H8"]],
        "book-down": [[6, "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"], [6, "M12 13V7"], [6, "m9 10 3 3 3-3"]],
        "book-headphones": [[6, "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"], [1, 9, 12, 1], [6, "M8 12v-2a4 4 0 0 1 8 0v2"], [1, 15, 12, 1]],
        "book-heart": [[6, "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"], [6, "M16 8.2C16 7 15 6 13.8 6c-.8 0-1.4.3-1.8.9-.4-.6-1-.9-1.8-.9C9 6 8 7 8 8.2c0 .6.3 1.2.7 1.6h0C10 11.1 12 13 12 13s2-1.9 3.3-3.1h0c.4-.4.7-1 .7-1.7z"]],
        "book-image": [[6, "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"], [1, 10, 8, 2], [6, "m20 13.7-2.1-2.1c-.8-.8-2-.8-2.8 0L9.7 17"]],
        "book-key": [[6, "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H14"], [6, "M20 8v14H6.5a2.5 2.5 0 0 1 0-5H20"], [1, 14, 8, 2], [6, "m20 2-4.5 4.5"], [6, "m19 3 1 1"]],
        "book-lock": [[6, "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H10"], [6, "M20 15v7H6.5a2.5 2.5 0 0 1 0-5H20"], [5, 12, 6, 8, 5, 1], [6, "M18 6V4a2 2 0 1 0-4 0v2"]],
        "book-marked": [[6, "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"], [2, "10 2 10 10 13 7 16 10 16 2"]],
        "book-minus": [[6, "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"], [6, "M9 10h6"]],
        "book-open": [[6, "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"], [6, "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"]],
        "book-open-check": [[6, "M8 3H2v15h7c1.7 0 3 1.3 3 3V7c0-2.2-1.8-4-4-4Z"], [6, "m16 12 2 2 4-4"], [6, "M22 6V3h-6c-2.2 0-4 1.8-4 4v14c0-1.7 1.3-3 3-3h7v-2.3"]],
        "book-open-text": [[6, "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"], [6, "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"], [6, "M6 8h2"], [6, "M6 12h2"], [6, "M16 8h2"], [6, "M16 12h2"]],
        "book-plus": [[6, "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"], [6, "M9 10h6"], [6, "M12 7v6"]],
        "book-template": [[6, "M20 22h-2"], [6, "M20 15v2h-2"], [6, "M4 19.5V15"], [6, "M20 8v3"], [6, "M18 2h2v2"], [6, "M4 11V9"], [6, "M12 2h2"], [6, "M12 22h2"], [6, "M12 17h2"], [6, "M8 22H6.5a2.5 2.5 0 0 1 0-5H8"], [6, "M4 5v-.5A2.5 2.5 0 0 1 6.5 2H8"]],
        "book-text": [[6, "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"], [6, "M8 7h6"], [6, "M8 11h8"]],
        "book-type": [[6, "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"], [6, "M16 8V6H8v2"], [6, "M12 6v7"], [6, "M10 13h4"]],
        "book-up": [[6, "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"], [6, "M12 13V7"], [6, "m9 10 3-3 3 3"]],
        "book-up-2": [[6, "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2"], [6, "M18 2h2v20H6.5a2.5 2.5 0 0 1 0-5H20"], [6, "M12 13V7"], [6, "m9 10 3-3 3 3"], [6, "m9 5 3-3 3 3"]],
        "book-user": [[6, "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"], [1, 12, 8, 2], [6, "M15 13a3 3 0 1 0-6 0"]],
        "book-x": [[6, "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"], [6, "m14.5 7-5 5"], [6, "m9.5 7 5 5"]],
        bookmark: [[6, "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"]],
        "bookmark-check": [[6, "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z"], [6, "m9 10 2 2 4-4"]],
        "bookmark-minus": [[6, "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"], [0, 15, 10, 9, 10]],
        "bookmark-plus": [[6, "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"], [0, 12, 7, 12, 13], [0, 15, 10, 9, 10]],
        "bookmark-x": [[6, "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z"], [6, "m14.5 7.5-5 5"], [6, "m9.5 7.5 5 5"]],
        "boom-box": [[6, "M4 9V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"], [6, "M8 8v1"], [6, "M12 8v1"], [6, "M16 8v1"], [5, 2, 9, 20, 12, 2], [1, 8, 15, 2], [1, 16, 15, 2]],
        bot: [[6, "M12 8V4H8"], [5, 4, 8, 16, 12, 2], [6, "M2 14h2"], [6, "M20 14h2"], [6, "M15 13v2"], [6, "M9 13v2"]],
        box: [[6, "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"], [6, "m3.3 7 8.7 5 8.7-5"], [6, "M12 22V12"]],
        "box-select": [[6, "M5 3a2 2 0 0 0-2 2"], [6, "M19 3a2 2 0 0 1 2 2"], [6, "M21 19a2 2 0 0 1-2 2"], [6, "M5 21a2 2 0 0 1-2-2"], [6, "M9 3h1"], [6, "M9 21h1"], [6, "M14 3h1"], [6, "M14 21h1"], [6, "M3 9v1"], [6, "M21 9v1"], [6, "M3 14v1"], [6, "M21 14v1"]],
        boxes: [[6, "M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"], [6, "m7 16.5-4.74-2.85"], [6, "m7 16.5 5-3"], [6, "M7 16.5v5.17"], [6, "M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"], [6, "m17 16.5-5-3"], [6, "m17 16.5 4.74-2.85"], [6, "M17 16.5v5.17"], [6, "M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"], [6, "M12 8 7.26 5.15"], [6, "m12 8 4.74-2.85"], [6, "M12 13.5V8"]],
        braces: [[6, "M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1"], [6, "M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1"]],
        brackets: [[6, "M16 3h3v18h-3"], [6, "M8 21H5V3h3"]],
        brain: [[6, "M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"], [6, "M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"]],
        "brain-circuit": [[6, "M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0-1.32 4.24 3 3 0 0 0 .34 5.58 2.5 2.5 0 0 0 2.96 3.08 2.5 2.5 0 0 0 4.91.05L12 20V4.5Z"], [6, "M16 8V5c0-1.1.9-2 2-2"], [6, "M12 13h4"], [6, "M12 18h6a2 2 0 0 1 2 2v1"], [6, "M12 8h8"], [6, "M20.5 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"], [6, "M16.5 13a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"], [6, "M20.5 21a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"], [6, "M18.5 3a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"]],
        "brain-cog": [[1, 12, 12, 3], [6, "M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0-1.32 4.24 3 3 0 0 0 .34 5.58 2.5 2.5 0 0 0 2.96 3.08A2.5 2.5 0 0 0 12 19.5a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 12 4.5"], [6, "m15.7 10.4-.9.4"], [6, "m9.2 13.2-.9.4"], [6, "m13.6 15.7-.4-.9"], [6, "m10.8 9.2-.4-.9"], [6, "m15.7 13.5-.9-.4"], [6, "m9.2 10.9-.9-.4"], [6, "m10.5 15.7.4-.9"], [6, "m13.1 9.2.4-.9"]],
        briefcase: [[5, 2, 7, 20, 14, 2, 2], [6, "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"]],
        "bring-to-front": [[5, 8, 8, 8, 8, 2], [6, "M4 10a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2"], [6, "M14 20a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2"]],
        brush: [[6, "m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08"], [6, "M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z"]],
        bug: [[6, "m8 2 1.88 1.88"], [6, "M14.12 3.88 16 2"], [6, "M9 7.13v-1a3.003 3.003 0 1 1 6 0v1"], [6, "M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6"], [6, "M12 20v-9"], [6, "M6.53 9C4.6 8.8 3 7.1 3 5"], [6, "M6 13H2"], [6, "M3 21c0-2.1 1.7-3.9 3.8-4"], [6, "M20.97 5c0 2.1-1.6 3.8-3.5 4"], [6, "M22 13h-4"], [6, "M17.2 17c2.1.1 3.8 1.9 3.8 4"]],
        "bug-off": [[6, "M15 7.13V6a3 3 0 0 0-5.14-2.1L8 2"], [6, "M14.12 3.88 16 2"], [6, "M22 13h-4v-2a4 4 0 0 0-4-4h-1.3"], [6, "M20.97 5c0 2.1-1.6 3.8-3.5 4"], [6, "m2 2 20 20"], [6, "M7.7 7.7A4 4 0 0 0 6 11v3a6 6 0 0 0 11.13 3.13"], [6, "M12 20v-8"], [6, "M6 13H2"], [6, "M3 21c0-2.1 1.7-3.9 3.8-4"]],
        "bug-play": [[6, "m8 2 1.88 1.88"], [6, "M14.12 3.88 16 2"], [6, "M9 7.13v-1a3.003 3.003 0 1 1 6 0v1"], [6, "M18 11a4 4 0 0 0-4-4h-4a4 4 0 0 0-4 4v3a6.1 6.1 0 0 0 2 4.5"], [6, "M6.53 9C4.6 8.8 3 7.1 3 5"], [6, "M6 13H2"], [6, "M3 21c0-2.1 1.7-3.9 3.8-4"], [6, "M20.97 5c0 2.1-1.6 3.8-3.5 4"], [6, "m12 12 8 5-8 5Z"]],
        building: [[5, 4, 2, 16, 20, 2, 2], [6, "M9 22v-4h6v4"], [6, "M8 6h.01"], [6, "M16 6h.01"], [6, "M12 6h.01"], [6, "M12 10h.01"], [6, "M12 14h.01"], [6, "M16 10h.01"], [6, "M16 14h.01"], [6, "M8 10h.01"], [6, "M8 14h.01"]],
        "building-2": [[6, "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"], [6, "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"], [6, "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"], [6, "M10 6h4"], [6, "M10 10h4"], [6, "M10 14h4"], [6, "M10 18h4"]],
        bus: [[6, "M8 6v6"], [6, "M15 6v6"], [6, "M2 12h19.6"], [6, "M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3"], [1, 7, 18, 2], [6, "M9 18h5"], [1, 16, 18, 2]],
        "bus-front": [[6, "M4 6 2 7"], [6, "M10 6h4"], [6, "m22 7-2-1"], [5, 4, 3, 16, 16, 2], [6, "M4 11h16"], [6, "M8 15h.01"], [6, "M16 15h.01"], [6, "M6 19v2"], [6, "M18 21v-2"]],
        cable: [[6, "M4 9a2 2 0 0 1-2-2V5h6v2a2 2 0 0 1-2 2Z"], [6, "M3 5V3"], [6, "M7 5V3"], [6, "M19 15V6.5a3.5 3.5 0 0 0-7 0v11a3.5 3.5 0 0 1-7 0V9"], [6, "M17 21v-2"], [6, "M21 21v-2"], [6, "M22 19h-6v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2Z"]],
        "cable-car": [[6, "M10 3h.01"], [6, "M14 2h.01"], [6, "m2 9 20-5"], [6, "M12 12V6.5"], [5, 4, 12, 16, 10, 3], [6, "M9 12v5"], [6, "M15 12v5"], [6, "M4 17h16"]],
        cake: [[6, "M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"], [6, "M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"], [6, "M2 21h20"], [6, "M7 8v3"], [6, "M12 8v3"], [6, "M17 8v3"], [6, "M7 4h0.01"], [6, "M12 4h0.01"], [6, "M17 4h0.01"]],
        "cake-slice": [[1, 9, 7, 2], [6, "M7.2 7.9 3 11v9c0 .6.4 1 1 1h16c.6 0 1-.4 1-1v-9c0-2-3-6-7-8l-3.6 2.6"], [6, "M16 13H3"], [6, "M16 17H3"]],
        calculator: [[5, 4, 2, 16, 20, 2], [0, 8, 6, 16, 6], [0, 16, 14, 16, 18], [6, "M16 10h.01"], [6, "M12 10h.01"], [6, "M8 10h.01"], [6, "M12 14h.01"], [6, "M8 14h.01"], [6, "M12 18h.01"], [6, "M8 18h.01"]],
        calendar: [[5, 3, 4, 18, 18, 2, 2], [0, 16, 2, 16, 6], [0, 8, 2, 8, 6], [0, 3, 10, 21, 10]],
        "calendar-check": [[5, 3, 4, 18, 18, 2, 2], [0, 16, 2, 16, 6], [0, 8, 2, 8, 6], [0, 3, 10, 21, 10], [6, "m9 16 2 2 4-4"]],
        "calendar-check-2": [[6, "M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"], [0, 16, 2, 16, 6], [0, 8, 2, 8, 6], [0, 3, 10, 21, 10], [6, "m16 20 2 2 4-4"]],
        "calendar-clock": [[6, "M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"], [6, "M16 2v4"], [6, "M8 2v4"], [6, "M3 10h5"], [6, "M17.5 17.5 16 16.25V14"], [6, "M22 16a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z"]],
        "calendar-days": [[5, 3, 4, 18, 18, 2, 2], [0, 16, 2, 16, 6], [0, 8, 2, 8, 6], [0, 3, 10, 21, 10], [6, "M8 14h.01"], [6, "M12 14h.01"], [6, "M16 14h.01"], [6, "M8 18h.01"], [6, "M12 18h.01"], [6, "M16 18h.01"]],
        "calendar-heart": [[6, "M21 10V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h7"], [6, "M16 2v4"], [6, "M8 2v4"], [6, "M3 10h18"], [6, "M21.29 14.7a2.43 2.43 0 0 0-2.65-.52c-.3.12-.57.3-.8.53l-.34.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L17.5 22l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z"]],
        "calendar-minus": [[6, "M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"], [0, 16, 2, 16, 6], [0, 8, 2, 8, 6], [0, 3, 10, 21, 10], [0, 16, 19, 22, 19]],
        "calendar-off": [[6, "M4.18 4.18A2 2 0 0 0 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 1.82-1.18"], [6, "M21 15.5V6a2 2 0 0 0-2-2H9.5"], [6, "M16 2v4"], [6, "M3 10h7"], [6, "M21 10h-5.5"], [0, 2, 2, 22, 22]],
        "calendar-plus": [[6, "M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"], [0, 16, 2, 16, 6], [0, 8, 2, 8, 6], [0, 3, 10, 21, 10], [0, 19, 16, 19, 22], [0, 16, 19, 22, 19]],
        "calendar-range": [[5, 3, 4, 18, 18, 2, 2], [0, 16, 2, 16, 6], [0, 8, 2, 8, 6], [0, 3, 10, 21, 10], [6, "M17 14h-6"], [6, "M13 18H7"], [6, "M7 14h.01"], [6, "M17 18h.01"]],
        "calendar-search": [[6, "M21 12V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h7.5"], [6, "M16 2v4"], [6, "M8 2v4"], [6, "M3 10h18"], [6, "M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6v0Z"], [6, "m22 22-1.5-1.5"]],
        "calendar-x": [[5, 3, 4, 18, 18, 2, 2], [0, 16, 2, 16, 6], [0, 8, 2, 8, 6], [0, 3, 10, 21, 10], [0, 10, 14, 14, 18], [0, 14, 14, 10, 18]],
        "calendar-x2": [[6, "M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"], [0, 16, 2, 16, 6], [0, 8, 2, 8, 6], [0, 3, 10, 21, 10], [0, 17, 17, 22, 22], [0, 17, 22, 22, 17]],
        camera: [[6, "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"], [1, 12, 13, 3]],
        "camera-off": [[0, 2, 2, 22, 22], [6, "M7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16"], [6, "M9.5 4h5L17 7h3a2 2 0 0 1 2 2v7.5"], [6, "M14.121 15.121A3 3 0 1 1 9.88 10.88"]],
        "candlestick-chart": [[6, "M9 5v4"], [5, 7, 9, 4, 6, 1], [6, "M9 15v2"], [6, "M17 3v2"], [5, 15, 5, 4, 8, 1], [6, "M17 13v3"], [6, "M3 3v18h18"]],
        candy: [[6, "m9.5 7.5-2 2a4.95 4.95 0 1 0 7 7l2-2a4.95 4.95 0 1 0-7-7Z"], [6, "M14 6.5v10"], [6, "M10 7.5v10"], [6, "m16 7 1-5 1.37.68A3 3 0 0 0 19.7 3H21v1.3c0 .46.1.92.32 1.33L22 7l-5 1"], [6, "m8 17-1 5-1.37-.68A3 3 0 0 0 4.3 21H3v-1.3a3 3 0 0 0-.32-1.33L2 17l5-1"]],
        "candy-cane": [[6, "M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z"], [6, "M17.75 7 15 2.1"], [6, "M10.9 4.8 13 9"], [6, "m7.9 9.7 2 4.4"], [6, "M4.9 14.7 7 18.9"]],
        "candy-off": [[6, "m8.5 8.5-1 1a4.95 4.95 0 0 0 7 7l1-1"], [6, "M11.843 6.187A4.947 4.947 0 0 1 16.5 7.5a4.947 4.947 0 0 1 1.313 4.657"], [6, "M14 16.5V14"], [6, "M14 6.5v1.843"], [6, "M10 10v7.5"], [6, "m16 7 1-5 1.367.683A3 3 0 0 0 19.708 3H21v1.292a3 3 0 0 0 .317 1.341L22 7l-5 1"], [6, "m8 17-1 5-1.367-.683A3 3 0 0 0 4.292 21H3v-1.292a3 3 0 0 0-.317-1.341L2 17l5-1"], [0, 2, 2, 22, 22]],
        car: [[6, "M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"], [1, 7, 17, 2], [6, "M9 17h6"], [1, 17, 17, 2]],
        "car-front": [[6, "m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8"], [6, "M7 14h.01"], [6, "M17 14h.01"], [5, 3, 10, 18, 8, 2], [6, "M5 18v2"], [6, "M19 18v2"]],
        "car-taxi-front": [[6, "M10 2h4"], [6, "m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8"], [6, "M7 14h.01"], [6, "M17 14h.01"], [5, 3, 10, 18, 8, 2], [6, "M5 18v2"], [6, "M19 18v2"]],
        caravan: [[5, 2, 9, 4, 4], [5, 10, 9, 4, 10], [6, "M18 19V9a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a2 2 0 0 0 2 2h2"], [1, 8, 19, 2], [6, "M10 19h12v-2"]],
        carrot: [[6, "M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46"], [6, "M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z"], [6, "M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z"]],
        "case-lower": [[1, 7, 12, 3], [6, "M10 9v6"], [1, 17, 12, 3], [6, "M14 7v8"]],
        "case-sensitive": [[6, "m3 15 4-8 4 8"], [6, "M4 13h6"], [1, 18, 12, 3], [6, "M21 9v6"]],
        "case-upper": [[6, "m3 15 4-8 4 8"], [6, "M4 13h6"], [6, "M15 11h4.5a2 2 0 0 1 0 4H15V7h4a2 2 0 0 1 0 4"]],
        "cassette-tape": [[5, 2, 4, 20, 16, 2], [1, 8, 10, 2], [6, "M8 12h8"], [1, 16, 10, 2], [6, "m6 20 .7-2.9A1.4 1.4 0 0 1 8.1 16h7.8a1.4 1.4 0 0 1 1.4 1l.7 3"]],
        cast: [[6, "M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"], [6, "M2 12a9 9 0 0 1 8 8"], [6, "M2 16a5 5 0 0 1 4 4"], [0, 2, 20, 2.01, 20]],
        castle: [[6, "M22 20v-9H2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z"], [6, "M18 11V4H6v7"], [6, "M15 22v-4a3 3 0 0 0-3-3v0a3 3 0 0 0-3 3v4"], [6, "M22 11V9"], [6, "M2 11V9"], [6, "M6 4V2"], [6, "M18 4V2"], [6, "M10 4V2"], [6, "M14 4V2"]],
        cat: [[6, "M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z"], [6, "M8 14v.5"], [6, "M16 14v.5"], [6, "M11.25 16.25h1.5L12 17l-.75-.75Z"]],
        check: [[6, "M20 6 9 17l-5-5"]],
        "check-check": [[6, "M18 6 7 17l-5-5"], [6, "m22 10-7.5 7.5L13 16"]],
        "check-circle": [[6, "M22 11.08V12a10 10 0 1 1-5.93-9.14"], [6, "m9 11 3 3L22 4"]],
        "check-circle-2": [[1, 12, 12, 10], [6, "m9 12 2 2 4-4"]],
        "check-square": [[6, "m9 11 3 3L22 4"], [6, "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"]],
        "check-square-2": [[5, 3, 3, 18, 18, 2], [6, "m9 12 2 2 4-4"]],
        "chef-hat": [[6, "M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z"], [0, 6, 17, 18, 17]],
        cherry: [[6, "M2 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z"], [6, "M12 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z"], [6, "M7 14c3.22-2.91 4.29-8.75 5-12 1.66 2.38 4.94 9 5 12"], [6, "M22 9c-4.29 0-7.14-2.33-10-7 5.71 0 10 4.67 10 7Z"]],
        "chevron-down": [[6, "m6 9 6 6 6-6"]],
        "chevron-down-circle": [[1, 12, 12, 10], [6, "m16 10-4 4-4-4"]],
        "chevron-down-square": [[5, 3, 3, 18, 18, 2], [6, "m16 10-4 4-4-4"]],
        "chevron-first": [[6, "m17 18-6-6 6-6"], [6, "M7 6v12"]],
        "chevron-last": [[6, "m7 18 6-6-6-6"], [6, "M17 6v12"]],
        "chevron-left": [[6, "m15 18-6-6 6-6"]],
        "chevron-left-circle": [[1, 12, 12, 10], [6, "m14 16-4-4 4-4"]],
        "chevron-left-square": [[5, 3, 3, 18, 18, 2], [6, "m14 16-4-4 4-4"]],
        "chevron-right": [[6, "m9 18 6-6-6-6"]],
        "chevron-right-circle": [[1, 12, 12, 10], [6, "m10 8 4 4-4 4"]],
        "chevron-right-square": [[5, 3, 3, 18, 18, 2], [6, "m10 8 4 4-4 4"]],
        "chevron-up": [[6, "m18 15-6-6-6 6"]],
        "chevron-up-circle": [[1, 12, 12, 10], [6, "m8 14 4-4 4 4"]],
        "chevron-up-square": [[5, 3, 3, 18, 18, 2], [6, "m8 14 4-4 4 4"]],
        "chevrons-down": [[6, "m7 6 5 5 5-5"], [6, "m7 13 5 5 5-5"]],
        "chevrons-down-up": [[6, "m7 20 5-5 5 5"], [6, "m7 4 5 5 5-5"]],
        "chevrons-left": [[6, "m11 17-5-5 5-5"], [6, "m18 17-5-5 5-5"]],
        "chevrons-left-right": [[6, "m9 7-5 5 5 5"], [6, "m15 7 5 5-5 5"]],
        "chevrons-right": [[6, "m6 17 5-5-5-5"], [6, "m13 17 5-5-5-5"]],
        "chevrons-right-left": [[6, "m20 17-5-5 5-5"], [6, "m4 17 5-5-5-5"]],
        "chevrons-up": [[6, "m17 11-5-5-5 5"], [6, "m17 18-5-5-5 5"]],
        "chevrons-up-down": [[6, "m7 15 5 5 5-5"], [6, "m7 9 5-5 5 5"]],
        chrome: [[1, 12, 12, 10], [1, 12, 12, 4], [0, 21.17, 8, 12, 8], [0, 3.95, 6.06, 8.54, 14], [0, 10.88, 21.94, 15.46, 14]],
        church: [[6, "m18 7 4 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9l4-2"], [6, "M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4"], [6, "M18 22V5l-6-3-6 3v17"], [6, "M12 7v5"], [6, "M10 9h4"]],
        cigarette: [[6, "M18 12H2v4h16"], [6, "M22 12v4"], [6, "M7 12v4"], [6, "M18 8c0-2.5-2-2.5-2-5"], [6, "M22 8c0-2.5-2-2.5-2-5"]],
        "cigarette-off": [[0, 2, 2, 22, 22], [6, "M12 12H2v4h14"], [6, "M22 12v4"], [6, "M18 12h-.5"], [6, "M7 12v4"], [6, "M18 8c0-2.5-2-2.5-2-5"], [6, "M22 8c0-2.5-2-2.5-2-5"]],
        circle: [[1, 12, 12, 10]],
        "circle-dashed": [[6, "M10.1 2.18a9.93 9.93 0 0 1 3.8 0"], [6, "M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7"], [6, "M21.82 10.1a9.93 9.93 0 0 1 0 3.8"], [6, "M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69"], [6, "M13.9 21.82a9.94 9.94 0 0 1-3.8 0"], [6, "M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7"], [6, "M2.18 13.9a9.93 9.93 0 0 1 0-3.8"], [6, "M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69"]],
        "circle-dollar-sign": [[1, 12, 12, 10], [6, "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"], [6, "M12 18V6"]],
        "circle-dot": [[1, 12, 12, 10], [1, 12, 12, 1]],
        "circle-dot-dashed": [[6, "M10.1 2.18a9.93 9.93 0 0 1 3.8 0"], [6, "M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7"], [6, "M21.82 10.1a9.93 9.93 0 0 1 0 3.8"], [6, "M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69"], [6, "M13.9 21.82a9.94 9.94 0 0 1-3.8 0"], [6, "M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7"], [6, "M2.18 13.9a9.93 9.93 0 0 1 0-3.8"], [6, "M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69"], [1, 12, 12, 1]],
        "circle-ellipsis": [[1, 12, 12, 10], [6, "M17 12h.01"], [6, "M12 12h.01"], [6, "M7 12h.01"]],
        "circle-equal": [[6, "M7 10h10"], [6, "M7 14h10"], [1, 12, 12, 10]],
        "circle-off": [[6, "m2 2 20 20"], [6, "M8.35 2.69A10 10 0 0 1 21.3 15.65"], [6, "M19.08 19.08A10 10 0 1 1 4.92 4.92"]],
        "circle-slash": [[0, 9, 15, 15, 9], [1, 12, 12, 10]],
        "circle-slash-2": [[1, 12, 12, 10], [6, "M22 2 2 22"]],
        "circle-slashed": [[1, 12, 12, 10], [6, "M22 2 2 22"]],
        "circuit-board": [[5, 3, 3, 18, 18, 2], [6, "M11 9h4a2 2 0 0 0 2-2V3"], [1, 9, 9, 2], [6, "M7 21v-4a2 2 0 0 1 2-2h4"], [1, 15, 15, 2]],
        citrus: [[6, "M21.66 17.67a1.08 1.08 0 0 1-.04 1.6A12 12 0 0 1 4.73 2.38a1.1 1.1 0 0 1 1.61-.04z"], [6, "M19.65 15.66A8 8 0 0 1 8.35 4.34"], [6, "m14 10-5.5 5.5"], [6, "M14 17.85V10H6.15"]],
        clapperboard: [[6, "M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z"], [6, "m6.2 5.3 3.1 3.9"], [6, "m12.4 3.4 3.1 4"], [6, "M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"]],
        clipboard: [[5, 8, 2, 8, 4, 1, 1], [6, "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"]],
        "clipboard-check": [[5, 8, 2, 8, 4, 1, 1], [6, "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"], [6, "m9 14 2 2 4-4"]],
        "clipboard-copy": [[5, 8, 2, 8, 4, 1, 1], [6, "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"], [6, "M16 4h2a2 2 0 0 1 2 2v4"], [6, "M21 14H11"], [6, "m15 10-4 4 4 4"]],
        "clipboard-edit": [[5, 8, 2, 8, 4, 1, 1], [6, "M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z"], [6, "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5.5"], [6, "M4 13.5V6a2 2 0 0 1 2-2h2"]],
        "clipboard-list": [[5, 8, 2, 8, 4, 1, 1], [6, "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"], [6, "M12 11h4"], [6, "M12 16h4"], [6, "M8 11h.01"], [6, "M8 16h.01"]],
        "clipboard-paste": [[6, "M15 2H9a1 1 0 0 0-1 1v2c0 .6.4 1 1 1h6c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1Z"], [6, "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M16 4h2a2 2 0 0 1 2 2v2M11 14h10"], [6, "m17 10 4 4-4 4"]],
        "clipboard-signature": [[5, 8, 2, 8, 4, 1, 1], [6, "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5"], [6, "M16 4h2a2 2 0 0 1 1.73 1"], [6, "M18.42 9.61a2.1 2.1 0 1 1 2.97 2.97L16.95 17 13 18l.99-3.95 4.43-4.44Z"], [6, "M8 18h1"]],
        "clipboard-type": [[5, 8, 2, 8, 4, 1, 1], [6, "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"], [6, "M9 12v-1h6v1"], [6, "M11 17h2"], [6, "M12 11v6"]],
        "clipboard-x": [[5, 8, 2, 8, 4, 1, 1], [6, "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"], [6, "m15 11-6 6"], [6, "m9 11 6 6"]],
        clock: [[1, 12, 12, 10], [2, "12 6 12 12 16 14"]],
        "clock-1": [[1, 12, 12, 10], [2, "12 6 12 12 14.5 8"]],
        "clock-10": [[1, 12, 12, 10], [2, "12 6 12 12 8 10"]],
        "clock-11": [[1, 12, 12, 10], [2, "12 6 12 12 9.5 8"]],
        "clock-12": [[1, 12, 12, 10], [2, "12 6 12 12"]],
        "clock-2": [[1, 12, 12, 10], [2, "12 6 12 12 16 10"]],
        "clock-3": [[1, 12, 12, 10], [2, "12 6 12 12 16.5 12"]],
        "clock-4": [[1, 12, 12, 10], [2, "12 6 12 12 16 14"]],
        "clock-5": [[1, 12, 12, 10], [2, "12 6 12 12 14.5 16"]],
        "clock-6": [[1, 12, 12, 10], [2, "12 6 12 12 12 16.5"]],
        "clock-7": [[1, 12, 12, 10], [2, "12 6 12 12 9.5 16"]],
        "clock-8": [[1, 12, 12, 10], [2, "12 6 12 12 8 14"]],
        "clock-9": [[1, 12, 12, 10], [2, "12 6 12 12 7.5 12"]],
        cloud: [[6, "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"]],
        "cloud-cog": [[1, 12, 17, 3], [6, "M4.2 15.1A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2"], [6, "m15.7 18.4-.9-.3"], [6, "m9.2 15.9-.9-.3"], [6, "m10.6 20.7.3-.9"], [6, "m13.1 14.2.3-.9"], [6, "m13.6 20.7-.4-1"], [6, "m10.8 14.3-.4-1"], [6, "m8.3 18.6 1-.4"], [6, "m14.7 15.8 1-.4"]],
        "cloud-drizzle": [[6, "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"], [6, "M8 19v1"], [6, "M8 14v1"], [6, "M16 19v1"], [6, "M16 14v1"], [6, "M12 21v1"], [6, "M12 16v1"]],
        "cloud-fog": [[6, "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"], [6, "M16 17H7"], [6, "M17 21H9"]],
        "cloud-hail": [[6, "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"], [6, "M16 14v2"], [6, "M8 14v2"], [6, "M16 20h.01"], [6, "M8 20h.01"], [6, "M12 16v2"], [6, "M12 22h.01"]],
        "cloud-lightning": [[6, "M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973"], [6, "m13 12-3 5h4l-3 5"]],
        "cloud-moon": [[6, "M13 16a3 3 0 1 1 0 6H7a5 5 0 1 1 4.9-6Z"], [6, "M10.1 9A6 6 0 0 1 16 4a4.24 4.24 0 0 0 6 6 6 6 0 0 1-3 5.197"]],
        "cloud-moon-rain": [[6, "M10.083 9A6.002 6.002 0 0 1 16 4a4.243 4.243 0 0 0 6 6c0 2.22-1.206 4.16-3 5.197"], [6, "M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24"], [6, "M11 20v2"], [6, "M7 19v2"]],
        "cloud-off": [[6, "m2 2 20 20"], [6, "M5.782 5.782A7 7 0 0 0 9 19h8.5a4.5 4.5 0 0 0 1.307-.193"], [6, "M21.532 16.5A4.5 4.5 0 0 0 17.5 10h-1.79A7.008 7.008 0 0 0 10 5.07"]],
        "cloud-rain": [[6, "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"], [6, "M16 14v6"], [6, "M8 14v6"], [6, "M12 16v6"]],
        "cloud-rain-wind": [[6, "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"], [6, "m9.2 22 3-7"], [6, "m9 13-3 7"], [6, "m17 13-3 7"]],
        "cloud-snow": [[6, "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"], [6, "M8 15h.01"], [6, "M8 19h.01"], [6, "M12 17h.01"], [6, "M12 21h.01"], [6, "M16 15h.01"], [6, "M16 19h.01"]],
        "cloud-sun": [[6, "M12 2v2"], [6, "m4.93 4.93 1.41 1.41"], [6, "M20 12h2"], [6, "m19.07 4.93-1.41 1.41"], [6, "M15.947 12.65a4 4 0 0 0-5.925-4.128"], [6, "M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z"]],
        "cloud-sun-rain": [[6, "M12 2v2"], [6, "m4.93 4.93 1.41 1.41"], [6, "M20 12h2"], [6, "m19.07 4.93-1.41 1.41"], [6, "M15.947 12.65a4 4 0 0 0-5.925-4.128"], [6, "M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24"], [6, "M11 20v2"], [6, "M7 19v2"]],
        cloudy: [[6, "M17.5 21H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"], [6, "M22 10a3 3 0 0 0-3-3h-2.207a5.502 5.502 0 0 0-10.702.5"]],
        clover: [[6, "M16.2 3.8a2.7 2.7 0 0 0-3.81 0l-.4.38-.4-.4a2.7 2.7 0 0 0-3.82 0C6.73 4.85 6.67 6.64 8 8l4 4 4-4c1.33-1.36 1.27-3.15.2-4.2z"], [6, "M8 8c-1.36-1.33-3.15-1.27-4.2-.2a2.7 2.7 0 0 0 0 3.81l.38.4-.4.4a2.7 2.7 0 0 0 0 3.82C4.85 17.27 6.64 17.33 8 16"], [6, "M16 16c1.36 1.33 3.15 1.27 4.2.2a2.7 2.7 0 0 0 0-3.81l-.38-.4.4-.4a2.7 2.7 0 0 0 0-3.82C19.15 6.73 17.36 6.67 16 8"], [6, "M7.8 20.2a2.7 2.7 0 0 0 3.81 0l.4-.38.4.4a2.7 2.7 0 0 0 3.82 0c1.06-1.06 1.12-2.85-.21-4.21l-4-4-4 4c-1.33 1.36-1.27 3.15-.2 4.2z"], [6, "m7 17-5 5"]],
        club: [[6, "M17.28 9.05a5.5 5.5 0 1 0-10.56 0A5.5 5.5 0 1 0 12 17.66a5.5 5.5 0 1 0 5.28-8.6Z"], [6, "M12 17.66L12 22"]],
        code: [[2, "16 18 22 12 16 6"], [2, "8 6 2 12 8 18"]],
        "code-2": [[6, "m18 16 4-4-4-4"], [6, "m6 8-4 4 4 4"], [6, "m14.5 4-5 16"]],
        codepen: [[3, "12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"], [0, 12, 22, 12, 15.5], [2, "22 8.5 12 15.5 2 8.5"], [2, "2 15.5 12 8.5 22 15.5"], [0, 12, 2, 12, 8.5]],
        codesandbox: [[6, "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"], [2, "7.5 4.21 12 6.81 16.5 4.21"], [2, "7.5 19.79 7.5 14.6 3 12"], [2, "21 12 16.5 14.6 16.5 19.79"], [2, "3.27 6.96 12 12.01 20.73 6.96"], [0, 12, 22.08, 12, 12]],
        coffee: [[6, "M17 8h1a4 4 0 1 1 0 8h-1"], [6, "M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"], [0, 6, 2, 6, 4], [0, 10, 2, 10, 4], [0, 14, 2, 14, 4]],
        cog: [[6, "M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"], [6, "M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"], [6, "M12 2v2"], [6, "M12 22v-2"], [6, "m17 20.66-1-1.73"], [6, "M11 10.27 7 3.34"], [6, "m20.66 17-1.73-1"], [6, "m3.34 7 1.73 1"], [6, "M14 12h8"], [6, "M2 12h2"], [6, "m20.66 7-1.73 1"], [6, "m3.34 17 1.73-1"], [6, "m17 3.34-1 1.73"], [6, "m11 13.73-4 6.93"]],
        coins: [[1, 8, 8, 6], [6, "M18.09 10.37A6 6 0 1 1 10.34 18"], [6, "M7 6h1v4"], [6, "m16.71 13.88.7.71-2.82 2.82"]],
        columns: [[5, 3, 3, 18, 18, 2, 2], [0, 12, 3, 12, 21]],
        combine: [[5, 2, 2, 8, 8, 2], [6, "M14 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2"], [6, "M20 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2"], [6, "M10 18H5c-1.7 0-3-1.3-3-3v-1"], [2, "7 21 10 18 7 15"], [5, 14, 14, 8, 8, 2]],
        command: [[6, "M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"]],
        compass: [[1, 12, 12, 10], [3, "16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"]],
        component: [[6, "M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z"], [6, "m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z"], [6, "M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z"], [6, "m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z"]],
        computer: [[5, 5, 2, 14, 8, 2], [5, 2, 14, 20, 8, 2], [6, "M6 18h2"], [6, "M12 18h6"]],
        "concierge-bell": [[6, "M2 18a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2H2v-2Z"], [6, "M20 16a8 8 0 1 0-16 0"], [6, "M12 4v4"], [6, "M10 4h4"]],
        cone: [[6, "m20.9 18.55-8-15.98a1 1 0 0 0-1.8 0l-8 15.98"], [4, 12, 19, 9, 3]],
        construction: [[5, 2, 6, 20, 8, 1], [6, "M17 14v7"], [6, "M7 14v7"], [6, "M17 3v3"], [6, "M7 3v3"], [6, "M10 14 2.3 6.3"], [6, "m14 6 7.7 7.7"], [6, "m8 6 8 8"]],
        contact: [[6, "M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2"], [5, 3, 4, 18, 18, 2], [1, 12, 10, 2], [0, 8, 2, 8, 4], [0, 16, 2, 16, 4]],
        "contact-2": [[6, "M16 18a4 4 0 0 0-8 0"], [1, 12, 11, 3], [5, 3, 4, 18, 18, 2], [0, 8, 2, 8, 4], [0, 16, 2, 16, 4]],
        container: [[6, "M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z"], [6, "M10 21.9V14L2.1 9.1"], [6, "m10 14 11.9-6.9"], [6, "M14 19.8v-8.1"], [6, "M18 17.5V9.4"]],
        contrast: [[1, 12, 12, 10], [6, "M12 18a6 6 0 0 0 0-12v12z"]],
        cookie: [[6, "M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"], [6, "M8.5 8.5v.01"], [6, "M16 15.5v.01"], [6, "M12 12v.01"], [6, "M11 17v.01"], [6, "M7 14v.01"]],
        copy: [[5, 8, 8, 14, 14, 2, 2], [6, "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"]],
        "copy-check": [[6, "m12 15 2 2 4-4"], [5, 8, 8, 14, 14, 2, 2], [6, "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"]],
        "copy-minus": [[0, 12, 15, 18, 15], [5, 8, 8, 14, 14, 2, 2], [6, "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"]],
        "copy-plus": [[0, 15, 12, 15, 18], [0, 12, 15, 18, 15], [5, 8, 8, 14, 14, 2, 2], [6, "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"]],
        "copy-slash": [[0, 12, 18, 18, 12], [5, 8, 8, 14, 14, 2, 2], [6, "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"]],
        "copy-x": [[0, 12, 12, 18, 18], [0, 12, 18, 18, 12], [5, 8, 8, 14, 14, 2, 2], [6, "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"]],
        copyleft: [[1, 12, 12, 10], [6, "M9.17 14.83a4 4 0 1 0 0-5.66"]],
        copyright: [[1, 12, 12, 10], [6, "M14.83 14.83a4 4 0 1 1 0-5.66"]],
        "corner-down-left": [[2, "9 10 4 15 9 20"], [6, "M20 4v7a4 4 0 0 1-4 4H4"]],
        "corner-down-right": [[2, "15 10 20 15 15 20"], [6, "M4 4v7a4 4 0 0 0 4 4h12"]],
        "corner-left-down": [[2, "14 15 9 20 4 15"], [6, "M20 4h-7a4 4 0 0 0-4 4v12"]],
        "corner-left-up": [[2, "14 9 9 4 4 9"], [6, "M20 20h-7a4 4 0 0 1-4-4V4"]],
        "corner-right-down": [[2, "10 15 15 20 20 15"], [6, "M4 4h7a4 4 0 0 1 4 4v12"]],
        "corner-right-up": [[2, "10 9 15 4 20 9"], [6, "M4 20h7a4 4 0 0 0 4-4V4"]],
        "corner-up-left": [[2, "9 14 4 9 9 4"], [6, "M20 20v-7a4 4 0 0 0-4-4H4"]],
        "corner-up-right": [[2, "15 14 20 9 15 4"], [6, "M4 20v-7a4 4 0 0 1 4-4h12"]],
        cpu: [[5, 4, 4, 16, 16, 2], [5, 9, 9, 6, 6], [6, "M15 2v2"], [6, "M15 20v2"], [6, "M2 15h2"], [6, "M2 9h2"], [6, "M20 15h2"], [6, "M20 9h2"], [6, "M9 2v2"], [6, "M9 20v2"]],
        "creative-commons": [[1, 12, 12, 10], [6, "M10 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1"], [6, "M17 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1"]],
        "credit-card": [[5, 2, 5, 20, 14, 2], [0, 2, 10, 22, 10]],
        croissant: [[6, "m4.6 13.11 5.79-3.21c1.89-1.05 4.79 1.78 3.71 3.71l-3.22 5.81C8.8 23.16.79 15.23 4.6 13.11Z"], [6, "m10.5 9.5-1-2.29C9.2 6.48 8.8 6 8 6H4.5C2.79 6 2 6.5 2 8.5a7.71 7.71 0 0 0 2 4.83"], [6, "M8 6c0-1.55.24-4-2-4-2 0-2.5 2.17-2.5 4"], [6, "m14.5 13.5 2.29 1c.73.3 1.21.7 1.21 1.5v3.5c0 1.71-.5 2.5-2.5 2.5a7.71 7.71 0 0 1-4.83-2"], [6, "M18 16c1.55 0 4-.24 4 2 0 2-2.17 2.5-4 2.5"]],
        crop: [[6, "M6 2v14a2 2 0 0 0 2 2h14"], [6, "M18 22V8a2 2 0 0 0-2-2H2"]],
        cross: [[6, "M11 2a2 2 0 0 0-2 2v5H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h5v5c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-5h5a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-5V4a2 2 0 0 0-2-2h-2z"]],
        crosshair: [[1, 12, 12, 10], [0, 22, 12, 18, 12], [0, 6, 12, 2, 12], [0, 12, 6, 12, 2], [0, 12, 22, 12, 18]],
        crown: [[6, "m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"]],
        cuboid: [[6, "m21.12 6.4-6.05-4.06a2 2 0 0 0-2.17-.05L2.95 8.41a2 2 0 0 0-.95 1.7v5.82a2 2 0 0 0 .88 1.66l6.05 4.07a2 2 0 0 0 2.17.05l9.95-6.12a2 2 0 0 0 .95-1.7V8.06a2 2 0 0 0-.88-1.66Z"], [6, "M10 22v-8L2.25 9.15"], [6, "m10 14 11.77-6.87"]],
        "cup-soda": [[6, "m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8"], [6, "M5 8h14"], [6, "M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0"], [6, "m12 8 1-6h2"]],
        "curly-braces": [[6, "M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1"], [6, "M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1"]],
        currency: [[1, 12, 12, 8], [0, 3, 3, 6, 6], [0, 21, 3, 18, 6], [0, 3, 21, 6, 18], [0, 21, 21, 18, 18]],
        cylinder: [[4, 12, 5, 9, 3], [6, "M3 5v14a9 3 0 0 0 18 0V5"]],
        database: [[4, 12, 5, 9, 3], [6, "M3 5V19A9 3 0 0 0 21 19V5"], [6, "M3 12A9 3 0 0 0 21 12"]],
        "database-backup": [[4, 12, 5, 9, 3], [6, "M3 12a9 3 0 0 0 5 2.69"], [6, "M21 9.3V5"], [6, "M3 5v14a9 3 0 0 0 6.47 2.88"], [6, "M12 12v4h4"], [6, "M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16"]],
        "database-zap": [[4, 12, 5, 9, 3], [6, "M3 5V19A9 3 0 0 0 15 21.84"], [6, "M21 5V8"], [6, "M21 12L18 17H22L19 22"], [6, "M3 12A9 3 0 0 0 14.59 14.87"]],
        delete: [[6, "M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z"], [0, 18, 9, 12, 15], [0, 12, 9, 18, 15]],
        dessert: [[1, 12, 4, 2], [6, "M10.2 3.2C5.5 4 2 8.1 2 13a2 2 0 0 0 4 0v-1a2 2 0 0 1 4 0v4a2 2 0 0 0 4 0v-4a2 2 0 0 1 4 0v1a2 2 0 0 0 4 0c0-4.9-3.5-9-8.2-9.8"], [6, "M3.2 14.8a9 9 0 0 0 17.6 0"]],
        diameter: [[1, 19, 19, 2], [1, 5, 5, 2], [6, "M6.48 3.66a10 10 0 0 1 13.86 13.86"], [6, "m6.41 6.41 11.18 11.18"], [6, "M3.66 6.48a10 10 0 0 0 13.86 13.86"]],
        diamond: [[6, "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z"]],
        "dice-1": [[5, 3, 3, 18, 18, 2, 2], [6, "M12 12h.01"]],
        "dice-2": [[5, 3, 3, 18, 18, 2, 2], [6, "M15 9h.01"], [6, "M9 15h.01"]],
        "dice-3": [[5, 3, 3, 18, 18, 2, 2], [6, "M16 8h.01"], [6, "M12 12h.01"], [6, "M8 16h.01"]],
        "dice-4": [[5, 3, 3, 18, 18, 2, 2], [6, "M16 8h.01"], [6, "M8 8h.01"], [6, "M8 16h.01"], [6, "M16 16h.01"]],
        "dice-5": [[5, 3, 3, 18, 18, 2, 2], [6, "M16 8h.01"], [6, "M8 8h.01"], [6, "M8 16h.01"], [6, "M16 16h.01"], [6, "M12 12h.01"]],
        "dice-6": [[5, 3, 3, 18, 18, 2, 2], [6, "M16 8h.01"], [6, "M16 12h.01"], [6, "M16 16h.01"], [6, "M8 8h.01"], [6, "M8 12h.01"], [6, "M8 16h.01"]],
        dices: [[5, 2, 10, 12, 12, 2, 2], [6, "m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6"], [6, "M6 18h.01"], [6, "M10 14h.01"], [6, "M15 6h.01"], [6, "M18 9h.01"]],
        diff: [[6, "M12 3v14"], [6, "M5 10h14"], [6, "M5 21h14"]],
        disc: [[1, 12, 12, 10], [1, 12, 12, 2]],
        "disc-2": [[1, 12, 12, 10], [1, 12, 12, 4], [6, "M12 12h.01"]],
        "disc-3": [[1, 12, 12, 10], [6, "M6 12c0-1.7.7-3.2 1.8-4.2"], [1, 12, 12, 2], [6, "M18 12c0 1.7-.7 3.2-1.8 4.2"]],
        divide: [[1, 12, 6, 1], [0, 5, 12, 19, 12], [1, 12, 18, 1]],
        "divide-circle": [[0, 8, 12, 16, 12], [0, 12, 16, 12, 16], [0, 12, 8, 12, 8], [1, 12, 12, 10]],
        "divide-square": [[5, 3, 3, 18, 18, 2, 2], [0, 8, 12, 16, 12], [0, 12, 16, 12, 16], [0, 12, 8, 12, 8]],
        dna: [[6, "M2 15c6.667-6 13.333 0 20-6"], [6, "M9 22c1.798-1.998 2.518-3.995 2.807-5.993"], [6, "M15 2c-1.798 1.998-2.518 3.995-2.807 5.993"], [6, "m17 6-2.5-2.5"], [6, "m14 8-1-1"], [6, "m7 18 2.5 2.5"], [6, "m3.5 14.5.5.5"], [6, "m20 9 .5.5"], [6, "m6.5 12.5 1 1"], [6, "m16.5 10.5 1 1"], [6, "m10 16 1.5 1.5"]],
        "dna-off": [[6, "M15 2c-1.35 1.5-2.092 3-2.5 4.5M9 22c1.35-1.5 2.092-3 2.5-4.5"], [6, "M2 15c3.333-3 6.667-3 10-3m10-3c-1.5 1.35-3 2.092-4.5 2.5"], [6, "m17 6-2.5-2.5"], [6, "m14 8-1.5-1.5"], [6, "m7 18 2.5 2.5"], [6, "m3.5 14.5.5.5"], [6, "m20 9 .5.5"], [6, "m6.5 12.5 1 1"], [6, "m16.5 10.5 1 1"], [6, "m10 16 1.5 1.5"], [0, 2, 2, 22, 22]],
        dog: [[6, "M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703 1.725 1.722 3.656 1 1.261-.472 1.96-1.45 2.344-2.5"], [6, "M14.267 5.172c0-1.39 1.577-2.493 3.5-2.172 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5"], [6, "M8 14v.5"], [6, "M16 14v.5"], [6, "M11.25 16.25h1.5L12 17l-.75-.75Z"], [6, "M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444c0-1.061-.162-2.2-.493-3.309m-9.243-6.082A8.801 8.801 0 0 1 12 5c.78 0 1.5.108 2.161.306"]],
        "dollar-sign": [[0, 12, 2, 12, 22], [6, "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"]],
        donut: [[6, "M20.5 10a2.5 2.5 0 0 1-2.4-3H18a2.95 2.95 0 0 1-2.6-4.4 10 10 0 1 0 6.3 7.1c-.3.2-.8.3-1.2.3"], [1, 12, 12, 3]],
        "door-closed": [[6, "M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14"], [6, "M2 20h20"], [6, "M14 12v.01"]],
        "door-open": [[6, "M13 4h3a2 2 0 0 1 2 2v14"], [6, "M2 20h3"], [6, "M13 20h9"], [6, "M10 12v.01"], [6, "M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1A2 2 0 0 1 13 4.561Z"]],
        dot: [[1, 12.1, 12.1, 1]],
        download: [[6, "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"], [2, "7 10 12 15 17 10"], [0, 12, 15, 12, 3]],
        "download-cloud": [[6, "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"], [6, "M12 12v9"], [6, "m8 17 4 4 4-4"]],
        "drafting-compass": [[1, 12, 5, 2], [6, "m3 21 8.02-14.26"], [6, "m12.99 6.74 1.93 3.44"], [6, "M19 12c-3.87 4-10.13 4-14 0"], [6, "m21 21-2.16-3.84"]],
        drama: [[6, "M 10 11h.01"], [6, "M 14 6h.01"], [6, "M 18 6h.01"], [6, "M 6.5 13.1h.01"], [6, "M22 5c0 9-4 12-6 12s-6-3-6-12c0-2 2-3 6-3s6 1 6 3"], [6, "M17.4 9.9c-.8.8-2 .8-2.8 0"], [6, "M10.1 7.1C9 7.2 7.7 7.7 6 8.6c-3.5 2-4.7 3.9-3.7 5.6 4.5 7.8 9.5 8.4 11.2 7.4.9-.5 1.9-2.1 1.9-4.7"], [6, "M9.1 16.5c.3-1.1 1.4-1.7 2.4-1.4"]],
        dribbble: [[1, 12, 12, 10], [6, "M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"], [6, "M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"], [6, "M8.56 2.75c4.37 6 6 9.42 8 17.72"]],
        droplet: [[6, "M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"]],
        droplets: [[6, "M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"], [6, "M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"]],
        drumstick: [[6, "M15.45 15.4c-2.13.65-4.3.32-5.7-1.1-2.29-2.27-1.76-6.5 1.17-9.42 2.93-2.93 7.15-3.46 9.43-1.18 1.41 1.41 1.74 3.57 1.1 5.71-1.4-.51-3.26-.02-4.64 1.36-1.38 1.38-1.87 3.23-1.36 4.63z"], [6, "m11.25 15.6-2.16 2.16a2.5 2.5 0 1 1-4.56 1.73 2.49 2.49 0 0 1-1.41-4.24 2.5 2.5 0 0 1 3.14-.32l2.16-2.16"]],
        dumbbell: [[6, "m6.5 6.5 11 11"], [6, "m21 21-1-1"], [6, "m3 3 1 1"], [6, "m18 22 4-4"], [6, "m2 6 4-4"], [6, "m3 10 7-7"], [6, "m14 21 7-7"]],
        ear: [[6, "M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0"], [6, "M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4"]],
        "ear-off": [[6, "M6 18.5a3.5 3.5 0 1 0 7 0c0-1.57.92-2.52 2.04-3.46"], [6, "M6 8.5c0-.75.13-1.47.36-2.14"], [6, "M8.8 3.15A6.5 6.5 0 0 1 19 8.5c0 1.63-.44 2.81-1.09 3.76"], [6, "M12.5 6A2.5 2.5 0 0 1 15 8.5M10 13a2 2 0 0 0 1.82-1.18"], [0, 2, 2, 22, 22]],
        edit: [[6, "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"], [6, "M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z"]],
        "edit-2": [[6, "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"]],
        "edit-3": [[6, "M12 20h9"], [6, "M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"]],
        egg: [[6, "M12 22c6.23-.05 7.87-5.57 7.5-10-.36-4.34-3.95-9.96-7.5-10-3.55.04-7.14 5.66-7.5 10-.37 4.43 1.27 9.95 7.5 10z"]],
        "egg-fried": [[1, 11.5, 12.5, 3.5], [6, "M3 8c0-3.5 2.5-6 6.5-6 5 0 4.83 3 7.5 5s5 2 5 6c0 4.5-2.5 6.5-7 6.5-2.5 0-2.5 2.5-6 2.5s-7-2-7-5.5c0-3 1.5-3 1.5-5C3.5 10 3 9 3 8Z"]],
        "egg-off": [[6, "M6.399 6.399C5.362 8.157 4.65 10.189 4.5 12c-.37 4.43 1.27 9.95 7.5 10 3.256-.026 5.259-1.547 6.375-3.625"], [6, "M19.532 13.875A14.07 14.07 0 0 0 19.5 12c-.36-4.34-3.95-9.96-7.5-10-1.04.012-2.082.502-3.046 1.297"], [0, 2, 2, 22, 22]],
        equal: [[0, 5, 9, 19, 9], [0, 5, 15, 19, 15]],
        "equal-not": [[0, 5, 9, 19, 9], [0, 5, 15, 19, 15], [0, 19, 5, 5, 19]],
        eraser: [[6, "m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"], [6, "M22 21H7"], [6, "m5 11 9 9"]],
        euro: [[6, "M4 10h12"], [6, "M4 14h9"], [6, "M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2"]],
        expand: [[6, "m21 21-6-6m6 6v-4.8m0 4.8h-4.8"], [6, "M3 16.2V21m0 0h4.8M3 21l6-6"], [6, "M21 7.8V3m0 0h-4.8M21 3l-6 6"], [6, "M3 7.8V3m0 0h4.8M3 3l6 6"]],
        "external-link": [[6, "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"], [2, "15 3 21 3 21 9"], [0, 10, 14, 21, 3]],
        eye: [[6, "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"], [1, 12, 12, 3]],
        "eye-off": [[6, "M9.88 9.88a3 3 0 1 0 4.24 4.24"], [6, "M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"], [6, "M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"], [0, 2, 2, 22, 22]],
        facebook: [[6, "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"]],
        factory: [[6, "M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"], [6, "M17 18h1"], [6, "M12 18h1"], [6, "M7 18h1"]],
        fan: [[6, "M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z"], [6, "M12 12v.01"]],
        "fast-forward": [[3, "13 19 22 12 13 5 13 19"], [3, "2 19 11 12 2 5 2 19"]],
        feather: [[6, "M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"], [0, 16, 8, 2, 22], [0, 17.5, 15, 9, 15]],
        "ferris-wheel": [[1, 12, 12, 2], [6, "M12 2v4"], [6, "m6.8 15-3.5 2"], [6, "m20.7 7-3.5 2"], [6, "M6.8 9 3.3 7"], [6, "m20.7 17-3.5-2"], [6, "m9 22 3-8 3 8"], [6, "M8 22h8"], [6, "M18 18.7a9 9 0 1 0-12 0"]],
        figma: [[6, "M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"], [6, "M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"], [6, "M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"], [6, "M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"], [6, "M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"]],
        file: [[6, "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"], [2, "14 2 14 8 20 8"]],
        "file-archive": [[6, "M4 22V4c0-.5.2-1 .6-1.4C5 2.2 5.5 2 6 2h8.5L20 7.5V20c0 .5-.2 1-.6 1.4-.4.4-.9.6-1.4.6h-2"], [2, "14 2 14 8 20 8"], [1, 10, 20, 2], [6, "M10 7V6"], [6, "M10 12v-1"], [6, "M10 18v-2"]],
        "file-audio": [[6, "M17.5 22h.5c.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4V7.5L14.5 2H6c-.5 0-1 .2-1.4.6C4.2 3 4 3.5 4 4v3"], [2, "14 2 14 8 20 8"], [6, "M10 20v-1a2 2 0 1 1 4 0v1a2 2 0 1 1-4 0Z"], [6, "M6 20v-1a2 2 0 1 0-4 0v1a2 2 0 1 0 4 0Z"], [6, "M2 19v-3a6 6 0 0 1 12 0v3"]],
        "file-audio-2": [[6, "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v2"], [2, "14 2 14 8 20 8"], [6, "M2 17v-3a4 4 0 0 1 8 0v3"], [1, 9, 17, 1], [1, 3, 17, 1]],
        "file-axis-3d": [[6, "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"], [2, "14 2 14 8 20 8"], [6, "M8 10v8h8"], [6, "m8 18 4-4"]],
        "file-badge": [[6, "M4 7V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-6"], [2, "14 2 14 8 20 8"], [6, "M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"], [6, "M7 16.5 8 22l-3-1-3 1 1-5.5"]],
        "file-badge-2": [[6, "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"], [6, "M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"], [6, "m14 12.5 1 5.5-3-1-3 1 1-5.5"]],
        "file-bar-chart": [[6, "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"], [2, "14 2 14 8 20 8"], [6, "M12 18v-4"], [6, "M8 18v-2"], [6, "M16 18v-6"]],
        "file-bar-chart-2": [[6, "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"], [2, "14 2 14 8 20 8"], [6, "M12 18v-6"], [6, "M8 18v-1"], [6, "M16 18v-3"]],
        "file-box": [[6, "M14.5 22H18a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"], [2, "14 2 14 8 20 8"], [6, "M2.97 13.12c-.6.36-.97 1.02-.97 1.74v3.28c0 .72.37 1.38.97 1.74l3 1.83c.63.39 1.43.39 2.06 0l3-1.83c.6-.36.97-1.02.97-1.74v-3.28c0-.72-.37-1.38-.97-1.74l-3-1.83a1.97 1.97 0 0 0-2.06 0l-3 1.83Z"], [6, "m7 17-4.74-2.85"], [6, "m7 17 4.74-2.85"], [6, "M7 17v5"]],
        "file-check": [[6, "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"], [2, "14 2 14 8 20 8"], [6, "m9 15 2 2 4-4"]],
        "file-check-2": [[6, "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"], [2, "14 2 14 8 20 8"], [6, "m3 15 2 2 4-4"]],
        "file-clock": [[6, "M16 22h2c.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4V7.5L14.5 2H6c-.5 0-1 .2-1.4.6C4.2 3 4 3.5 4 4v3"], [2, "14 2 14 8 20 8"], [1, 8, 16, 6], [6, "M9.5 17.5 8 16.25V14"]],
        "file-code": [[6, "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"], [2, "14 2 14 8 20 8"], [6, "m10 13-2 2 2 2"], [6, "m14 17 2-2-2-2"]],
        "file-code-2": [[6, "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"], [2, "14 2 14 8 20 8"], [6, "m9 18 3-3-3-3"], [6, "m5 12-3 3 3 3"]],
        "file-cog": [[1, 6, 13, 3], [6, "m9.7 14.4-.9-.3"], [6, "m3.2 11.9-.9-.3"], [6, "m4.6 16.7.3-.9"], [6, "m7.6 16.7-.4-1"], [6, "m4.8 10.3-.4-1"], [6, "m2.3 14.6 1-.4"], [6, "m8.7 11.8 1-.4"], [6, "m7.4 9.3-.3.9"], [6, "M14 2v6h6"], [6, "M4 5.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-1.5"]],
        "file-cog-2": [[1, 6, 13, 3], [6, "m9.7 14.4-.9-.3"], [6, "m3.2 11.9-.9-.3"], [6, "m4.6 16.7.3-.9"], [6, "m7.6 16.7-.4-1"], [6, "m4.8 10.3-.4-1"], [6, "m2.3 14.6 1-.4"], [6, "m8.7 11.8 1-.4"], [6, "m7.4 9.3-.3.9"], [6, "M14 2v6h6"], [6, "M4 5.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-1.5"]],
        "file-diff": [[6, "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"], [6, "M12 13V7"], [6, "M9 10h6"], [6, "M9 17h6"]],
        "file-digit": [[5, 2, 12, 4, 6, 2], [6, "M14 2v6h6"], [6, "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"], [6, "M10 12h2v6"], [6, "M10 18h4"]],
        "file-down": [[6, "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"], [2, "14 2 14 8 20 8"], [6, "M12 18v-6"], [6, "m9 15 3 3 3-3"]],
        "file-edit": [[6, "M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5"], [2, "14 2 14 8 20 8"], [6, "M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z"]],
        "file-heart": [[6, "M4 6V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H4"], [2, "14 2 14 8 20 8"], [6, "M10.29 10.7a2.43 2.43 0 0 0-2.66-.52c-.29.12-.56.3-.78.53l-.35.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L6.5 18l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z"]],
        "file-image": [[6, "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"], [2, "14 2 14 8 20 8"], [1, 10, 13, 2], [6, "m20 17-1.09-1.09a2 2 0 0 0-2.82 0L10 22"]],
        "file-input": [[6, "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"], [2, "14 2 14 8 20 8"], [6, "M2 15h10"], [6, "m9 18 3-3-3-3"]],
        "file-json": [[6, "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"], [2, "14 2 14 8 20 8"], [6, "M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1"], [6, "M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1"]],
        "file-json-2": [[6, "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"], [2, "14 2 14 8 20 8"], [6, "M4 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1"], [6, "M8 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1"]],
        "file-key": [[6, "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"], [1, 10, 16, 2], [6, "m16 10-4.5 4.5"], [6, "m15 11 1 1"]],
        "file-key-2": [[6, "M4 10V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H4"], [2, "14 2 14 8 20 8"], [1, 4, 16, 2], [6, "m10 10-4.5 4.5"], [6, "m9 11 1 1"]],
        "file-line-chart": [[6, "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"], [2, "14 2 14 8 20 8"], [6, "m16 13-3.5 3.5-2-2L8 17"]],
        "file-lock": [[6, "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"], [5, 8, 12, 8, 6, 1], [6, "M15 12v-2a3 3 0 1 0-6 0v2"]],
        "file-lock-2": [[6, "M4 5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H4"], [2, "14 2 14 8 20 8"], [5, 2, 13, 8, 5, 1], [6, "M8 13v-2a2 2 0 1 0-4 0v2"]],
        "file-minus": [[6, "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"], [2, "14 2 14 8 20 8"], [0, 9, 15, 15, 15]],
        "file-minus-2": [[6, "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"], [2, "14 2 14 8 20 8"], [6, "M3 15h6"]],
        "file-output": [[6, "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"], [2, "14 2 14 8 20 8"], [6, "M2 15h10"], [6, "m5 12-3 3 3 3"]],
        "file-pie-chart": [[6, "M16 22h2a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v3"], [2, "14 2 14 8 20 8"], [6, "M4.04 11.71a5.84 5.84 0 1 0 8.2 8.29"], [6, "M13.83 16A5.83 5.83 0 0 0 8 10.17V16h5.83Z"]],
        "file-plus": [[6, "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"], [2, "14 2 14 8 20 8"], [0, 12, 18, 12, 12], [0, 9, 15, 15, 15]],
        "file-plus-2": [[6, "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"], [2, "14 2 14 8 20 8"], [6, "M3 15h6"], [6, "M6 12v6"]],
        "file-question": [[6, "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"], [6, "M10 10.3c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2"], [6, "M12 17h.01"]],
        "file-scan": [[6, "M20 10V7.5L14.5 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h4.5"], [2, "14 2 14 8 20 8"], [6, "M16 22a2 2 0 0 1-2-2"], [6, "M20 22a2 2 0 0 0 2-2"], [6, "M20 14a2 2 0 0 1 2 2"], [6, "M16 14a2 2 0 0 0-2 2"]],
        "file-search": [[6, "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v3"], [2, "14 2 14 8 20 8"], [6, "M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"], [6, "m9 18-1.5-1.5"]],
        "file-search-2": [[6, "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"], [2, "14 2 14 8 20 8"], [1, 11.5, 14.5, 2.5], [6, "M13.25 16.25 15 18"]],
        "file-signature": [[6, "M20 19.5v.5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8.5L18 5.5"], [6, "M8 18h1"], [6, "M18.42 9.61a2.1 2.1 0 1 1 2.97 2.97L16.95 17 13 18l.99-3.95 4.43-4.44Z"]],
        "file-spreadsheet": [[6, "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"], [2, "14 2 14 8 20 8"], [6, "M8 13h2"], [6, "M8 17h2"], [6, "M14 13h2"], [6, "M14 17h2"]],
        "file-stack": [[6, "M16 2v5h5"], [6, "M21 6v6.5c0 .8-.7 1.5-1.5 1.5h-7c-.8 0-1.5-.7-1.5-1.5v-9c0-.8.7-1.5 1.5-1.5H17l4 4z"], [6, "M7 8v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H15"], [6, "M3 12v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H11"]],
        "file-symlink": [[6, "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v7"], [2, "14 2 14 8 20 8"], [6, "m10 18 3-3-3-3"], [6, "M4 18v-1a2 2 0 0 1 2-2h6"]],
        "file-terminal": [[6, "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"], [2, "14 2 14 8 20 8"], [6, "m8 16 2-2-2-2"], [6, "M12 18h4"]],
        "file-text": [[6, "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"], [2, "14 2 14 8 20 8"], [0, 16, 13, 8, 13], [0, 16, 17, 8, 17], [0, 10, 9, 8, 9]],
        "file-type": [[6, "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"], [2, "14 2 14 8 20 8"], [6, "M9 13v-1h6v1"], [6, "M11 18h2"], [6, "M12 12v6"]],
        "file-type-2": [[6, "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"], [2, "14 2 14 8 20 8"], [6, "M2 13v-1h6v1"], [6, "M4 18h2"], [6, "M5 12v6"]],
        "file-up": [[6, "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"], [2, "14 2 14 8 20 8"], [6, "M12 12v6"], [6, "m15 15-3-3-3 3"]],
        "file-video": [[6, "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"], [2, "14 2 14 8 20 8"], [6, "m10 11 5 3-5 3v-6Z"]],
        "file-video-2": [[6, "M4 8V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H4"], [2, "14 2 14 8 20 8"], [6, "m10 15.5 4 2.5v-6l-4 2.5"], [5, 2, 12, 8, 6, 1]],
        "file-volume": [[6, "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v3"], [2, "14 2 14 8 20 8"], [6, "m7 10-3 2H2v4h2l3 2v-8Z"], [6, "M11 11c.64.8 1 1.87 1 3s-.36 2.2-1 3"]],
        "file-volume-2": [[6, "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"], [2, "14 2 14 8 20 8"], [6, "M11.5 13.5c.32.4.5.94.5 1.5s-.18 1.1-.5 1.5"], [6, "M15 12c.64.8 1 1.87 1 3s-.36 2.2-1 3"], [6, "M8 15h.01"]],
        "file-warning": [[6, "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"], [6, "M12 9v4"], [6, "M12 17h.01"]],
        "file-x": [[6, "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"], [2, "14 2 14 8 20 8"], [0, 9.5, 12.5, 14.5, 17.5], [0, 14.5, 12.5, 9.5, 17.5]],
        "file-x2": [[6, "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"], [6, "M14 2v6h6"], [6, "m3 12.5 5 5"], [6, "m8 12.5-5 5"]],
        files: [[6, "M15.5 2H8.6c-.4 0-.8.2-1.1.5-.3.3-.5.7-.5 1.1v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8c.4 0 .8-.2 1.1-.5.3-.3.5-.7.5-1.1V6.5L15.5 2z"], [6, "M3 7.6v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8"], [6, "M15 2v5h5"]],
        film: [[5, 3, 3, 18, 18, 2], [6, "M7 3v18"], [6, "M3 7.5h4"], [6, "M3 12h18"], [6, "M3 16.5h4"], [6, "M17 3v18"], [6, "M17 7.5h4"], [6, "M17 16.5h4"]],
        filter: [[3, "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"]],
        "filter-x": [[6, "M13.013 3H2l8 9.46V19l4 2v-8.54l.9-1.055"], [6, "m22 3-5 5"], [6, "m17 3 5 5"]],
        fingerprint: [[6, "M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4"], [6, "M5 19.5C5.5 18 6 15 6 12c0-.7.12-1.37.34-2"], [6, "M17.29 21.02c.12-.6.43-2.3.5-3.02"], [6, "M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"], [6, "M8.65 22c.21-.66.45-1.32.57-2"], [6, "M14 13.12c0 2.38 0 6.38-1 8.88"], [6, "M2 16h.01"], [6, "M21.8 16c.2-2 .131-5.354 0-6"], [6, "M9 6.8a6 6 0 0 1 9 5.2c0 .47 0 1.17-.02 2"]],
        fish: [[6, "M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z"], [6, "M18 12v.5"], [6, "M16 17.93a9.77 9.77 0 0 1 0-11.86"], [6, "M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33"], [6, "M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4"], [6, "m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98"]],
        "fish-off": [[6, "M18 12.47v.03m0-.5v.47m-.475 5.056A6.744 6.744 0 0 1 15 18c-3.56 0-7.56-2.53-8.5-6 .348-1.28 1.114-2.433 2.121-3.38m3.444-2.088A8.802 8.802 0 0 1 15 6c3.56 0 6.06 2.54 7 6-.309 1.14-.786 2.177-1.413 3.058"], [6, "M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33m7.48-4.372A9.77 9.77 0 0 1 16 6.07m0 11.86a9.77 9.77 0 0 1-1.728-3.618"], [6, "m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98M8.53 3h5.27a2 2 0 0 1 1.98 1.67l.23 1.4M2 2l20 20"]],
        "fish-symbol": [[6, "M2 16s9-15 20-4C11 23 2 8 2 8"]],
        flag: [[6, "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"], [0, 4, 22, 4, 15]],
        "flag-off": [[6, "M8 2c3 0 5 2 8 2s4-1 4-1v11"], [6, "M4 22V4"], [6, "M4 15s1-1 4-1 5 2 8 2"], [0, 2, 2, 22, 22]],
        "flag-triangle-left": [[6, "M17 22V2L7 7l10 5"]],
        "flag-triangle-right": [[6, "M7 22V2l10 5-10 5"]],
        flame: [[6, "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"]],
        "flame-kindling": [[6, "M12 2c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 17 10a5 5 0 1 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C8 4.5 11 2 12 2Z"], [6, "m5 22 14-4"], [6, "m5 18 14 4"]],
        flashlight: [[6, "M18 6c0 2-2 2-2 4v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4V2h12z"], [0, 6, 6, 18, 6], [0, 12, 12, 12, 12]],
        "flashlight-off": [[6, "M16 16v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4"], [6, "M7 2h11v4c0 2-2 2-2 4v1"], [0, 11, 6, 18, 6], [0, 2, 2, 22, 22]],
        "flask-conical": [[6, "M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"], [6, "M8.5 2h7"], [6, "M7 16h10"]],
        "flask-conical-off": [[6, "M10 10 4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-1.272-2.542"], [6, "M10 2v2.343"], [6, "M14 2v6.343"], [6, "M8.5 2h7"], [6, "M7 16h9"], [0, 2, 2, 22, 22]],
        "flask-round": [[6, "M10 2v7.31"], [6, "M14 9.3V1.99"], [6, "M8.5 2h7"], [6, "M14 9.3a6.5 6.5 0 1 1-4 0"], [6, "M5.52 16h12.96"]],
        "flip-horizontal": [[6, "M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3"], [6, "M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3"], [6, "M12 20v2"], [6, "M12 14v2"], [6, "M12 8v2"], [6, "M12 2v2"]],
        "flip-horizontal-2": [[6, "m3 7 5 5-5 5V7"], [6, "m21 7-5 5 5 5V7"], [6, "M12 20v2"], [6, "M12 14v2"], [6, "M12 8v2"], [6, "M12 2v2"]],
        "flip-vertical": [[6, "M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3"], [6, "M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3"], [6, "M4 12H2"], [6, "M10 12H8"], [6, "M16 12h-2"], [6, "M22 12h-2"]],
        "flip-vertical-2": [[6, "m17 3-5 5-5-5h10"], [6, "m17 21-5-5-5 5h10"], [6, "M4 12H2"], [6, "M10 12H8"], [6, "M16 12h-2"], [6, "M22 12h-2"]],
        flower: [[6, "M12 7.5a4.5 4.5 0 1 1 4.5 4.5M12 7.5A4.5 4.5 0 1 0 7.5 12M12 7.5V9m-4.5 3a4.5 4.5 0 1 0 4.5 4.5M7.5 12H9m7.5 0a4.5 4.5 0 1 1-4.5 4.5m4.5-4.5H15m-3 4.5V15"], [1, 12, 12, 3], [6, "m8 16 1.5-1.5"], [6, "M14.5 9.5 16 8"], [6, "m8 8 1.5 1.5"], [6, "M14.5 14.5 16 16"]],
        "flower-2": [[6, "M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1"], [1, 12, 8, 2], [6, "M12 10v12"], [6, "M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z"], [6, "M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z"]],
        focus: [[1, 12, 12, 3], [6, "M3 7V5a2 2 0 0 1 2-2h2"], [6, "M17 3h2a2 2 0 0 1 2 2v2"], [6, "M21 17v2a2 2 0 0 1-2 2h-2"], [6, "M7 21H5a2 2 0 0 1-2-2v-2"]],
        "fold-horizontal": [[6, "M2 12h6"], [6, "M22 12h-6"], [6, "M12 2v2"], [6, "M12 8v2"], [6, "M12 14v2"], [6, "M12 20v2"], [6, "m19 9-3 3 3 3"], [6, "m5 15 3-3-3-3"]],
        "fold-vertical": [[6, "M12 22v-6"], [6, "M12 8V2"], [6, "M4 12H2"], [6, "M10 12H8"], [6, "M16 12h-2"], [6, "M22 12h-2"], [6, "m15 19-3-3-3 3"], [6, "m15 5-3 3-3-3"]],
        folder: [[6, "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"]],
        "folder-archive": [[1, 15, 19, 2], [6, "M20.9 19.8A2 2 0 0 0 22 18V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h5.1"], [6, "M15 11v-1"], [6, "M15 17v-2"]],
        "folder-check": [[6, "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"], [6, "m9 13 2 2 4-4"]],
        "folder-clock": [[1, 16, 16, 6], [6, "M7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2"], [6, "M16 14v2l1 1"]],
        "folder-closed": [[6, "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"], [6, "M2 10h20"]],
        "folder-cog": [[1, 18, 18, 3], [6, "M10.3 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v3.3"], [6, "m21.7 19.4-.9-.3"], [6, "m15.2 16.9-.9-.3"], [6, "m16.6 21.7.3-.9"], [6, "m19.1 15.2.3-.9"], [6, "m19.6 21.7-.4-1"], [6, "m16.8 15.3-.4-1"], [6, "m14.3 19.6 1-.4"], [6, "m20.7 16.8 1-.4"]],
        "folder-cog-2": [[1, 18, 18, 3], [6, "M10.3 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v3.3"], [6, "m21.7 19.4-.9-.3"], [6, "m15.2 16.9-.9-.3"], [6, "m16.6 21.7.3-.9"], [6, "m19.1 15.2.3-.9"], [6, "m19.6 21.7-.4-1"], [6, "m16.8 15.3-.4-1"], [6, "m14.3 19.6 1-.4"], [6, "m20.7 16.8 1-.4"]],
        "folder-dot": [[6, "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"], [1, 12, 13, 1]],
        "folder-down": [[6, "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"], [6, "M12 10v6"], [6, "m15 13-3 3-3-3"]],
        "folder-edit": [[6, "M8.4 10.6a2.1 2.1 0 1 1 2.99 2.98L6 19l-4 1 1-3.9Z"], [6, "M2 11.5V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-9.5"]],
        "folder-git": [[1, 12, 13, 2], [6, "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"], [6, "M14 13h3"], [6, "M7 13h3"]],
        "folder-git-2": [[6, "M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5"], [1, 13, 12, 2], [6, "M18 19c-2.8 0-5-2.2-5-5v8"], [1, 20, 19, 2]],
        "folder-heart": [[6, "M11 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v1.5"], [6, "M13.9 17.45c-1.2-1.2-1.14-2.8-.2-3.73a2.43 2.43 0 0 1 3.44 0l.36.34.34-.34a2.43 2.43 0 0 1 3.45-.01v0c.95.95 1 2.53-.2 3.74L17.5 21Z"]],
        "folder-input": [[6, "M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1"], [6, "M2 13h10"], [6, "m9 16 3-3-3-3"]],
        "folder-kanban": [[6, "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"], [6, "M8 10v4"], [6, "M12 10v2"], [6, "M16 10v6"]],
        "folder-key": [[1, 16, 20, 2], [6, "M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2"], [6, "m22 14-4.5 4.5"], [6, "m21 15 1 1"]],
        "folder-lock": [[5, 14, 17, 8, 5, 1], [6, "M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2.5"], [6, "M20 17v-2a2 2 0 1 0-4 0v2"]],
        "folder-minus": [[6, "M9 13h6"], [6, "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"]],
        "folder-open": [[6, "m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"]],
        "folder-open-dot": [[6, "m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2"], [1, 14, 15, 1]],
        "folder-output": [[6, "M2 7.5V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2"], [6, "M2 13h10"], [6, "m5 10-3 3 3 3"]],
        "folder-plus": [[6, "M12 10v6"], [6, "M9 13h6"], [6, "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"]],
        "folder-root": [[6, "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"], [1, 12, 13, 2], [6, "M12 15v5"]],
        "folder-search": [[1, 17, 17, 3], [6, "M10.7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v4.1"], [6, "m21 21-1.5-1.5"]],
        "folder-search-2": [[1, 11.5, 12.5, 2.5], [6, "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"], [6, "M13.3 14.3 15 16"]],
        "folder-symlink": [[6, "M2 9V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2"], [6, "m8 16 3-3-3-3"], [6, "M2 16v-1a2 2 0 0 1 2-2h6"]],
        "folder-sync": [[6, "M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v1"], [6, "M12 10v4h4"], [6, "m12 14 1.5-1.5c.9-.9 2.2-1.5 3.5-1.5s2.6.6 3.5 1.5c.4.4.8 1 1 1.5"], [6, "M22 22v-4h-4"], [6, "m22 18-1.5 1.5c-.9.9-2.1 1.5-3.5 1.5s-2.6-.6-3.5-1.5c-.4-.4-.8-1-1-1.5"]],
        "folder-tree": [[6, "M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"], [6, "M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"], [6, "M3 5a2 2 0 0 0 2 2h3"], [6, "M3 3v13a2 2 0 0 0 2 2h3"]],
        "folder-up": [[6, "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"], [6, "M12 10v6"], [6, "m9 13 3-3 3 3"]],
        "folder-x": [[6, "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"], [6, "m9.5 10.5 5 5"], [6, "m14.5 10.5-5 5"]],
        folders: [[6, "M20 17a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3.9a2 2 0 0 1-1.69-.9l-.81-1.2a2 2 0 0 0-1.67-.9H8a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2Z"], [6, "M2 8v11a2 2 0 0 0 2 2h14"]],
        footprints: [[6, "M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z"], [6, "M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z"], [6, "M16 17h4"], [6, "M4 13h4"]],
        forklift: [[6, "M12 12H5a2 2 0 0 0-2 2v5"], [1, 13, 19, 2], [1, 5, 19, 2], [6, "M8 19h3m5-17v17h6M6 12V7c0-1.1.9-2 2-2h3l5 5"]],
        "form-input": [[5, 2, 6, 20, 12, 2], [6, "M12 12h.01"], [6, "M17 12h.01"], [6, "M7 12h.01"]],
        forward: [[2, "15 17 20 12 15 7"], [6, "M4 18v-2a4 4 0 0 1 4-4h12"]],
        frame: [[0, 22, 6, 2, 6], [0, 22, 18, 2, 18], [0, 6, 2, 6, 22], [0, 18, 2, 18, 22]],
        framer: [[6, "M5 16V9h14V2H5l14 14h-7m-7 0 7 7v-7m-7 0h7"]],
        frown: [[1, 12, 12, 10], [6, "M16 16s-1.5-2-4-2-4 2-4 2"], [0, 9, 9, 9.01, 9], [0, 15, 9, 15.01, 9]],
        fuel: [[0, 3, 22, 15, 22], [0, 4, 9, 14, 9], [6, "M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18"], [6, "M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5"]],
        fullscreen: [[6, "M3 7V5a2 2 0 0 1 2-2h2"], [6, "M17 3h2a2 2 0 0 1 2 2v2"], [6, "M21 17v2a2 2 0 0 1-2 2h-2"], [6, "M7 21H5a2 2 0 0 1-2-2v-2"], [5, 7, 8, 10, 8, 1]],
        "function-square": [[5, 3, 3, 18, 18, 2, 2], [6, "M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3"], [6, "M9 11.2h5.7"]],
        "gallery-horizontal": [[6, "M2 3v18"], [5, 6, 3, 12, 18, 2], [6, "M22 3v18"]],
        "gallery-horizontal-end": [[6, "M2 7v10"], [6, "M6 5v14"], [5, 10, 3, 12, 18, 2]],
        "gallery-thumbnails": [[5, 3, 3, 18, 14, 2], [6, "M4 21h1"], [6, "M9 21h1"], [6, "M14 21h1"], [6, "M19 21h1"]],
        "gallery-vertical": [[6, "M3 2h18"], [5, 3, 6, 18, 12, 2], [6, "M3 22h18"]],
        "gallery-vertical-end": [[6, "M7 2h10"], [6, "M5 6h14"], [5, 3, 10, 18, 12, 2]],
        gamepad: [[0, 6, 12, 10, 12], [0, 8, 10, 8, 14], [0, 15, 13, 15.01, 13], [0, 18, 11, 18.01, 11], [5, 2, 6, 20, 12, 2]],
        "gamepad-2": [[0, 6, 11, 10, 11], [0, 8, 9, 8, 13], [0, 15, 12, 15.01, 12], [0, 18, 10, 18.01, 10], [6, "M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"]],
        "gantt-chart": [[6, "M8 6h10"], [6, "M6 12h9"], [6, "M11 18h7"]],
        "gantt-chart-square": [[5, 3, 3, 18, 18, 2], [6, "M9 8h7"], [6, "M8 12h6"], [6, "M11 16h5"]],
        gauge: [[6, "m12 14 4-4"], [6, "M3.34 19a10 10 0 1 1 17.32 0"]],
        "gauge-circle": [[6, "M15.6 2.7a10 10 0 1 0 5.7 5.7"], [1, 12, 12, 2], [6, "M13.4 10.6 19 5"]],
        gavel: [[6, "m14 13-7.5 7.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L11 10"], [6, "m16 16 6-6"], [6, "m8 8 6-6"], [6, "m9 7 8 8"], [6, "m21 11-8-8"]],
        gem: [[6, "M6 3h12l4 6-10 13L2 9Z"], [6, "M11 3 8 9l4 13 4-13-3-6"], [6, "M2 9h20"]],
        ghost: [[6, "M9 10h.01"], [6, "M15 10h.01"], [6, "M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z"]],
        gift: [[5, 3, 8, 18, 4, 1], [6, "M12 8v13"], [6, "M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"], [6, "M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"]],
        "git-branch": [[0, 6, 3, 6, 15], [1, 18, 6, 3], [1, 6, 18, 3], [6, "M18 9a9 9 0 0 1-9 9"]],
        "git-branch-plus": [[6, "M6 3v12"], [6, "M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"], [6, "M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"], [6, "M15 6a9 9 0 0 0-9 9"], [6, "M18 15v6"], [6, "M21 18h-6"]],
        "git-commit": [[1, 12, 12, 3], [0, 3, 12, 9, 12], [0, 15, 12, 21, 12]],
        "git-commit-horizontal": [[1, 12, 12, 3], [0, 3, 12, 9, 12], [0, 15, 12, 21, 12]],
        "git-commit-vertical": [[6, "M12 3v6"], [1, 12, 12, 3], [6, "M12 15v6"]],
        "git-compare": [[1, 18, 18, 3], [1, 6, 6, 3], [6, "M13 6h3a2 2 0 0 1 2 2v7"], [6, "M11 18H8a2 2 0 0 1-2-2V9"]],
        "git-compare-arrows": [[1, 5, 6, 3], [6, "M12 6h5a2 2 0 0 1 2 2v7"], [6, "m15 9-3-3 3-3"], [1, 19, 18, 3], [6, "M12 18H7a2 2 0 0 1-2-2V9"], [6, "m9 15 3 3-3 3"]],
        "git-fork": [[1, 12, 18, 3], [1, 6, 6, 3], [1, 18, 6, 3], [6, "M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9"], [6, "M12 12v3"]],
        "git-graph": [[1, 5, 6, 3], [6, "M5 9v6"], [1, 5, 18, 3], [6, "M12 3v18"], [1, 19, 6, 3], [6, "M16 15.7A9 9 0 0 0 19 9"]],
        "git-merge": [[1, 18, 18, 3], [1, 6, 6, 3], [6, "M6 21V9a9 9 0 0 0 9 9"]],
        "git-pull-request": [[1, 18, 18, 3], [1, 6, 6, 3], [6, "M13 6h3a2 2 0 0 1 2 2v7"], [0, 6, 9, 6, 21]],
        "git-pull-request-arrow": [[1, 5, 6, 3], [6, "M5 9v12"], [1, 19, 18, 3], [6, "m15 9-3-3 3-3"], [6, "M12 6h5a2 2 0 0 1 2 2v7"]],
        "git-pull-request-closed": [[1, 6, 6, 3], [6, "M6 9v12"], [6, "m21 3-6 6"], [6, "m21 9-6-6"], [6, "M18 11.5V15"], [1, 18, 18, 3]],
        "git-pull-request-create": [[1, 6, 6, 3], [6, "M6 9v12"], [6, "M13 6h3a2 2 0 0 1 2 2v3"], [6, "M18 15v6"], [6, "M21 18h-6"]],
        "git-pull-request-create-arrow": [[1, 5, 6, 3], [6, "M5 9v12"], [6, "m15 9-3-3 3-3"], [6, "M12 6h5a2 2 0 0 1 2 2v3"], [6, "M19 15v6"], [6, "M22 18h-6"]],
        "git-pull-request-draft": [[1, 18, 18, 3], [1, 6, 6, 3], [6, "M18 6V5"], [6, "M18 11v-1"], [0, 6, 9, 6, 21]],
        github: [[6, "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"], [6, "M9 18c-4.51 2-5-2-7-2"]],
        gitlab: [[6, "m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z"]],
        "glass-water": [[6, "M15.2 22H8.8a2 2 0 0 1-2-1.79L5 3h14l-1.81 17.21A2 2 0 0 1 15.2 22Z"], [6, "M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0"]],
        glasses: [[1, 6, 15, 4], [1, 18, 15, 4], [6, "M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2"], [6, "M2.5 13 5 7c.7-1.3 1.4-2 3-2"], [6, "M21.5 13 19 7c-.7-1.3-1.5-2-3-2"]],
        globe: [[1, 12, 12, 10], [6, "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"], [6, "M2 12h20"]],
        "globe-2": [[6, "M21.54 15H17a2 2 0 0 0-2 2v4.54"], [6, "M7 3.34V5a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2v0c0 1.1.9 2 2 2v0a2 2 0 0 0 2-2v0c0-1.1.9-2 2-2h3.17"], [6, "M11 21.95V18a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"], [1, 12, 12, 10]],
        goal: [[6, "M12 13V2l8 4-8 4"], [6, "M20.55 10.23A9 9 0 1 1 8 4.94"], [6, "M8 10a5 5 0 1 0 8.9 2.02"]],
        grab: [[6, "M18 11.5V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1.4"], [6, "M14 10V8a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2"], [6, "M10 9.9V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5"], [6, "M6 14v0a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"], [6, "M18 11v0a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0"]],
        "graduation-cap": [[6, "M22 10v6M2 10l10-5 10 5-10 5z"], [6, "M6 12v5c3 3 9 3 12 0v-5"]],
        grape: [[6, "M22 5V2l-5.89 5.89"], [1, 16.6, 15.89, 3], [1, 8.11, 7.4, 3], [1, 12.35, 11.65, 3], [1, 13.91, 5.85, 3], [1, 18.15, 10.09, 3], [1, 6.56, 13.2, 3], [1, 10.8, 17.44, 3], [1, 5, 19, 3]],
        grid: [[5, 3, 3, 18, 18, 2], [6, "M3 9h18"], [6, "M3 15h18"], [6, "M9 3v18"], [6, "M15 3v18"]],
        "grid-2x-2": [[5, 3, 3, 18, 18, 2], [6, "M3 12h18"], [6, "M12 3v18"]],
        "grid-3x-3": [[5, 3, 3, 18, 18, 2], [6, "M3 9h18"], [6, "M3 15h18"], [6, "M9 3v18"], [6, "M15 3v18"]],
        grip: [[1, 12, 5, 1], [1, 19, 5, 1], [1, 5, 5, 1], [1, 12, 12, 1], [1, 19, 12, 1], [1, 5, 12, 1], [1, 12, 19, 1], [1, 19, 19, 1], [1, 5, 19, 1]],
        "grip-horizontal": [[1, 12, 9, 1], [1, 19, 9, 1], [1, 5, 9, 1], [1, 12, 15, 1], [1, 19, 15, 1], [1, 5, 15, 1]],
        "grip-vertical": [[1, 9, 12, 1], [1, 9, 5, 1], [1, 9, 19, 1], [1, 15, 12, 1], [1, 15, 5, 1], [1, 15, 19, 1]],
        group: [[6, "M3 7V5c0-1.1.9-2 2-2h2"], [6, "M17 3h2c1.1 0 2 .9 2 2v2"], [6, "M21 17v2c0 1.1-.9 2-2 2h-2"], [6, "M7 21H5c-1.1 0-2-.9-2-2v-2"], [5, 7, 7, 7, 5, 1], [5, 10, 12, 7, 5, 1]],
        hammer: [[6, "m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9"], [6, "M17.64 15 22 10.64"], [6, "m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91"]],
        hand: [[6, "M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"], [6, "M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2"], [6, "M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8"], [6, "M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"]],
        "hand-metal": [[6, "M18 12.5V10a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1.4"], [6, "M14 11V9a2 2 0 1 0-4 0v2"], [6, "M10 10.5V5a2 2 0 1 0-4 0v9"], [6, "m7 15-1.76-1.76a2 2 0 0 0-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v5"]],
        "hard-drive": [[0, 22, 12, 2, 12], [6, "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"], [0, 6, 16, 6.01, 16], [0, 10, 16, 10.01, 16]],
        "hard-drive-download": [[6, "M12 2v8"], [6, "m16 6-4 4-4-4"], [5, 2, 14, 20, 8, 2], [6, "M6 18h.01"], [6, "M10 18h.01"]],
        "hard-drive-upload": [[6, "m16 6-4-4-4 4"], [6, "M12 2v8"], [5, 2, 14, 20, 8, 2], [6, "M6 18h.01"], [6, "M10 18h.01"]],
        "hard-hat": [[6, "M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z"], [6, "M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"], [6, "M4 15v-3a6 6 0 0 1 6-6h0"], [6, "M14 6h0a6 6 0 0 1 6 6v3"]],
        hash: [[0, 4, 9, 20, 9], [0, 4, 15, 20, 15], [0, 10, 3, 8, 21], [0, 16, 3, 14, 21]],
        haze: [[6, "m5.2 6.2 1.4 1.4"], [6, "M2 13h2"], [6, "M20 13h2"], [6, "m17.4 7.6 1.4-1.4"], [6, "M22 17H2"], [6, "M22 21H2"], [6, "M16 13a4 4 0 0 0-8 0"], [6, "M12 5V2.5"]],
        "hdmi-port": [[6, "M22 9a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1l2 2h12l2-2h1a1 1 0 0 0 1-1Z"], [6, "M7.5 12h9"]],
        heading: [[6, "M6 12h12"], [6, "M6 20V4"], [6, "M18 20V4"]],
        "heading-1": [[6, "M4 12h8"], [6, "M4 18V6"], [6, "M12 18V6"], [6, "m17 12 3-2v8"]],
        "heading-2": [[6, "M4 12h8"], [6, "M4 18V6"], [6, "M12 18V6"], [6, "M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1"]],
        "heading-3": [[6, "M4 12h8"], [6, "M4 18V6"], [6, "M12 18V6"], [6, "M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2"], [6, "M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2"]],
        "heading-4": [[6, "M4 12h8"], [6, "M4 18V6"], [6, "M12 18V6"], [6, "M17 10v4h4"], [6, "M21 10v8"]],
        "heading-5": [[6, "M4 12h8"], [6, "M4 18V6"], [6, "M12 18V6"], [6, "M17 13v-3h4"], [6, "M17 17.7c.4.2.8.3 1.3.3 1.5 0 2.7-1.1 2.7-2.5S19.8 13 18.3 13H17"]],
        "heading-6": [[6, "M4 12h8"], [6, "M4 18V6"], [6, "M12 18V6"], [1, 19, 16, 2], [6, "M20 10c-2 2-3 3.5-3 6"]],
        headphones: [[6, "M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"]],
        heart: [[6, "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"]],
        "heart-crack": [[6, "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"], [6, "m12 13-1-1 2-2-3-3 2-2"]],
        "heart-handshake": [[6, "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"], [6, "M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"], [6, "m18 15-2-2"], [6, "m15 18-2-2"]],
        "heart-off": [[0, 2, 2, 22, 22], [6, "M16.5 16.5 12 21l-7-7c-1.5-1.45-3-3.2-3-5.5a5.5 5.5 0 0 1 2.14-4.35"], [6, "M8.76 3.1c1.15.22 2.13.78 3.24 1.9 1.5-1.5 2.74-2 4.5-2A5.5 5.5 0 0 1 22 8.5c0 2.12-1.3 3.78-2.67 5.17"]],
        "heart-pulse": [[6, "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"], [6, "M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"]],
        "help-circle": [[1, 12, 12, 10], [6, "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"], [6, "M12 17h.01"]],
        "helping-hand": [[6, "m3 15 5.12-5.12A3 3 0 0 1 10.24 9H13a2 2 0 1 1 0 4h-2.5m4-.68 4.17-4.89a1.88 1.88 0 0 1 2.92 2.36l-4.2 5.94A3 3 0 0 1 14.96 17H9.83a2 2 0 0 0-1.42.59L7 19"], [6, "m2 14 6 6"]],
        hexagon: [[6, "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"]],
        highlighter: [[6, "m9 11-6 6v3h9l3-3"], [6, "m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4"]],
        history: [[6, "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"], [6, "M3 3v5h5"], [6, "M12 7v5l4 2"]],
        home: [[6, "m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"], [2, "9 22 9 12 15 12 15 22"]],
        hop: [[6, "M17.5 5.5C19 7 20.5 9 21 11c-2.5.5-5 .5-8.5-1"], [6, "M5.5 17.5C7 19 9 20.5 11 21c.5-2.5.5-5-1-8.5"], [6, "M16.5 11.5c1 2 1 3.5 1 6-2.5 0-4 0-6-1"], [6, "M20 11.5c1 1.5 2 3.5 2 4.5-1.5.5-3 0-4.5-.5"], [6, "M11.5 20c1.5 1 3.5 2 4.5 2 .5-1.5 0-3-.5-4.5"], [6, "M20.5 16.5c1 2 1.5 3.5 1.5 5.5-2 0-3.5-.5-5.5-1.5"], [6, "M4.783 4.782C8.493 1.072 14.5 1 18 5c-1 1-4.5 2-6.5 1.5 1 1.5 1 4 .5 5.5-1.5.5-4 .5-5.5-.5C7 13.5 6 17 5 18c-4-3.5-3.927-9.508-.217-13.218Z"], [6, "M4.5 4.5 3 3c-.184-.185-.184-.816 0-1"]],
        "hop-off": [[6, "M17.5 5.5C19 7 20.5 9 21 11c-1.323.265-2.646.39-4.118.226"], [6, "M5.5 17.5C7 19 9 20.5 11 21c.5-2.5.5-5-1-8.5"], [6, "M17.5 17.5c-2.5 0-4 0-6-1"], [6, "M20 11.5c1 1.5 2 3.5 2 4.5"], [6, "M11.5 20c1.5 1 3.5 2 4.5 2 .5-1.5 0-3-.5-4.5"], [6, "M22 22c-2 0-3.5-.5-5.5-1.5"], [6, "M4.783 4.782C1.073 8.492 1 14.5 5 18c1-1 2-4.5 1.5-6.5 1.5 1 4 1 5.5.5M8.227 2.57C11.578 1.335 15.453 2.089 18 5c-.88.88-3.7 1.761-5.726 1.618"], [0, 2, 2, 22, 22]],
        hotel: [[6, "M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z"], [6, "m9 16 .348-.24c1.465-1.013 3.84-1.013 5.304 0L15 16"], [6, "M8 7h.01"], [6, "M16 7h.01"], [6, "M12 7h.01"], [6, "M12 11h.01"], [6, "M16 11h.01"], [6, "M8 11h.01"], [6, "M10 22v-6.5m4 0V22"]],
        hourglass: [[6, "M5 22h14"], [6, "M5 2h14"], [6, "M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"], [6, "M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"]],
        "ice-cream": [[6, "m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11"], [6, "M17 7A5 5 0 0 0 7 7"], [6, "M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4"]],
        "ice-cream-2": [[6, "M12 17c5 0 8-2.69 8-6H4c0 3.31 3 6 8 6Zm-4 4h8m-4-3v3M5.14 11a3.5 3.5 0 1 1 6.71 0"], [6, "M12.14 11a3.5 3.5 0 1 1 6.71 0"], [6, "M15.5 6.5a3.5 3.5 0 1 0-7 0"]],
        image: [[5, 3, 3, 18, 18, 2, 2], [1, 9, 9, 2], [6, "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"]],
        "image-down": [[1, 9, 9, 2], [6, "M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10.8"], [6, "m21 15-3.1-3.1a2 2 0 0 0-2.814.014L6 21"], [6, "m14 19.5 3 3v-6"], [6, "m17 22.5 3-3"]],
        "image-minus": [[6, "M21 9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"], [0, 16, 5, 22, 5], [1, 9, 9, 2], [6, "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"]],
        "image-off": [[0, 2, 2, 22, 22], [6, "M10.41 10.41a2 2 0 1 1-2.83-2.83"], [0, 13.5, 13.5, 6, 21], [0, 18, 12, 21, 15], [6, "M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59"], [6, "M21 15V5a2 2 0 0 0-2-2H9"]],
        "image-plus": [[6, "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"], [0, 16, 5, 22, 5], [0, 19, 2, 19, 8], [1, 9, 9, 2], [6, "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"]],
        import: [[6, "M12 3v12"], [6, "m8 11 4 4 4-4"], [6, "M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4"]],
        inbox: [[2, "22 12 16 12 14 15 10 15 8 12 2 12"], [6, "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"]],
        indent: [[2, "3 8 7 12 3 16"], [0, 21, 12, 11, 12], [0, 21, 6, 11, 6], [0, 21, 18, 11, 18]],
        "indian-rupee": [[6, "M6 3h12"], [6, "M6 8h12"], [6, "m6 13 8.5 8"], [6, "M6 13h3"], [6, "M9 13c6.667 0 6.667-10 0-10"]],
        infinity: [[6, "M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z"]],
        info: [[1, 12, 12, 10], [6, "M12 16v-4"], [6, "M12 8h.01"]],
        inspect: [[6, "M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"], [6, "m12 12 4 10 1.7-4.3L22 16Z"]],
        instagram: [[5, 2, 2, 20, 20, 5, 5], [6, "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"], [0, 17.5, 6.5, 17.51, 6.5]],
        italic: [[0, 19, 4, 10, 4], [0, 14, 20, 5, 20], [0, 15, 4, 9, 20]],
        "iteration-ccw": [[6, "M20 10c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8h8"], [2, "16 14 20 18 16 22"]],
        "iteration-cw": [[6, "M4 10c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8H4"], [2, "8 22 4 18 8 14"]],
        "japanese-yen": [[6, "M12 9.5V21m0-11.5L6 3m6 6.5L18 3"], [6, "M6 15h12"], [6, "M6 11h12"]],
        joystick: [[6, "M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z"], [6, "M6 15v-2"], [6, "M12 15V9"], [1, 12, 6, 3]],
        kanban: [[6, "M6 5v11"], [6, "M12 5v6"], [6, "M18 5v14"]],
        "kanban-square": [[5, 3, 3, 18, 18, 2], [6, "M8 7v7"], [6, "M12 7v4"], [6, "M16 7v9"]],
        "kanban-square-dashed": [[6, "M8 7v7"], [6, "M12 7v4"], [6, "M16 7v9"], [6, "M5 3a2 2 0 0 0-2 2"], [6, "M9 3h1"], [6, "M14 3h1"], [6, "M19 3a2 2 0 0 1 2 2"], [6, "M21 9v1"], [6, "M21 14v1"], [6, "M21 19a2 2 0 0 1-2 2"], [6, "M14 21h1"], [6, "M9 21h1"], [6, "M5 21a2 2 0 0 1-2-2"], [6, "M3 14v1"], [6, "M3 9v1"]],
        key: [[1, 7.5, 15.5, 5.5], [6, "m21 2-9.6 9.6"], [6, "m15.5 7.5 3 3L22 7l-3-3"]],
        "key-round": [[6, "M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z"], [1, 16.5, 7.5, .5]],
        "key-square": [[6, "M12.4 2.7c.9-.9 2.5-.9 3.4 0l5.5 5.5c.9.9.9 2.5 0 3.4l-3.7 3.7c-.9.9-2.5.9-3.4 0L8.7 9.8c-.9-.9-.9-2.5 0-3.4Z"], [6, "m14 7 3 3"], [6, "M9.4 10.6 2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4"]],
        keyboard: [[5, 2, 4, 20, 16, 2, 2], [6, "M6 8h.001"], [6, "M10 8h.001"], [6, "M14 8h.001"], [6, "M18 8h.001"], [6, "M8 12h.001"], [6, "M12 12h.001"], [6, "M16 12h.001"], [6, "M7 16h10"]],
        lamp: [[6, "M8 2h8l4 10H4L8 2Z"], [6, "M12 12v6"], [6, "M8 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H8Z"]],
        "lamp-ceiling": [[6, "M12 2v5"], [6, "M6 7h12l4 9H2l4-9Z"], [6, "M9.17 16a3 3 0 1 0 5.66 0"]],
        "lamp-desk": [[6, "m14 5-3 3 2 7 8-8-7-2Z"], [6, "m14 5-3 3-3-3 3-3 3 3Z"], [6, "M9.5 6.5 4 12l3 6"], [6, "M3 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H3Z"]],
        "lamp-floor": [[6, "M9 2h6l3 7H6l3-7Z"], [6, "M12 9v13"], [6, "M9 22h6"]],
        "lamp-wall-down": [[6, "M11 13h6l3 7H8l3-7Z"], [6, "M14 13V8a2 2 0 0 0-2-2H8"], [6, "M4 9h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4v6Z"]],
        "lamp-wall-up": [[6, "M11 4h6l3 7H8l3-7Z"], [6, "M14 11v5a2 2 0 0 1-2 2H8"], [6, "M4 15h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H4v-6Z"]],
        "land-plot": [[6, "m12 8 6-3-6-3v10"], [6, "m8 11.99-5.5 3.14a1 1 0 0 0 0 1.74l8.5 4.86a2 2 0 0 0 2 0l8.5-4.86a1 1 0 0 0 0-1.74L16 12"], [6, "m6.49 12.85 11.02 6.3"], [6, "M17.51 12.85 6.5 19.15"]],
        landmark: [[0, 3, 22, 21, 22], [0, 6, 18, 6, 11], [0, 10, 18, 10, 11], [0, 14, 18, 14, 11], [0, 18, 18, 18, 11], [3, "12 2 20 7 4 7"]],
        languages: [[6, "m5 8 6 6"], [6, "m4 14 6-6 2-3"], [6, "M2 5h12"], [6, "M7 2h1"], [6, "m22 22-5-10-5 10"], [6, "M14 18h6"]],
        laptop: [[6, "M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"]],
        "laptop-2": [[5, 3, 4, 18, 12, 2, 2], [0, 2, 20, 22, 20]],
        lasso: [[6, "M7 22a5 5 0 0 1-2-4"], [6, "M3.3 14A6.8 6.8 0 0 1 2 10c0-4.4 4.5-8 10-8s10 3.6 10 8-4.5 8-10 8a12 12 0 0 1-5-1"], [6, "M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"]],
        "lasso-select": [[6, "M7 22a5 5 0 0 1-2-4"], [6, "M7 16.93c.96.43 1.96.74 2.99.91"], [6, "M3.34 14A6.8 6.8 0 0 1 2 10c0-4.42 4.48-8 10-8s10 3.58 10 8a7.19 7.19 0 0 1-.33 2"], [6, "M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"], [6, "M14.33 22h-.09a.35.35 0 0 1-.24-.32v-10a.34.34 0 0 1 .33-.34c.08 0 .15.03.21.08l7.34 6a.33.33 0 0 1-.21.59h-4.49l-2.57 3.85a.35.35 0 0 1-.28.14v0z"]],
        laugh: [[1, 12, 12, 10], [6, "M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z"], [0, 9, 9, 9.01, 9], [0, 15, 9, 15.01, 9]],
        layers: [[6, "m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"], [6, "m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"], [6, "m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"]],
        "layers-2": [[6, "m16.02 12 5.48 3.13a1 1 0 0 1 0 1.74L13 21.74a2 2 0 0 1-2 0l-8.5-4.87a1 1 0 0 1 0-1.74L7.98 12"], [6, "M13 13.74a2 2 0 0 1-2 0L2.5 8.87a1 1 0 0 1 0-1.74L11 2.26a2 2 0 0 1 2 0l8.5 4.87a1 1 0 0 1 0 1.74Z"]],
        "layers-3": [[6, "m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"], [6, "m6.08 9.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59"], [6, "m6.08 14.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59"]],
        layout: [[5, 3, 3, 18, 18, 2, 2], [0, 3, 9, 21, 9], [0, 9, 21, 9, 9]],
        "layout-dashboard": [[5, 3, 3, 7, 9, 1], [5, 14, 3, 7, 5, 1], [5, 14, 12, 7, 9, 1], [5, 3, 16, 7, 5, 1]],
        "layout-grid": [[5, 3, 3, 7, 7, 1], [5, 14, 3, 7, 7, 1], [5, 14, 14, 7, 7, 1], [5, 3, 14, 7, 7, 1]],
        "layout-list": [[5, 3, 3, 7, 7, 1], [5, 3, 14, 7, 7, 1], [6, "M14 4h7"], [6, "M14 9h7"], [6, "M14 15h7"], [6, "M14 20h7"]],
        "layout-panel-left": [[5, 3, 3, 7, 18, 1], [5, 14, 3, 7, 7, 1], [5, 14, 14, 7, 7, 1]],
        "layout-panel-top": [[5, 3, 3, 18, 7, 1], [5, 3, 14, 7, 7, 1], [5, 14, 14, 7, 7, 1]],
        "layout-template": [[5, 3, 3, 18, 7, 1], [5, 3, 14, 9, 7, 1], [5, 16, 14, 5, 7, 1]],
        leaf: [[6, "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"], [6, "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"]],
        "leafy-green": [[6, "M2 22c1.25-.987 2.27-1.975 3.9-2.2a5.56 5.56 0 0 1 3.8 1.5 4 4 0 0 0 6.187-2.353 3.5 3.5 0 0 0 3.69-5.116A3.5 3.5 0 0 0 20.95 8 3.5 3.5 0 1 0 16 3.05a3.5 3.5 0 0 0-5.831 1.373 3.5 3.5 0 0 0-5.116 3.69 4 4 0 0 0-2.348 6.155C3.499 15.42 4.409 16.712 4.2 18.1 3.926 19.743 3.014 20.732 2 22"], [6, "M2 22 17 7"]],
        library: [[6, "m16 6 4 14"], [6, "M12 6v14"], [6, "M8 8v12"], [6, "M4 4v16"]],
        "library-big": [[5, 3, 3, 8, 18, 1], [6, "M7 3v18"], [6, "M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z"]],
        "library-square": [[5, 3, 3, 18, 18, 2], [6, "M7 7v10"], [6, "M11 7v10"], [6, "m15 7 2 10"]],
        "life-buoy": [[1, 12, 12, 10], [6, "m4.93 4.93 4.24 4.24"], [6, "m14.83 9.17 4.24-4.24"], [6, "m14.83 14.83 4.24 4.24"], [6, "m9.17 14.83-4.24 4.24"], [1, 12, 12, 4]],
        ligature: [[6, "M8 20V8c0-2.2 1.8-4 4-4 1.5 0 2.8.8 3.5 2"], [6, "M6 12h4"], [6, "M14 12h2v8"], [6, "M6 20h4"], [6, "M14 20h4"]],
        lightbulb: [[6, "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"], [6, "M9 18h6"], [6, "M10 22h4"]],
        "lightbulb-off": [[6, "M16.8 11.2c.8-.9 1.2-2 1.2-3.2a6 6 0 0 0-9.3-5"], [6, "m2 2 20 20"], [6, "M6.3 6.3a4.67 4.67 0 0 0 1.2 5.2c.7.7 1.3 1.5 1.5 2.5"], [6, "M9 18h6"], [6, "M10 22h4"]],
        "line-chart": [[6, "M3 3v18h18"], [6, "m19 9-5 5-4-4-3 3"]],
        link: [[6, "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"], [6, "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"]],
        "link-2": [[6, "M9 17H7A5 5 0 0 1 7 7h2"], [6, "M15 7h2a5 5 0 1 1 0 10h-2"], [0, 8, 12, 16, 12]],
        "link-2off": [[6, "M9 17H7A5 5 0 0 1 7 7"], [6, "M15 7h2a5 5 0 0 1 4 8"], [0, 8, 12, 12, 12], [0, 2, 2, 22, 22]],
        linkedin: [[6, "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"], [5, 2, 9, 4, 12], [1, 4, 4, 2]],
        list: [[0, 8, 6, 21, 6], [0, 8, 12, 21, 12], [0, 8, 18, 21, 18], [0, 3, 6, 3.01, 6], [0, 3, 12, 3.01, 12], [0, 3, 18, 3.01, 18]],
        "list-checks": [[6, "m3 17 2 2 4-4"], [6, "m3 7 2 2 4-4"], [6, "M13 6h8"], [6, "M13 12h8"], [6, "M13 18h8"]],
        "list-end": [[6, "M16 12H3"], [6, "M16 6H3"], [6, "M10 18H3"], [6, "M21 6v10a2 2 0 0 1-2 2h-5"], [6, "m16 16-2 2 2 2"]],
        "list-filter": [[6, "M3 6h18"], [6, "M7 12h10"], [6, "M10 18h4"]],
        "list-minus": [[6, "M11 12H3"], [6, "M16 6H3"], [6, "M16 18H3"], [6, "M21 12h-6"]],
        "list-music": [[6, "M21 15V6"], [6, "M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"], [6, "M12 12H3"], [6, "M16 6H3"], [6, "M12 18H3"]],
        "list-ordered": [[0, 10, 6, 21, 6], [0, 10, 12, 21, 12], [0, 10, 18, 21, 18], [6, "M4 6h1v4"], [6, "M4 10h2"], [6, "M6 18H4c0-1 2-2 2-3s-1-1.5-2-1"]],
        "list-plus": [[6, "M11 12H3"], [6, "M16 6H3"], [6, "M16 18H3"], [6, "M18 9v6"], [6, "M21 12h-6"]],
        "list-restart": [[6, "M21 6H3"], [6, "M7 12H3"], [6, "M7 18H3"], [6, "M12 18a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L11 14"], [6, "M11 10v4h4"]],
        "list-start": [[6, "M16 12H3"], [6, "M16 18H3"], [6, "M10 6H3"], [6, "M21 18V8a2 2 0 0 0-2-2h-5"], [6, "m16 8-2-2 2-2"]],
        "list-todo": [[5, 3, 5, 6, 6, 1], [6, "m3 17 2 2 4-4"], [6, "M13 6h8"], [6, "M13 12h8"], [6, "M13 18h8"]],
        "list-tree": [[6, "M21 12h-8"], [6, "M21 6H8"], [6, "M21 18h-8"], [6, "M3 6v4c0 1.1.9 2 2 2h3"], [6, "M3 10v6c0 1.1.9 2 2 2h3"]],
        "list-video": [[6, "M12 12H3"], [6, "M16 6H3"], [6, "M12 18H3"], [6, "m16 12 5 3-5 3v-6Z"]],
        "list-x": [[6, "M11 12H3"], [6, "M16 6H3"], [6, "M16 18H3"], [6, "m19 10-4 4"], [6, "m15 10 4 4"]],
        loader: [[0, 12, 2, 12, 6], [0, 12, 18, 12, 22], [0, 4.93, 4.93, 7.76, 7.76], [0, 16.24, 16.24, 19.07, 19.07], [0, 2, 12, 6, 12], [0, 18, 12, 22, 12], [0, 4.93, 19.07, 7.76, 16.24], [0, 16.24, 7.76, 19.07, 4.93]],
        "loader-2": [[6, "M21 12a9 9 0 1 1-6.219-8.56"]],
        locate: [[0, 2, 12, 5, 12], [0, 19, 12, 22, 12], [0, 12, 2, 12, 5], [0, 12, 19, 12, 22], [1, 12, 12, 7]],
        "locate-fixed": [[0, 2, 12, 5, 12], [0, 19, 12, 22, 12], [0, 12, 2, 12, 5], [0, 12, 19, 12, 22], [1, 12, 12, 7], [1, 12, 12, 3]],
        "locate-off": [[0, 2, 12, 5, 12], [0, 19, 12, 22, 12], [0, 12, 2, 12, 5], [0, 12, 19, 12, 22], [6, "M7.11 7.11C5.83 8.39 5 10.1 5 12c0 3.87 3.13 7 7 7 1.9 0 3.61-.83 4.89-2.11"], [6, "M18.71 13.96c.19-.63.29-1.29.29-1.96 0-3.87-3.13-7-7-7-.67 0-1.33.1-1.96.29"], [0, 2, 2, 22, 22]],
        lock: [[5, 3, 11, 18, 11, 2, 2], [6, "M7 11V7a5 5 0 0 1 10 0v4"]],
        "lock-keyhole": [[1, 12, 16, 1], [5, 3, 10, 18, 12, 2], [6, "M7 10V7a5 5 0 0 1 10 0v3"]],
        "log-in": [[6, "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"], [2, "10 17 15 12 10 7"], [0, 15, 12, 3, 12]],
        "log-out": [[6, "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"], [2, "16 17 21 12 16 7"], [0, 21, 12, 9, 12]],
        lollipop: [[1, 11, 11, 8], [6, "m21 21-4.3-4.3"], [6, "M11 11a2 2 0 0 0 4 0 4 4 0 0 0-8 0 6 6 0 0 0 12 0"]],
        luggage: [[6, "M6 20h0a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h0"], [6, "M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14"], [6, "M10 20h4"], [1, 16, 20, 2], [1, 8, 20, 2]],
        "m-square": [[5, 3, 3, 18, 18, 2], [6, "M8 16V8l4 4 4-4v8"]],
        magnet: [[6, "m6 15-4-4 6.75-6.77a7.79 7.79 0 0 1 11 11L13 22l-4-4 6.39-6.36a2.14 2.14 0 0 0-3-3L6 15"], [6, "m5 8 4 4"], [6, "m12 15 4 4"]],
        mail: [[5, 2, 4, 20, 16, 2], [6, "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"]],
        "mail-check": [[6, "M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"], [6, "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"], [6, "m16 19 2 2 4-4"]],
        "mail-minus": [[6, "M22 15V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"], [6, "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"], [6, "M16 19h6"]],
        "mail-open": [[6, "M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"], [6, "m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"]],
        "mail-plus": [[6, "M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"], [6, "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"], [6, "M19 16v6"], [6, "M16 19h6"]],
        "mail-question": [[6, "M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5"], [6, "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"], [6, "M18 15.28c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2"], [6, "M20 22v.01"]],
        "mail-search": [[6, "M22 12.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h7.5"], [6, "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"], [6, "M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6v0Z"], [1, 18, 18, 3], [6, "m22 22-1.5-1.5"]],
        "mail-warning": [[6, "M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5"], [6, "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"], [6, "M20 14v4"], [6, "M20 22v.01"]],
        "mail-x": [[6, "M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h9"], [6, "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"], [6, "m17 17 4 4"], [6, "m21 17-4 4"]],
        mailbox: [[6, "M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z"], [2, "15,9 18,9 18,11"], [6, "M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2v0"], [0, 6, 10, 7, 10]],
        mails: [[5, 6, 4, 16, 13, 2], [6, "m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7"], [6, "M2 8v11c0 1.1.9 2 2 2h14"]],
        map: [[3, "3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"], [0, 9, 3, 9, 18], [0, 15, 6, 15, 21]],
        "map-pin": [[6, "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"], [1, 12, 10, 3]],
        "map-pin-off": [[6, "M5.43 5.43A8.06 8.06 0 0 0 4 10c0 6 8 12 8 12a29.94 29.94 0 0 0 5-5"], [6, "M19.18 13.52A8.66 8.66 0 0 0 20 10a8 8 0 0 0-8-8 7.88 7.88 0 0 0-3.52.82"], [6, "M9.13 9.13A2.78 2.78 0 0 0 9 10a3 3 0 0 0 3 3 2.78 2.78 0 0 0 .87-.13"], [6, "M14.9 9.25a3 3 0 0 0-2.15-2.16"], [0, 2, 2, 22, 22]],
        "map-pinned": [[6, "M18 8c0 4.5-6 9-6 9s-6-4.5-6-9a6 6 0 0 1 12 0"], [1, 12, 8, 2], [6, "M8.835 14H5a1 1 0 0 0-.9.7l-2 6c-.1.1-.1.2-.1.3 0 .6.4 1 1 1h18c.6 0 1-.4 1-1 0-.1 0-.2-.1-.3l-2-6a1 1 0 0 0-.9-.7h-3.835"]],
        martini: [[6, "M8 22h8"], [6, "M12 11v11"], [6, "m19 3-7 8-7-8Z"]],
        maximize: [[6, "M8 3H5a2 2 0 0 0-2 2v3"], [6, "M21 8V5a2 2 0 0 0-2-2h-3"], [6, "M3 16v3a2 2 0 0 0 2 2h3"], [6, "M16 21h3a2 2 0 0 0 2-2v-3"]],
        "maximize-2": [[2, "15 3 21 3 21 9"], [2, "9 21 3 21 3 15"], [0, 21, 3, 14, 10], [0, 3, 21, 10, 14]],
        medal: [[6, "M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15"], [6, "M11 12 5.12 2.2"], [6, "m13 12 5.88-9.8"], [6, "M8 7h8"], [1, 12, 17, 5], [6, "M12 18v-2h-.5"]],
        megaphone: [[6, "m3 11 18-5v12L3 14v-3z"], [6, "M11.6 16.8a3 3 0 1 1-5.8-1.6"]],
        "megaphone-off": [[6, "M9.26 9.26 3 11v3l14.14 3.14"], [6, "M21 15.34V6l-7.31 2.03"], [6, "M11.6 16.8a3 3 0 1 1-5.8-1.6"], [0, 2, 2, 22, 22]],
        meh: [[1, 12, 12, 10], [0, 8, 15, 16, 15], [0, 9, 9, 9.01, 9], [0, 15, 9, 15.01, 9]],
        "memory-stick": [[6, "M6 19v-3"], [6, "M10 19v-3"], [6, "M14 19v-3"], [6, "M18 19v-3"], [6, "M8 11V9"], [6, "M16 11V9"], [6, "M12 11V9"], [6, "M2 15h20"], [6, "M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.1a2 2 0 0 0 0 3.837V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5.1a2 2 0 0 0 0-3.837Z"]],
        menu: [[0, 4, 12, 20, 12], [0, 4, 6, 20, 6], [0, 4, 18, 20, 18]],
        "menu-square": [[5, 3, 3, 18, 18, 2], [6, "M7 8h10"], [6, "M7 12h10"], [6, "M7 16h10"]],
        merge: [[6, "m8 6 4-4 4 4"], [6, "M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22"], [6, "m20 22-5-5"]],
        "message-circle": [[6, "m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"]],
        "message-square": [[6, "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"]],
        "message-square-dashed": [[6, "M3 6V5c0-1.1.9-2 2-2h2"], [6, "M11 3h3"], [6, "M18 3h1c1.1 0 2 .9 2 2"], [6, "M21 9v2"], [6, "M21 15c0 1.1-.9 2-2 2h-1"], [6, "M14 17h-3"], [6, "m7 17-4 4v-5"], [6, "M3 12v-2"]],
        "message-square-plus": [[6, "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"], [0, 9, 10, 15, 10], [0, 12, 7, 12, 13]],
        "messages-square": [[6, "M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"], [6, "M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"]],
        mic: [[6, "M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"], [6, "M19 10v2a7 7 0 0 1-14 0v-2"], [0, 12, 19, 12, 22]],
        "mic-2": [[6, "m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12"], [1, 17, 7, 5]],
        "mic-off": [[0, 2, 2, 22, 22], [6, "M18.89 13.23A7.12 7.12 0 0 0 19 12v-2"], [6, "M5 10v2a7 7 0 0 0 12 5"], [6, "M15 9.34V5a3 3 0 0 0-5.68-1.33"], [6, "M9 9v3a3 3 0 0 0 5.12 2.12"], [0, 12, 19, 12, 22]],
        microscope: [[6, "M6 18h8"], [6, "M3 22h18"], [6, "M14 22a7 7 0 1 0 0-14h-1"], [6, "M9 14h2"], [6, "M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"], [6, "M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"]],
        microwave: [[5, 2, 4, 20, 15, 2], [5, 6, 8, 8, 7, 1], [6, "M18 8v7"], [6, "M6 19v2"], [6, "M18 19v2"]],
        milestone: [[6, "M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z"], [6, "M12 13v8"], [6, "M12 3v3"]],
        milk: [[6, "M8 2h8"], [6, "M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2"], [6, "M7 15a6.472 6.472 0 0 1 5 0 6.47 6.47 0 0 0 5 0"]],
        "milk-off": [[6, "M8 2h8"], [6, "M9 2v1.343M15 2v2.789a4 4 0 0 0 .672 2.219l.656.984a4 4 0 0 1 .672 2.22v1.131M7.8 7.8l-.128.192A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-3"], [6, "M7 15a6.47 6.47 0 0 1 5 0 6.472 6.472 0 0 0 3.435.435"], [0, 2, 2, 22, 22]],
        minimize: [[6, "M8 3v3a2 2 0 0 1-2 2H3"], [6, "M21 8h-3a2 2 0 0 1-2-2V3"], [6, "M3 16h3a2 2 0 0 1 2 2v3"], [6, "M16 21v-3a2 2 0 0 1 2-2h3"]],
        "minimize-2": [[2, "4 14 10 14 10 20"], [2, "20 10 14 10 14 4"], [0, 14, 10, 21, 3], [0, 3, 21, 10, 14]],
        minus: [[6, "M5 12h14"]],
        "minus-circle": [[1, 12, 12, 10], [6, "M8 12h8"]],
        "minus-square": [[5, 3, 3, 18, 18, 2], [6, "M8 12h8"]],
        monitor: [[5, 2, 3, 20, 14, 2], [0, 8, 21, 16, 21], [0, 12, 17, 12, 21]],
        "monitor-check": [[6, "m9 10 2 2 4-4"], [5, 2, 3, 20, 14, 2], [6, "M12 17v4"], [6, "M8 21h8"]],
        "monitor-dot": [[1, 19, 6, 3], [6, "M22 12v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9"], [6, "M12 17v4"], [6, "M8 21h8"]],
        "monitor-down": [[6, "M12 13V7"], [6, "m15 10-3 3-3-3"], [5, 2, 3, 20, 14, 2], [6, "M12 17v4"], [6, "M8 21h8"]],
        "monitor-off": [[6, "M17 17H4a2 2 0 0 1-2-2V5c0-1.5 1-2 1-2"], [6, "M22 15V5a2 2 0 0 0-2-2H9"], [6, "M8 21h8"], [6, "M12 17v4"], [6, "m2 2 20 20"]],
        "monitor-pause": [[6, "M10 13V7"], [6, "M14 13V7"], [5, 2, 3, 20, 14, 2], [6, "M12 17v4"], [6, "M8 21h8"]],
        "monitor-play": [[6, "m10 7 5 3-5 3Z"], [5, 2, 3, 20, 14, 2], [6, "M12 17v4"], [6, "M8 21h8"]],
        "monitor-smartphone": [[6, "M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8"], [6, "M10 19v-3.96 3.15"], [6, "M7 19h5"], [5, 16, 12, 6, 10, 2]],
        "monitor-speaker": [[6, "M5.5 20H8"], [6, "M17 9h.01"], [5, 12, 4, 10, 16, 2], [6, "M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4"], [1, 17, 15, 1]],
        "monitor-stop": [[5, 9, 7, 6, 6], [5, 2, 3, 20, 14, 2], [6, "M12 17v4"], [6, "M8 21h8"]],
        "monitor-up": [[6, "m9 10 3-3 3 3"], [6, "M12 13V7"], [5, 2, 3, 20, 14, 2], [6, "M12 17v4"], [6, "M8 21h8"]],
        "monitor-x": [[6, "m14.5 12.5-5-5"], [6, "m9.5 12.5 5-5"], [5, 2, 3, 20, 14, 2], [6, "M12 17v4"], [6, "M8 21h8"]],
        moon: [[6, "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"]],
        "moon-star": [[6, "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"], [6, "M19 3v4"], [6, "M21 5h-4"]],
        "more-horizontal": [[1, 12, 12, 1], [1, 19, 12, 1], [1, 5, 12, 1]],
        "more-vertical": [[1, 12, 12, 1], [1, 12, 5, 1], [1, 12, 19, 1]],
        mountain: [[6, "m8 3 4 8 5-5 5 15H2L8 3z"]],
        "mountain-snow": [[6, "m8 3 4 8 5-5 5 15H2L8 3z"], [6, "M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19"]],
        mouse: [[5, 5, 2, 14, 20, 7], [6, "M12 6v4"]],
        "mouse-pointer": [[6, "m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z"], [6, "m13 13 6 6"]],
        "mouse-pointer-2": [[6, "m4 4 7.07 17 2.51-7.39L21 11.07z"]],
        "mouse-pointer-click": [[6, "m9 9 5 12 1.8-5.2L21 14Z"], [6, "M7.2 2.2 8 5.1"], [6, "m5.1 8-2.9-.8"], [6, "M14 4.1 12 6"], [6, "m6 12-1.9 2"]],
        "mouse-pointer-square": [[6, "M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"], [6, "m12 12 4 10 1.7-4.3L22 16Z"]],
        "mouse-pointer-square-dashed": [[6, "M5 3a2 2 0 0 0-2 2"], [6, "M19 3a2 2 0 0 1 2 2"], [6, "m12 12 4 10 1.7-4.3L22 16Z"], [6, "M5 21a2 2 0 0 1-2-2"], [6, "M9 3h1"], [6, "M9 21h2"], [6, "M14 3h1"], [6, "M3 9v1"], [6, "M21 9v2"], [6, "M3 14v1"]],
        move: [[2, "5 9 2 12 5 15"], [2, "9 5 12 2 15 5"], [2, "15 19 12 22 9 19"], [2, "19 9 22 12 19 15"], [0, 2, 12, 22, 12], [0, 12, 2, 12, 22]],
        "move-3d": [[6, "M5 3v16h16"], [6, "m5 19 6-6"], [6, "m2 6 3-3 3 3"], [6, "m18 16 3 3-3 3"]],
        "move-diagonal": [[2, "13 5 19 5 19 11"], [2, "11 19 5 19 5 13"], [0, 19, 5, 5, 19]],
        "move-diagonal-2": [[2, "5 11 5 5 11 5"], [2, "19 13 19 19 13 19"], [0, 5, 5, 19, 19]],
        "move-down": [[6, "M8 18L12 22L16 18"], [6, "M12 2V22"]],
        "move-down-left": [[6, "M11 19H5V13"], [6, "M19 5L5 19"]],
        "move-down-right": [[6, "M19 13V19H13"], [6, "M5 5L19 19"]],
        "move-horizontal": [[2, "18 8 22 12 18 16"], [2, "6 8 2 12 6 16"], [0, 2, 12, 22, 12]],
        "move-left": [[6, "M6 8L2 12L6 16"], [6, "M2 12H22"]],
        "move-right": [[6, "M18 8L22 12L18 16"], [6, "M2 12H22"]],
        "move-up": [[6, "M8 6L12 2L16 6"], [6, "M12 2V22"]],
        "move-up-left": [[6, "M5 11V5H11"], [6, "M5 5L19 19"]],
        "move-up-right": [[6, "M13 5H19V11"], [6, "M19 5L5 19"]],
        "move-vertical": [[2, "8 18 12 22 16 18"], [2, "8 6 12 2 16 6"], [0, 12, 2, 12, 22]],
        music: [[6, "M9 18V5l12-2v13"], [1, 6, 18, 3], [1, 18, 16, 3]],
        "music-2": [[1, 8, 18, 4], [6, "M12 18V2l7 4"]],
        "music-3": [[1, 12, 18, 4], [6, "M16 18V2"]],
        "music-4": [[6, "M9 18V5l12-2v13"], [6, "m9 9 12-2"], [1, 6, 18, 3], [1, 18, 16, 3]],
        navigation: [[3, "3 11 22 2 13 21 11 13 3 11"]],
        "navigation-2": [[3, "12 2 19 21 12 17 5 21 12 2"]],
        "navigation-2off": [[6, "M9.31 9.31 5 21l7-4 7 4-1.17-3.17"], [6, "M14.53 8.88 12 2l-1.17 3.17"], [0, 2, 2, 22, 22]],
        "navigation-off": [[6, "M8.43 8.43 3 11l8 2 2 8 2.57-5.43"], [6, "M17.39 11.73 22 2l-9.73 4.61"], [0, 2, 2, 22, 22]],
        network: [[5, 16, 16, 6, 6, 1], [5, 2, 16, 6, 6, 1], [5, 9, 2, 6, 6, 1], [6, "M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"], [6, "M12 12V8"]],
        newspaper: [[6, "M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"], [6, "M18 14h-8"], [6, "M15 18h-5"], [6, "M10 6h8v4h-8V6Z"]],
        nfc: [[6, "M6 8.32a7.43 7.43 0 0 1 0 7.36"], [6, "M9.46 6.21a11.76 11.76 0 0 1 0 11.58"], [6, "M12.91 4.1a15.91 15.91 0 0 1 .01 15.8"], [6, "M16.37 2a20.16 20.16 0 0 1 0 20"]],
        nut: [[6, "M12 4V2"], [6, "M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592A7.003 7.003 0 0 0 19 14v-4"], [6, "M12 4C8 4 4.5 6 4 8c-.243.97-.919 1.952-2 3 1.31-.082 1.972-.29 3-1 .54.92.982 1.356 2 2 1.452-.647 1.954-1.098 2.5-2 .595.995 1.151 1.427 2.5 2 1.31-.621 1.862-1.058 2.5-2 .629.977 1.162 1.423 2.5 2 1.209-.548 1.68-.967 2-2 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4Z"]],
        "nut-off": [[6, "M12 4V2"], [6, "M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592a7.01 7.01 0 0 0 4.125-2.939"], [6, "M19 10v3.343"], [6, "M12 12c-1.349-.573-1.905-1.005-2.5-2-.546.902-1.048 1.353-2.5 2-1.018-.644-1.46-1.08-2-2-1.028.71-1.69.918-3 1 1.081-1.048 1.757-2.03 2-3 .194-.776.84-1.551 1.79-2.21m11.654 5.997c.887-.457 1.28-.891 1.556-1.787 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4-.74 0-1.461.068-2.15.192"], [0, 2, 2, 22, 22]],
        octagon: [[3, "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"]],
        option: [[6, "M3 3h6l6 18h6"], [6, "M14 3h7"]],
        orbit: [[1, 12, 12, 3], [1, 19, 5, 2], [1, 5, 19, 2], [6, "M10.4 21.9a10 10 0 0 0 9.941-15.416"], [6, "M13.5 2.1a10 10 0 0 0-9.841 15.416"]],
        outdent: [[2, "7 8 3 12 7 16"], [0, 21, 12, 11, 12], [0, 21, 6, 11, 6], [0, 21, 18, 11, 18]],
        package: [[6, "m7.5 4.27 9 5.15"], [6, "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"], [6, "m3.3 7 8.7 5 8.7-5"], [6, "M12 22V12"]],
        "package-2": [[6, "M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"], [6, "m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"], [6, "M12 3v6"]],
        "package-check": [[6, "m16 16 2 2 4-4"], [6, "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"], [6, "m7.5 4.27 9 5.15"], [2, "3.29 7 12 12 20.71 7"], [0, 12, 22, 12, 12]],
        "package-minus": [[6, "M16 16h6"], [6, "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"], [6, "m7.5 4.27 9 5.15"], [2, "3.29 7 12 12 20.71 7"], [0, 12, 22, 12, 12]],
        "package-open": [[6, "M20.91 8.84 8.56 2.23a1.93 1.93 0 0 0-1.81 0L3.1 4.13a2.12 2.12 0 0 0-.05 3.69l12.22 6.93a2 2 0 0 0 1.94 0L21 12.51a2.12 2.12 0 0 0-.09-3.67Z"], [6, "m3.09 8.84 12.35-6.61a1.93 1.93 0 0 1 1.81 0l3.65 1.9a2.12 2.12 0 0 1 .1 3.69L8.73 14.75a2 2 0 0 1-1.94 0L3 12.51a2.12 2.12 0 0 1 .09-3.67Z"], [0, 12, 22, 12, 13], [6, "M20 13.5v3.37a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13.5"]],
        "package-plus": [[6, "M16 16h6"], [6, "M19 13v6"], [6, "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"], [6, "m7.5 4.27 9 5.15"], [2, "3.29 7 12 12 20.71 7"], [0, 12, 22, 12, 12]],
        "package-search": [[6, "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"], [6, "m7.5 4.27 9 5.15"], [2, "3.29 7 12 12 20.71 7"], [0, 12, 22, 12, 12], [1, 18.5, 15.5, 2.5], [6, "M20.27 17.27 22 19"]],
        "package-x": [[6, "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"], [6, "m7.5 4.27 9 5.15"], [2, "3.29 7 12 12 20.71 7"], [0, 12, 22, 12, 12], [6, "m17 13 5 5m-5 0 5-5"]],
        "paint-bucket": [[6, "m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z"], [6, "m5 2 5 5"], [6, "M2 13h15"], [6, "M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z"]],
        paintbrush: [[6, "M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z"], [6, "M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7"], [6, "M14.5 17.5 4.5 15"]],
        "paintbrush-2": [[6, "M14 19.9V16h3a2 2 0 0 0 2-2v-2H5v2c0 1.1.9 2 2 2h3v3.9a2 2 0 1 0 4 0Z"], [6, "M6 12V2h12v10"], [6, "M14 2v4"], [6, "M10 2v2"]],
        palette: [[1, 13.5, 6.5, .5], [1, 17.5, 10.5, .5], [1, 8.5, 7.5, .5], [1, 6.5, 12.5, .5], [6, "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"]],
        palmtree: [[6, "M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4"], [6, "M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3"], [6, "M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35z"], [6, "M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14"]],
        "panel-bottom": [[5, 3, 3, 18, 18, 2, 2], [0, 3, 15, 21, 15]],
        "panel-bottom-close": [[5, 3, 3, 18, 18, 2, 2], [0, 3, 15, 21, 15], [6, "m15 8-3 3-3-3"]],
        "panel-bottom-inactive": [[5, 3, 3, 18, 18, 2], [6, "M14 15h1"], [6, "M19 15h2"], [6, "M3 15h2"], [6, "M9 15h1"]],
        "panel-bottom-open": [[5, 3, 3, 18, 18, 2, 2], [0, 3, 15, 21, 15], [6, "m9 10 3-3 3 3"]],
        "panel-left": [[5, 3, 3, 18, 18, 2, 2], [0, 9, 3, 9, 21]],
        "panel-left-close": [[5, 3, 3, 18, 18, 2, 2], [6, "M9 3v18"], [6, "m16 15-3-3 3-3"]],
        "panel-left-inactive": [[5, 3, 3, 18, 18, 2], [6, "M9 14v1"], [6, "M9 19v2"], [6, "M9 3v2"], [6, "M9 9v1"]],
        "panel-left-open": [[5, 3, 3, 18, 18, 2, 2], [6, "M9 3v18"], [6, "m14 9 3 3-3 3"]],
        "panel-right": [[5, 3, 3, 18, 18, 2, 2], [0, 15, 3, 15, 21]],
        "panel-right-close": [[5, 3, 3, 18, 18, 2, 2], [0, 15, 3, 15, 21], [6, "m8 9 3 3-3 3"]],
        "panel-right-inactive": [[5, 3, 3, 18, 18, 2], [6, "M15 14v1"], [6, "M15 19v2"], [6, "M15 3v2"], [6, "M15 9v1"]],
        "panel-right-open": [[5, 3, 3, 18, 18, 2, 2], [0, 15, 3, 15, 21], [6, "m10 15-3-3 3-3"]],
        "panel-top": [[5, 3, 3, 18, 18, 2, 2], [0, 3, 9, 21, 9]],
        "panel-top-close": [[5, 3, 3, 18, 18, 2, 2], [0, 3, 9, 21, 9], [6, "m9 16 3-3 3 3"]],
        "panel-top-inactive": [[5, 3, 3, 18, 18, 2], [6, "M14 9h1"], [6, "M19 9h2"], [6, "M3 9h2"], [6, "M9 9h1"]],
        "panel-top-open": [[5, 3, 3, 18, 18, 2, 2], [0, 3, 9, 21, 9], [6, "m15 14-3 3-3-3"]],
        paperclip: [[6, "m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"]],
        parentheses: [[6, "M8 21s-4-3-4-9 4-9 4-9"], [6, "M16 3s4 3 4 9-4 9-4 9"]],
        "parking-circle": [[1, 12, 12, 10], [6, "M9 17V7h4a3 3 0 0 1 0 6H9"]],
        "parking-circle-off": [[1, 12, 12, 10], [6, "m5 5 14 14"], [6, "M13 13a3 3 0 1 0 0-6H9v2"], [6, "M9 17v-2.34"]],
        "parking-meter": [[6, "M9 9a3 3 0 1 1 6 0"], [6, "M12 12v3"], [6, "M11 15h2"], [6, "M19 9a7 7 0 1 0-13.6 2.3C6.4 14.4 8 19 8 19h8s1.6-4.6 2.6-7.7c.3-.8.4-1.5.4-2.3"], [6, "M12 19v3"]],
        "parking-square": [[5, 3, 3, 18, 18, 2], [6, "M9 17V7h4a3 3 0 0 1 0 6H9"]],
        "parking-square-off": [[6, "M3.6 3.6A2 2 0 0 1 5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-.59 1.41"], [6, "M3 8.7V19a2 2 0 0 0 2 2h10.3"], [6, "m2 2 20 20"], [6, "M13 13a3 3 0 1 0 0-6H9v2"], [6, "M9 17v-2.3"]],
        "party-popper": [[6, "M5.8 11.3 2 22l10.7-3.79"], [6, "M4 3h.01"], [6, "M22 8h.01"], [6, "M15 2h.01"], [6, "M22 20h.01"], [6, "m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12v0c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10"], [6, "m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11v0c-.11.7-.72 1.22-1.43 1.22H17"], [6, "m11 2 .33.82c.34.86-.2 1.82-1.11 1.98v0C9.52 4.9 9 5.52 9 6.23V7"], [6, "M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z"]],
        pause: [[5, 6, 4, 4, 16], [5, 14, 4, 4, 16]],
        "pause-circle": [[1, 12, 12, 10], [0, 10, 15, 10, 9], [0, 14, 15, 14, 9]],
        "pause-octagon": [[6, "M10 15V9"], [6, "M14 15V9"], [6, "M7.714 2h8.572L22 7.714v8.572L16.286 22H7.714L2 16.286V7.714L7.714 2z"]],
        "paw-print": [[1, 11, 4, 2], [1, 18, 8, 2], [1, 20, 16, 2], [6, "M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"]],
        "pc-case": [[5, 5, 2, 14, 20, 2], [6, "M15 14h.01"], [6, "M9 6h6"], [6, "M9 10h6"]],
        pen: [[6, "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"]],
        "pen-box": [[6, "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"], [6, "M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z"]],
        "pen-line": [[6, "M12 20h9"], [6, "M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"]],
        "pen-square": [[6, "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"], [6, "M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z"]],
        "pen-tool": [[6, "m12 19 7-7 3 3-7 7-3-3z"], [6, "m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"], [6, "m2 2 7.586 7.586"], [1, 11, 11, 2]],
        pencil: [[6, "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"], [6, "m15 5 4 4"]],
        "pencil-line": [[6, "M12 20h9"], [6, "M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"], [6, "m15 5 3 3"]],
        "pencil-ruler": [[6, "m15 5 4 4"], [6, "M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13"], [6, "m8 6 2-2"], [6, "m2 22 5.5-1.5L21.17 6.83a2.82 2.82 0 0 0-4-4L3.5 16.5Z"], [6, "m18 16 2-2"], [6, "m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17"]],
        pentagon: [[6, "M3.5 8.7c-.7.5-1 1.4-.7 2.2l2.8 8.7c.3.8 1 1.4 1.9 1.4h9.1c.9 0 1.6-.6 1.9-1.4l2.8-8.7c.3-.8 0-1.7-.7-2.2l-7.4-5.3a2.1 2.1 0 0 0-2.4 0Z"]],
        percent: [[0, 19, 5, 5, 19], [1, 6.5, 6.5, 2.5], [1, 17.5, 17.5, 2.5]],
        "percent-circle": [[1, 12, 12, 10], [6, "m15 9-6 6"], [6, "M9 9h.01"], [6, "M15 15h.01"]],
        "percent-diamond": [[6, "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0Z"], [6, "M9.2 9.2h.01"], [6, "m14.5 9.5-5 5"], [6, "M14.7 14.8h.01"]],
        "percent-square": [[5, 3, 3, 18, 18, 2], [6, "m15 9-6 6"], [6, "M9 9h.01"], [6, "M15 15h.01"]],
        "person-standing": [[1, 12, 5, 1], [6, "m9 20 3-6 3 6"], [6, "m6 8 6 2 6-2"], [6, "M12 10v4"]],
        phone: [[6, "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"]],
        "phone-call": [[6, "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"], [6, "M14.05 2a9 9 0 0 1 8 7.94"], [6, "M14.05 6A5 5 0 0 1 18 10"]],
        "phone-forwarded": [[2, "18 2 22 6 18 10"], [0, 14, 6, 22, 6], [6, "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"]],
        "phone-incoming": [[2, "16 2 16 8 22 8"], [0, 22, 2, 16, 8], [6, "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"]],
        "phone-missed": [[0, 22, 2, 16, 8], [0, 16, 2, 22, 8], [6, "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"]],
        "phone-off": [[6, "M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"], [0, 22, 2, 2, 22]],
        "phone-outgoing": [[2, "22 8 22 2 16 2"], [0, 16, 8, 22, 2], [6, "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"]],
        pi: [[0, 9, 4, 9, 20], [6, "M4 7c0-1.7 1.3-3 3-3h13"], [6, "M18 20c-1.7 0-3-1.3-3-3V4"]],
        "pi-square": [[5, 3, 3, 18, 18, 2], [6, "M7 7h10"], [6, "M10 7v10"], [6, "M16 17a2 2 0 0 1-2-2V7"]],
        "picture-in-picture": [[6, "M8 4.5v5H3m-1-6 6 6m13 0v-3c0-1.16-.84-2-2-2h-7m-9 9v2c0 1.05.95 2 2 2h3"], [5, 12, 13.5, 10, 7, 0, 2]],
        "picture-in-picture-2": [[6, "M21 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4"], [5, 12, 13, 10, 7, 2]],
        "pie-chart": [[6, "M21.21 15.89A10 10 0 1 1 8 2.83"], [6, "M22 12A10 10 0 0 0 12 2v10z"]],
        "piggy-bank": [[6, "M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2h0V5z"], [6, "M2 9v1c0 1.1.9 2 2 2h1"], [6, "M16 11h0"]],
        pilcrow: [[6, "M13 4v16"], [6, "M17 4v16"], [6, "M19 4H9.5a4.5 4.5 0 0 0 0 9H13"]],
        "pilcrow-square": [[5, 3, 3, 18, 18, 2], [6, "M12 12H9.5a2.5 2.5 0 0 1 0-5H17"], [6, "M12 7v10"], [6, "M16 7v10"]],
        pill: [[6, "m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"], [6, "m8.5 8.5 7 7"]],
        pin: [[0, 12, 17, 12, 22], [6, "M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z"]],
        "pin-off": [[0, 2, 2, 22, 22], [0, 12, 17, 12, 22], [6, "M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V17h12"], [6, "M15 9.34V6h1a2 2 0 0 0 0-4H7.89"]],
        pipette: [[6, "m2 22 1-1h3l9-9"], [6, "M3 21v-3l9-9"], [6, "m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z"]],
        pizza: [[6, "M15 11h.01"], [6, "M11 15h.01"], [6, "M16 16h.01"], [6, "m2 16 20 6-6-20A20 20 0 0 0 2 16"], [6, "M5.71 17.11a17.04 17.04 0 0 1 11.4-11.4"]],
        plane: [[6, "M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"]],
        "plane-landing": [[6, "M2 22h20"], [6, "M3.77 10.77 2 9l2-4.5 1.1.55c.55.28.9.84.9 1.45s.35 1.17.9 1.45L8 8.5l3-6 1.05.53a2 2 0 0 1 1.09 1.52l.72 5.4a2 2 0 0 0 1.09 1.52l4.4 2.2c.42.22.78.55 1.01.96l.6 1.03c.49.88-.06 1.98-1.06 2.1l-1.18.15c-.47.06-.95-.02-1.37-.24L4.29 11.15a2 2 0 0 1-.52-.38Z"]],
        "plane-takeoff": [[6, "M2 22h20"], [6, "M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z"]],
        play: [[3, "5 3 19 12 5 21 5 3"]],
        "play-circle": [[1, 12, 12, 10], [3, "10 8 16 12 10 16 10 8"]],
        "play-square": [[5, 3, 3, 18, 18, 2], [6, "m9 8 6 4-6 4Z"]],
        plug: [[6, "M12 22v-5"], [6, "M9 8V2"], [6, "M15 8V2"], [6, "M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"]],
        "plug-2": [[6, "M9 2v6"], [6, "M15 2v6"], [6, "M12 17v5"], [6, "M5 8h14"], [6, "M6 11V8h12v3a6 6 0 1 1-12 0v0Z"]],
        "plug-zap": [[6, "M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"], [6, "m2 22 3-3"], [6, "M7.5 13.5 10 11"], [6, "M10.5 16.5 13 14"], [6, "m18 3-4 4h6l-4 4"]],
        "plug-zap-2": [[6, "m13 2-2 2.5h3L12 7"], [6, "M10 14v-3"], [6, "M14 14v-3"], [6, "M11 19c-1.7 0-3-1.3-3-3v-2h8v2c0 1.7-1.3 3-3 3Z"], [6, "M12 22v-3"]],
        plus: [[6, "M5 12h14"], [6, "M12 5v14"]],
        "plus-circle": [[1, 12, 12, 10], [6, "M8 12h8"], [6, "M12 8v8"]],
        "plus-square": [[5, 3, 3, 18, 18, 2], [6, "M8 12h8"], [6, "M12 8v8"]],
        pocket: [[6, "M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"], [2, "8 10 12 14 16 10"]],
        "pocket-knife": [[6, "M3 2v1c0 1 2 1 2 2S3 6 3 7s2 1 2 2-2 1-2 2 2 1 2 2"], [6, "M18 6h.01"], [6, "M6 18h.01"], [6, "M20.83 8.83a4 4 0 0 0-5.66-5.66l-12 12a4 4 0 1 0 5.66 5.66Z"], [6, "M18 11.66V22a4 4 0 0 0 4-4V6"]],
        podcast: [[1, 12, 11, 1], [6, "M11 17a1 1 0 0 1 2 0c0 .5-.34 3-.5 4.5a.5.5 0 0 1-1 0c-.16-1.5-.5-4-.5-4.5Z"], [6, "M8 14a5 5 0 1 1 8 0"], [6, "M17 18.5a9 9 0 1 0-10 0"]],
        pointer: [[6, "M22 14a8 8 0 0 1-8 8"], [6, "M18 11v-1a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"], [6, "M14 10V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1"], [6, "M10 9.5V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v10"], [6, "M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"]],
        popcorn: [[6, "M18 8a2 2 0 0 0 0-4 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0 0 4"], [6, "M10 22 9 8"], [6, "m14 22 1-14"], [6, "M20 8c.5 0 .9.4.8 1l-2.6 12c-.1.5-.7 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L3.2 9c-.1-.6.3-1 .8-1Z"]],
        popsicle: [[6, "M18.6 14.4c.8-.8.8-2 0-2.8l-8.1-8.1a4.95 4.95 0 1 0-7.1 7.1l8.1 8.1c.9.7 2.1.7 2.9-.1Z"], [6, "m22 22-5.5-5.5"]],
        "pound-sterling": [[6, "M18 7c0-5.333-8-5.333-8 0"], [6, "M10 7v14"], [6, "M6 21h12"], [6, "M6 13h10"]],
        power: [[6, "M12 2v10"], [6, "M18.4 6.6a9 9 0 1 1-12.77.04"]],
        "power-circle": [[1, 12, 12, 10], [6, "M12 12V6"], [6, "M8 7.5A6.1 6.1 0 0 0 12 18a6 6 0 0 0 4-10.5"]],
        "power-off": [[6, "M18.36 6.64A9 9 0 0 1 20.77 15"], [6, "M6.16 6.16a9 9 0 1 0 12.68 12.68"], [6, "M12 2v4"], [6, "m2 2 20 20"]],
        "power-square": [[5, 3, 3, 18, 18, 2], [6, "M12 7v5"], [6, "M8 9a5.14 5.14 0 0 0 4 8 4.95 4.95 0 0 0 4-8"]],
        presentation: [[6, "M2 3h20"], [6, "M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"], [6, "m7 21 5-5 5 5"]],
        printer: [[2, "6 9 6 2 18 2 18 9"], [6, "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"], [5, 6, 14, 12, 8]],
        projector: [[6, "M5 7 3 5"], [6, "M9 6V3"], [6, "m13 7 2-2"], [1, 9, 13, 3], [6, "M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17"], [6, "M16 16h2"]],
        puzzle: [[6, "M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z"]],
        pyramid: [[6, "M2.5 16.88a1 1 0 0 1-.32-1.43l9-13.02a1 1 0 0 1 1.64 0l9 13.01a1 1 0 0 1-.32 1.44l-8.51 4.86a2 2 0 0 1-1.98 0Z"], [6, "M12 2v20"]],
        "qr-code": [[5, 3, 3, 5, 5, 1], [5, 16, 3, 5, 5, 1], [5, 3, 16, 5, 5, 1], [6, "M21 16h-3a2 2 0 0 0-2 2v3"], [6, "M21 21v.01"], [6, "M12 7v3a2 2 0 0 1-2 2H7"], [6, "M3 12h.01"], [6, "M12 3h.01"], [6, "M12 16v.01"], [6, "M16 12h1"], [6, "M21 12v.01"], [6, "M12 21v-1"]],
        quote: [[6, "M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"], [6, "M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"]],
        rabbit: [[6, "M20 8.54V4a2 2 0 1 0-4 0v3"], [6, "M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1.93 1.93 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1c-1.7 0-3 1.3-3 3"], [6, "M7.61 12.53a3 3 0 1 0-1.6 4.3"], [6, "M13 16a3 3 0 0 1 2.24 5"], [6, "M18 12h.01"]],
        radar: [[6, "M19.07 4.93A10 10 0 0 0 6.99 3.34"], [6, "M4 6h.01"], [6, "M2.29 9.62A10 10 0 1 0 21.31 8.35"], [6, "M16.24 7.76A6 6 0 1 0 8.23 16.67"], [6, "M12 18h.01"], [6, "M17.99 11.66A6 6 0 0 1 15.77 16.67"], [1, 12, 12, 2], [6, "m13.41 10.59 5.66-5.66"]],
        radiation: [[6, "M12 12h0.01"], [6, "M7.5 4.2c-.3-.5-.9-.7-1.3-.4C3.9 5.5 2.3 8.1 2 11c-.1.5.4 1 1 1h5c0-1.5.8-2.8 2-3.4-1.1-1.9-2-3.5-2.5-4.4z"], [6, "M21 12c.6 0 1-.4 1-1-.3-2.9-1.8-5.5-4.1-7.1-.4-.3-1.1-.2-1.3.3-.6.9-1.5 2.5-2.6 4.3 1.2.7 2 2 2 3.5h5z"], [6, "M7.5 19.8c-.3.5-.1 1.1.4 1.3 2.6 1.2 5.6 1.2 8.2 0 .5-.2.7-.8.4-1.3-.5-.9-1.4-2.5-2.5-4.3-1.2.7-2.8.7-4 0-1.1 1.8-2 3.4-2.5 4.3z"]],
        radio: [[6, "M4.9 19.1C1 15.2 1 8.8 4.9 4.9"], [6, "M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"], [1, 12, 12, 2], [6, "M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"], [6, "M19.1 4.9C23 8.8 23 15.1 19.1 19"]],
        "radio-receiver": [[6, "M5 16v2"], [6, "M19 16v2"], [5, 2, 8, 20, 8, 2], [6, "M18 12h0"]],
        "radio-tower": [[6, "M4.9 16.1C1 12.2 1 5.8 4.9 1.9"], [6, "M7.8 4.7a6.14 6.14 0 0 0-.8 7.5"], [1, 12, 9, 2], [6, "M16.2 4.8c2 2 2.26 5.11.8 7.47"], [6, "M19.1 1.9a9.96 9.96 0 0 1 0 14.1"], [6, "M9.5 18h5"], [6, "m8 22 4-11 4 11"]],
        radius: [[6, "M20.34 17.52a10 10 0 1 0-2.82 2.82"], [1, 19, 19, 2], [6, "m13.41 13.41 4.18 4.18"], [1, 12, 12, 2]],
        "rail-symbol": [[6, "M5 15h14"], [6, "M5 9h14"], [6, "m14 20-5-5 6-6-5-5"]],
        rainbow: [[6, "M22 17a10 10 0 0 0-20 0"], [6, "M6 17a6 6 0 0 1 12 0"], [6, "M10 17a2 2 0 0 1 4 0"]],
        rat: [[6, "M17 5c0-1.7-1.3-3-3-3s-3 1.3-3 3c0 .8.3 1.5.8 2H11c-3.9 0-7 3.1-7 7v0c0 2.2 1.8 4 4 4"], [6, "M16.8 3.9c.3-.3.6-.5 1-.7 1.5-.6 3.3.1 3.9 1.6.6 1.5-.1 3.3-1.6 3.9l1.6 2.8c.2.3.2.7.2 1-.2.8-.9 1.2-1.7 1.1 0 0-1.6-.3-2.7-.6H17c-1.7 0-3 1.3-3 3"], [6, "M13.2 18a3 3 0 0 0-2.2-5"], [6, "M13 22H4a2 2 0 0 1 0-4h12"], [6, "M16 9h.01"]],
        ratio: [[5, 6, 2, 12, 20, 2], [5, 2, 6, 20, 12, 2]],
        receipt: [[6, "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1Z"], [6, "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"], [6, "M12 17V7"]],
        "rectangle-horizontal": [[5, 2, 6, 20, 12, 2]],
        "rectangle-vertical": [[5, 6, 2, 12, 20, 2]],
        recycle: [[6, "M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5"], [6, "M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12"], [6, "m14 16-3 3 3 3"], [6, "M8.293 13.596 7.196 9.5 3.1 10.598"], [6, "m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843"], [6, "m13.378 9.633 4.096 1.098 1.097-4.096"]],
        redo: [[6, "M21 7v6h-6"], [6, "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"]],
        "redo-2": [[6, "m15 14 5-5-5-5"], [6, "M20 9H9.5A5.5 5.5 0 0 0 4 14.5v0A5.5 5.5 0 0 0 9.5 20H13"]],
        "redo-dot": [[1, 12, 17, 1], [6, "M21 7v6h-6"], [6, "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"]],
        "refresh-ccw": [[6, "M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"], [6, "M3 3v5h5"], [6, "M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"], [6, "M16 16h5v5"]],
        "refresh-ccw-dot": [[6, "M3 2v6h6"], [6, "M21 12A9 9 0 0 0 6 5.3L3 8"], [6, "M21 22v-6h-6"], [6, "M3 12a9 9 0 0 0 15 6.7l3-2.7"], [1, 12, 12, 1]],
        "refresh-cw": [[6, "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"], [6, "M21 3v5h-5"], [6, "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"], [6, "M8 16H3v5"]],
        "refresh-cw-off": [[6, "M21 8L18.74 5.74A9.75 9.75 0 0 0 12 3C11 3 10.03 3.16 9.13 3.47"], [6, "M8 16H3v5"], [6, "M3 12C3 9.51 4 7.26 5.64 5.64"], [6, "m3 16 2.26 2.26A9.75 9.75 0 0 0 12 21c2.49 0 4.74-1 6.36-2.64"], [6, "M21 12c0 1-.16 1.97-.47 2.87"], [6, "M21 3v5h-5"], [6, "M22 22 2 2"]],
        refrigerator: [[6, "M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z"], [6, "M5 10h14"], [6, "M15 7v6"]],
        regex: [[6, "M17 3v10"], [6, "m12.67 5.5 8.66 5"], [6, "m12.67 10.5 8.66-5"], [6, "M9 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2z"]],
        "remove-formatting": [[6, "M4 7V4h16v3"], [6, "M5 20h6"], [6, "M13 4 8 20"], [6, "m15 15 5 5"], [6, "m20 15-5 5"]],
        repeat: [[6, "m17 2 4 4-4 4"], [6, "M3 11v-1a4 4 0 0 1 4-4h14"], [6, "m7 22-4-4 4-4"], [6, "M21 13v1a4 4 0 0 1-4 4H3"]],
        "repeat-1": [[6, "m17 2 4 4-4 4"], [6, "M3 11v-1a4 4 0 0 1 4-4h14"], [6, "m7 22-4-4 4-4"], [6, "M21 13v1a4 4 0 0 1-4 4H3"], [6, "M11 10h1v4"]],
        "repeat-2": [[6, "m2 9 3-3 3 3"], [6, "M13 18H7a2 2 0 0 1-2-2V6"], [6, "m22 15-3 3-3-3"], [6, "M11 6h6a2 2 0 0 1 2 2v10"]],
        replace: [[6, "M14 4c0-1.1.9-2 2-2"], [6, "M20 2c1.1 0 2 .9 2 2"], [6, "M22 8c0 1.1-.9 2-2 2"], [6, "M16 10c-1.1 0-2-.9-2-2"], [6, "m3 7 3 3 3-3"], [6, "M6 10V5c0-1.7 1.3-3 3-3h1"], [5, 2, 14, 8, 8, 2]],
        "replace-all": [[6, "M14 4c0-1.1.9-2 2-2"], [6, "M20 2c1.1 0 2 .9 2 2"], [6, "M22 8c0 1.1-.9 2-2 2"], [6, "M16 10c-1.1 0-2-.9-2-2"], [6, "m3 7 3 3 3-3"], [6, "M6 10V5c0-1.7 1.3-3 3-3h1"], [5, 2, 14, 8, 8, 2], [6, "M14 14c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2"], [6, "M20 14c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2"]],
        reply: [[2, "9 17 4 12 9 7"], [6, "M20 18v-2a4 4 0 0 0-4-4H4"]],
        "reply-all": [[2, "7 17 2 12 7 7"], [2, "12 17 7 12 12 7"], [6, "M22 18v-2a4 4 0 0 0-4-4H7"]],
        rewind: [[3, "11 19 2 12 11 5 11 19"], [3, "22 19 13 12 22 5 22 19"]],
        ribbon: [[6, "M17.75 9.01c-.52 2.08-1.83 3.64-3.18 5.49l-2.6 3.54-2.97 4-3.5-2.54 3.85-4.97c-1.86-2.61-2.8-3.77-3.16-5.44"], [6, "M17.75 9.01A7 7 0 0 0 6.2 9.1C6.06 8.5 6 7.82 6 7c0-3.5 2.83-5 5.98-5C15.24 2 18 3.5 18 7c0 .73-.09 1.4-.25 2.01Z"], [6, "m9.35 14.53 2.64-3.31"], [6, "m11.97 18.04 2.99 4 3.54-2.54-3.93-5"], [6, "M14 8c0 1-1 2-2.01 3.22C11 10 10 9 10 8a2 2 0 1 1 4 0"]],
        rocket: [[6, "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"], [6, "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"], [6, "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"], [6, "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"]],
        "rocking-chair": [[2, "3.5 2 6.5 12.5 18 12.5"], [0, 9.5, 12.5, 5.5, 20], [0, 15, 12.5, 18.5, 20], [6, "M2.75 18a13 13 0 0 0 18.5 0"]],
        "roller-coaster": [[6, "M6 19V5"], [6, "M10 19V6.8"], [6, "M14 19v-7.8"], [6, "M18 5v4"], [6, "M18 19v-6"], [6, "M22 19V9"], [6, "M2 19V9a4 4 0 0 1 4-4c2 0 4 1.33 6 4s4 4 6 4a4 4 0 1 0-3-6.65"]],
        "rotate-3d": [[6, "M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2"], [6, "m15.194 13.707 3.814 1.86-1.86 3.814"], [6, "M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4"]],
        "rotate-ccw": [[6, "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"], [6, "M3 3v5h5"]],
        "rotate-cw": [[6, "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"], [6, "M21 3v5h-5"]],
        route: [[1, 6, 19, 3], [6, "M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"], [1, 18, 5, 3]],
        "route-off": [[1, 6, 19, 3], [6, "M9 19h8.5c.4 0 .9-.1 1.3-.2"], [6, "M5.2 5.2A3.5 3.53 0 0 0 6.5 12H12"], [6, "m2 2 20 20"], [6, "M21 15.3a3.5 3.5 0 0 0-3.3-3.3"], [6, "M15 5h-4.3"], [1, 18, 5, 3]],
        router: [[5, 2, 14, 20, 8, 2], [6, "M6.01 18H6"], [6, "M10.01 18H10"], [6, "M15 10v4"], [6, "M17.84 7.17a4 4 0 0 0-5.66 0"], [6, "M20.66 4.34a8 8 0 0 0-11.31 0"]],
        rows: [[5, 3, 3, 18, 18, 2, 2], [0, 3, 12, 21, 12]],
        rss: [[6, "M4 11a9 9 0 0 1 9 9"], [6, "M4 4a16 16 0 0 1 16 16"], [1, 5, 19, 1]],
        ruler: [[6, "M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"], [6, "m14.5 12.5 2-2"], [6, "m11.5 9.5 2-2"], [6, "m8.5 6.5 2-2"], [6, "m17.5 15.5 2-2"]],
        "russian-ruble": [[6, "M6 11h8a4 4 0 0 0 0-8H9v18"], [6, "M6 15h8"]],
        sailboat: [[6, "M22 18H2a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z"], [6, "M21 14 10 2 3 14h18Z"], [6, "M10 2v16"]],
        salad: [[6, "M7 21h10"], [6, "M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z"], [6, "M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1"], [6, "m13 12 4-4"], [6, "M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2"]],
        sandwich: [[6, "M3 11v3a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-3"], [6, "M12 19H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3.83"], [6, "m3 11 7.77-6.04a2 2 0 0 1 2.46 0L21 11H3Z"], [6, "M12.97 19.77 7 15h12.5l-3.75 4.5a2 2 0 0 1-2.78.27Z"]],
        satellite: [[6, "M13 7 9 3 5 7l4 4"], [6, "m17 11 4 4-4 4-4-4"], [6, "m8 12 4 4 6-6-4-4Z"], [6, "m16 8 3-3"], [6, "M9 21a6 6 0 0 0-6-6"]],
        "satellite-dish": [[6, "M4 10a7.31 7.31 0 0 0 10 10Z"], [6, "m9 15 3-3"], [6, "M17 13a6 6 0 0 0-6-6"], [6, "M21 13A10 10 0 0 0 11 3"]],
        save: [[6, "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"], [2, "17 21 17 13 7 13 7 21"], [2, "7 3 7 8 15 8"]],
        "save-all": [[6, "M6 4a2 2 0 0 1 2-2h10l4 4v10.2a2 2 0 0 1-2 1.8H8a2 2 0 0 1-2-2Z"], [6, "M10 2v4h6"], [6, "M18 18v-7h-8v7"], [6, "M18 22H4a2 2 0 0 1-2-2V6"]],
        scale: [[6, "m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"], [6, "m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"], [6, "M7 21h10"], [6, "M12 3v18"], [6, "M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"]],
        "scale-3d": [[1, 19, 19, 2], [1, 5, 5, 2], [6, "M5 7v12h12"], [6, "m5 19 6-6"]],
        scaling: [[6, "M21 3 9 15"], [6, "M12 3H3v18h18v-9"], [6, "M16 3h5v5"], [6, "M14 15H9v-5"]],
        scan: [[6, "M3 7V5a2 2 0 0 1 2-2h2"], [6, "M17 3h2a2 2 0 0 1 2 2v2"], [6, "M21 17v2a2 2 0 0 1-2 2h-2"], [6, "M7 21H5a2 2 0 0 1-2-2v-2"]],
        "scan-barcode": [[6, "M3 7V5a2 2 0 0 1 2-2h2"], [6, "M17 3h2a2 2 0 0 1 2 2v2"], [6, "M21 17v2a2 2 0 0 1-2 2h-2"], [6, "M7 21H5a2 2 0 0 1-2-2v-2"], [6, "M8 7v10"], [6, "M12 7v10"], [6, "M17 7v10"]],
        "scan-eye": [[6, "M3 7V5a2 2 0 0 1 2-2h2"], [6, "M17 3h2a2 2 0 0 1 2 2v2"], [6, "M21 17v2a2 2 0 0 1-2 2h-2"], [6, "M7 21H5a2 2 0 0 1-2-2v-2"], [1, 12, 12, 1], [6, "M5 12s2.5-5 7-5 7 5 7 5-2.5 5-7 5-7-5-7-5"]],
        "scan-face": [[6, "M3 7V5a2 2 0 0 1 2-2h2"], [6, "M17 3h2a2 2 0 0 1 2 2v2"], [6, "M21 17v2a2 2 0 0 1-2 2h-2"], [6, "M7 21H5a2 2 0 0 1-2-2v-2"], [6, "M8 14s1.5 2 4 2 4-2 4-2"], [6, "M9 9h.01"], [6, "M15 9h.01"]],
        "scan-line": [[6, "M3 7V5a2 2 0 0 1 2-2h2"], [6, "M17 3h2a2 2 0 0 1 2 2v2"], [6, "M21 17v2a2 2 0 0 1-2 2h-2"], [6, "M7 21H5a2 2 0 0 1-2-2v-2"], [6, "M7 12h10"]],
        "scan-search": [[6, "M3 7V5a2 2 0 0 1 2-2h2"], [6, "M17 3h2a2 2 0 0 1 2 2v2"], [6, "M21 17v2a2 2 0 0 1-2 2h-2"], [6, "M7 21H5a2 2 0 0 1-2-2v-2"], [1, 12, 12, 3], [6, "m16 16-1.9-1.9"]],
        "scan-text": [[6, "M3 7V5a2 2 0 0 1 2-2h2"], [6, "M17 3h2a2 2 0 0 1 2 2v2"], [6, "M21 17v2a2 2 0 0 1-2 2h-2"], [6, "M7 21H5a2 2 0 0 1-2-2v-2"], [6, "M7 8h8"], [6, "M7 12h10"], [6, "M7 16h6"]],
        "scatter-chart": [[1, 7.5, 7.5, .5], [1, 18.5, 5.5, .5], [1, 11.5, 11.5, .5], [1, 7.5, 16.5, .5], [1, 17.5, 14.5, .5], [6, "M3 3v18h18"]],
        school: [[6, "m4 6 8-4 8 4"], [6, "m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2"], [6, "M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4"], [6, "M18 5v17"], [6, "M6 5v17"], [1, 12, 9, 2]],
        "school-2": [[1, 12, 10, 1], [6, "M22 20V8h-4l-6-4-6 4H2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z"], [6, "M6 17v.01"], [6, "M6 13v.01"], [6, "M18 17v.01"], [6, "M18 13v.01"], [6, "M14 22v-5a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5"]],
        scissors: [[1, 6, 6, 3], [6, "M8.12 8.12 12 12"], [6, "M20 4 8.12 15.88"], [1, 6, 18, 3], [6, "M14.8 14.8 20 20"]],
        "scissors-line-dashed": [[6, "M5.42 9.42 8 12"], [1, 4, 8, 2], [6, "m14 6-8.58 8.58"], [1, 4, 16, 2], [6, "M10.8 14.8 14 18"], [6, "M16 12h-2"], [6, "M22 12h-2"]],
        "scissors-square": [[5, 2, 2, 20, 20, 2], [1, 8, 8, 2], [6, "M9.414 9.414 12 12"], [6, "M14.8 14.8 18 18"], [1, 8, 16, 2], [6, "m18 6-8.586 8.586"]],
        "scissors-square-dashed-bottom": [[6, "M4 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2"], [6, "M10 22H8"], [6, "M16 22h-2"], [1, 8, 8, 2], [6, "M9.414 9.414 12 12"], [6, "M14.8 14.8 18 18"], [1, 8, 16, 2], [6, "m18 6-8.586 8.586"]],
        "screen-share": [[6, "M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3"], [6, "M8 21h8"], [6, "M12 17v4"], [6, "m17 8 5-5"], [6, "M17 3h5v5"]],
        "screen-share-off": [[6, "M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3"], [6, "M8 21h8"], [6, "M12 17v4"], [6, "m22 3-5 5"], [6, "m17 3 5 5"]],
        scroll: [[6, "M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4"], [6, "M19 17V5a2 2 0 0 0-2-2H4"]],
        "scroll-text": [[6, "M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4"], [6, "M19 17V5a2 2 0 0 0-2-2H4"], [6, "M15 8h-5"], [6, "M15 12h-5"]],
        search: [[1, 11, 11, 8], [6, "m21 21-4.3-4.3"]],
        "search-check": [[6, "m8 11 2 2 4-4"], [1, 11, 11, 8], [6, "m21 21-4.3-4.3"]],
        "search-code": [[6, "m9 9-2 2 2 2"], [6, "m13 13 2-2-2-2"], [1, 11, 11, 8], [6, "m21 21-4.3-4.3"]],
        "search-slash": [[6, "m13.5 8.5-5 5"], [1, 11, 11, 8], [6, "m21 21-4.3-4.3"]],
        "search-x": [[6, "m13.5 8.5-5 5"], [6, "m8.5 8.5 5 5"], [1, 11, 11, 8], [6, "m21 21-4.3-4.3"]],
        send: [[6, "m22 2-7 20-4-9-9-4Z"], [6, "M22 2 11 13"]],
        "send-horizonal": [[6, "m3 3 3 9-3 9 19-9Z"], [6, "M6 12h16"]],
        "send-horizontal": [[6, "m3 3 3 9-3 9 19-9Z"], [6, "M6 12h16"]],
        "send-to-back": [[5, 14, 14, 8, 8, 2], [5, 2, 2, 8, 8, 2], [6, "M7 14v1a2 2 0 0 0 2 2h1"], [6, "M14 7h1a2 2 0 0 1 2 2v1"]],
        "separator-horizontal": [[0, 3, 12, 21, 12], [2, "8 8 12 4 16 8"], [2, "16 16 12 20 8 16"]],
        "separator-vertical": [[0, 12, 3, 12, 21], [2, "8 8 4 12 8 16"], [2, "16 16 20 12 16 8"]],
        server: [[5, 2, 2, 20, 8, 2, 2], [5, 2, 14, 20, 8, 2, 2], [0, 6, 6, 6.01, 6], [0, 6, 18, 6.01, 18]],
        "server-cog": [[1, 12, 12, 3], [6, "M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5"], [6, "M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5"], [6, "M6 6h.01"], [6, "M6 18h.01"], [6, "m15.7 13.4-.9-.3"], [6, "m9.2 10.9-.9-.3"], [6, "m10.6 15.7.3-.9"], [6, "m13.6 15.7-.4-1"], [6, "m10.8 9.3-.4-1"], [6, "m8.3 13.6 1-.4"], [6, "m14.7 10.8 1-.4"], [6, "m13.4 8.3-.3.9"]],
        "server-crash": [[6, "M6 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2"], [6, "M6 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2"], [6, "M6 6h.01"], [6, "M6 18h.01"], [6, "m13 6-4 6h6l-4 6"]],
        "server-off": [[6, "M7 2h13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5"], [6, "M10 10 2.5 2.5C2 2 2 2.5 2 5v3a2 2 0 0 0 2 2h6z"], [6, "M22 17v-1a2 2 0 0 0-2-2h-1"], [6, "M4 14a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16.5l1-.5.5.5-8-8H4z"], [6, "M6 18h.01"], [6, "m2 2 20 20"]],
        settings: [[6, "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"], [1, 12, 12, 3]],
        "settings-2": [[6, "M20 7h-9"], [6, "M14 17H5"], [1, 17, 17, 3], [1, 7, 7, 3]],
        shapes: [[6, "M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z"], [5, 3, 14, 7, 7, 1], [1, 17.5, 17.5, 3.5]],
        share: [[6, "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"], [2, "16 6 12 2 8 6"], [0, 12, 2, 12, 15]],
        "share-2": [[1, 18, 5, 3], [1, 6, 12, 3], [1, 18, 19, 3], [0, 8.59, 13.51, 15.42, 17.49], [0, 15.41, 6.51, 8.59, 10.49]],
        sheet: [[5, 3, 3, 18, 18, 2, 2], [0, 3, 9, 21, 9], [0, 3, 15, 21, 15], [0, 9, 9, 9, 21], [0, 15, 9, 15, 21]],
        shell: [[6, "M14 11a2 2 0 1 1-4 0 4 4 0 0 1 8 0 6 6 0 0 1-12 0 8 8 0 0 1 16 0 10 10 0 1 1-20 0 11.93 11.93 0 0 1 2.42-7.22 2 2 0 1 1 3.16 2.44"]],
        shield: [[6, "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"]],
        "shield-alert": [[6, "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"], [6, "M12 8v4"], [6, "M12 16h.01"]],
        "shield-ban": [[6, "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"], [6, "m4 5 14 12"]],
        "shield-check": [[6, "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"], [6, "m9 12 2 2 4-4"]],
        "shield-close": [[6, "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"], [6, "m14.5 9-5 5"], [6, "m9.5 9 5 5"]],
        "shield-ellipsis": [[6, "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"], [6, "M8 11h.01"], [6, "M12 11h.01"], [6, "M16 11h.01"]],
        "shield-half": [[6, "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"], [6, "M12 22V2"]],
        "shield-minus": [[6, "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"], [6, "M8 11h8"]],
        "shield-off": [[6, "M19.7 14a6.9 6.9 0 0 0 .3-2V5l-8-3-3.2 1.2"], [6, "m2 2 20 20"], [6, "M4.7 4.7 4 5v7c0 6 8 10 8 10a20.3 20.3 0 0 0 5.62-4.38"]],
        "shield-plus": [[6, "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"], [6, "M8 11h8"], [6, "M12 15V7"]],
        "shield-question": [[6, "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"], [6, "M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3"], [6, "M12 17h.01"]],
        "shield-x": [[6, "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"], [6, "m14.5 9-5 5"], [6, "m9.5 9 5 5"]],
        ship: [[6, "M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"], [6, "M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76"], [6, "M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6"], [6, "M12 10v4"], [6, "M12 2v3"]],
        "ship-wheel": [[1, 12, 12, 8], [6, "M12 2v7.5"], [6, "m19 5-5.23 5.23"], [6, "M22 12h-7.5"], [6, "m19 19-5.23-5.23"], [6, "M12 14.5V22"], [6, "M10.23 13.77 5 19"], [6, "M9.5 12H2"], [6, "M10.23 10.23 5 5"], [1, 12, 12, 2.5]],
        shirt: [[6, "M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"]],
        "shopping-bag": [[6, "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"], [6, "M3 6h18"], [6, "M16 10a4 4 0 0 1-8 0"]],
        "shopping-basket": [[6, "m5 11 4-7"], [6, "m19 11-4-7"], [6, "M2 11h20"], [6, "m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8c.9 0 1.8-.7 2-1.6l1.7-7.4"], [6, "m9 11 1 9"], [6, "M4.5 15.5h15"], [6, "m15 11-1 9"]],
        "shopping-cart": [[1, 8, 21, 1], [1, 19, 21, 1], [6, "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"]],
        shovel: [[6, "M2 22v-5l5-5 5 5-5 5z"], [6, "M9.5 14.5 16 8"], [6, "m17 2 5 5-.5.5a3.53 3.53 0 0 1-5 0s0 0 0 0a3.53 3.53 0 0 1 0-5L17 2"]],
        "shower-head": [[6, "m4 4 2.5 2.5"], [6, "M13.5 6.5a4.95 4.95 0 0 0-7 7"], [6, "M15 5 5 15"], [6, "M14 17v.01"], [6, "M10 16v.01"], [6, "M13 13v.01"], [6, "M16 10v.01"], [6, "M11 20v.01"], [6, "M17 14v.01"], [6, "M20 11v.01"]],
        shrink: [[6, "m15 15 6 6m-6-6v4.8m0-4.8h4.8"], [6, "M9 19.8V15m0 0H4.2M9 15l-6 6"], [6, "M15 4.2V9m0 0h4.8M15 9l6-6"], [6, "M9 4.2V9m0 0H4.2M9 9 3 3"]],
        shrub: [[6, "M12 22v-7l-2-2"], [6, "M17 8v.8A6 6 0 0 1 13.8 20v0H10v0A6.5 6.5 0 0 1 7 8h0a5 5 0 0 1 10 0Z"], [6, "m14 14-2 2"]],
        shuffle: [[6, "M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22"], [6, "m18 2 4 4-4 4"], [6, "M2 6h1.9c1.5 0 2.9.9 3.6 2.2"], [6, "M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8"], [6, "m18 14 4 4-4 4"]],
        sidebar: [[5, 3, 3, 18, 18, 2, 2], [0, 9, 3, 9, 21]],
        "sidebar-close": [[5, 3, 3, 18, 18, 2, 2], [6, "M9 3v18"], [6, "m16 15-3-3 3-3"]],
        "sidebar-open": [[5, 3, 3, 18, 18, 2, 2], [6, "M9 3v18"], [6, "m14 9 3 3-3 3"]],
        sigma: [[6, "M18 7V4H6l6 8-6 8h12v-3"]],
        "sigma-square": [[5, 3, 3, 18, 18, 2], [6, "M16 8.9V7H8l4 5-4 5h8v-1.9"]],
        signal: [[6, "M2 20h.01"], [6, "M7 20v-4"], [6, "M12 20v-8"], [6, "M17 20V8"], [6, "M22 4v16"]],
        "signal-high": [[6, "M2 20h.01"], [6, "M7 20v-4"], [6, "M12 20v-8"], [6, "M17 20V8"]],
        "signal-low": [[6, "M2 20h.01"], [6, "M7 20v-4"]],
        "signal-medium": [[6, "M2 20h.01"], [6, "M7 20v-4"], [6, "M12 20v-8"]],
        "signal-zero": [[6, "M2 20h.01"]],
        signpost: [[6, "M12 3v3"], [6, "M18.5 13h-13L2 9.5 5.5 6h13L22 9.5Z"], [6, "M12 13v8"]],
        "signpost-big": [[6, "M10 9H4L2 7l2-2h6"], [6, "M14 5h6l2 2-2 2h-6"], [6, "M10 22V4a2 2 0 1 1 4 0v18"], [6, "M8 22h8"]],
        siren: [[6, "M7 12a5 5 0 0 1 5-5v0a5 5 0 0 1 5 5v6H7v-6Z"], [6, "M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2H5v-2Z"], [6, "M21 12h1"], [6, "M18.5 4.5 18 5"], [6, "M2 12h1"], [6, "M12 2v1"], [6, "m4.929 4.929.707.707"], [6, "M12 12v6"]],
        "skip-back": [[3, "19 20 9 12 19 4 19 20"], [0, 5, 19, 5, 5]],
        "skip-forward": [[3, "5 4 15 12 5 20 5 4"], [0, 19, 5, 19, 19]],
        skull: [[1, 9, 12, 1], [1, 15, 12, 1], [6, "M8 20v2h8v-2"], [6, "m12.5 17-.5-1-.5 1h1z"], [6, "M16 20a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20"]],
        slack: [[5, 13, 2, 3, 8, 1.5], [6, "M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5"], [5, 8, 14, 3, 8, 1.5], [6, "M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5"], [5, 14, 13, 8, 3, 1.5], [6, "M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5"], [5, 2, 8, 8, 3, 1.5], [6, "M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5"]],
        slash: [[6, "M22 2 2 22"]],
        slice: [[6, "m8 14-6 6h9v-3"], [6, "M18.37 3.63 8 14l3 3L21.37 6.63a2.12 2.12 0 1 0-3-3Z"]],
        sliders: [[0, 4, 21, 4, 14], [0, 4, 10, 4, 3], [0, 12, 21, 12, 12], [0, 12, 8, 12, 3], [0, 20, 21, 20, 16], [0, 20, 12, 20, 3], [0, 2, 14, 6, 14], [0, 10, 8, 14, 8], [0, 18, 16, 22, 16]],
        "sliders-horizontal": [[0, 21, 4, 14, 4], [0, 10, 4, 3, 4], [0, 21, 12, 12, 12], [0, 8, 12, 3, 12], [0, 21, 20, 16, 20], [0, 12, 20, 3, 20], [0, 14, 2, 14, 6], [0, 8, 10, 8, 14], [0, 16, 18, 16, 22]],
        smartphone: [[5, 5, 2, 14, 20, 2, 2], [6, "M12 18h.01"]],
        "smartphone-charging": [[5, 5, 2, 14, 20, 2, 2], [6, "M12.667 8 10 12h4l-2.667 4"]],
        "smartphone-nfc": [[5, 2, 6, 7, 12, 1], [6, "M13 8.32a7.43 7.43 0 0 1 0 7.36"], [6, "M16.46 6.21a11.76 11.76 0 0 1 0 11.58"], [6, "M19.91 4.1a15.91 15.91 0 0 1 .01 15.8"]],
        smile: [[1, 12, 12, 10], [6, "M8 14s1.5 2 4 2 4-2 4-2"], [0, 9, 9, 9.01, 9], [0, 15, 9, 15.01, 9]],
        "smile-plus": [[6, "M22 11v1a10 10 0 1 1-9-10"], [6, "M8 14s1.5 2 4 2 4-2 4-2"], [0, 9, 9, 9.01, 9], [0, 15, 9, 15.01, 9], [6, "M16 5h6"], [6, "M19 2v6"]],
        snail: [[6, "M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0"], [1, 10, 13, 8], [6, "M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6"], [6, "M18 3 19.1 5.2"], [6, "M22 3 20.9 5.2"]],
        snowflake: [[0, 2, 12, 22, 12], [0, 12, 2, 12, 22], [6, "m20 16-4-4 4-4"], [6, "m4 8 4 4-4 4"], [6, "m16 4-4 4-4-4"], [6, "m8 20 4-4 4 4"]],
        sofa: [[6, "M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3"], [6, "M2 11v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H6v-2a2 2 0 0 0-4 0Z"], [6, "M4 18v2"], [6, "M20 18v2"], [6, "M12 4v9"]],
        "sort-asc": [[6, "m3 8 4-4 4 4"], [6, "M7 4v16"], [6, "M11 12h4"], [6, "M11 16h7"], [6, "M11 20h10"]],
        "sort-desc": [[6, "m3 16 4 4 4-4"], [6, "M7 20V4"], [6, "M11 4h10"], [6, "M11 8h7"], [6, "M11 12h4"]],
        soup: [[6, "M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z"], [6, "M7 21h10"], [6, "M19.5 12 22 6"], [6, "M16.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.73 1.62"], [6, "M11.25 3c.27.1.8.53.74 1.36-.05.83-.93 1.2-.98 2.02-.06.78.33 1.24.72 1.62"], [6, "M6.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.74 1.62"]],
        space: [[6, "M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1"]],
        spade: [[6, "M5 9c-1.5 1.5-3 3.2-3 5.5A5.5 5.5 0 0 0 7.5 20c1.8 0 3-.5 4.5-2 1.5 1.5 2.7 2 4.5 2a5.5 5.5 0 0 0 5.5-5.5c0-2.3-1.5-4-3-5.5l-7-7-7 7Z"], [6, "M12 18v4"]],
        sparkle: [[6, "m12 3-1.9 5.8a2 2 0 0 1-1.287 1.288L3 12l5.8 1.9a2 2 0 0 1 1.288 1.287L12 21l1.9-5.8a2 2 0 0 1 1.287-1.288L21 12l-5.8-1.9a2 2 0 0 1-1.288-1.287Z"]],
        sparkles: [[6, "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"], [6, "M5 3v4"], [6, "M19 17v4"], [6, "M3 5h4"], [6, "M17 19h4"]],
        speaker: [[5, 4, 2, 16, 20, 2, 2], [1, 12, 14, 4], [0, 12, 6, 12.01, 6]],
        speech: [[6, "M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.054 1 4.55a5.77 5.77 0 0 1 .029 2.758L2 20"], [6, "M19.8 17.8a7.5 7.5 0 0 0 .003-10.603"], [6, "M17 15a3.5 3.5 0 0 0-.025-4.975"]],
        "spell-check": [[6, "m6 16 6-12 6 12"], [6, "M8 12h8"], [6, "m16 20 2 2 4-4"]],
        "spell-check-2": [[6, "m6 16 6-12 6 12"], [6, "M8 12h8"], [6, "M4 21c1.1 0 1.1-1 2.3-1s1.1 1 2.3 1c1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1"]],
        spline: [[1, 19, 5, 2], [1, 5, 19, 2], [6, "M5 17A12 12 0 0 1 17 5"]],
        split: [[6, "M16 3h5v5"], [6, "M8 3H3v5"], [6, "M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3"], [6, "m15 9 6-6"]],
        "split-square-horizontal": [[6, "M8 19H5c-1 0-2-1-2-2V7c0-1 1-2 2-2h3"], [6, "M16 5h3c1 0 2 1 2 2v10c0 1-1 2-2 2h-3"], [0, 12, 4, 12, 20]],
        "split-square-vertical": [[6, "M5 8V5c0-1 1-2 2-2h10c1 0 2 1 2 2v3"], [6, "M19 16v3c0 1-1 2-2 2H7c-1 0-2-1-2-2v-3"], [0, 4, 12, 20, 12]],
        "spray-can": [[6, "M3 3h.01"], [6, "M7 5h.01"], [6, "M11 7h.01"], [6, "M3 7h.01"], [6, "M7 9h.01"], [6, "M3 11h.01"], [5, 15, 5, 4, 4], [6, "m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2"], [6, "m13 14 8-2"], [6, "m13 19 8-2"]],
        sprout: [[6, "M7 20h10"], [6, "M10 20c5.5-2.5.8-6.4 3-10"], [6, "M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"], [6, "M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"]],
        square: [[5, 3, 3, 18, 18, 2]],
        "square-asterisk": [[5, 3, 3, 18, 18, 2], [6, "M12 8v8"], [6, "m8.5 14 7-4"], [6, "m8.5 10 7 4"]],
        "square-code": [[5, 3, 3, 18, 18, 2], [6, "m10 10-2 2 2 2"], [6, "m14 14 2-2-2-2"]],
        "square-dashed-bottom": [[6, "M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2"], [6, "M9 21h1"], [6, "M14 21h1"]],
        "square-dashed-bottom-code": [[6, "m10 10-2 2 2 2"], [6, "m14 14 2-2-2-2"], [6, "M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2"], [6, "M9 21h1"], [6, "M14 21h1"]],
        "square-dot": [[5, 3, 3, 18, 18, 2], [1, 12, 12, 1]],
        "square-equal": [[5, 3, 3, 18, 18, 2], [6, "M7 10h10"], [6, "M7 14h10"]],
        "square-gantt": [[5, 3, 3, 18, 18, 2], [6, "M9 8h7"], [6, "M8 12h6"], [6, "M11 16h5"]],
        "square-kanban": [[5, 3, 3, 18, 18, 2], [6, "M8 7v7"], [6, "M12 7v4"], [6, "M16 7v9"]],
        "square-kanban-dashed": [[6, "M8 7v7"], [6, "M12 7v4"], [6, "M16 7v9"], [6, "M5 3a2 2 0 0 0-2 2"], [6, "M9 3h1"], [6, "M14 3h1"], [6, "M19 3a2 2 0 0 1 2 2"], [6, "M21 9v1"], [6, "M21 14v1"], [6, "M21 19a2 2 0 0 1-2 2"], [6, "M14 21h1"], [6, "M9 21h1"], [6, "M5 21a2 2 0 0 1-2-2"], [6, "M3 14v1"], [6, "M3 9v1"]],
        "square-slash": [[5, 3, 3, 18, 18, 2], [0, 9, 15, 15, 9]],
        "square-stack": [[6, "M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2"], [6, "M10 16c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2"], [5, 14, 14, 8, 8, 2]],
        squirrel: [[6, "M18 6a4 4 0 0 0-4 4 7 7 0 0 0-7 7c0-5 4-5 4-10.5a4.5 4.5 0 1 0-9 0 2.5 2.5 0 0 0 5 0C7 10 3 11 3 17c0 2.8 2.2 5 5 5h10"], [6, "M16 20c0-1.7 1.3-3 3-3h1a2 2 0 0 0 2-2v-2a4 4 0 0 0-4-4V4"], [6, "M15.2 22a3 3 0 0 0-2.2-5"], [6, "M18 13h.01"]],
        stamp: [[6, "M5 22h14"], [6, "M19.27 13.73A2.5 2.5 0 0 0 17.5 13h-11A2.5 2.5 0 0 0 4 15.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1.5c0-.66-.26-1.3-.73-1.77Z"], [6, "M14 13V8.5C14 7 15 7 15 5a3 3 0 0 0-3-3c-1.66 0-3 1-3 3s1 2 1 3.5V13"]],
        star: [[3, "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"]],
        "star-half": [[6, "M12 17.8 5.8 21 7 14.1 2 9.3l7-1L12 2"]],
        "star-off": [[6, "M8.34 8.34 2 9.27l5 4.87L5.82 21 12 17.77 18.18 21l-.59-3.43"], [6, "M18.42 12.76 22 9.27l-6.91-1L12 2l-1.44 2.91"], [0, 2, 2, 22, 22]],
        stars: [[6, "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"], [6, "M5 3v4"], [6, "M19 17v4"], [6, "M3 5h4"], [6, "M17 19h4"]],
        "step-back": [[0, 18, 20, 18, 4], [3, "14,20 4,12 14,4"]],
        "step-forward": [[0, 6, 4, 6, 20], [3, "10,4 20,12 10,20"]],
        stethoscope: [[6, "M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"], [6, "M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"], [1, 20, 10, 2]],
        sticker: [[6, "M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z"], [6, "M15 3v6h6"], [6, "M10 16s.8 1 2 1c1.3 0 2-1 2-1"], [6, "M8 13h0"], [6, "M16 13h0"]],
        "sticky-note": [[6, "M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z"], [6, "M15 3v6h6"]],
        "stop-circle": [[1, 12, 12, 10], [5, 9, 9, 6, 6]],
        store: [[6, "m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"], [6, "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"], [6, "M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"], [6, "M2 7h20"], [6, "M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7"]],
        "stretch-horizontal": [[5, 2, 4, 20, 6, 2], [5, 2, 14, 20, 6, 2]],
        "stretch-vertical": [[5, 4, 2, 6, 20, 2], [5, 14, 2, 6, 20, 2]],
        strikethrough: [[6, "M16 4H9a3 3 0 0 0-2.83 4"], [6, "M14 12a4 4 0 0 1 0 8H6"], [0, 4, 12, 20, 12]],
        subscript: [[6, "m4 5 8 8"], [6, "m12 5-8 8"], [6, "M20 19h-4c0-1.5.44-2 1.5-2.5S20 15.33 20 14c0-.47-.17-.93-.48-1.29a2.11 2.11 0 0 0-2.62-.44c-.42.24-.74.62-.9 1.07"]],
        subtitles: [[6, "M7 13h4"], [6, "M15 13h2"], [6, "M7 9h2"], [6, "M13 9h4"], [6, "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z"]],
        sun: [[1, 12, 12, 4], [6, "M12 2v2"], [6, "M12 20v2"], [6, "m4.93 4.93 1.41 1.41"], [6, "m17.66 17.66 1.41 1.41"], [6, "M2 12h2"], [6, "M20 12h2"], [6, "m6.34 17.66-1.41 1.41"], [6, "m19.07 4.93-1.41 1.41"]],
        "sun-dim": [[1, 12, 12, 4], [6, "M12 4h.01"], [6, "M20 12h.01"], [6, "M12 20h.01"], [6, "M4 12h.01"], [6, "M17.657 6.343h.01"], [6, "M17.657 17.657h.01"], [6, "M6.343 17.657h.01"], [6, "M6.343 6.343h.01"]],
        "sun-medium": [[1, 12, 12, 4], [6, "M12 3v1"], [6, "M12 20v1"], [6, "M3 12h1"], [6, "M20 12h1"], [6, "m18.364 5.636-.707.707"], [6, "m6.343 17.657-.707.707"], [6, "m5.636 5.636.707.707"], [6, "m17.657 17.657.707.707"]],
        "sun-moon": [[6, "M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4"], [6, "M12 2v2"], [6, "M12 20v2"], [6, "m4.9 4.9 1.4 1.4"], [6, "m17.7 17.7 1.4 1.4"], [6, "M2 12h2"], [6, "M20 12h2"], [6, "m6.3 17.7-1.4 1.4"], [6, "m19.1 4.9-1.4 1.4"]],
        "sun-snow": [[6, "M10 9a3 3 0 1 0 0 6"], [6, "M2 12h1"], [6, "M14 21V3"], [6, "M10 4V3"], [6, "M10 21v-1"], [6, "m3.64 18.36.7-.7"], [6, "m4.34 6.34-.7-.7"], [6, "M14 12h8"], [6, "m17 4-3 3"], [6, "m14 17 3 3"], [6, "m21 15-3-3 3-3"]],
        sunrise: [[6, "M12 2v8"], [6, "m4.93 10.93 1.41 1.41"], [6, "M2 18h2"], [6, "M20 18h2"], [6, "m19.07 10.93-1.41 1.41"], [6, "M22 22H2"], [6, "m8 6 4-4 4 4"], [6, "M16 18a4 4 0 0 0-8 0"]],
        sunset: [[6, "M12 10V2"], [6, "m4.93 10.93 1.41 1.41"], [6, "M2 18h2"], [6, "M20 18h2"], [6, "m19.07 10.93-1.41 1.41"], [6, "M22 22H2"], [6, "m16 6-4 4-4-4"], [6, "M16 18a4 4 0 0 0-8 0"]],
        superscript: [[6, "m4 19 8-8"], [6, "m12 19-8-8"], [6, "M20 12h-4c0-1.5.442-2 1.5-2.5S20 8.334 20 7.002c0-.472-.17-.93-.484-1.29a2.105 2.105 0 0 0-2.617-.436c-.42.239-.738.614-.899 1.06"]],
        "swiss-franc": [[6, "M10 21V3h8"], [6, "M6 16h9"], [6, "M10 9.5h7"]],
        "switch-camera": [[6, "M11 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5"], [6, "M13 5h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5"], [1, 12, 12, 3], [6, "m18 22-3-3 3-3"], [6, "m6 2 3 3-3 3"]],
        sword: [[2, "14.5 17.5 3 6 3 3 6 3 17.5 14.5"], [0, 13, 19, 19, 13], [0, 16, 16, 20, 20], [0, 19, 21, 21, 19]],
        swords: [[2, "14.5 17.5 3 6 3 3 6 3 17.5 14.5"], [0, 13, 19, 19, 13], [0, 16, 16, 20, 20], [0, 19, 21, 21, 19], [2, "14.5 6.5 18 3 21 3 21 6 17.5 9.5"], [0, 5, 14, 9, 18], [0, 7, 17, 4, 20], [0, 3, 19, 5, 21]],
        syringe: [[6, "m18 2 4 4"], [6, "m17 7 3-3"], [6, "M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5"], [6, "m9 11 4 4"], [6, "m5 19-3 3"], [6, "m14 4 6 6"]],
        table: [[6, "M12 3v18"], [5, 3, 3, 18, 18, 2], [6, "M3 9h18"], [6, "M3 15h18"]],
        "table-2": [[6, "M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"]],
        "table-properties": [[6, "M15 3v18"], [5, 3, 3, 18, 18, 2], [6, "M21 9H3"], [6, "M21 15H3"]],
        tablet: [[5, 4, 2, 16, 20, 2, 2], [0, 12, 18, 12.01, 18]],
        "tablet-smartphone": [[5, 3, 8, 10, 14, 2], [6, "M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4"], [6, "M8 18h.01"]],
        tablets: [[1, 7, 7, 5], [1, 17, 17, 5], [6, "M12 17h10"], [6, "m3.46 10.54 7.08-7.08"]],
        tag: [[6, "M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"], [6, "M7 7h.01"]],
        tags: [[6, "M9 5H2v7l6.29 6.29c.94.94 2.48.94 3.42 0l3.58-3.58c.94-.94.94-2.48 0-3.42L9 5Z"], [6, "M6 9.01V9"], [6, "m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19"]],
        "tally-1": [[6, "M4 4v16"]],
        "tally-2": [[6, "M4 4v16"], [6, "M9 4v16"]],
        "tally-3": [[6, "M4 4v16"], [6, "M9 4v16"], [6, "M14 4v16"]],
        "tally-4": [[6, "M4 4v16"], [6, "M9 4v16"], [6, "M14 4v16"], [6, "M19 4v16"]],
        "tally-5": [[6, "M4 4v16"], [6, "M9 4v16"], [6, "M14 4v16"], [6, "M19 4v16"], [6, "M22 6 2 18"]],
        tangent: [[1, 17, 4, 2], [6, "M15.59 5.41 5.41 15.59"], [1, 4, 17, 2], [6, "M12 22s-4-9-1.5-11.5S22 12 22 12"]],
        target: [[1, 12, 12, 10], [1, 12, 12, 6], [1, 12, 12, 2]],
        tent: [[6, "M3.5 21 14 3"], [6, "M20.5 21 10 3"], [6, "M15.5 21 12 15l-3.5 6"], [6, "M2 21h20"]],
        "tent-tree": [[1, 4, 4, 2], [6, "m14 5 3-3 3 3"], [6, "m14 10 3-3 3 3"], [6, "M17 14V2"], [6, "M17 14H7l-5 8h20Z"], [6, "M8 14v8"], [6, "m9 14 5 8"]],
        terminal: [[2, "4 17 10 11 4 5"], [0, 12, 19, 20, 19]],
        "terminal-square": [[6, "m7 11 2-2-2-2"], [6, "M11 13h4"], [5, 3, 3, 18, 18, 2, 2]],
        "test-tube": [[6, "M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5h0c-1.4 0-2.5-1.1-2.5-2.5V2"], [6, "M8.5 2h7"], [6, "M14.5 16h-5"]],
        "test-tube-2": [[6, "M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01v0a2.83 2.83 0 0 1 0-4L17 3"], [6, "m16 2 6 6"], [6, "M12 16H4"]],
        "test-tubes": [[6, "M9 2v17.5A2.5 2.5 0 0 1 6.5 22v0A2.5 2.5 0 0 1 4 19.5V2"], [6, "M20 2v17.5a2.5 2.5 0 0 1-2.5 2.5v0a2.5 2.5 0 0 1-2.5-2.5V2"], [6, "M3 2h7"], [6, "M14 2h7"], [6, "M9 16H4"], [6, "M20 16h-5"]],
        text: [[6, "M17 6.1H3"], [6, "M21 12.1H3"], [6, "M15.1 18H3"]],
        "text-cursor": [[6, "M17 22h-1a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1"], [6, "M7 22h1a4 4 0 0 0 4-4v-1"], [6, "M7 2h1a4 4 0 0 1 4 4v1"]],
        "text-cursor-input": [[6, "M5 4h1a3 3 0 0 1 3 3 3 3 0 0 1 3-3h1"], [6, "M13 20h-1a3 3 0 0 1-3-3 3 3 0 0 1-3 3H5"], [6, "M5 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1"], [6, "M13 8h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7"], [6, "M9 7v10"]],
        "text-quote": [[6, "M17 6H3"], [6, "M21 12H8"], [6, "M21 18H8"], [6, "M3 12v6"]],
        "text-select": [[6, "M5 3a2 2 0 0 0-2 2"], [6, "M19 3a2 2 0 0 1 2 2"], [6, "M21 19a2 2 0 0 1-2 2"], [6, "M5 21a2 2 0 0 1-2-2"], [6, "M9 3h1"], [6, "M9 21h1"], [6, "M14 3h1"], [6, "M14 21h1"], [6, "M3 9v1"], [6, "M21 9v1"], [6, "M3 14v1"], [6, "M21 14v1"], [0, 7, 8, 15, 8], [0, 7, 12, 17, 12], [0, 7, 16, 13, 16]],
        "text-selection": [[6, "M5 3a2 2 0 0 0-2 2"], [6, "M19 3a2 2 0 0 1 2 2"], [6, "M21 19a2 2 0 0 1-2 2"], [6, "M5 21a2 2 0 0 1-2-2"], [6, "M9 3h1"], [6, "M9 21h1"], [6, "M14 3h1"], [6, "M14 21h1"], [6, "M3 9v1"], [6, "M21 9v1"], [6, "M3 14v1"], [6, "M21 14v1"], [0, 7, 8, 15, 8], [0, 7, 12, 17, 12], [0, 7, 16, 13, 16]],
        theater: [[6, "M2 10s3-3 3-8"], [6, "M22 10s-3-3-3-8"], [6, "M10 2c0 4.4-3.6 8-8 8"], [6, "M14 2c0 4.4 3.6 8 8 8"], [6, "M2 10s2 2 2 5"], [6, "M22 10s-2 2-2 5"], [6, "M8 15h8"], [6, "M2 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1"], [6, "M14 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1"]],
        thermometer: [[6, "M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"]],
        "thermometer-snowflake": [[6, "M2 12h10"], [6, "M9 4v16"], [6, "m3 9 3 3-3 3"], [6, "M12 6 9 9 6 6"], [6, "m6 18 3-3 1.5 1.5"], [6, "M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"]],
        "thermometer-sun": [[6, "M12 9a4 4 0 0 0-2 7.5"], [6, "M12 3v2"], [6, "m6.6 18.4-1.4 1.4"], [6, "M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"], [6, "M4 13H2"], [6, "M6.34 7.34 4.93 5.93"]],
        "thumbs-down": [[6, "M17 14V2"], [6, "M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z"]],
        "thumbs-up": [[6, "M7 10v12"], [6, "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"]],
        ticket: [[6, "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"], [6, "M13 5v2"], [6, "M13 17v2"], [6, "M13 11v2"]],
        timer: [[0, 10, 2, 14, 2], [0, 12, 14, 15, 11], [1, 12, 14, 8]],
        "timer-off": [[6, "M10 2h4"], [6, "M4.6 11a8 8 0 0 0 1.7 8.7 8 8 0 0 0 8.7 1.7"], [6, "M7.4 7.4a8 8 0 0 1 10.3 1 8 8 0 0 1 .9 10.2"], [6, "m2 2 20 20"], [6, "M12 12v-2"]],
        "timer-reset": [[6, "M10 2h4"], [6, "M12 14v-4"], [6, "M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6"], [6, "M9 17H4v5"]],
        "toggle-left": [[5, 2, 6, 20, 12, 6, 6], [1, 8, 12, 2]],
        "toggle-right": [[5, 2, 6, 20, 12, 6, 6], [1, 16, 12, 2]],
        tornado: [[6, "M21 4H3"], [6, "M18 8H6"], [6, "M19 12H9"], [6, "M16 16h-6"], [6, "M11 20H9"]],
        torus: [[4, 12, 11, 3, 2], [4, 12, 12.5, 10, 8.5]],
        touchpad: [[5, 2, 4, 20, 16, 2], [6, "M2 14h20"], [6, "M12 20v-6"]],
        "touchpad-off": [[6, "M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16"], [6, "M2 14h12"], [6, "M22 14h-2"], [6, "M12 20v-6"], [6, "m2 2 20 20"], [6, "M22 16V6a2 2 0 0 0-2-2H10"]],
        "tower-control": [[6, "M18.2 12.27 20 6H4l1.8 6.27a1 1 0 0 0 .95.73h10.5a1 1 0 0 0 .96-.73Z"], [6, "M8 13v9"], [6, "M16 22v-9"], [6, "m9 6 1 7"], [6, "m15 6-1 7"], [6, "M12 6V2"], [6, "M13 2h-2"]],
        "toy-brick": [[5, 3, 8, 18, 12, 1], [6, "M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3"], [6, "M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3"]],
        tractor: [[6, "M3 4h9l1 7"], [6, "M4 11V4"], [6, "M8 10V4"], [6, "M18 5c-.6 0-1 .4-1 1v5.6"], [6, "m10 11 11 .9c.6 0 .9.5.8 1.1l-.8 5h-1"], [1, 7, 15, .5], [1, 7, 15, 5], [6, "M16 18h-5"], [1, 18, 18, 2]],
        "traffic-cone": [[6, "M9.3 6.2a4.55 4.55 0 0 0 5.4 0"], [6, "M7.9 10.7c.9.8 2.4 1.3 4.1 1.3s3.2-.5 4.1-1.3"], [6, "M13.9 3.5a1.93 1.93 0 0 0-3.8-.1l-3 10c-.1.2-.1.4-.1.6 0 1.7 2.2 3 5 3s5-1.3 5-3c0-.2 0-.4-.1-.5Z"], [6, "m7.5 12.2-4.7 2.7c-.5.3-.8.7-.8 1.1s.3.8.8 1.1l7.6 4.5c.9.5 2.1.5 3 0l7.6-4.5c.7-.3 1-.7 1-1.1s-.3-.8-.8-1.1l-4.7-2.8"]],
        train: [[5, 4, 3, 16, 16, 2], [6, "M4 11h16"], [6, "M12 3v8"], [6, "m8 19-2 3"], [6, "m18 22-2-3"], [6, "M8 15h0"], [6, "M16 15h0"]],
        "train-front": [[6, "M8 3.1V7a4 4 0 0 0 8 0V3.1"], [6, "m9 15-1-1"], [6, "m15 15 1-1"], [6, "M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Z"], [6, "m8 19-2 3"], [6, "m16 19 2 3"]],
        "train-front-tunnel": [[6, "M2 22V12a10 10 0 1 1 20 0v10"], [6, "M15 6.8v1.4a3 2.8 0 1 1-6 0V6.8"], [6, "M10 15h.01"], [6, "M14 15h.01"], [6, "M10 19a4 4 0 0 1-4-4v-3a6 6 0 1 1 12 0v3a4 4 0 0 1-4 4Z"], [6, "m9 19-2 3"], [6, "m15 19 2 3"]],
        "train-track": [[6, "M2 17 17 2"], [6, "m2 14 8 8"], [6, "m5 11 8 8"], [6, "m8 8 8 8"], [6, "m11 5 8 8"], [6, "m14 2 8 8"], [6, "M7 22 22 7"]],
        "tram-front": [[5, 4, 3, 16, 16, 2], [6, "M4 11h16"], [6, "M12 3v8"], [6, "m8 19-2 3"], [6, "m18 22-2-3"], [6, "M8 15h0"], [6, "M16 15h0"]],
        trash: [[6, "M3 6h18"], [6, "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"], [6, "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"]],
        "trash-2": [[6, "M3 6h18"], [6, "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"], [6, "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"], [0, 10, 11, 10, 17], [0, 14, 11, 14, 17]],
        "tree-deciduous": [[6, "M8 19a4 4 0 0 1-2.24-7.32A3.5 3.5 0 0 1 9 6.03V6a3 3 0 1 1 6 0v.04a3.5 3.5 0 0 1 3.24 5.65A4 4 0 0 1 16 19Z"], [6, "M12 19v3"]],
        "tree-pine": [[6, "m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z"], [6, "M12 22v-3"]],
        trees: [[6, "M10 10v.2A3 3 0 0 1 8.9 16v0H5v0h0a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z"], [6, "M7 16v6"], [6, "M13 19v3"], [6, "M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5"]],
        trello: [[5, 3, 3, 18, 18, 2, 2], [5, 7, 7, 3, 9], [5, 14, 7, 3, 5]],
        "trending-down": [[2, "22 17 13.5 8.5 8.5 13.5 2 7"], [2, "16 17 22 17 22 11"]],
        "trending-up": [[2, "22 7 13.5 15.5 8.5 10.5 2 17"], [2, "16 7 22 7 22 13"]],
        triangle: [[6, "M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"]],
        "triangle-right": [[6, "M22 18a2 2 0 0 1-2 2H3c-1.1 0-1.3-.6-.4-1.3L20.4 4.3c.9-.7 1.6-.4 1.6.7Z"]],
        trophy: [[6, "M6 9H4.5a2.5 2.5 0 0 1 0-5H6"], [6, "M18 9h1.5a2.5 2.5 0 0 0 0-5H18"], [6, "M4 22h16"], [6, "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"], [6, "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"], [6, "M18 2H6v7a6 6 0 0 0 12 0V2Z"]],
        truck: [[6, "M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11"], [6, "M14 9h4l4 4v4c0 .6-.4 1-1 1h-2"], [1, 7, 18, 2], [6, "M15 18H9"], [1, 17, 18, 2]],
        turtle: [[6, "m12 10 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a8 8 0 1 0-16 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3l2-4h4Z"], [6, "M4.82 7.9 8 10"], [6, "M15.18 7.9 12 10"], [6, "M16.93 10H20a2 2 0 0 1 0 4H2"]],
        tv: [[5, 2, 7, 20, 15, 2, 2], [2, "17 2 12 7 7 2"]],
        "tv-2": [[6, "M7 21h10"], [5, 2, 3, 20, 14, 2]],
        twitch: [[6, "M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"]],
        twitter: [[6, "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"]],
        type: [[2, "4 7 4 4 20 4 20 7"], [0, 9, 20, 15, 20], [0, 12, 4, 12, 20]],
        umbrella: [[6, "M22 12a10.06 10.06 1 0 0-20 0Z"], [6, "M12 12v8a2 2 0 0 0 4 0"], [6, "M12 2v1"]],
        "umbrella-off": [[6, "M12 2v1"], [6, "M15.5 21a1.85 1.85 0 0 1-3.5-1v-8H2a10 10 0 0 1 3.428-6.575"], [6, "M17.5 12H22A10 10 0 0 0 9.004 3.455"], [6, "m2 2 20 20"]],
        underline: [[6, "M6 4v6a6 6 0 0 0 12 0V4"], [0, 4, 20, 20, 20]],
        undo: [[6, "M3 7v6h6"], [6, "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"]],
        "undo-2": [[6, "M9 14 4 9l5-5"], [6, "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11"]],
        "undo-dot": [[1, 12, 17, 1], [6, "M3 7v6h6"], [6, "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"]],
        "unfold-horizontal": [[6, "M16 12h6"], [6, "M8 12H2"], [6, "M12 2v2"], [6, "M12 8v2"], [6, "M12 14v2"], [6, "M12 20v2"], [6, "m19 15 3-3-3-3"], [6, "m5 9-3 3 3 3"]],
        "unfold-vertical": [[6, "M12 22v-6"], [6, "M12 8V2"], [6, "M4 12H2"], [6, "M10 12H8"], [6, "M16 12h-2"], [6, "M22 12h-2"], [6, "m15 19-3 3-3-3"], [6, "m15 5-3-3-3 3"]],
        ungroup: [[5, 5, 4, 8, 6, 1], [5, 11, 14, 8, 6, 1]],
        unlink: [[6, "m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71"], [6, "m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71"], [0, 8, 2, 8, 5], [0, 2, 8, 5, 8], [0, 16, 19, 16, 22], [0, 19, 16, 22, 16]],
        "unlink-2": [[6, "M15 7h2a5 5 0 0 1 0 10h-2m-6 0H7A5 5 0 0 1 7 7h2"]],
        unlock: [[5, 3, 11, 18, 11, 2, 2], [6, "M7 11V7a5 5 0 0 1 9.9-1"]],
        "unlock-keyhole": [[1, 12, 16, 1], [5, 3, 10, 18, 12, 2], [6, "M7 10V7a5 5 0 0 1 9.33-2.5"]],
        unplug: [[6, "m19 5 3-3"], [6, "m2 22 3-3"], [6, "M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"], [6, "M7.5 13.5 10 11"], [6, "M10.5 16.5 13 14"], [6, "m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z"]],
        upload: [[6, "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"], [2, "17 8 12 3 7 8"], [0, 12, 3, 12, 15]],
        "upload-cloud": [[6, "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"], [6, "M12 12v9"], [6, "m16 16-4-4-4 4"]],
        usb: [[1, 10, 7, 1], [1, 4, 20, 1], [6, "M4.7 19.3 19 5"], [6, "m21 3-3 1 2 2Z"], [6, "M9.26 7.68 5 12l2 5"], [6, "m10 14 5 2 3.5-3.5"], [6, "m18 12 1-1 1 1-1 1Z"]],
        user: [[6, "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"], [1, 12, 7, 4]],
        "user-2": [[1, 12, 8, 5], [6, "M20 21a8 8 0 1 0-16 0"]],
        "user-check": [[6, "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"], [1, 9, 7, 4], [2, "16 11 18 13 22 9"]],
        "user-check-2": [[6, "M14 19a6 6 0 0 0-12 0"], [1, 8, 9, 4], [2, "16 11 18 13 22 9"]],
        "user-circle": [[1, 12, 12, 10], [1, 12, 10, 3], [6, "M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"]],
        "user-circle-2": [[6, "M18 20a6 6 0 0 0-12 0"], [1, 12, 10, 4], [1, 12, 12, 10]],
        "user-cog": [[1, 18, 15, 3], [1, 9, 7, 4], [6, "M10 15H6a4 4 0 0 0-4 4v2"], [6, "m21.7 16.4-.9-.3"], [6, "m15.2 13.9-.9-.3"], [6, "m16.6 18.7.3-.9"], [6, "m19.1 12.2.3-.9"], [6, "m19.6 18.7-.4-1"], [6, "m16.8 12.3-.4-1"], [6, "m14.3 16.6 1-.4"], [6, "m20.7 13.8 1-.4"]],
        "user-cog-2": [[1, 18, 15, 3], [1, 8, 9, 4], [6, "M10.5 13.5A6 6 0 0 0 2 19"], [6, "m21.7 16.4-.9-.3"], [6, "m15.2 13.9-.9-.3"], [6, "m16.6 18.7.3-.9"], [6, "m19.1 12.2.3-.9"], [6, "m19.6 18.7-.4-1"], [6, "m16.8 12.3-.4-1"], [6, "m14.3 16.6 1-.4"], [6, "m20.7 13.8 1-.4"]],
        "user-minus": [[6, "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"], [1, 9, 7, 4], [0, 22, 11, 16, 11]],
        "user-minus-2": [[6, "M14 19a6 6 0 0 0-12 0"], [1, 8, 9, 4], [0, 22, 11, 16, 11]],
        "user-plus": [[6, "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"], [1, 9, 7, 4], [0, 19, 8, 19, 14], [0, 22, 11, 16, 11]],
        "user-plus-2": [[6, "M14 19a6 6 0 0 0-12 0"], [1, 8, 9, 4], [0, 19, 8, 19, 14], [0, 22, 11, 16, 11]],
        "user-square": [[5, 3, 3, 18, 18, 2], [1, 12, 10, 3], [6, "M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"]],
        "user-square-2": [[6, "M18 21a6 6 0 0 0-12 0"], [1, 12, 11, 4], [5, 3, 3, 18, 18, 2]],
        "user-x": [[6, "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"], [1, 9, 7, 4], [0, 17, 8, 22, 13], [0, 22, 8, 17, 13]],
        "user-x2": [[6, "M14 19a6 6 0 0 0-12 0"], [1, 8, 9, 4], [0, 17, 8, 22, 13], [0, 22, 8, 17, 13]],
        users: [[6, "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"], [1, 9, 7, 4], [6, "M22 21v-2a4 4 0 0 0-3-3.87"], [6, "M16 3.13a4 4 0 0 1 0 7.75"]],
        "users-2": [[6, "M14 19a6 6 0 0 0-12 0"], [1, 8, 9, 4], [6, "M22 19a6 6 0 0 0-6-6 4 4 0 1 0 0-8"]],
        utensils: [[6, "M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"], [6, "M7 2v20"], [6, "M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"]],
        "utensils-crossed": [[6, "m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8"], [6, "M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7"], [6, "m2.1 21.8 6.4-6.3"], [6, "m19 5-7 7"]],
        "utility-pole": [[6, "M12 2v20"], [6, "M2 5h20"], [6, "M3 3v2"], [6, "M7 3v2"], [6, "M17 3v2"], [6, "M21 3v2"], [6, "m19 5-7 7-7-7"]],
        variable: [[6, "M8 21s-4-3-4-9 4-9 4-9"], [6, "M16 3s4 3 4 9-4 9-4 9"], [0, 15, 9, 9, 15], [0, 9, 9, 15, 15]],
        vegan: [[6, "M2 2a26.6 26.6 0 0 1 10 20c.9-6.82 1.5-9.5 4-14"], [6, "M16 8c4 0 6-2 6-6-4 0-6 2-6 6"], [6, "M17.41 3.6a10 10 0 1 0 3 3"]],
        "venetian-mask": [[6, "M2 12a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V7h-5a8 8 0 0 0-5 2 8 8 0 0 0-5-2H2Z"], [6, "M6 11c1.5 0 3 .5 3 2-2 0-3 0-3-2Z"], [6, "M18 11c-1.5 0-3 .5-3 2 2 0 3 0 3-2Z"]],
        verified: [[6, "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"], [6, "m9 12 2 2 4-4"]],
        vibrate: [[6, "m2 8 2 2-2 2 2 2-2 2"], [6, "m22 8-2 2 2 2-2 2 2 2"], [5, 8, 5, 8, 14, 1]],
        "vibrate-off": [[6, "m2 8 2 2-2 2 2 2-2 2"], [6, "m22 8-2 2 2 2-2 2 2 2"], [6, "M8 8v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2"], [6, "M16 10.34V6c0-.55-.45-1-1-1h-4.34"], [0, 2, 2, 22, 22]],
        video: [[6, "m22 8-6 4 6 4V8Z"], [5, 2, 6, 14, 12, 2, 2]],
        "video-off": [[6, "M10.66 6H14a2 2 0 0 1 2 2v2.34l1 1L22 8v8"], [6, "M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2l10 10Z"], [0, 2, 2, 22, 22]],
        videotape: [[5, 2, 4, 20, 16, 2], [6, "M2 8h20"], [1, 8, 14, 2], [6, "M8 12h8"], [1, 16, 14, 2]],
        view: [[6, "M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z"], [6, "M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"], [6, "M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2"], [6, "M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2"]],
        voicemail: [[1, 6, 12, 4], [1, 18, 12, 4], [0, 6, 16, 18, 16]],
        volume: [[3, "11 5 6 9 2 9 2 15 6 15 11 19 11 5"]],
        "volume-1": [[3, "11 5 6 9 2 9 2 15 6 15 11 19 11 5"], [6, "M15.54 8.46a5 5 0 0 1 0 7.07"]],
        "volume-2": [[3, "11 5 6 9 2 9 2 15 6 15 11 19 11 5"], [6, "M15.54 8.46a5 5 0 0 1 0 7.07"], [6, "M19.07 4.93a10 10 0 0 1 0 14.14"]],
        "volume-x": [[3, "11 5 6 9 2 9 2 15 6 15 11 19 11 5"], [0, 22, 9, 16, 15], [0, 16, 9, 22, 15]],
        vote: [[6, "m9 12 2 2 4-4"], [6, "M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z"], [6, "M22 19H2"]],
        wallet: [[6, "M21 12V7H5a2 2 0 0 1 0-4h14v4"], [6, "M3 5v14a2 2 0 0 0 2 2h16v-5"], [6, "M18 12a2 2 0 0 0 0 4h4v-4Z"]],
        "wallet-2": [[6, "M17 14h.01"], [6, "M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14"]],
        "wallet-cards": [[5, 3, 3, 18, 18, 2], [6, "M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2"], [6, "M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21"]],
        wallpaper: [[1, 8, 9, 2], [6, "m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2"], [6, "M8 21h8"], [6, "M12 17v4"]],
        wand: [[6, "M15 4V2"], [6, "M15 16v-2"], [6, "M8 9h2"], [6, "M20 9h2"], [6, "M17.8 11.8 19 13"], [6, "M15 9h0"], [6, "M17.8 6.2 19 5"], [6, "m3 21 9-9"], [6, "M12.2 6.2 11 5"]],
        "wand-2": [[6, "m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z"], [6, "m14 7 3 3"], [6, "M5 6v4"], [6, "M19 14v4"], [6, "M10 2v2"], [6, "M7 8H3"], [6, "M21 16h-4"], [6, "M11 3H9"]],
        warehouse: [[6, "M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z"], [6, "M6 18h12"], [6, "M6 14h12"], [5, 6, 10, 12, 12]],
        watch: [[1, 12, 12, 6], [2, "12 10 12 12 13 13"], [6, "m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05"], [6, "m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05"]],
        waves: [[6, "M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"], [6, "M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"], [6, "M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"]],
        waypoints: [[1, 12, 4.5, 2.5], [6, "m10.2 6.3-3.9 3.9"], [1, 4.5, 12, 2.5], [6, "M7 12h10"], [1, 19.5, 12, 2.5], [6, "m13.8 17.7 3.9-3.9"], [1, 12, 19.5, 2.5]],
        webcam: [[1, 12, 10, 8], [1, 12, 10, 3], [6, "M7 22h10"], [6, "M12 22v-4"]],
        webhook: [[6, "M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"], [6, "m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06"], [6, "m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8"]],
        weight: [[1, 12, 5, 3], [6, "M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z"]],
        wheat: [[6, "M2 22 16 8"], [6, "M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"], [6, "M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"], [6, "M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"], [6, "M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z"], [6, "M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"], [6, "M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"], [6, "M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"]],
        "wheat-off": [[6, "m2 22 10-10"], [6, "m16 8-1.17 1.17"], [6, "M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"], [6, "m8 8-.53.53a3.5 3.5 0 0 0 0 4.94L9 15l1.53-1.53c.55-.55.88-1.25.98-1.97"], [6, "M10.91 5.26c.15-.26.34-.51.56-.73L13 3l1.53 1.53a3.5 3.5 0 0 1 .28 4.62"], [6, "M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z"], [6, "M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"], [6, "m16 16-.53.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.49 3.49 0 0 1 1.97-.98"], [6, "M18.74 13.09c.26-.15.51-.34.73-.56L21 11l-1.53-1.53a3.5 3.5 0 0 0-4.62-.28"], [0, 2, 2, 22, 22]],
        "whole-word": [[1, 7, 12, 3], [6, "M10 9v6"], [1, 17, 12, 3], [6, "M14 7v8"], [6, "M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1"]],
        wifi: [[6, "M5 13a10 10 0 0 1 14 0"], [6, "M8.5 16.5a5 5 0 0 1 7 0"], [6, "M2 8.82a15 15 0 0 1 20 0"], [0, 12, 20, 12.01, 20]],
        "wifi-off": [[0, 2, 2, 22, 22], [6, "M8.5 16.5a5 5 0 0 1 7 0"], [6, "M2 8.82a15 15 0 0 1 4.17-2.65"], [6, "M10.66 5c4.01-.36 8.14.9 11.34 3.76"], [6, "M16.85 11.25a10 10 0 0 1 2.22 1.68"], [6, "M5 13a10 10 0 0 1 5.24-2.76"], [0, 12, 20, 12.01, 20]],
        wind: [[6, "M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"], [6, "M9.6 4.6A2 2 0 1 1 11 8H2"], [6, "M12.6 19.4A2 2 0 1 0 14 16H2"]],
        wine: [[6, "M8 22h8"], [6, "M7 10h10"], [6, "M12 15v7"], [6, "M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z"]],
        "wine-off": [[6, "M8 22h8"], [6, "M7 10h3m7 0h-1.343"], [6, "M12 15v7"], [6, "M7.307 7.307A12.33 12.33 0 0 0 7 10a5 5 0 0 0 7.391 4.391M8.638 2.981C8.75 2.668 8.872 2.34 9 2h6c1.5 4 2 6 2 8 0 .407-.05.809-.145 1.198"], [0, 2, 2, 22, 22]],
        workflow: [[5, 3, 3, 8, 8, 2], [6, "M7 11v4a2 2 0 0 0 2 2h4"], [5, 13, 13, 8, 8, 2]],
        "wrap-text": [[0, 3, 6, 21, 6], [6, "M3 12h15a3 3 0 1 1 0 6h-4"], [2, "16 16 14 18 16 20"], [0, 3, 18, 10, 18]],
        wrench: [[6, "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"]],
        x: [[6, "M18 6 6 18"], [6, "m6 6 12 12"]],
        "x-circle": [[1, 12, 12, 10], [6, "m15 9-6 6"], [6, "m9 9 6 6"]],
        "x-octagon": [[3, "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"], [6, "m15 9-6 6"], [6, "m9 9 6 6"]],
        "x-square": [[5, 3, 3, 18, 18, 2, 2], [6, "m15 9-6 6"], [6, "m9 9 6 6"]],
        youtube: [[6, "M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"], [6, "m10 15 5-3-5-3z"]],
        zap: [[3, "13 2 3 14 12 14 11 22 21 10 12 10 13 2"]],
        "zap-off": [[2, "12.41 6.75 13 2 10.57 4.92"], [2, "18.57 12.91 21 10 15.66 10"], [2, "8 8 3 14 12 14 11 22 16 16"], [0, 2, 2, 22, 22]],
        "zoom-in": [[1, 11, 11, 8], [0, 21, 21, 16.65, 16.65], [0, 11, 8, 11, 14], [0, 8, 11, 14, 11]],
        "zoom-out": [[1, 11, 11, 8], [0, 21, 21, 16.65, 16.65], [0, 8, 11, 14, 11]]
    };
    var ui = {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": 2,
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    };

    function fi(e, t) {
        var n = document.createElementNS("http://www.w3.org/2000/svg", e);
        return Object.keys(t).forEach((function (e) {
            n.setAttribute(e, t[e])
        })), n
    }

    function pi(e) {
        var t = e[0];
        if (0 === t) return fi("line", {x1: e[1], y1: e[2], x2: e[3], y2: e[4]});
        if (1 === t) return fi("circle", {cx: e[1], cy: e[2], r: e[3]});
        if (2 === t) return fi("polyline", {points: e[1]});
        if (3 === t) return fi("polygon", {points: e[1]});
        if (4 === t) return fi("ellipse", {cx: e[1], cy: e[2], rx: e[3], ry: e[4]});
        if (5 === t) {
            var n = {x: e[1], y: e[2], width: e[3], height: e[4]};
            return e[5] && (n.rx = e[5]), e[6] && (n.ry = e[6]), e[7] && (n.transform = e[7]), fi("rect", n)
        }
        return 6 === t ? fi("path", {d: e[1]}) : void 0
    }

    function di(e) {
        for (var t = fi("svg", ui), n = 0, r = e; n < r.length; n++) {
            var i = r[n];
            t.appendChild(pi(i))
        }
        return t
    }

    var mi = {
            "create-new": "edit",
            trash: "trash-2",
            search: "search",
            "right-triangle": "right-triangle",
            document: "file",
            folder: "folder-open",
            pencil: "edit-3",
            "left-arrow": "chevron-left",
            "right-arrow": "chevron-right",
            "three-horizontal-bars": "menu",
            "dot-network": "git-fork",
            "audio-file": "file-audio",
            "image-file": "image",
            "pdf-file": "file-text",
            gear: "settings",
            documents: "files",
            blocks: "layout-list",
            "go-to-file": "file-input",
            presentation: "monitor",
            "cross-in-box": "x-square",
            microphone: "mic",
            "microphone-filled": "mic",
            "two-columns": "columns",
            link: "link",
            "popup-open": "arrow-up-right",
            checkmark: "check",
            hashtag: "hash",
            "left-arrow-with-tail": "arrow-left",
            "right-arrow-with-tail": "arrow-right",
            "up-arrow-with-tail": "arrow-up",
            "down-arrow-with-tail": "arrow-down",
            "lines-of-text": "align-left",
            "vertical-three-dots": "more-vertical",
            pin: "pin",
            "magnifying-glass": "search",
            info: "info",
            "horizontal-split": "separator-horizontal",
            "vertical-split": "separator-vertical",
            "calendar-with-checkmark": "calendar-check",
            "folder-minus": "folder-minus",
            "sheets-in-box": "sheets-in-box",
            "up-and-down-arrows": "move-vertical",
            "broken-link": "unlink",
            cross: "x",
            "any-key": "plus-circle",
            reset: "rotate-ccw",
            star: "star",
            "crossed-star": "star-off",
            dice: "dice",
            "filled-pin": "pin",
            enter: "log-in",
            help: "help",
            vault: "vault",
            "open-vault": "open-vault",
            "paper-plane": "send",
            "bullet-list": "list",
            "uppercase-lowercase-a": "uppercase-lowercase-a",
            "star-list": "star-list",
            "expand-vertically": "move-vertical",
            languages: "languages",
            switch: "repeat",
            "pane-layout": "layout",
            install: "download-cloud",
            sync: "refresh-cw",
            "check-in-circle": "check-circle-2",
            "sync-small": "sync-small",
            "check-small": "check-small",
            paused: "paused",
            "forward-arrow": "forward",
            "stacked-levels": "folder-tree",
            "bracket-glyph": "bracket-glyph",
            "note-glyph": "sticky-note",
            "tag-glyph": "tag",
            "price-tag-glyph": "tag",
            "heading-glyph": "heading-glyph",
            "bold-glyph": "bold",
            "italic-glyph": "italic",
            "strikethrough-glyph": "strikethrough",
            "highlight-glyph": "highlighter",
            "code-glyph": "code-2",
            "quote-glyph": "quote",
            "link-glyph": "link",
            "bullet-list-glyph": "list",
            "number-list-glyph": "list-ordered",
            "checkbox-glyph": "check-square",
            "undo-glyph": "undo-2",
            "redo-glyph": "redo-2",
            "up-chevron-glyph": "chevron-up",
            "down-chevron-glyph": "chevron-down",
            "left-chevron-glyph": "chevron-left",
            "right-chevron-glyph": "chevron-right",
            "percent-sign-glyph": "percent",
            "keyboard-glyph": "keyboard",
            "double-up-arrow-glyph": "chevrons-up",
            "double-down-arrow-glyph": "chevrons-down",
            "image-glyph": "paperclip",
            "wrench-screwdriver-glyph": "wrench",
            clock: "clock",
            "plus-with-circle": "plus-circle",
            "minus-with-circle": "minus-circle",
            "indent-glyph": "indent",
            "unindent-glyph": "outdent",
            fullscreen: "maximize",
            "exit-fullscreen": "minimize",
            cloud: "cloud",
            "run-command": "terminal",
            "compress-glyph": "minimize-2",
            "enlarge-glyph": "maximize-2",
            "scissors-glyph": "scissors",
            "up-curly-arrow-glyph": "corner-right-up",
            "down-curly-arrow-glyph": "corner-right-down",
            "plus-minus-glyph": "diff",
            "links-going-out": "links-going-out",
            "links-coming-in": "links-coming-in",
            "add-note-glyph": "file-plus",
            "duplicate-glyph": "copy",
            "clock-glyph": "clock",
            "calendar-glyph": "calendar-days",
            "command-glyph": "terminal-square",
            "dice-glyph": "dice-glyph",
            "file-explorer-glyph": "files",
            "graph-glyph": "git-fork",
            "import-glyph": "download",
            "navigate-glyph": "navigation",
            "open-elsewhere-glyph": "arrow-up-right",
            "presentation-glyph": "monitor",
            "paper-plane-glyph": "send",
            "question-mark-glyph": "question-mark-glyph",
            "restore-file-glyph": "rotate-ccw",
            "search-glyph": "search",
            "star-glyph": "star",
            "play-audio-glyph": "play-circle",
            "stop-audio-glyph": "stop-circle",
            "tomorrow-glyph": "calendar-plus",
            "wand-glyph": "wand",
            "workspace-glyph": "layout",
            "yesterday-glyph": "calendar-minus",
            "box-glyph": "box-glyph",
            "merge-files-glyph": "git-merge",
            "merge-files": "git-merge",
            "two-blank-pages": "copy",
            scissors: "scissors",
            paste: "clipboard-check",
            "paste-text": "clipboard-type",
            split: "git-branch-plus",
            "select-all-text": "box-select",
            wand: "wand-2",
            "github-glyph": "file-code",
            "reading-glasses": "glasses",
            "user-manual-filled": "book-open",
            "discord-filled": "discord",
            "chat-bubbles-filled": "message-circle",
            "experiment-filled": "experiment"
        },
        vi = {
            "refresh-cw-off": '<path d="M21 8L18.74 5.74A9.75 9.75 0 0 0 12 3C11 3 10.03 3.16 9.13 3.47"/><path d="M8 16H3v5"/><path d="M3 12C3 9.51 4 7.26 5.64 5.64"/><path d="m3 16 2.26 2.26A9.75 9.75 0 0 0 12 21c2.49 0 4.74-1 6.36-2.64"/><path d="M21 12c0 1-.16 1.97-.47 2.87"/><path d="M21 3v5h-5"/><path d="M22 22 2 2"/>',
            "bracket-glyph": '<path d="M9 21C7.89336 21 5 21 5 21C5 21 5 6.79076 5 3C5 3 8.21882 3.00004 9 3.00004"/><path d="M15 2.99996C16.1066 2.99996 19 2.99996 19 2.99996C19 2.99996 19 17.2092 19 21C19 21 15.7812 21 15 21"/>',
            "box-glyph": '<path d="M21 13V12.5714C21 11.8964 20.8189 11 19.7143 11L4.28571 11C3.18114 11 3 11.8964 3 12.5714V20.4286C3 21.1036 3.18114 22 4.28571 22H14"/><path d="M21 4.14286C21 3.65194 20.8189 3 19.7143 3L4.28571 3C3.18114 3 3 3.65194 3 4.14286"/><path d="M21 8.14286C21 7.65194 20.8189 7 19.7143 7L4.28571 7C3.18114 7 3 7.65194 3 8.14286"/><path d="M19 16V22"/><path d="M16 19H22"/>',
            "check-small": '<path d="M12 21C16.9707 21 21 16.9707 21 12C21 7.0293 16.9707 3 12 3C7.0293 3 3 7.0293 3 12C3 16.9707 7.0293 21 12 21Z"/><path d="M7.5 12.5L10.5 15.5L16 10"/>',
            "dice-glyph": '<path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"/><path d="M17 16C17 16.5523 16.5523 17 16 17C15.4477 17 15 16.5523 15 16C15 15.4477 15.4477 15 16 15C16.5523 15 17 15.4477 17 16Z"/><path d="M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z"/><path d="M9 8C9 8.55228 8.55228 9 8 9C7.44772 9 7 8.55228 7 8C7 7.44772 7.44772 7 8 7C8.55228 7 9 7.44772 9 8Z"/>',
            dice: '<path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"/><path d="M17 16C17 16.5523 16.5523 17 16 17C15.4477 17 15 16.5523 15 16C15 15.4477 15.4477 15 16 15C16.5523 15 17 15.4477 17 16Z"/><path d="M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z"/><path d="M9 8C9 8.55228 8.55228 9 8 9C7.44772 9 7 8.55228 7 8C7 7.44772 7.44772 7 8 7C8.55228 7 9 7.44772 9 8Z"/>',
            discord: '<path d="M8.795 17.0865C8.34168 17.7478 7.8561 18.3864 7.34 19C3.65 18.895 2.25 16.5 2.25 16.5C2.30245 13.1065 3.12479 9.7693 4.655 6.74C6.00009 5.68771 7.63906 5.07965 9.345 5L9.845 6.155C10.5591 6.05585 11.279 6.00407 12 6C12.7242 6.00238 13.4474 6.05249 14.165 6.15L14.665 4.995C16.3726 5.07897 18.0117 5.69233 19.355 6.75C20.8803 9.7771 21.6991 13.1107 21.75 16.5C21.75 16.5 20.35 18.895 16.66 19C16.1517 18.3894 15.6744 17.7536 15.23 17.095M18.46 15.645C16.54 16.6175 14.682 17.59 12 17.59C9.318 17.59 7.46 16.6175 5.54 15.645" /><path d="M9.25 13.5C9.66421 13.5 10 12.9404 10 12.25C10 11.5596 9.66421 11 9.25 11C8.83579 11 8.5 11.5596 8.5 12.25C8.5 12.9404 8.83579 13.5 9.25 13.5Z" /><path d="M14.75 13.5C15.1642 13.5 15.5 12.9404 15.5 12.25C15.5 11.5596 15.1642 11 14.75 11C14.3358 11 14 11.5596 14 12.25C14 12.9404 14.3358 13.5 14.75 13.5Z" />',
            "right-triangle": '<path d="M3 8L12 17L21 8"/>',
            "heading-glyph": '<path d="M9 4H4"/><path d="M20 4H15"/><path d="M20 20H15"/><path d="M9 20H4"/><path d="M18 12L6 12"/><path d="M6 20L6 4"/><path d="M18 20L18 4"/>',
            help: '<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"/><path d="M9.09009 9.00003C9.32519 8.33169 9.78924 7.76813 10.4 7.40916C11.0108 7.05019 12.079 6.94542 12.7773 7.06519C13.9093 7.25935 14.9767 8.25497 14.9748 9.49073C14.9748 11.9908 12 11.2974 12 14"/><path d="M12 17H12.01"/>',
            "keyboard-toggle": '<path d="M20 3H4C2.89543 3 2 3.89543 2 5V13C2 14.1046 2.89543 15 4 15H20C21.1046 15 22 14.1046 22 13V5C22 3.89543 21.1046 3 20 3Z"/><path d="M6 7H6.001"/><path d="M10 7H10.001"/><path d="M14 7H14.001"/><path d="M18 7H18.001"/><path d="M6 11H6.001"/><path d="M18 11H18.001"/><path d="M10 11H14"/><path d="M7 19L12 21L17 19"/>',
            "broken-link": '<path d="M12 18.26L10.4886 19.7786L10.4886 19.761C9.64543 20.5738 8.51382 21.0192 7.34221 20.9994C6.17061 20.9795 5.05478 20.496 4.23971 19.655C3.44441 18.8312 3 17.7313 3 16.5868C3 15.4423 3.44441 14.3425 4.23971 13.5186L5.75111 12"/><path d="M12 5.75153L13.5114 4.24023C14.3546 3.42658 15.4862 2.98075 16.6578 3.00064C17.8294 3.02052 18.9452 3.50449 19.7603 4.34629C20.5556 5.17092 21 6.27188 21 7.4175C21 8.56311 20.5556 9.66407 19.7603 10.4887L18.2489 12"/><path d="M3 8L6 8"/><path d="M8 3L8 6"/><path d="M18 16L21 16"/><path d="M16 18L16 21"/>',
            experiment: '<path d="M9.18747 9.75V3H14.8125V9.75L20.1485 15.5707C20.5733 16.0343 20.8542 16.6115 20.9567 17.2319C21.0592 17.8523 20.9789 18.4891 20.7257 19.0646C20.4725 19.6402 20.0573 20.1297 19.5307 20.4733C19.0041 20.817 18.3889 21 17.7601 21H6.23994C5.61113 21 4.99591 20.817 4.46931 20.4733C3.94271 20.1297 3.52749 19.6402 3.27428 19.0646C3.02108 18.4891 2.94084 17.8523 3.04334 17.2319C3.14584 16.6115 3.42666 16.0343 3.85154 15.5707L9.18747 9.75Z"/><path d="M8 3H16"/><path d="M5 14C9.08333 16.25 9.66667 14 12 14C14.3333 14 14.9167 16.25 19 14"/>',
            "left-arrow": '<path d="M16.5 3.5L7.5 12.5L16.5 21.5"/>',
            link: '<path d="M13.1404 10C13.6728 10.3955 14.1134 10.9001 14.4322 11.4796C14.7511 12.0591 14.9407 12.6999 14.9882 13.3586C15.0357 14.0172 14.94 14.6783 14.7076 15.297C14.4751 15.9157 14.1115 16.4775 13.6412 16.9443L10.8588 19.7073C9.98423 20.5462 8.81284 21.0103 7.59697 20.9998C6.38109 20.9893 5.21801 20.505 4.35822 19.6512C3.49844 18.7974 3.01074 17.6424 3.00018 16.435C2.98961 15.2276 3.45702 14.0644 4.30173 13.1959L5.88768 11.6117"/><path d="M10.8596 14C10.3272 13.6045 9.88658 13.0999 9.56776 12.5204C9.24894 11.9409 9.05935 11.3001 9.01185 10.6414C8.96435 9.98279 9.06004 9.32171 9.29245 8.70302C9.52486 8.08433 9.88853 7.52251 10.3588 7.05567L13.1412 4.29268C14.0158 3.45384 15.1872 2.98968 16.403 3.00017C17.6189 3.01067 18.782 3.49497 19.6418 4.34877C20.5016 5.20257 20.9893 6.35756 20.9998 7.56498C21.0104 8.77239 20.543 9.93562 19.6983 10.8041L18.1123 12.379"/>',
            "link-glyph": '<path d="M13.1404 10C13.6728 10.3955 14.1134 10.9001 14.4322 11.4796C14.7511 12.0591 14.9407 12.6999 14.9882 13.3586C15.0357 14.0172 14.94 14.6783 14.7076 15.297C14.4751 15.9157 14.1115 16.4775 13.6412 16.9443L10.8588 19.7073C9.98423 20.5462 8.81284 21.0103 7.59697 20.9998C6.38109 20.9893 5.21801 20.505 4.35822 19.6512C3.49844 18.7974 3.01074 17.6424 3.00018 16.435C2.98961 15.2276 3.45702 14.0644 4.30173 13.1959L5.88768 11.6117"/><path d="M10.8596 14C10.3272 13.6045 9.88658 13.0999 9.56776 12.5204C9.24894 11.9409 9.05935 11.3001 9.01185 10.6414C8.96435 9.98279 9.06004 9.32171 9.29245 8.70302C9.52486 8.08433 9.88853 7.52251 10.3588 7.05567L13.1412 4.29268C14.0158 3.45384 15.1872 2.98968 16.403 3.00017C17.6189 3.01067 18.782 3.49497 19.6418 4.34877C20.5016 5.20257 20.9893 6.35756 20.9998 7.56498C21.0104 8.77239 20.543 9.93562 19.6983 10.8041L18.1123 12.379"/>',
            "links-coming-in": '<path d="M8.70467 12C8.21657 11.6404 7.81269 11.1817 7.52044 10.6549C7.22819 10.1281 7.0544 9.54553 7.01086 8.94677C6.96732 8.348 7.05504 7.74701 7.26808 7.18456C7.48112 6.62212 7.81449 6.11138 8.24558 5.68697L10.7961 3.17516C11.5978 2.41258 12.6716 1.99062 13.7861 2.00016C14.9007 2.0097 15.9668 2.44997 16.755 3.22615C17.5431 4.00234 17.9902 5.05233 17.9998 6.14998C18.0095 7.24763 17.5811 8.30511 16.8067 9.09467L15.9014 10"/><path d="M11.2953 8C11.7834 8.35957 12.1873 8.81831 12.4796 9.34512C12.7718 9.87192 12.9456 10.4545 12.9891 11.0532C13.0327 11.652 12.945 12.253 12.7319 12.8154C12.5189 13.3779 12.1855 13.8886 11.7544 14.313L9.20392 16.8248C8.40221 17.5874 7.32844 18.0094 6.21389 17.9998C5.09933 17.9903 4.03318 17.55 3.24504 16.7738C2.4569 15.9977 2.00985 14.9477 2.00016 13.85C1.99047 12.7524 2.41893 11.6949 3.19326 10.9053L4.09859 10"/><path d="M17 21L14 18L17 15"/><path d="M21 18H14"/>',
            "links-going-out": '<path d="M8.70467 12C8.21657 11.6404 7.81269 11.1817 7.52044 10.6549C7.22819 10.1281 7.0544 9.54553 7.01086 8.94677C6.96732 8.348 7.05504 7.74701 7.26808 7.18456C7.48112 6.62212 7.81449 6.11138 8.24558 5.68697L10.7961 3.17516C11.5978 2.41258 12.6716 1.99062 13.7861 2.00016C14.9007 2.0097 15.9668 2.44997 16.755 3.22615C17.5431 4.00234 17.9902 5.05233 17.9998 6.14998C18.0095 7.24763 17.5811 8.30511 16.8067 9.09467L15.9014 10"/><path d="M11.2953 8C11.7834 8.35957 12.1873 8.81831 12.4796 9.34512C12.7718 9.87192 12.9456 10.4545 12.9891 11.0532C13.0327 11.652 12.945 12.253 12.7319 12.8154C12.5189 13.3779 12.1855 13.8886 11.7544 14.313L9.20392 16.8248C8.40221 17.5874 7.32844 18.0094 6.21389 17.9998C5.09933 17.9903 4.03318 17.55 3.24504 16.7738C2.4569 15.9977 2.00985 14.9477 2.00016 13.85C1.99047 12.7524 2.41893 11.6949 3.19326 10.9053L4.09859 10"/><path d="M18 21L21 18L18 15"/><path d="M14 18H21"/>',
            "open-vault": '<path d="M10 21L4.5 21C3.39543 21 3 20.5255 3 19.2L3 4.80001C3 3.47452 3.39543 3.00001 4.5 3.00001L10 3"/><path d="M21 7L22.5 7"/><path d="M21 16L22.5 16"/><path d="M21 18.9104L21 5.09381C21 5.09381 21 3.94236 19.5 3.36674L11.5 1.06397C11.5 1.06397 10 0.488257 10 2.79104L10 21.0928C10 23.5159 11.5 22.9403 11.5 22.9403L19.5 20.6375C21 20.0618 21 18.9104 21 18.9104Z"/><ellipse cx="16" cy="11" rx="1.5" ry="3"/><path d="M16 14L16 17"/>',
            paused: '<path d="M12 21C16.9707 21 21 16.9707 21 12C21 7.0293 16.9707 3 12 3C7.0293 3 3 7.0293 3 12C3 16.9707 7.0293 21 12 21Z"/><path d="M10 15V9"/><path d="M14 15V9"/>',
            "question-mark-glyph": '<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"/><path d="M9.09009 9.00003C9.32519 8.33169 9.78924 7.76813 10.4 7.40916C11.0108 7.05019 12.079 6.94542 12.7773 7.06519C13.9093 7.25935 14.9767 8.25497 14.9748 9.49073C14.9748 11.9908 12 11.2974 12 14"/><path d="M12 17H12.01"/>',
            "right-arrow": '<path d="M7.5 21.5L16.5 12.5L7.5 3.5"/>',
            "sidebar-left": '<path d="M21 3H3C1.89543 3 1 3.89543 1 5V19C1 20.1046 1.89543 21 3 21H21C22.1046 21 23 20.1046 23 19V5C23 3.89543 22.1046 3 21 3Z"/><path d="M10 4V20"/><path d="M4 7H7"/><path d="M4 10H7"/><path d="M4 13H7"/>',
            "sidebar-right": '<path d="M3 3H21C22.1046 3 23 3.89543 23 5V19C23 20.1046 22.1046 21 21 21H3C1.89543 21 1 20.1046 1 19V5C1 3.89543 1.89543 3 3 3Z"/><path d="M14 4V20"/><path d="M20 7H17"/><path d="M20 10H17"/><path d="M20 13H17"/>',
            "sheets-in-box": '<path d="M19 16V22"/><path d="M16 19H22"/><path d="M20.7297 13.0005C20.7297 12.4701 20.519 11.9613 20.1439 11.5863C19.7689 11.2112 19.2602 11.0005 18.7297 11.0005H4.72974C4.1993 11.0005 3.6906 11.2112 3.31552 11.5863C2.94045 11.9613 2.72974 12.4701 2.72974 13.0005L2.72974 19.9886C2.72974 20.519 2.94045 21.0277 3.31552 21.4028C3.6906 21.7779 4.1993 21.9886 4.72974 21.9886H13"/><path d="M21 8C21 8 21 7 20 7H4C3.00199 7 3 7.99347 3 7.99347"/><path d="M21 4C21 4 21.0066 3 20 3L4 3C3 3 3 4 3 4"/>',
            "star-list": '<path d="M10 12H3"/><path d="M16 6H3"/><path d="M10 18H3"/><path d="M17 11L18.236 13.3039L21 13.6756L19 15.4679L19.472 18L17 16.8039L14.528 18L15 15.4679L13 13.6756L15.764 13.3039L17 11Z"/>',
            "sync-small": '<path d="M12 21C16.9707 21 21 16.9707 21 12C21 7.0293 16.9707 3 12 3C7.0293 3 3 7.0293 3 12C3 16.9707 7.0293 21 12 21Z"/><path d="M12 21C16.9707 21 21 16.9707 21 12C21 7.0293 16.9707 3 12 3C7.0293 3 3 7.0293 3 12C3 16.9707 7.0293 21 12 21Z"/><path d="M7.6394 11.0114C8.08785 9.01426 9.87182 7.52222 12.0044 7.52222C14 7.52222 15 9 16.0121 10.0057M8.00579 14.0042C9 15 10 16.4695 12.0044 16.4695C14.1282 16.4695 15.9062 14.9897 16.3638 13.0049"/><path d="M16.5 8.5V10.5H14.5"/><path d="M8 16L8 14L10 14"/>',
            tabs: '<path d="M6 17V19.4444C6 20.3036 6.69645 21 7.55556 21H18.4444C19.3036 21 20 20.3036 20 19.4444V8.55556C20 7.69645 19.3036 7 18.4444 7H16"/><path d="M14.4444 3H3.55556C2.69645 3 2 3.69645 2 4.55556V15.4444C2 16.3036 2.69645 17 3.55556 17H14.4444C15.3036 17 16 16.3036 16 15.4444V4.55556C16 3.69645 15.3036 3 14.4444 3Z"/>',
            "uppercase-lowercase-a": '<path d="M10.5 14L4.5 14"/><path d="M12.5 18L7.5 6"/><path d="M3 18L7.5 6"/><path d="M15.9526 10.8322C15.9526 10.8322 16.6259 10 18.3832 10C20.1406 9.99999 20.9986 11.0587 20.9986 11.9682V16.7018C20.9986 17.1624 21.2815 17.7461 21.7151 18"/><path d="M20.7151 13.5C18.7151 13.5 15.7151 14.2837 15.7151 16C15.7151 17.7163 17.5908 18.2909 18.7151 18C19.5635 17.7804 20.5265 17.3116 20.889 16.6199"/>',
            vault: '<path d="M21 19.2L21 4.8C21 3.47452 20.6046 3 19.5 3L4.5 3C3.39543 3 3 3.47452 3 4.8L3 19.2C3 20.5255 3.39543 21 4.5 21L19.5 21C20.6046 21 21 20.5255 21 19.2Z"/><path d="M14.9675 10.56C15.0601 11.1841 14.9535 11.8216 14.6629 12.3817C14.3722 12.9418 13.9124 13.396 13.3488 13.6797C12.7851 13.9634 12.1464 14.0621 11.5234 13.9619C10.9004 13.8616 10.3249 13.5675 9.87868 13.1213C9.43249 12.6751 9.13835 12.0996 9.0381 11.4766C8.93786 10.8536 9.0366 10.2149 9.3203 9.65123C9.60399 9.08759 10.0582 8.62776 10.6183 8.33713C11.1784 8.04651 11.8159 7.93989 12.4401 8.03245C13.0767 8.12687 13.6662 8.42355 14.1213 8.87868C14.5765 9.33381 14.8731 9.92326 14.9675 10.56Z"/><path d="M12 14L12 17"/><path d="M21 7L22.5 7"/><path d="M21 16L22.5 16"/>',
            "stack-horizontal": '<path d="M10 5H8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Zm10 0h-2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2ZM2 2v20"/>',
            "stack-vertical": '<path d="M19 10V8a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2Zm0 10v-2a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2Zm3-18H2"/>',
            "stretch-horizontal": '<path d="M18 8V6c0-1.105-.767-2-1.714-2H7.714C6.768 4 6 4.895 6 6v2c0 1.105.768 2 1.714 2h8.572C17.233 10 18 9.105 18 8Zm0 10v-2c0-1.105-.767-2-1.714-2H7.714C6.768 14 6 14.895 6 16v2c0 1.105.768 2 1.714 2h8.572c.947 0 1.714-.895 1.714-2ZM2 2v20M22 2v20"/>',
            "stretch-vertical": '<path d="M16 18h2c1.105 0 2-.767 2-1.714V7.714C20 6.768 19.105 6 18 6h-2c-1.105 0-2 .768-2 1.714v8.572c0 .947.895 1.714 2 1.714ZM6 18h2c1.105 0 2-.767 2-1.714V7.714C10 6.768 9.105 6 8 6H6c-1.105 0-2 .768-2 1.714v8.572C4 17.233 4.895 18 6 18ZM22 2H2m20 20H2"/>',
            "distribute-space-horizontal": '<path d="M7 5H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Zm12 0h-2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2ZM3 2v20M21 2v20"/>',
            "distribute-space-vertical": '<path d="M19 7V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2Zm0 12v-2a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2Zm3-16H2m20 18H2"/>',
            "zoom-to-selection": '<path d="M2 6V4a2 2 0 0 1 2-2h2m12 0h2a2 2 0 0 1 2 2v2m0 12v2a2 2 0 0 1-2 2h-2M6 22H4a2 2 0 0 1-2-2v-2m9-2a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm7 2-3-3"/>',
            "create-group": '<path d="M2 6V4a2 2 0 0 1 2-2h2m12 0h2a2 2 0 0 1 2 2v2m0 12v2a2 2 0 0 1-2 2h-2M6 22H4a2 2 0 0 1-2-2v-2m9-12H6v5h5V6Zm7 7h-5v5h5v-5Z"/>',
            "snap-to-object": '<path d="M21 3H3m18 18H3"/><circle cx="3" cy="3" r="2"/><circle cx="3" cy="21" r="2"/><circle cx="21" cy="3" r="2"/><circle cx="21" cy="21" r="2"/><path d="M15.111 8H8.89a.889.889 0 0 0-.89.889v6.222c0 .491.398.889.889.889h6.222a.889.889 0 0 0 .889-.889V8.89a.889.889 0 0 0-.889-.89Z"/>',
            "line-horizontal": '<path d="M3 12h18"/>',
            "aspect-ratio": '<path d="M19 4H5c-1.105 0-2 .796-2 1.778v12.444C3 19.204 3.895 20 5 20h14c1.105 0 2-.796 2-1.778V5.778C21 4.796 20.105 4 19 4Z"/><path d="M14 8h3v2m-7 6H7v-2"/>',
            "rectangle-vertical-double": '<path d="M8 2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Zm12 0h-4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z"/>'
        },
        gi = {},
        Mi = {viewBox: "0 0 100 100"},
        yi = {};

    function bi(e, t) {
        if (!yi.hasOwnProperty(e)) {
            var n = t();
            if (!n) return null;
            n.classList.add("svg-icon", e), yi[e] = n
        }
        return yi[e].cloneNode(!0)
    }

    function setIcon(el, icon) {
        let n = el.firstChild;
        if (!(n && n.instanceOf(SVGSVGElement) && n.classList.contains(icon))) {
            n && el.removeChild(n);
            var r = function (e) {
                return e.startsWith("lucide-") ? bi(e, (function () {
                    var t = e.substring("lucide-".length);
                    return hi.hasOwnProperty(t) ? di(hi[t]) : null
                })) : gi.hasOwnProperty(e) ? bi(e, (function () {
                    var t = fi("svg", Mi);
                    return t.innerHTML = gi[e], t
                })) : vi.hasOwnProperty(e) ? bi(e, (function () {
                    var t = fi("svg", ui);
                    return t.innerHTML = vi[e], t
                })) : (mi.hasOwnProperty(e) && (e = mi[e]), hi.hasOwnProperty(e) ? bi("lucide-" + e, (function () {
                    return di(hi[e])
                })) : null)
            }(icon);
            r && el.appendChild(r)
        }
    }

    var ki = Object.entries,
        xi = Object.setPrototypeOf,
        Ci = Object.isFrozen,
        Ai = Object.getPrototypeOf,
        Li = Object.getOwnPropertyDescriptor,
        Ei = Object.freeze,
        Si = Object.seal,
        Hi = Object.create,
        Ti = "undefined" != typeof Reflect && Reflect,
        Vi = Ti.apply,
        Oi = Ti.construct;
    Vi || (Vi = function (e, t, n) {
        return e.apply(t, n)
    })
    Ei || (Ei = function (e) {
        return e
    })
    Si || (Si = function (e) {
        return e
    })
    Oi || (Oi = function (e, t) {
        return new (e.bind.apply(e, s([void 0], t, !1)))
    })

    var Ni,
        Pi = _i(Array.prototype.forEach),
        Ii = _i(Array.prototype.pop),
        Di = _i(Array.prototype.push),
        qi = _i(String.prototype.toLowerCase),
        zi = _i(String.prototype.toString),
        Ri = _i(String.prototype.match),
        Zi = _i(String.prototype.replace),
        Bi = _i(String.prototype.indexOf),
        ji = _i(String.prototype.trim),
        Fi = _i(RegExp.prototype.test),
        Ui = (Ni = TypeError, function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return Oi(Ni, t)
        });

    function _i(e) {
        return function (t) {
            for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
            return Vi(e, t, r)
        }
    }

    function $i(e, t, n) {
        n = n || qi, xi && xi(e, null);
        for (var r = t.length; r--;) {
            var i = t[r];
            if ("string" == typeof i) {
                var a = n(i);
                a !== i && (Ci(t) || (t[r] = a), i = a)
            }
            e[i] = !0
        }
        return e
    }

    function Wi(e) {
        for (var t = Hi(null), n = 0, r = ki(e); n < r.length; n++) {
            var i = r[n], a = i[0], o = i[1];
            t[a] = o
        }
        return t
    }

    function Gi(e, t) {
        for (; null !== e;) {
            var n = Li(e, t);
            if (n) {
                if (n.get) return _i(n.get);
                if ("function" == typeof n.value) return _i(n.value)
            }
            e = Ai(e)
        }
        return function (e) {
            return console.warn("fallback value for", e), null
        }
    }

    var Ki = Ei(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]),
        Yi = Ei(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]),
        Xi = Ei(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]),
        Ji = Ei(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]),
        Qi = Ei(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]),
        ea = Ei(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]),
        ta = Ei(["#text"]),
        na = Ei(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]),
        ra = Ei(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]),
        ia = Ei(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]),
        aa = Ei(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
        oa = Si(/\{\{[\w\W]*|[\w\W]*\}\}/gm), sa = Si(/<%[\w\W]*|[\w\W]*%>/gm), la = Si(/\${[\w\W]*}/gm),
        ca = Si(/^data-[\-\w.\u00B7-\uFFFF]/), ha = Si(/^aria-[\-\w]+$/),
        ua = Si(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),
        fa = Si(/^(?:\w+script|data):/i), pa = Si(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
        da = Si(/^html$/i), ma = Object.freeze({
            __proto__: null,
            MUSTACHE_EXPR: oa,
            ERB_EXPR: sa,
            TMPLIT_EXPR: la,
            DATA_ATTR: ca,
            ARIA_ATTR: ha,
            IS_ALLOWED_URI: ua,
            IS_SCRIPT_OR_DATA: fa,
            ATTR_WHITESPACE: pa,
            DOCTYPE_NAME: da
        }), va = function () {
            return "undefined" == typeof window ? null : window
        }, ga = function (e, t) {
            if ("object" != typeof e || "function" != typeof e.createPolicy) return null;
            var n = null, r = "data-tt-policy-suffix";
            t.currentScript && t.currentScript.hasAttribute(r) && (n = t.currentScript.getAttribute(r));
            var i = "dompurify" + (n ? "#" + n : "");
            try {
                return e.createPolicy(i, {
                    createHTML: function (e) {
                        return e
                    }, createScriptURL: function (e) {
                        return e
                    }
                })
            } catch (e) {
                return console.warn("TrustedTypes policy " + i + " could not be created."), null
            }
        };

    const DOMPurify = function e() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : va(), n = function (t) {
            return e(t)
        };
        if (n.version = "3.0.1", n.removed = [], !t || !t.document || 9 !== t.document.nodeType) return n.isSupported = !1, n;
        var r = t.document, i = t.document, a = t.DocumentFragment, o = t.HTMLTemplateElement, l = t.Node,
            c = t.Element, h = t.NodeFilter, u = t.NamedNodeMap,
            f = void 0 === u ? t.NamedNodeMap || t.MozNamedAttrMap : u, p = t.HTMLFormElement, d = t.DOMParser,
            m = t.trustedTypes, v = c.prototype, g = Gi(v, "cloneNode"), M = Gi(v, "nextSibling"),
            y = Gi(v, "childNodes"), b = Gi(v, "parentNode");
        if ("function" == typeof o) {
            var w = i.createElement("template");
            w.content && w.content.ownerDocument && (i = w.content.ownerDocument)
        }
        var k = ga(m, r), x = k ? k.createHTML("") : "", C = i.implementation, A = i.createNodeIterator,
            L = i.createDocumentFragment, E = i.getElementsByTagName, S = r.importNode, H = {};
        n.isSupported = "function" == typeof ki && "function" == typeof b && C && void 0 !== C.createHTMLDocument;
        var T, V, O = ma.MUSTACHE_EXPR, N = ma.ERB_EXPR, P = ma.TMPLIT_EXPR, I = ma.DATA_ATTR, D = ma.ARIA_ATTR,
            q = ma.IS_SCRIPT_OR_DATA, z = ma.ATTR_WHITESPACE, R = ma.IS_ALLOWED_URI, Z = null,
            B = $i({}, s(s(s(s(s([], Ki, !0), Yi, !0), Xi, !0), Qi, !0), ta, !0)), j = null,
            F = $i({}, s(s(s(s([], na, !0), ra, !0), ia, !0), aa, !0)), U = Object.seal(Object.create(null, {
                tagNameCheck: {
                    writable: !0,
                    configurable: !1,
                    enumerable: !0,
                    value: null
                },
                attributeNameCheck: {writable: !0, configurable: !1, enumerable: !0, value: null},
                allowCustomizedBuiltInElements: {writable: !0, configurable: !1, enumerable: !0, value: !1}
            })), _ = null, $ = null, W = !0, G = !0, K = !1, Y = !0, X = !1, J = !1, Q = !1, ee = !1, te = !1, ne = !1,
            re = !1, ie = !0, ae = !1, oe = "user-content-", se = !0, le = !1, ce = {}, he = null,
            ue = $i({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]),
            fe = null, pe = $i({}, ["audio", "video", "img", "source", "image", "track"]), de = null,
            me = $i({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]),
            ve = "http://www.w3.org/1998/Math/MathML", ge = "http://www.w3.org/2000/svg",
            Me = "http://www.w3.org/1999/xhtml", ye = Me, be = !1, we = null, ke = $i({}, [ve, ge, Me], zi),
            xe = ["application/xhtml+xml", "text/html"], Ce = "text/html", Ae = null, Le = i.createElement("form"),
            Ee = function (e) {
                return e instanceof RegExp || e instanceof Function
            }, Se = function (e) {
                Ae && Ae === e || (e && "object" == typeof e || (e = {}), e = Wi(e), T = T = -1 === xe.indexOf(e.PARSER_MEDIA_TYPE) ? Ce : e.PARSER_MEDIA_TYPE, V = "application/xhtml+xml" === T ? zi : qi, Z = "ALLOWED_TAGS" in e ? $i({}, e.ALLOWED_TAGS, V) : B, j = "ALLOWED_ATTR" in e ? $i({}, e.ALLOWED_ATTR, V) : F, we = "ALLOWED_NAMESPACES" in e ? $i({}, e.ALLOWED_NAMESPACES, zi) : ke, de = "ADD_URI_SAFE_ATTR" in e ? $i(Wi(me), e.ADD_URI_SAFE_ATTR, V) : me, fe = "ADD_DATA_URI_TAGS" in e ? $i(Wi(pe), e.ADD_DATA_URI_TAGS, V) : pe, he = "FORBID_CONTENTS" in e ? $i({}, e.FORBID_CONTENTS, V) : ue, _ = "FORBID_TAGS" in e ? $i({}, e.FORBID_TAGS, V) : {}, $ = "FORBID_ATTR" in e ? $i({}, e.FORBID_ATTR, V) : {}, ce = "USE_PROFILES" in e && e.USE_PROFILES, W = !1 !== e.ALLOW_ARIA_ATTR, G = !1 !== e.ALLOW_DATA_ATTR, K = e.ALLOW_UNKNOWN_PROTOCOLS || !1, Y = !1 !== e.ALLOW_SELF_CLOSE_IN_ATTR, X = e.SAFE_FOR_TEMPLATES || !1, J = e.WHOLE_DOCUMENT || !1, te = e.RETURN_DOM || !1, ne = e.RETURN_DOM_FRAGMENT || !1, re = e.RETURN_TRUSTED_TYPE || !1, ee = e.FORCE_BODY || !1, ie = !1 !== e.SANITIZE_DOM, ae = e.SANITIZE_NAMED_PROPS || !1, se = !1 !== e.KEEP_CONTENT, le = e.IN_PLACE || !1, R = e.ALLOWED_URI_REGEXP || R, ye = e.NAMESPACE || Me, U = e.CUSTOM_ELEMENT_HANDLING || {}, e.CUSTOM_ELEMENT_HANDLING && Ee(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (U.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck), e.CUSTOM_ELEMENT_HANDLING && Ee(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (U.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), e.CUSTOM_ELEMENT_HANDLING && "boolean" == typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (U.allowCustomizedBuiltInElements = e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), X && (G = !1), ne && (te = !0), ce && (Z = $i({}, s([], ta, !0)), j = [], !0 === ce.html && ($i(Z, Ki), $i(j, na)), !0 === ce.svg && ($i(Z, Yi), $i(j, ra), $i(j, aa)), !0 === ce.svgFilters && ($i(Z, Xi), $i(j, ra), $i(j, aa)), !0 === ce.mathMl && ($i(Z, Qi), $i(j, ia), $i(j, aa))), e.ADD_TAGS && (Z === B && (Z = Wi(Z)), $i(Z, e.ADD_TAGS, V)), e.ADD_ATTR && (j === F && (j = Wi(j)), $i(j, e.ADD_ATTR, V)), e.ADD_URI_SAFE_ATTR && $i(de, e.ADD_URI_SAFE_ATTR, V), e.FORBID_CONTENTS && (he === ue && (he = Wi(he)), $i(he, e.FORBID_CONTENTS, V)), se && (Z["#text"] = !0), J && $i(Z, ["html", "head", "body"]), Z.table && ($i(Z, ["tbody"]), delete _.tbody), Ei && Ei(e), Ae = e)
            }, He = $i({}, ["mi", "mo", "mn", "ms", "mtext"]),
            Te = $i({}, ["foreignobject", "desc", "title", "annotation-xml"]),
            Ve = $i({}, ["title", "style", "font", "a", "script"]), Oe = $i({}, Yi);
        $i(Oe, Xi), $i(Oe, Ji);
        var Ne = $i({}, Qi);
        $i(Ne, ea);
        var Pe = function (e) {
            var t = b(e);
            t && t.tagName || (t = {namespaceURI: ye, tagName: "template"});
            var n = qi(e.tagName), r = qi(t.tagName);
            return !!we[e.namespaceURI] && (e.namespaceURI === ge ? t.namespaceURI === Me ? "svg" === n : t.namespaceURI === ve ? "svg" === n && ("annotation-xml" === r || He[r]) : Boolean(Oe[n]) : e.namespaceURI === ve ? t.namespaceURI === Me ? "math" === n : t.namespaceURI === ge ? "math" === n && Te[r] : Boolean(Ne[n]) : e.namespaceURI === Me ? !(t.namespaceURI === ge && !Te[r]) && (!(t.namespaceURI === ve && !He[r]) && (!Ne[n] && (Ve[n] || !Oe[n]))) : !("application/xhtml+xml" !== T || !we[e.namespaceURI]))
        }, Ie = function (e) {
            Di(n.removed, {element: e});
            try {
                e.parentNode.removeChild(e)
            } catch (t) {
                e.remove()
            }
        }, De = function (e, t) {
            try {
                Di(n.removed, {attribute: t.getAttributeNode(e), from: t})
            } catch (e) {
                Di(n.removed, {attribute: null, from: t})
            }
            if (t.removeAttribute(e), "is" === e && !j[e]) if (te || ne) try {
                Ie(t)
            } catch (e) {
            } else try {
                t.setAttribute(e, "")
            } catch (e) {
            }
        }, qe = function (e) {
            var t, n;
            if (ee) e = "<remove></remove>" + e; else {
                var r = Ri(e, /^[\r\n\t ]+/);
                n = r && r[0]
            }
            "application/xhtml+xml" === T && ye === Me && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
            var a = k ? k.createHTML(e) : e;
            if (ye === Me) try {
                t = (new d).parseFromString(a, T)
            } catch (e) {
            }
            if (!t || !t.documentElement) {
                t = C.createDocument(ye, "template", null);
                try {
                    t.documentElement.innerHTML = be ? x : a
                } catch (e) {
                }
            }
            var o = t.body || t.documentElement;
            return e && n && o.insertBefore(i.createTextNode(n), o.childNodes[0] || null), ye === Me ? E.call(t, J ? "html" : "body")[0] : J ? t.documentElement : o
        }, ze = function (e) {
            return A.call(e.ownerDocument || e, e, h.SHOW_ELEMENT | h.SHOW_COMMENT | h.SHOW_TEXT, null, !1)
        }, Re = function (e) {
            return e instanceof p && ("string" != typeof e.nodeName || "string" != typeof e.textContent || "function" != typeof e.removeChild || !(e.attributes instanceof f) || "function" != typeof e.removeAttribute || "function" != typeof e.setAttribute || "string" != typeof e.namespaceURI || "function" != typeof e.insertBefore || "function" != typeof e.hasChildNodes)
        }, Ze = function (e) {
            return "object" == typeof l ? e instanceof l : e && "object" == typeof e && "number" == typeof e.nodeType && "string" == typeof e.nodeName
        }, Be = function (e, t, r) {
            H[e] && Pi(H[e], (function (e) {
                e.call(n, t, r, Ae)
            }))
        }, je = function (e) {
            var t;
            if (Be("beforeSanitizeElements", e, null), Re(e)) return Ie(e), !0;
            var r = V(e.nodeName);
            if (Be("uponSanitizeElement", e, {
                tagName: r,
                allowedTags: Z
            }), e.hasChildNodes() && !Ze(e.firstElementChild) && (!Ze(e.content) || !Ze(e.content.firstElementChild)) && Fi(/<[/\w]/g, e.innerHTML) && Fi(/<[/\w]/g, e.textContent)) return Ie(e), !0;
            if (!Z[r] || _[r]) {
                if (!_[r] && Ue(r)) {
                    if (U.tagNameCheck instanceof RegExp && Fi(U.tagNameCheck, r)) return !1;
                    if (U.tagNameCheck instanceof Function && U.tagNameCheck(r)) return !1
                }
                if (se && !he[r]) {
                    var i = b(e) || e.parentNode, a = y(e) || e.childNodes;
                    if (a && i) for (var o = a.length - 1; o >= 0; --o) i.insertBefore(g(a[o], !0), M(e))
                }
                return Ie(e), !0
            }
            return e instanceof c && !Pe(e) ? (Ie(e), !0) : "noscript" !== r && "noembed" !== r || !Fi(/<\/no(script|embed)/i, e.innerHTML) ? (X && 3 === e.nodeType && (t = e.textContent, t = Zi(t, O, " "), t = Zi(t, N, " "), t = Zi(t, P, " "), e.textContent !== t && (Di(n.removed, {element: e.cloneNode()}), e.textContent = t)), Be("afterSanitizeElements", e, null), !1) : (Ie(e), !0)
        }, Fe = function (e, t, n) {
            if (ie && ("id" === t || "name" === t) && (n in i || n in Le)) return !1;
            if (G && !$[t] && Fi(I, t)) ; else if (W && Fi(D, t)) ; else if (!j[t] || $[t]) {
                if (!(Ue(e) && (U.tagNameCheck instanceof RegExp && Fi(U.tagNameCheck, e) || U.tagNameCheck instanceof Function && U.tagNameCheck(e)) && (U.attributeNameCheck instanceof RegExp && Fi(U.attributeNameCheck, t) || U.attributeNameCheck instanceof Function && U.attributeNameCheck(t)) || "is" === t && U.allowCustomizedBuiltInElements && (U.tagNameCheck instanceof RegExp && Fi(U.tagNameCheck, n) || U.tagNameCheck instanceof Function && U.tagNameCheck(n)))) return !1
            } else if (de[t]) ; else if (Fi(R, Zi(n, z, ""))) ; else if ("src" !== t && "xlink:href" !== t && "href" !== t || "script" === e || 0 !== Bi(n, "data:") || !fe[e]) {
                if (K && !Fi(q, Zi(n, z, ""))) ; else if (n) return !1
            } else ;
            return !0
        }, Ue = function (e) {
            return e.indexOf("-") > 0
        }, _e = function (e) {
            var t, r, i, a;
            Be("beforeSanitizeAttributes", e, null);
            var o = e.attributes;
            if (o) {
                var s = {attrName: "", attrValue: "", keepAttr: !0, allowedAttributes: j};
                for (a = o.length; a--;) {
                    var l = (t = o[a]).name, c = t.namespaceURI;
                    if (r = "value" === l ? t.value : ji(t.value), i = V(l), s.attrName = i, s.attrValue = r, s.keepAttr = !0, s.forceKeepAttr = void 0, Be("uponSanitizeAttribute", e, s), r = s.attrValue, !s.forceKeepAttr && (De(l, e), s.keepAttr)) if (Y || !Fi(/\/>/i, r)) {
                        X && (r = Zi(r, O, " "), r = Zi(r, N, " "), r = Zi(r, P, " "));
                        var h = V(e.nodeName);
                        if (Fe(h, i, r)) {
                            if (!ae || "id" !== i && "name" !== i || (De(l, e), r = oe + r), k && "object" == typeof m && "function" == typeof m.getAttributeType) if (c) ; else switch (m.getAttributeType(h, i)) {
                                case"TrustedHTML":
                                    r = k.createHTML(r);
                                    break;
                                case"TrustedScriptURL":
                                    r = k.createScriptURL(r)
                            }
                            try {
                                c ? e.setAttributeNS(c, l, r) : e.setAttribute(l, r), Ii(n.removed)
                            } catch (e) {
                            }
                        }
                    } else De(l, e)
                }
                Be("afterSanitizeAttributes", e, null)
            }
        }, $e = function e(t) {
            var n, r = ze(t);
            for (Be("beforeSanitizeShadowDOM", t, null); n = r.nextNode();) Be("uponSanitizeShadowNode", n, null), je(n) || (n.content instanceof a && e(n.content), _e(n));
            Be("afterSanitizeShadowDOM", t, null)
        };
        return n.sanitize = function (e) {
            var t, i, o, s, c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if ((be = !e) && (e = "\x3c!--\x3e"), "string" != typeof e && !Ze(e)) {
                if ("function" != typeof e.toString) throw Ui("toString is not a function");
                if ("string" != typeof (e = e.toString())) throw Ui("dirty is not a string, aborting")
            }
            if (!n.isSupported) return e;
            if (Q || Se(c), n.removed = [], "string" == typeof e && (le = !1), le) {
                if (e.nodeName) {
                    var h = V(e.nodeName);
                    if (!Z[h] || _[h]) throw Ui("root node is forbidden and cannot be sanitized in-place")
                }
            } else if (e instanceof l) 1 === (i = (t = qe("\x3c!----\x3e")).ownerDocument.importNode(e, !0)).nodeType && "BODY" === i.nodeName || "HTML" === i.nodeName ? t = i : t.appendChild(i); else {
                if (!te && !X && !J && -1 === e.indexOf("<")) return k && re ? k.createHTML(e) : e;
                if (!(t = qe(e))) return te ? null : re ? x : ""
            }
            t && ee && Ie(t.firstChild);
            for (var u = ze(le ? e : t); o = u.nextNode();) je(o) || (o.content instanceof a && $e(o.content), _e(o));
            if (le) return e;
            if (te) {
                if (ne) for (s = L.call(t.ownerDocument); t.firstChild;) s.appendChild(t.firstChild); else s = t;
                return (j.shadowroot || j.shadowrootmod) && (s = S.call(r, s, !0)), s
            }
            var f = J ? t.outerHTML : t.innerHTML;
            return J && Z["!doctype"] && t.ownerDocument && t.ownerDocument.doctype && t.ownerDocument.doctype.name && Fi(da, t.ownerDocument.doctype.name) && (f = "<!DOCTYPE " + t.ownerDocument.doctype.name + ">\n" + f), X && (f = Zi(f, O, " "), f = Zi(f, N, " "), f = Zi(f, P, " ")), k && re ? k.createHTML(f) : f
        }, n.setConfig = function (e) {
            Se(e), Q = !0
        }, n.clearConfig = function () {
            Ae = null, Q = !1
        }, n.isValidAttribute = function (e, t, n) {
            Ae || Se({});
            var r = V(e), i = V(t);
            return Fe(r, i, n)
        }, n.addHook = function (e, t) {
            "function" == typeof t && (H[e] = H[e] || [], Di(H[e], t))
        }, n.removeHook = function (e) {
            if (H[e]) return Ii(H[e])
        }, n.removeHooks = function (e) {
            H[e] && (H[e] = [])
        }, n.removeAllHooks = function () {
            H = {}
        }, n
    }()
    window.DOMPurify = DOMPurify
    DOMPurify.addHook("afterSanitizeAttributes", function (e) {
        e.instanceOf(HTMLAnchorElement) && (e.setAttribute("target", "_blank"), e.hasAttribute("rel") || e.setAttribute("rel", "noopener"))
    })

    var ya = {
        ALLOW_UNKNOWN_PROTOCOLS: !0,
        RETURN_DOM_FRAGMENT: !0,
        FORBID_TAGS: ["style"],
        ADD_TAGS: ["iframe"],
        ADD_ATTR: ["frameborder", "allowfullscreen", "allow", "data-tooltip-position"]
    };

    function sanitizeHTMLToDom(html) {
        return document.importNode(DOMPurify.sanitize(html, ya), !0)
    }

    let wa = function () {
        function e() {
            this.map = new WeakMap
        }

        e.prototype.get = function (e) {
            return this.map.get(e)
        }
        e.prototype.set = function (e, t) {
            return this.map.set(e, t), this
        }
        e.prototype.has = function (e) {
            return this.map.has(e)
        }
        e.prototype.delete = function (e) {
            return this.map.delete(e)
        }
        return e
    }()
    let ka = 0
    let xa = function () {
        function e() {
            this._ = "_weakmap_" + ka++
        }

        e.prototype.get = function (e) {
            return this.has(e) ? e[this._] : void 0
        }
        e.prototype.set = function (e, t) {
            return Object.defineProperty(e, this._, {configurable: !0, value: t}), this
        }
        e.prototype.has = function (e) {
            return Object.hasOwnProperty.call(e, this._)
        }
        e.prototype.delete = function (e) {
            return this.has(e) && delete e[this._]
        }
        return e
    }();

    function Ca() {
        return window.WeakMap ? new wa() : new xa()
    }

    var Aa = function () {
        function e(worker) {
            this.promise = null
            this.worker = worker
            this.worker.onmessage = this.onReceiveMessageFromWorker.bind(this)
        }

        e.prototype.onReceiveMessageFromWorker = function (e) {
            if (this.promise) {
                var t = this.promise;
                this.promise = null, t.resolve(e.data)
            }
        }
        e.prototype.submit = function (e, t) {
            return this.promise ? null : (this.promise = Wr(), this.worker.postMessage(e, t), this.promise.promise)
        }
        return e
    }();

    function La(e, t) {
        return a(this, void 0, Promise, (function () {
            var n;
            return o(this, (function (r) {
                switch (r.label) {
                    case 0:
                        return [4, ajaxPromise({url: e})];
                    case 1:
                        return n = r.sent(), [2, new Worker(window.URL.createObjectURL(new Blob([n])), t)]
                }
            }))
        }))
    }

    function Ea(e, t) {
        return a(this, void 0, void 0, (function () {
            return o(this, (function (n) {
                if (isFirefox) return [2, La(e, t)];
                try {
                    return [2, new Worker(e, t)]
                } catch (t) {
                    return [2, La(e)]
                }
                return [2]
            }))
        }))
    }

    const MarkdownRenderChild = function (Component) {
        function t(containerEl) {
            let _this = Component.call(this) || this
            _this.containerEl = containerEl
            return _this
        }

        extend(t, Component)
        return t
    }(Component)
    const MarkdownPreviewSection = function () {
        function e(e) {
            this.rendered = !1, this.height = 0, this.computed = !1, this.lines = 0, this.lineStart = 0, this.lineEnd = 0, this.used = !0, this.highlightRanges = null, this.level = 0, this.headingCollapsed = !1, this.shown = !0, this.usesFrontMatter = !1, this.html = e || "", this.el = createDiv(), null === e && (this.rendered = !0)
        }

        e.prototype.render = function () {
            if (!this.rendered) {
                var e = sanitizeHTMLToDom(this.html);
                this.el.appendChild(e), this.rendered = !0, this.computed = !1
            }
        }
        e.prototype.resetCompute = function () {
            this.computed = !1;
            var e = this.highlightRanges;
            if (e) for (var t = 0, n = e; t < n.length; t++) {
                n[t].rects = null
            }
        }
        e.prototype.setCollapsed = function (e) {
            this.headingCollapsed = e, Un(this.el, e)
        }
        return e
    }()

    function Ta(e, t) {
        var n = e.firstChild;
        n && n.instanceOf(HTMLHeadingElement) && t(n)
    }

    function Va(e, t) {
        for (var n = 0, r = e.findAll("li"); n < r.length; n++) {
            var i = r[n], a = i.findAll("ul, ol");
            a && a.length > 0 && t(i)
        }
    }

    var Oa = null, Na = !1;

    const MarkdownPreviewRenderer = function () {
        function e(t, n, r, i, a) {
            void 0 === a && (a = !0);
            var o = this;
            this.previewEl = null, this.sizerEl = null, this.pusherEl = null, this.header = null, this.footer = null, this.cssClasses = null, this.sections = [], this.asyncSections = [], this.recycledSections = [], this.lastText = null, this.text = "", this.frontmatter = null, this.queued = null, this.rendered = null, this.lastRender = 0, this.lastScroll = 0, this.viewportHeight = 0, this.renderedWidth = 0, this.renderExtra = 1, this.renderExtraMinPx = 500, this.addBottomPadding = !1, this.topSpace = 0, this.parsing = !1, this.scrolling = !1, this.owner = t, this.workerPath = i;
            var s = this.previewEl = r.createDiv("markdown-preview-view markdown-rendered"),
                l = this.sizerEl = s.createDiv("markdown-preview-sizer markdown-preview-section"),
                c = this.pusherEl = createDiv("markdown-preview-pusher");
            c.style.width = "1px", c.style.height = "0.1px", e.registerDomEvents(l, n, this.handleDetached.bind(this)), l.on("click", "a.footnote-link", this.onFootnoteLinkClick.bind(this)), l.on("click", ".task-list-item-checkbox", this.onCheckboxClick.bind(this)), l.on("click", ".heading-collapse-indicator", this.onHeadingCollapseClick.bind(this)), l.on("click", "li > .list-collapse-indicator", this.onListCollapseClick.bind(this)), s.addEventListener("scroll", this.onScroll.bind(this), scrollEventOption), a && s.onNodeInserted((function () {
                return o.queueRender()
            })), this.onResize()
        }

        return e.prototype.set = function (e) {
            this.text = e, this.queueRender()
        }, e.prototype.rerender = function (e) {
            if (this.lastText = null, e) for (var t = this.header, n = this.footer, r = 0, i = this.sections; r < i.length; r++) {
                var a = i[r];
                a !== t && a !== n && (a.rendered = !1, a.el.empty())
            }
            this.queueRender()
        }, e.prototype.clear = function () {
            this.sections = [], this.asyncSections = [], this.recycledSections = [], this.rendered = [], this.sizerEl.empty(), this.text = "", this.lastText = null, this.lastScroll = 0, this.previewEl.scrollTop = 0, this.renderedWidth = 0, this.owner.onRenderComplete(), this.cleanupParentComponents(), this.queueRender()
        }, e.prototype.belongsToMe = function (t) {
            return e.belongsToMe(t, this.previewEl, this.handleDetached.bind(this))
        }, e.prototype.handleDetached = function (e) {
            return this.sections.some((function (t) {
                return t.el === e
            }))
        }, e.prototype.getSectionForElement = function (e) {
            for (var t = 0, n = this.sections; t < n.length; t++) {
                var r = n[t];
                if (r.el.contains(e)) return r
            }
            return null
        }, e.prototype.getSectionInfo = function (e) {
            if (!this.belongsToMe(e)) return null;
            var t = this.getSectionForElement(e);
            return t ? {text: this.lastText || "", lineStart: t.lineStart, lineEnd: t.lineEnd} : null
        }, e.prototype.getInternalLinkHref = function (e) {
            var t = e.getAttr("data-href") || e.getAttr("href");
            return t && this.belongsToMe(e) ? t : null
        }, e.prototype.onFootnoteLinkClick = function (e, t) {
            if (0 === e.button && this.belongsToMe(t)) {
                e.preventDefault();
                var n = t.getAttr("href");
                if (n && n.startsWith("#")) {
                    for (var r = "[data-footnote-id=" + (n = n.substr(1)) + "]", i = null, a = null, o = 0, s = this.sections; o < s.length; o++) {
                        var l = s[o];
                        if (a = l.el.find(r)) {
                            i = l;
                            break
                        }
                    }
                    if (!a || !i) return;
                    this.showSection(i), this.applyScrollSection(i), this.highlightEl(a), this.updateVirtualDisplay(), a.scrollIntoView({block: "center"}), this.owner.onScroll()
                }
            }
        }, e.prototype.onCheckboxClick = function (e, t) {
            if (this.belongsToMe(t)) {
                var n = parseInt(t.getAttribute("data-line"));
                if (!(n < 0 || isNaN(n))) {
                    var r = this.getSectionContainer(t);
                    if (r) {
                        var i = r.lineStart + n;
                        this.owner.onCheckboxClick(e, t, i)
                    }
                }
            }
        }, e.prototype.onHeadingCollapseClick = function (e, t) {
            if (0 === e.button && !e.defaultPrevented) {
                var n = t.parentNode;
                if (n && n.instanceOf(HTMLHeadingElement) && this.belongsToMe(n)) {
                    var r = this.getSectionContainer(n);
                    r && (r.setCollapsed(!r.headingCollapsed), this.previewEl.win.getSelection().removeAllRanges(), this.queueRender(), this.owner.onFoldChange())
                }
            }
        }, e.prototype.onListCollapseClick = function (e, t) {
            if (0 === e.button && !e.defaultPrevented) {
                var n = t.parentNode;
                if (n && n.instanceOf(HTMLLIElement)) if (this.belongsToMe(n)) if (n.findAll("ul, ol")) {
                    e.preventDefault();
                    var r = !n.hasClass("is-collapsed");
                    Un(n, r), window.getSelection().removeAllRanges();
                    var i = this.getSectionContainer(t);
                    i && (i.resetCompute(), this.queueRender()), this.owner.onFoldChange()
                }
            }
        }, e.prototype.queueRender = function () {
            this.rendered || (this.rendered = []);
            var e = this.queued, t = !this.parsing;
            if (e) t && !e.high && (e.cancel(), this.queued = Er(this.onRender.bind(this), 0)); else {
                var n = t ? 0 : 200;
                this.queued = Er(this.onRender.bind(this), n)
            }
        }, e.prototype.parseAsync = function () {
            var e = this;
            this.parsing || (this.parsing = !0, a(e, void 0, Promise, (function () {
                var e, t, n, r, i, a;
                return o(this, (function (o) {
                    switch (o.label) {
                        case 0:
                            return o.trys.push([0, 6, , 7]), Oa ? [3, 2] : [4, Ea(this.workerPath)];
                        case 1:
                            e = o.sent(), Oa = new Aa(e), o.label = 2;
                        case 2:
                            return Oa.promise ? [4, Oa.promise.promise] : [3, 4];
                        case 3:
                            return o.sent(), [3, 2];
                        case 4:
                            return t = this.text, [4, Oa.submit({parseSections: t, options: On.globalOptions})];
                        case 5:
                            return n = o.sent(), r = this.previewEl, i = r.scrollTop, this.parseFinish(t, n), r.scrollTop = i, this.onRender(), this.parsing = !1, [3, 7];
                        case 6:
                            return a = o.sent(), this.parsing = !1, console.error(a), this.parseSync(), this.queueRender(), [3, 7];
                        case 7:
                            return [2]
                    }
                }))
            })))
        }, e.prototype.parseSync = function () {
            var e = this.text, t = Fn(e);
            this.parseFinish(e, t)
        }, e.prototype.parseFinish = function (e, t) {
            for (var n = t.sectionHtml, r = t.lineNumbers, i = t.levels, a = t.frontmatter, o = this, s = o.recycledSections, l = o.header, c = o.footer, h = this.sections, u = new UniqueFileLookup, f = 0, p = h; f < p.length; f++) {
                var d = p[f];
                d !== l && d !== c && (d.used = !1, u.add(d.html, d))
            }
            for (var m = [], v = 0; v < n.length; v++) {
                var g = n[v], M = null, y = u.get(g);
                if (y && y.length > 0) for (var b = 0, w = y; b < w.length; b++) {
                    var k = w[b];
                    if (!k.used) {
                        k.used = !0, M = k;
                        break
                    }
                }
                var x = r[v], C = x[0], A = x[1];
                M || (M = new MarkdownPreviewSection(g));
                var L = 0 === v ? 0 : C, E = v === n.length - 1 ? A + 1 : r[v + 1][0];
                M.lines = E - L, M.lineStart = C, M.lineEnd = A, M.level = i[v], m.push(M)
            }
            var S = JSON.stringify(this.frontmatter) === JSON.stringify(a);
            if (this.frontmatter = a, S) for (var H = 0, T = m; H < T.length; H++) {
                (q = T[H]).usesFrontMatter && (q.rendered = !1, q.el.empty())
            }
            var V = this.cssClasses, O = this.previewEl;
            V && (O.removeClasses(V), this.cssClasses = null);
            var N = function (e) {
                return e ? zn(e, /^cssclass(es)?$/i, !0) : null
            }(a);
            N && N.length > 0 && (this.cssClasses = N, O.addClasses(N)), l && m.unshift(l), c && m.push(c), this.sections = m;
            var P = this.asyncSections;
            this.asyncSections = [];
            for (var I = 0, D = P; I < D.length; I++) {
                var q = D[I];
                m.contains(q) && this.asyncSections.push(q)
            }
            for (var z = 0, R = h; z < R.length; z++) {
                (q = R[z]).rendered && !q.used && s.push(q)
            }
            this.lastText = e, this.lastRender = Date.now()
        }, e.prototype.onRender = function () {
            var t = this;
            this.queued = null;
            var n = this.previewEl;
            if (!!n.offsetParent && n.offsetWidth > 0) {
                var r = n.scrollTop;
                this.lastText !== this.text && (this.text.length < 10240 ? this.parseSync() : this.parseAsync());
                for (var i = this, a = i.sections, o = i.sizerEl, s = i.pusherEl, l = 0, c = performance.now(), h = !1, u = function (n) {
                    if (n.rendered) return "continue";
                    l++;
                    var r = n.el;
                    n.render();
                    for (var i = 0, a = e.recyclers; i < a.length; i++) {
                        (0, a[i])(r, f.recycledSections)
                    }
                    Ta(r, (function (e) {
                        setIcon(e.createDiv({
                            cls: "heading-collapse-indicator collapse-indicator collapse-icon",
                            prepend: !0
                        }), "right-triangle")
                    })), Va(r, (function (e) {
                        setIcon(e.createDiv({
                            cls: "list-collapse-indicator collapse-indicator collapse-icon",
                            prepend: !0
                        }), "right-triangle")
                    }));
                    for (var o = 0, s = r.findAll("ul > li"); o < s.length; o++) {
                        var u = s[o];
                        u.parentElement.addClass("has-list-bullet"), u.createDiv({cls: "list-bullet", prepend: !0})
                    }
                    var p = [];
                    if ((f.owner.postProcess(n, p, f.frontmatter), p.length > 0 && (f.asyncSections.push(n), Promise.all(p).then((function () {
                        t.asyncSections.remove(n), n.resetCompute(), t.queueRender()
                    }))), l % 10 == 0) && performance.now() - c > 5) return h = !0, "break"
                }, f = this, p = 0, d = a; p < d.length; p++) {
                    if ("break" === u(A = d[p])) break
                }
                for (var m = [], v = !1, g = [s], M = 0, y = 0, b = a; y < b.length; y++) {
                    var w = (A = b[y]).el, k = w.parentElement === o;
                    if (!A.computed && A.rendered ? (k = !0, m.push(A), v = !0, M++) : v && (k = !0, v = !1), k && g.push(w), M > 100) {
                        h = !0;
                        break
                    }
                }
                o.setChildrenInPlace(g);
                for (var x = 0, C = m; x < C.length; x++) {
                    var A = C[x];
                    this.measureSection(A)
                }
                if (this.topSpace = s.offsetTop, this.updateShownSections(), this.updateVirtualDisplay(r), h) this.queueRender(); else if (this.lastText === this.text) {
                    if (this.recycledSections = [], this.asyncSections.length > 0) return;
                    if (this.rendered) for (var L = 0, E = this.rendered; L < E.length; L++) {
                        (0, E[L])()
                    }
                    this.rendered = null, this.owner.onRenderComplete(), this.cleanupParentComponents()
                }
            }
        }, e.prototype.updateShownSections = function () {
            for (var e = 7, t = 0, n = this.sections; t < n.length; t++) {
                var r = n[t];
                r.level > e ? r.shown = !1 : (r.shown = !0, e = 7, r.headingCollapsed && (e = r.level))
            }
        }, e.prototype.updateVirtualDisplay = function (e) {
            var t = this, n = t.previewEl, r = t.sizerEl, i = t.pusherEl, a = t.sections, o = n.scrollTop;
            if ("number" == typeof e && (o = e), Na) {
                var s = [];
                s.push(i);
                for (var l = 0, c = a; l < c.length; l++) {
                    var h = c[l];
                    s.push(h.el)
                }
                return r.setChildrenInPlace(s), r.style.minHeight = "", i.style.marginBottom = "0", void (n.scrollTop = o)
            }
            this.lastScroll = o;
            for (var u = n.clientHeight, f = o + u, p = Math.min(o, n.scrollHeight - u), d = Math.max(u * this.renderExtra, this.renderExtraMinPx), m = p - d, v = f + d, g = 0, M = 0, y = 0; y < a.length; y++) {
                (N = (h = a[y]).height) > 0 && (g += N, M++)
            }
            var b = 0;
            M > 0 && (b = g / M);
            var w = 0, k = this.topSpace, x = [];
            x.push(i);
            var C = -1, A = -1, L = -1, E = -1, S = null, H = null, T = window.getSelection();
            if (T.rangeCount > 0) {
                var V = T.getRangeAt(0);
                !V.collapsed && n.contains(V.startContainer) && n.contains(V.endContainer) && (S = V.startContainer, H = V.endContainer, (S === i || S === r && V.startOffset <= 1) && (L = 0), H === r && V.endOffset > 1 && (E = a.length - 1))
            }
            for (y = 0; y < a.length; y++) {
                var O = (h = a[y]).el;
                if (S && (O === S || O.contains(S)) && (L = y), H && (O === H || O.contains(H)) && (E = y), h.shown) {
                    var N = h.height;
                    if (h.computed) (D = k + N) >= m && k <= v && (-1 === C && (C = y), A = y), k = D; else k += N, 0 === N && (k += b)
                }
            }
            var P = C, I = A;
            -1 !== L && -1 !== E && (P = Math.min(P, L), I = Math.max(I, E)), P < 0 && (P = 0), ++I > a.length - 1 && (I = a.length - 1), k = this.topSpace;
            for (y = 0; y < a.length; y++) {
                O = (h = a[y]).el;
                h.shown && P <= y && y <= I ? x.push(O) : O.parentNode === r && O.detach();
                var D;
                N = h.height;
                h.computed || 0 !== N || (N = b), h.shown || (N = 0), y === P && (w = k), k = D = k + N
            }
            w > 0 && (w -= this.topSpace) < 0 && (w = 0), k -= this.topSpace, k = Math.max(0, k), i.style.marginBottom = w + "px", r.style.minHeight = k - 1 + "px", r.setChildrenInPlace(x), I !== a.length - 1 && I--;
            for (y = P; y <= I; y++) {
                (h = a[y]).shown && this.measureSection(h)
            }
            n.scrollTop !== o && (n.scrollTop = o), this.renderHighlights(C, A)
        }, e.prototype.renderHighlights = function (e, t) {
            var n = this.sections, r = this.sizerEl, i = r.offsetParent;
            if (i) {
                var a = i.getBoundingClientRect(), o = 1;
                i instanceof HTMLElement && (o = i.offsetWidth / Math.round(a.width));
                for (var s = [], l = e; l <= t; l++) if (!(l < 0 || l >= n.length)) {
                    var c = n[l];
                    if (c.shown) {
                        var h = c.highlightRanges;
                        if (h && 0 !== h.length) {
                            var u = [];
                            qr(c.el, u);
                            for (var f = u.map((function (e) {
                                return e.textContent
                            })), p = 0, d = h; p < d.length; p++) {
                                var m = d[p], v = m.rects;
                                if (!v) {
                                    v = m.rects = [];
                                    var g = Rr(u, f, m.start, m.end);
                                    if (!g) continue;
                                    for (var M = g.getClientRects(), y = 0; y < M.length; y++) {
                                        var b = M[y];
                                        v.push({
                                            x: (b.x - a.x + i.scrollLeft) * o,
                                            y: (b.y - a.y + i.scrollTop) * o,
                                            width: b.width * o,
                                            height: b.height * o
                                        })
                                    }
                                }
                                for (var w = 0, k = v; w < k.length; w++) {
                                    var x = k[w], C = createDiv();
                                    m.active && C.addClass("is-active"), C.style.left = x.x + "px", C.style.top = x.y + "px", C.style.width = x.width + "px", C.style.height = x.height + "px", s.push(C)
                                }
                            }
                        }
                    }
                }
                if (s.length > 0) {
                    var A = createDiv("search-highlight");
                    A.setChildrenInPlace(s), r.appendChild(A)
                }
            }
        }, e.prototype.measureSection = function (e) {
            if (e.rendered) {
                var t = e.el, n = t.nextSibling, r = t.offsetTop,
                    i = n ? n.offsetTop : t.offsetTop + t.offsetHeight;
                e.height = i - r, e.computed = !0
            }
        }, e.prototype.onRendered = function (e) {
            this.rendered ? this.rendered.push(e) : e()
        }, e.prototype.onResize = function () {
            this.updateEndPadding();
            var e = this.sections, t = this.previewEl;
            this.viewportHeight = t.clientHeight;
            var n = t.offsetWidth;
            if (n !== this.renderedWidth) {
                this.renderedWidth = n;
                for (var r = 0, i = e; r < i.length; r++) {
                    i[r].resetCompute()
                }
                this.queueRender()
            } else this.updateVirtualDisplay()
        }, e.prototype.updateEndPadding = function () {
            if (this.addBottomPadding) {
                var e = this.previewEl, t = this.sizerEl, n = e.clientHeight;
                t.style.paddingBottom = Math.round(n / 2) + "px"
            } else this.sizerEl.style.paddingBottom = "0"
        }, e.prototype.foldAllHeadings = function () {
            for (var e = function (e) {
                Ta(e.el, (function () {
                    e.setCollapsed(!0)
                }))
            }, t = 0, n = this.sections; t < n.length; t++) {
                e(n[t])
            }
            this.updateShownSections(), this.updateVirtualDisplay(), this.owner.onFoldChange()
        }, e.prototype.unfoldAllHeadings = function () {
            for (var e = 0, t = this.sections; e < t.length; e++) {
                var n = t[e];
                n.setCollapsed(!1), n.shown = !0
            }
            this.updateVirtualDisplay(), this.owner.onFoldChange()
        }, e.prototype.foldAllLists = function () {
            for (var e = function (e) {
                Va(e.el, (function (t) {
                    t.addClass("is-collapsed"), e.resetCompute()
                }))
            }, t = 0, n = this.sections; t < n.length; t++) {
                e(n[t])
            }
            this.queueRender(), this.owner.onFoldChange()
        }, e.prototype.unfoldAllLists = function () {
            for (var e = function (e) {
                Va(e.el, (function (t) {
                    t.removeClass("is-collapsed"), e.resetCompute()
                }))
            }, t = 0, n = this.sections; t < n.length; t++) {
                e(n[t])
            }
            this.queueRender(), this.owner.onFoldChange()
        }, e.prototype.getFoldInfo = function () {
            var e = [];
            if (this.frontmatter) for (var t = 0, n = this.sections; t < n.length; t++) {
                var r = (h = n[t]).el.find(".metadata-container");
                if (r) {
                    r.hasClass("is-collapsed") && e.push({from: h.lineStart, to: h.lineEnd});
                    break
                }
            }
            for (var i = function (t) {
                Ta(t.el, (function () {
                    t.headingCollapsed && e.push({from: t.lineStart, to: t.lineEnd})
                }))
            }, a = 0, o = this.sections; a < o.length; a++) {
                i(h = o[a])
            }
            for (var s = function (t) {
                Va(t.el, (function (n) {
                    if (n.hasClass("is-collapsed")) {
                        var r = parseInt(n.getAttribute("data-line"));
                        if (r < 0 || isNaN(r)) return;
                        var i = t.lineStart + r;
                        e.push({from: i, to: i})
                    }
                }))
            }, l = 0, c = this.sections; l < c.length; l++) {
                var h;
                s(h = c[l])
            }
            return e.length > 0 ? {folds: e, lines: this.text.match(/^/gm).length} : null
        }, e.prototype.applyFoldInfo = function (e) {
            var t = this;
            e && e.lines !== this.text.match(/^/gm).length || this.onRendered((function () {
                var n = new Set;
                if (e) for (var r = 0, i = e.folds; r < i.length; r++) {
                    var a = i[r];
                    n.add(a.from)
                }
                if (t.frontmatter) for (var o = 0, s = t.sections; o < s.length; o++) {
                    var l = (m = s[o]).el.find(".metadata-container");
                    if (l) {
                        Un(l, n.has(m.lineStart));
                        break
                    }
                }
                for (var c = function (e) {
                    Ta(e.el, (function () {
                        e.setCollapsed(n.has(e.lineStart))
                    }))
                }, h = 0, u = t.sections; h < u.length; h++) {
                    c(m = u[h])
                }
                for (var f = function (e) {
                    Va(e.el, (function (t) {
                        var r = parseInt(t.getAttribute("data-line"));
                        if (!(r < 0 || isNaN(r))) {
                            var i = e.lineStart + r, a = n.has(i);
                            t.hasClass("is-collapsed") !== a && (Un(t, a), e.resetCompute())
                        }
                    }))
                }, p = 0, d = t.sections; p < d.length; p++) {
                    var m;
                    f(m = d[p])
                }
                t.queueRender()
            }))
        }, e.prototype.onScroll = function () {
            var e = this, t = e.previewEl, n = e.lastScroll, r = e.viewportHeight, i = t.scrollTop;
            Math.abs(n - i) > Math.max(r * this.renderExtra, this.renderExtraMinPx) / 2 && this.updateVirtualDisplay(i), this.scrolling ? this.scrolling = !1 : this.owner.onScroll()
        }, e.prototype.getScroll = function () {
            var e = this, t = this.previewEl, n = this.sections;
            if (0 === n.length) return null;
            for (var r = t.scrollTop, i = 0, a = this.topSpace, o = 0; o < n.length; o++) {
                var s = n[o];
                if (!s.computed) return null;
                if (!(r > a + s.height || 0 === i && 0 === s.lines)) {
                    var l = s.height;
                    0 === i && (l += a, a = 0);
                    var c = i, h = r - a, u = 0;
                    if (s.lines > 0) {
                        var f = l / s.lines, p = Math.floor(h / f);
                        c += p, u = h / f - p
                    }
                    for (var d = function (t) {
                        return Ir(t, e.previewEl).top
                    }, m = d(s.el), v = void 0, g = 0, M = 0, y = l / s.lines, b = 0, w = s.el.findAll("li"); b < w.length; b++) {
                        var k = w[b];
                        if (this.belongsToMe(k)) {
                            var x = parseInt(k.getAttribute("data-line"));
                            if (!(x < 0 || isNaN(x)) && k.isShown()) {
                                if (!(d(k) - m < h)) {
                                    if ((M = x - g) > 0) {
                                        var C = v ? d(v) : m;
                                        y = (d(k) - C) / M
                                    }
                                    break
                                }
                                g = x, v = k, y = 0
                            }
                        }
                    }
                    if (v) 0 === y && (y = (s.el.offsetTop + s.height - d(v)) / (s.lines - g)), c = i + g, u = (h - (d(v) - m)) / y;
                    return c + u
                }
                i += s.lines, s.shown && (a += s.height)
            }
            return i
        }, e.prototype.applyScroll = function (e, t) {
            var n = this;
            if (!Number.isNumber(e) || isNaN(e)) return !1;
            if (this.text !== this.lastText) return !1;
            var r = Math.floor(e), i = e - r;
            this.scrolling = !0;
            for (var a = this.sections, o = t || {}, s = o.highlight, l = o.center, c = 0, h = this.topSpace, u = 0; u < a.length; u++) {
                var f = a[u];
                if (!f.computed) return !1;
                if (!(c + f.lines <= r)) {
                    if (!f.shown && s && (this.showSection(f), f.shown)) return this.applyScroll(e, t);
                    var p = f.height;
                    0 === c && (p += h, h = 0);
                    var d = p / f.lines, m = r - c, v = 0;
                    l && (v -= (this.previewEl.clientHeight - d) / 2);
                    var g = Math.max(0, h + d * (m + i) + v);
                    this.updateVirtualDisplay(g);
                    for (var M = null, y = function (e) {
                        return Ir(e, n.previewEl).top
                    }, b = 0, w = 0, k = f.el.findAll("li"); w < k.length; w++) {
                        var x = k[w];
                        if (this.belongsToMe(x)) {
                            var C = parseInt(x.getAttribute("data-line"));
                            if (!(C < 0 || isNaN(C)) && x.isShown()) {
                                if (!(C <= m)) {
                                    var A = C - b;
                                    if (A > 0) {
                                        var L = M ? y(M) : f.el.offsetTop;
                                        d = (y(x) - L) / A
                                    }
                                    break
                                }
                                b = C, M = x, d = 0
                            }
                        }
                    }
                    if (M) {
                        0 === d && (d = (f.el.offsetTop + f.height - y(M)) / (f.lines - b));
                        var E = y(M) - f.el.offsetTop;
                        g = Math.max(0, h + E + d * (m - b + i) + v), this.previewEl.scrollTop = g
                    }
                    return s && this.highlightEl(M || f.el), !0
                }
                c += f.lines, f.shown && (h += f.height)
            }
            return !0
        }, e.prototype.getSectionTop = function (e) {
            for (var t = this.sections, n = 0, r = 0; r < t.length; r++) {
                var i = t[r];
                if (i === e) return n;
                var a = i.height;
                !i.computed && 0 === a && r > 0 && (a = n / r), i.shown || (a = 0), n += a
            }
            return -1
        }, e.prototype.showSection = function (e) {
            if (!e.shown) {
                var t = this.sections, n = t.indexOf(e);
                if (-1 !== n) {
                    for (var r = e.level; n >= 0;) {
                        var i = t[n];
                        i.headingCollapsed && i.level < r && (i.setCollapsed(!1), r = i.level), n--
                    }
                    this.updateShownSections(), this.updateVirtualDisplay()
                }
            }
        }, e.prototype.applyScrollSection = function (e) {
            var t = this.previewEl, n = this.getSectionTop(e);
            if (-1 !== n) return this.scrolling = !0, t.scrollTop = n, !0
        }, e.prototype.applyScrollDelayed = function (e, t, n) {
            var r = this;
            this.applyScroll(e, t) ? n && n() : this.onRendered((function () {
                r.applyScroll(e, t), n && n()
            }))
        }, e.prototype.highlightEl = function (e) {
            for (var t = 0, n = this.sections; t < n.length; t++) for (var r = 0, i = n[t].el.findAllSelf(".is-flashing"); r < i.length; r++) {
                i[r].removeClass("is-flashing")
            }
            e.addClass("is-flashing"), setTimeout((function () {
                e.removeClass("is-flashing")
            }), 3e3)
        }, e.prototype.getSectionContainer = function (e) {
            for (var t = null, n = 0, r = this.sections; n < r.length; n++) {
                var i = r[n];
                if (i.el.contains(e)) {
                    t = i;
                    break
                }
            }
            return t
        }, e.prototype.selectRange = function (e) {
            var t = this.sizerEl, n = this.previewEl, r = e.section, i = e.start, a = e.end;
            this.showSection(r);
            var o = this.getSectionTop(r);
            t.contains(r.el) || (n.scrollTop = o, this.updateVirtualDisplay());
            var s = zr(r.el, i, a);
            if (s) {
                var l = function (e) {
                    for (; e;) {
                        if (e.instanceOf(HTMLElement)) return e;
                        e = e.parentNode
                    }
                    return null
                }(s.startContainer);
                if (l) {
                    var c = n.scrollTop + 40, h = c + n.clientHeight - 40;
                    (l.offsetTop < c || l.offsetTop + l.offsetHeight > h) && l.scrollIntoView({
                        behavior: "auto",
                        block: "center",
                        inline: "nearest"
                    })
                }
                this.updateVirtualDisplay()
            }
        }, e.prototype.addHeader = function () {
            this.header || (this.header = new MarkdownPreviewSection(null), this.header.el.addClass("mod-header"), this.sections.unshift(this.header), this.queueRender())
        }, e.prototype.removeHeader = function () {
            this.header && (this.sections.remove(this.header), this.header = null, this.queueRender())
        }, e.prototype.addFooter = function () {
            this.footer || (this.footer = new MarkdownPreviewSection(null), this.footer.el.addClass("mod-footer"), this.sections.push(this.footer), this.queueRender())
        }, e.prototype.removeFooter = function () {
            this.footer && (this.sections.remove(this.footer), this.footer = null, this.queueRender())
        }, e.prototype.updateHeader = function () {
            var e = this.header;
            e && (e.resetCompute(), this.queueRender())
        }, e.prototype.updateFooter = function () {
            var e = this.footer;
            e && (e.resetCompute(), this.queueRender())
        }, e.prototype.cleanupParentComponents = function () {
            for (var e = [], t = 0, n = this.owner._children; t < n.length; t++) {
                (a = n[t]) instanceof MarkdownRenderChild && (this.belongsToMe(a.containerEl) || e.push(a))
            }
            for (var r = 0, i = e; r < i.length; r++) {
                var a = i[r];
                this.owner.removeChild(a)
            }
        }, e.registerPostProcessor = function (e, t) {
            e.sortOrder = t;
            var n = this.postProcessors;
            n.push(e), n.sort((function (e, t) {
                return (e.sortOrder || 0) - (t.sortOrder || 0)
            }))
        }, e.unregisterPostProcessor = function (e) {
            this.postProcessors.remove(e)
        }, e.registerRecycler = function (e) {
            this.recyclers.push(e)
        }, e.unregisterRecycler = function (e) {
            this.recyclers.remove(e)
        }, e.registerCodeBlockPostProcessor = function (e, t) {
            var n = this.codeBlockPostProcessors;
            if (n.hasOwnProperty(e)) throw new Error("Code block postprocessor for language ".concat(e, " is already registered"));
            n[e] = t
        }, e.unregisterCodeBlockPostProcessor = function (e) {
            delete this.codeBlockPostProcessors[e]
        }, e.createCodeBlockPostProcessor = function (e, t) {
            return function (n, r) {
                var i = n.findAll("code.language-" + e);
                if (0 !== i.length) for (var a = 0, o = i; a < o.length; a++) {
                    var s = o[a], l = za(s), c = s.parentElement, h = createDiv("block-language-" + e);
                    c.replaceWith(h);
                    var u = t(l, h, r);
                    u && r.promises.push(u)
                }
            }
        }, e.registerDomEvents = function (t, n, r) {
            function i(n) {
                var i = n.getAttr("data-href") || n.getAttr("href");
                return i && e.belongsToMe(n, t, r) ? {href: i, displayText: n.getText().trim()} : null
            }

            function a(e, t) {
                if (0 === e.button || 1 === e.button) {
                    var r = i(t);
                    r && n.onInternalLinkClick(e, t, r.href, r.displayText)
                }
            }

            function o(e, t) {
                !e.defaultPrevented && Platform.isMobile && t.instanceOf(HTMLImageElement) && function (e) {
                    var t = e.cloneNode(), n = document.body.createDiv("mobile-image-viewer");
                    n.appendChild(t);
                    var r = t.width, i = t.height, a = t.naturalWidth, o = t.naturalHeight, s = 5, l = 0, c = 0,
                        h = 1, u = function () {
                            var e = (h - 1) / h / 2, n = Math.max(0, r * e), a = Math.max(0, i * e);
                            l = Math.clamp(l, -n, n), c = Math.clamp(c, -a, a), h = Math.clamp(h, 1, s), t.style.transform = "scale(".concat(h, ") translate(").concat(l, "px, ").concat(c, "px)")
                        }, f = 0, p = 0, d = 0, m = 0, v = function () {
                            cancelAnimationFrame(m);
                            var e = Date.now(), t = e - d;
                            l += Math.cos(p) * f * t, c += Math.sin(p) * f * t, u(), (f -= Math.min(.003 * t, f)) > .01 && (d = e, m = requestAnimationFrame(v))
                        };
                    t.addEventListener("load", (function () {
                        r = t.width, i = t.height, a = t.naturalWidth, o = t.naturalHeight, (s = 2 * Math.max(a / r, o / i)) < 1 && (s = 1), u()
                    }));
                    var g = null, M = null, y = function (e) {
                        cancelAnimationFrame(m);
                        for (var t = Date.now(), n = t - d, r = Array.prototype.slice.call(e.touches), i = null, a = null, o = 0, s = r; o < s.length; o++) {
                            var y = s[o];
                            g && y.identifier === g.identifier && (i = y), M && y.identifier === M.identifier && (a = y)
                        }
                        if (a && !i && (g = M, i = a, M = null, a = null), i ? r.remove(i) : r.length > 0 && (i = r.first(), r.splice(0, 1)), a ? r.remove(a) : r.length > 0 && (a = r.first(), r.splice(0, 1)), g && i && g.identifier === i.identifier) {
                            var b = window.innerWidth / 2, w = window.innerHeight / 2;
                            if (M && a && M.identifier === a.identifier) {
                                var k = -l + ((g.clientX + M.clientX) / 2 - b) / h,
                                    x = -c + ((g.clientY + M.clientY) / 2 - w) / h, C = (i.clientX + a.clientX) / 2,
                                    A = (i.clientY + a.clientY) / 2, L = g.clientX - M.clientX,
                                    E = g.clientY - M.clientY, S = i.clientX - a.clientX, H = i.clientY - a.clientY,
                                    T = L * L + E * E, V = S * S + H * H;
                                if (0 !== T && 0 !== V) {
                                    var O = Math.sqrt(V / T), N = h * O;
                                    l = (C - b) / N - k, c = (A - w) / N - x, h = N, u()
                                }
                            } else {
                                var P = (i.clientX - g.clientX) / h, I = (i.clientY - g.clientY) / h;
                                l += P, c += I, f = Math.sqrt(P * P + I * I) / n, p = Math.atan2(I, P), u()
                            }
                        }
                        M = a, (g = i) || M || (m = requestAnimationFrame(v)), d = t
                    };
                    n.addEventListener("touchstart", y), n.addEventListener("touchend", y), n.addEventListener("touchmove", y), n.addEventListener("touchcancel", y), n.addEventListener("click", (function (e) {
                        n.remove(), e.preventDefault(), cancelAnimationFrame(m)
                    }))
                }(t)
            }

            t.on("click", "a.internal-link", a), t.on("auxclick", "a.internal-link", a), t.on("dragstart", "a.internal-link", (function (e, t) {
                var r = i(t);
                r && n.onInternalLinkDrag(e, t, r.href, r.displayText)
            })), t.on("contextmenu", "a.internal-link", (function (e, t) {
                var r = i(t);
                r && n.onInternalLinkRightClick(e, t, r.href, r.displayText)
            })), t.on("mouseover", "a.internal-link", (function (e, t) {
                var r = i(t);
                r && n.onInternalLinkMouseover(e, t, r.href, r.displayText)
            })), t.on("click", "a.external-link", (function (i, a) {
                if (0 === i.button || 1 === i.button) {
                    var o = a.getAttr("href");
                    o && e.belongsToMe(a, t, r) && n.onExternalLinkClick(i, a, o)
                }
            })), t.on("contextmenu", "a.external-link", (function (e, t) {
                var r = t.getAttr("href");
                r && n.onExternalLinkRightClick(e, t, r)
            })), t.on("click", "a.tag", (function (i, a) {
                if (0 === i.button && e.belongsToMe(a, t, r)) {
                    i.preventDefault();
                    var o = a.getText();
                    n.onTagClick(i, a, o)
                }
            })), t.on("click", "img", o), t.on("contextmenu", "img", o)
        }, e.belongsToMe = function (e, t, n) {
            for (; e;) {
                if (e === t) return !0;
                if (e.classList.contains("markdown-preview-view")) return !1;
                var r = e.parentElement;
                if (!r) return !!n && n(e);
                e = r
            }
            return !1
        }, e.postProcessors = [], e.codeBlockPostProcessors = {}, e.recyclers = [], e
    }();
    MarkdownPreviewRenderer.registerPostProcessor(function (e, t) {
        var n = e.find(".frontmatter");
        null == n || n.hide()
    })
    MarkdownPreviewRenderer.registerPostProcessor(function (e, t) {
        for (var n = 0, r = e.findAll("[data-footnote-id]"); n < r.length; n++) {
            var i = r[n], a = i.getAttr("data-footnote-id");
            i.setAttr("data-footnote-id", a + "-" + t.docId), i.id = a + "-" + t.docId
        }
        for (var o = 0, s = e.findAll("a.footnote-link"); o < s.length; o++) {
            var l = s[o], c = l.getAttr("href");
            l.setAttr("href", c + "-" + t.docId)
        }
    })
    var Ia = function (e, t) {
        return a(void 0, void 0, void 0, (function () {
            var n, r, i, a, s, l, c, h, u, f, p, d, m, v, g, M, y, b, w, k, x, C, A, L, E, S, H, T, V, O, N;
            return o(this, (function (o) {
                switch (o.label) {
                    case 0:
                        n = za(t), r = t.parentElement, i = t.doc, 0 === (a = r.clientWidth) && (a = e.clientWidth), 0 === a && (a = e.win.innerWidth), s = "m" + genRandomHex(16), l = i.body.createDiv("mermaid"), o.label = 1;
                    case 1:
                        return o.trys.push([1, 3, , 4]), l.style.width = a + "px", l.style.visibility = "hidden", l.style.position = "absolute", [4, mermaid.render(s, n, l)];
                    case 2:
                        if (c = o.sent().svg, l.detach(), (h = createDiv("mermaid")).innerHTML = c, r.replaceWith(h), qa.set(h, n), (u = h).instanceOf(Element)) {
                            for (f = u.findAll('[*|class*="internal-link"] > g.label foreignObject > div'), p = 0, d = f; p < d.length; p++) m = d[p], (v = m.textContent) && (m.empty(), m.createEl("a", {
                                cls: "internal-link",
                                href: v,
                                text: v
                            }));
                            for (g = [u]; g.length > 0;) M = g.pop(), g.push.apply(g, Array.from(M.childNodes)), M.instanceOf(SVGAElement) && M.href && !M.href.baseVal && (M.href.baseVal = M.getAttr("href"));
                            if (y = u.find("style")) {
                                for (b = y.innerHTML, w = b, k = 0, x = u.findAll("marker"); k < x.length; k++) if (C = x[k], A = C.id) {
                                    for (L = s + "-" + A, C.id = L, E = 0, S = ["marker-start", "marker-end"]; E < S.length; E++) for (H = S[E], T = 0, V = u.findAll("[".concat(H, '="url(#').concat(A, ')"]')); T < V.length; T++) (N = V[T]).setAttr(H, "url(#".concat(L, ")"));
                                    b = b.replace(new RegExp("#".concat(yr(A), "(?!\\w|-)"), "g"), "#" + L)
                                }
                                b !== w && (y.innerHTML = b)
                            }
                        }
                        return [3, 4];
                    case 3:
                        return O = o.sent(), (N = i.getElementById("d" + s)) && N.detach(), l.detach(), console.error(O), t.empty(), t.appendText("Error parsing Mermaid diagram!\n\n".concat(O.str || O.message)), [3, 4];
                    case 4:
                        return [2]
                }
            }))
        }))
    };
    MarkdownPreviewRenderer.registerPostProcessor(function (e, t) {
        var n = e.findAll("code.language-mermaid");
        if (0 !== n.length) return function (e, t) {
            var n = this;
            return Xr.then((function () {
                return a(n, void 0, void 0, (function () {
                    var n, r, i, a, s;
                    return o(this, (function (o) {
                        switch (o.label) {
                            case 0:
                                for (n = [], r = function (t) {
                                    t.isShown() || e.isShown() ? n.push(Ia(e, t)) : t.onNodeInserted((function () {
                                        return Ia(e, t)
                                    }), !0)
                                }, i = 0, a = t; i < a.length; i++) s = a[i], r(s);
                                return n.length > 0 ? [4, Promise.all(n)] : [3, 2];
                            case 1:
                                o.sent(), o.label = 2;
                            case 2:
                                return [2]
                        }
                    }))
                }))
            }))
        }(t.containerEl, n)
    })
    var Da = function (e, t) {
        for (var n = 0, r = e; n < r.length; n++) for (var i = 0, a = r[n].el.findAll(".mermaid"); i < a.length; i++) {
            var o = a[i];
            if (t === za(o)) return o
        }
        return null
    };
    MarkdownPreviewRenderer.registerRecycler(function (e, t) {
        for (var n = 0, r = e.findAll("code.language-mermaid"); n < r.length; n++) {
            var i = r[n], a = za(i), o = Da(t, a);
            o && (o.detach(), i.parentElement.replaceWith(o))
        }
    })
    var qa = Ca();

    function za(e) {
        if (qa.has(e)) return qa.get(e);
        var t = gr(e.innerHTML);
        return qa.set(e, t), t
    }

    MarkdownPreviewRenderer.registerPostProcessor(function (e) {
        var t = e.findAll('code[class*="language-"]:not(.is-loaded)');
        if (0 !== t.length) return Jr.then((function () {
            for (var e = 0, n = t; e < n.length; e++) {
                var r = n[e];
                za(r), Prism.highlightElement(r), r.addClass("is-loaded")
            }
        }))
    }, 100)
    var Ra = function (e) {
            return e.className.split(" ").filter((function (e) {
                return e.startsWith("language-")
            })).first()
        },
        Za = function (e, t, n) {
            for (var r = 0, i = e; r < i.length; r++) for (var a = 0, o = i[r].el.findAll('code[class*="language-"].is-loaded'); a < o.length; a++) {
                var s = o[a];
                if (n === qa.get(s) && t === Ra(s)) return s
            }
            return null
        };
    MarkdownPreviewRenderer.registerRecycler(function (e, t) {
        for (var n = 0, r = e.findAll('code[class*="language-"]:not(.is-loaded)'); n < r.length; n++) {
            var i = r[n], a = za(i), o = Ra(i), s = Za(t, o, a);
            s && (s.detach(), i.replaceWith(s))
        }
    })
    var Ba = Ca();
    MarkdownPreviewRenderer.registerPostProcessor(function (e) {
        var t = e.findAll(".math:not(.is-loaded)");
        if (0 !== t.length) return Qr.then((function () {
            for (var e = 0, n = t; e < n.length; e++) {
                var r = n[e], i = gr(r.innerHTML);
                r.empty();
                try {
                    var a = renderMath(i, r.classList.contains("math-block"));
                    r.appendChild(a)
                } catch (e) {
                    r.appendText(i)
                }
                r.addClass("is-loaded"), Ba.set(r, i)
            }
            return ti || (ti = Wr()), clearTimeout(ni), ni = window.setTimeout(ii, 100), ti.promise
        }))
    })
    var ja = function (e, t, n) {
        for (var r = 0, i = e; r < i.length; r++) for (var a = 0, o = i[r].el.findAll(".math.is-loaded"); a < o.length; a++) {
            var s = o[a];
            if (t === Ba.get(s) && s.classList.contains("math-block") === n) return s
        }
        return null
    };

    function Fa(e, t, n) {
        for (var r = 0, i = n; r < i.length; r++) {
            var a = i[r];
            if (e.getAttr(a) !== t.getAttr(a)) return !1
        }
        return !0
    }

    MarkdownPreviewRenderer.registerRecycler(function (e, t) {
        for (var n = 0, r = e.findAll(".math:not(.is-loaded)"); n < r.length; n++) {
            var i = r[n], a = gr(i.innerHTML), o = ja(t, a, i.classList.contains("math-block"));
            o && (o.detach(), i.replaceWith(o))
        }
    })
    var Ua = function (e, t) {
        for (var n = 0, r = e; n < r.length; n++) for (var i = 0, a = r[n].el.findAll(".internal-embed.is-loaded"); i < a.length; i++) {
            var o = a[i];
            if (Fa(t, o, ["src", "width", "height", "alt"])) return o
        }
        return null
    };
    MarkdownPreviewRenderer.registerRecycler(function (e, t) {
        for (var n = 0, r = e.findAll(".internal-embed:not(.is-loaded)"); n < r.length; n++) {
            var i = r[n], a = Ua(t, i);
            a && (a.detach(), i.replaceWith(a))
        }
    })
    MarkdownPreviewRenderer.registerPostProcessor(function (e) {
        var t = e.findAll("img");
        if (0 !== t.length) {
            for (var n = [], r = function (e) {
                var t = function (e) {
                    if (!e || "string" != typeof e) return null;
                    var t;
                    if (t = e.match(ai)) return e = "https://www.youtube.com/embed/" + t[1], t[2] && (e += "?start=" + t[2]), e;
                    if (t = e.match(oi)) {
                        var n = document.body.hasClass("theme-dark");
                        return "https://platform.twitter.com/embed/Tweet.html?dnt=true&theme=".concat(n ? "dark" : "light", "&id=").concat(t[1])
                    }
                    return null
                }(e.src);
                if (t) {
                    var r = si(t);
                    return e.replaceWith(r), "continue"
                }
                e.referrerPolicy = "no-referrer", e.complete || n.push(new Promise((function (t) {
                    e.addEventListener("load", t), e.addEventListener("error", t)
                })))
            }, i = 0, a = t; i < a.length; i++) {
                r(a[i])
            }
            return Promise.all(n)
        }
    })
    var _a = function (e, t, n) {
        for (var r = 0, i = e; r < i.length; r++) for (var a = 0, o = i[r].el.findAll("img"); a < o.length; a++) {
            var s = o[a];
            if (s.instanceOf(HTMLImageElement) && (s.complete && t === s.src)) return s.setAttr("width", n.getAttr("width")), s.setAttr("height", n.getAttr("height")), s.setAttr("alt", n.getAttr("alt")), s
        }
        return null
    };

    function $a(e) {
        var t = e.getAttr("data-callout-fold");
        if ("+" === t || "-" === t) {
            e.addClass("is-collapsible");
            var n = e.find(".callout-title"), r = e.find(".callout-content");
            if (n && r && !n.find(".callout-fold")) {
                var i = !1, s = function () {
                    return l(!i, !0)
                }, l = function (t, n) {
                    i = t, e.toggleClass("is-collapsed", i), c.toggleClass("is-collapsed", i), function (e, t, n) {
                        a(this, void 0, Promise, (function () {
                            return o(this, (function (r) {
                                switch (r.label) {
                                    case 0:
                                        return Xn(e), t ? n ? [4, tr(e)] : [3, 2] : [3, 3];
                                    case 1:
                                        r.sent(), r.label = 2;
                                    case 2:
                                        return e.hide(), [3, 5];
                                    case 3:
                                        return e.show(), n ? [4, er(e)] : [3, 5];
                                    case 4:
                                        r.sent(), r.label = 5;
                                    case 5:
                                        return [2]
                                }
                            }))
                        }))
                    }(r, i, n)
                }, c = n.createDiv("callout-fold");
                c.addEventListener("click", (function (e) {
                    0 === e.button && (e.preventDefault(), s())
                })), setIcon(c, "lucide-chevron-down"), n.addEventListener("click", (function (e) {
                    setTimeout((function () {
                        0 !== e.button || e.defaultPrevented || (e.preventDefault(), s())
                    }), 0)
                })), "-" === t && l(!0, !1)
            }
        }
    }

    function Wa(e, t) {
        if (t.startsWith("'") && t.endsWith("'")) t = t.substring(1, t.length - 1).replace(/\\'/g, "'"); else if (t.startsWith('"')) try {
            var n = JSON.parse(t);
            String.isString(n) && (t = n)
        } catch (e) {
        }
        if (t.startsWith("<svg")) {
            var r = sanitizeHTMLToDom(t).firstChild;
            r && r.instanceOf(SVGSVGElement) && (r.setAttrs({
                width: 16,
                height: 16,
                fill: "currentColor",
                stroke: "currentColor"
            }), e.empty(), e.appendChild(r))
        } else setIcon(e, t)
    }

    MarkdownPreviewRenderer.registerRecycler(function (e, t) {
        for (var n = 0, r = e.findAll("img"); n < r.length; n++) {
            var i = r[n];
            if (i.instanceOf(HTMLImageElement)) {
                var a = i.src, o = _a(t, a, i);
                o && (o.detach(), i.replaceWith(o))
            }
        }
    })
    MarkdownPreviewRenderer.registerPostProcessor(function (e, t) {
        for (var n = function (e) {
            $a(e);
            var t = e.find(".callout-icon");
            if (!t || t.firstChild) return "continue";
            var n = e.getAttr("data-callout-icon");
            if (n || (n = e.getCssPropertyValue("--callout-icon")), n) return Wa(t, n), "continue";
            var r = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            r.setAttrs({width: 16, height: 16}), t.appendChild(r), e.isShown() || e.onNodeInserted((function () {
                var n = e.getCssPropertyValue("--callout-icon");
                n && Wa(t, n)
            }), !0)
        }, r = 0, i = e.findAll(".callout"); r < i.length; r++) {
            n(i[r])
        }
    })
    MarkdownPreviewRenderer.registerPostProcessor(function (e, t) {
        for (var n = 0, r = e.findAll("table"); n < r.length; n++) {
            var i = r[n], a = i.parentNode;
            a && a.instanceOf(HTMLElement) && i === a.firstChild && i === a.lastChild && (a.style.overflowX = "auto")
        }
    })
    var Ga = require(3465),
        Ka = require.n(Ga),
        Ya = require(8010),
        Xa = require.n(Ya);

    function Ja(e) {
        var t = [], n = function (e, n, i) {
            var a = e ? e + "." + n : n;
            if ("string" == typeof i) {
                if (i.startsWith("[[") && i.endsWith("]]")) {
                    var o = Hn(i.substring(2, i.length - 2)), s = o.title, l = o.href;
                    t.push({key: a, link: l, original: i, displayText: s})
                }
            } else r(a, i)
        }, r = function (e, t) {
            if (Array.isArray(t)) for (var r = 0; r < t.length; r++) {
                var i = t[r];
                n(e, String(r), i)
            } else if ("object" == typeof t) for (var a in t) t.hasOwnProperty(a) && n(e, a, t[a])
        };
        return r("", e), t
    }

    function Qa(e, t) {
        if (!e) return e;
        if (e.links) for (var n = 0, r = e.links; n < r.length; n++) {
            t(r[n])
        }
        if (e.embeds) for (var i = 0, a = e.embeds; i < a.length; i++) {
            t(a[i])
        }
        if (e.tags) for (var o = 0, s = e.tags; o < s.length; o++) {
            t(s[o])
        }
        if (e.headings) for (var l = 0, c = e.headings; l < c.length; l++) {
            t(c[l])
        }
        if (e.sections) for (var h = 0, u = e.sections; h < u.length; h++) {
            t(u[h])
        }
        if (e.listItems) for (var f = 0, p = e.listItems; f < p.length; f++) {
            t(p[f])
        }
        if (e.blocks) for (var d in e.blocks) e.blocks.hasOwnProperty(d) && t(e.blocks[d]);
        return e
    }

    function eo(e) {
        return {start: {line: e[0], col: e[1], offset: e[2]}, end: {line: e[3], col: e[4], offset: e[5]}}
    }

    function to(e) {
        var t = e.pos;
        t && Array.isArray(t) && 6 === t.length && (delete e.pos, e.position = eo(t))
    }

    function no(e) {
        var t;
        if (e.frontmatter && Array.isArray(e.frontmatter) && (e.frontmatter = null, delete e.frontmatterPos, delete e.frontmatterLinks), e.frontmatter) {
            var n = null !== (t = e.frontmatterPos) && void 0 !== t ? t : e.frontmatter.pos;
            n && (e.frontmatterPosition = eo(n)), delete e.frontmatterPos, delete e.frontmatter.pos, e.frontmatterLinks || (e.frontmatterLinks = Ja(e.frontmatter))
        }
        return Qa(e, to)
    }

    function getLinkpath(linktext) {
        return (linktext = En(linktext).normalize("NFC")).split("#")[0]
    }

    function parseLinktext(linktext) {
        var t = (linktext = En(linktext).normalize("NFC")).split("#")[0];
        return {path: t, subpath: linktext.substr(t.length)}
    }

    function ao(e, t) {
        return !!e && (!0 === iterateRefs(e.links, t) || !0 === iterateRefs(e.embeds, t))
    }

    function iterateRefs(refs, cb) {
        if (!refs) return !1;
        for (var n = 0, r = refs; n < r.length; n++) {
            if (!0 === cb(r[n])) return !0
        }
        return !1
    }

    function getAllTags(cache) {
        if (!cache) return null;
        var t = [], n = function (e) {
            if (!e) return null;
            var t = zn(e, /^tag(s)?$/i, !0);
            if (t) for (var n = 0; n < t.length; n++) {
                var r = t[n];
                "#" !== r.charAt(0) && (t[n] = "#" + r)
            }
            return t
        }(cache.frontmatter);
        if (n) for (var r = 0, i = n; r < i.length; r++) {
            var a = i[r];
            t.push(a)
        }
        var o = cache.tags;
        if (o) for (var s = 0, l = o; s < l.length; s++) {
            a = l[s];
            t.push(a.tag)
        }
        return t
    }

    var lo = /[!"#$%&()*+,.:;<=>?@^`{|}~\/\[\]\\\r\n]/g,
        co = /([:#|^\\\r\n]|%%|\[\[|]])/g;

    function stripHeading(heading) {
        return heading.replace(lo, " ").replace(/\s+/g, " ").trim()
    }

    function stripHeadingForLink(heading) {
        return heading.replace(co, " ").replace(/\s+/g, " ").trim()
    }

    function resolveSubpath(cache, subpath) {
        if (!cache || !subpath) return null;
        var n = subpath.split("#").filter((function (e) {
            return !!e
        }));
        if (!n || 0 === n.length) return null;
        if (1 === n.length) {
            var r = n[0];
            if (r.startsWith("^")) {
                var i = r.substr(1).toLowerCase(), a = cache.blocks;
                if (a && a.hasOwnProperty(i)) for (var o in a) if (o.toLowerCase() === i && a.hasOwnProperty(o)) {
                    var s = a[o], l = null;
                    if (cache.listItems) for (var c = 0, h = cache.listItems; c < h.length; c++) {
                        var u = h[c];
                        if (u.id && u.id.toLowerCase() === i) {
                            l = u;
                            break
                        }
                    }
                    return {type: "block", block: s, list: l, start: s.position.start, end: s.position.end}
                }
            }
        }
        var f = cache.headings;
        if (!f || 0 === f.length) return null;
        for (var p = 0, d = 0, m = null, v = null, g = 0, M = f; g < M.length; g++) {
            var y = M[g];
            if (m && y.level <= d) {
                v = y;
                break
            }
            !m && y.level > d && stripHeading(y.heading).toLowerCase() === stripHeading(n[p]).toLowerCase() && (p++, d = y.level, p === n.length && (m = y))
        }
        return m ? {
            type: "heading",
            current: m,
            next: v,
            start: m.position.start,
            end: v ? v.position.start : null
        } : null
    }

    function po(e, t, n, r) {
        void 0 === r && (r = !1);
        var i = "", a = "", o = "", s = "";
        if ("block" === n.type && n.list) {
            var l = function (e, t) {
                var n = e.listItems;
                if (!n) return t;
                var r = n.indexOf(t);
                if (-1 === r) return t;
                var i = new Set;
                i.add(t.position.start.line);
                for (var a = t, o = r + 1; o < n.length; o++) {
                    var s = n[o];
                    if (!i.has(s.parent)) break;
                    i.add(s.position.start.line), a = s
                }
                return a
            }(t, n.list), c = function (e, t) {
                var n = e.position.start, r = t.position.end;
                return {start: n.offset - n.col, end: r.offset}
            }(n.list, l), h = c.start, u = c.end;
            i = e.substring(0, h), a = e.substring(u);
            var f = function (e) {
                var t = e.split("\n"), n = t[0].match(/^\s*/)[0], r = n.replace(/\t/g, "    ").length;
                if (r > 0) for (var i = 0; i < t.length; i++) {
                    for (var a = t[i], o = 0, s = 0; o < a.length && s < r;) s += "\t" === a.charAt(o) ? 4 : 1, o++;
                    t[i] = a.substr(o)
                }
                return {indent: n, text: t.join("\n")}
            }(e.substring(h, u));
            e = f.text, o = f.indent
        } else {
            h = n.start.offset, u = n.end ? n.end.offset : e.length;
            var p = h;
            r && "heading" === n.type && (p = n.current.position.end.offset + 1, s = e.substring(h, p)), i = e.substring(0, h), a = e.substring(u), e = e.substring(p, u)
        }
        return {before: i, after: a, indent: o, heading: s, content: e}
    }

    const Events = function () {
        function e() {
            this._ = {}
        }

        e.prototype.on = function (name, callback, ctx) {
            var r = this._
                , i = r[name];
            i || (r[name] = i = []);
            var a = {
                e: this,
                name: name,
                fn: callback,
                ctx: ctx
            };
            return i.push(a),
                a
        }
        e.prototype.off = function (name, callback) {
            var n = this._
                , r = n[name]
                , i = [];
            if (r && callback)
                for (var a = 0; a < r.length; a++)
                    r[a].fn !== callback && i.push(r[a]);
            i.length > 0 ? n[name] = i : delete n[name]
        }
        e.prototype.offref = function (eventRef) {
            if (eventRef) {
                var t = eventRef.name
                    , n = this._
                    , r = n[t]
                    , i = [];
                if (r && eventRef)
                    for (var a = 0; a < r.length; a++)
                        r[a] !== eventRef && i.push(r[a]);
                i.length ? n[t] = i : delete n[t]
            }
        }
        e.prototype.trigger = function (name) {
            for (var t = [], n = 1; n < arguments.length; n++)
                t[n - 1] = arguments[n];
            var r = this._
                , i = r[name];
            if (i) {
                i = i.slice();
                for (var a = 0; a < i.length; a++)
                    this.tryTrigger(i[a], t)
            }
        }
        e.prototype.tryTrigger = function (eventRef, args) {
            try {
                eventRef.fn.apply(eventRef.ctx, args)
            } catch (e) {
                setTimeout((function () {
                        throw e
                    }
                ), 0)
            }
        }
        return e
    }();

    function vo(e) {
        var t = e.lastIndexOf("/");
        return -1 === t ? e : e.slice(t + 1)
    }

    function go(e) {
        var t = e.lastIndexOf("/");
        return -1 === t ? "" : e.slice(0, t)
    }

    function Mo(e) {
        var t = vo(e), n = t.lastIndexOf(".");
        return -1 === n || n === t.length - 1 || 0 === n ? t : t.substr(0, n)
    }

    function yo(e) {
        var t = e.lastIndexOf(".");
        return -1 === t || t === e.length - 1 || 0 === t ? e : e.substr(0, t)
    }

    function bo(e) {
        var t = e.lastIndexOf(".");
        return -1 === t || t === e.length - 1 || 0 === t ? "" : e.substr(t + 1).toLowerCase()
    }

    function wo(e) {
        var t = vo(e);
        return "md" === bo(t) ? Mo(t) : t
    }

    const SiteCache = function () {
        function e() {
            this.cache = {}, this.uniqueFiles = new UniqueFileLookup, this.aliases = {}, this.permalinks = {}
        }

        e.prototype.load = function (e) {
            return a(this, void 0, void 0, (function () {
                var t, n, r, i, a, s, l, c, h;
                return o(this, (function (o) {
                    for (n in this.cache = e, t = this.uniqueFiles = new UniqueFileLookup, e) if (e.hasOwnProperty(n) && (t.add(vo(n).toLowerCase(), n), (r = e[n]) && (no(r), i = r.frontmatter))) {
                        if (a = Rn(i)) for (s = 0, l = a; s < l.length; s++) c = l[s], this.aliases[c.toLowerCase()] = n;
                        (h = i.permalink) && "string" == typeof h && (h.startsWith("/") && (h = h.substring(1)), this.permalinks[h] = n)
                    }
                    return [2]
                }))
            }))
        }
        e.prototype.getCache = function (e) {
            var t = this.cache;
            return t.hasOwnProperty(e) ? t[e] : null
        }
        e.prototype.has = function (e) {
            return this.cache.hasOwnProperty(e)
        }
        e.prototype.getLinktextDest = function (e, t) {
            var n = getLinkpath(e);
            return this.getLinkpathDest(n, t)
        }
        e.prototype.getLinkpathDest = function (e, t) {
            if ("" === e && t && this.cache.hasOwnProperty(t)) return t;
            var n = this._getLinkpathDest(e, t);
            if (n.length > 0) return n[0];
            if ((n = this._getLinkpathDest(e + ".md", t)).length > 0) return n[0];
            var r = this.aliases, i = e.toLowerCase();
            if (r.hasOwnProperty(i)) return r[i];
            var a = vo(e);
            return r.hasOwnProperty(a) ? r[a] : null
        }
        e.prototype._getLinkpathDest = function (e, t) {
            var n = e.toLowerCase(), r = vo(n), i = this.uniqueFiles.get(r);
            if (!i) return [];
            var a = go(t).toLowerCase();
            if (n.startsWith("./") || n.startsWith("../")) {
                if (n.startsWith("./../") && (n = n.substr(2)), n.startsWith("./")) "" !== a && (a += "/"), n = a + n.substring(2); else {
                    for (; n.startsWith("../");) n = n.substr(3), a = go(a);
                    "" !== a && (a += "/"), n = a + n
                }
                for (var o = 0, s = i; o < s.length; o++) {
                    if ((m = (d = s[o]).toLowerCase()) === n) return [d]
                }
            }
            for (var l = 0, c = i; l < c.length; l++) {
                if ((m = (d = c[l]).toLowerCase()) === n) return [d]
            }
            for (var h = [], u = [], f = 0, p = i; f < p.length; f++) {
                var d, m;
                (m = (d = p[f]).toLowerCase()).endsWith(n) && (m.startsWith(a) ? h.push(d) : u.push(d))
            }
            return h.sort((function (e, t) {
                return e.length - t.length
            })), u.sort((function (e, t) {
                return e.length - t.length
            })), h.concat(u)
        }
        return e
    }()
    let K_indexFile = "indexFile",
        K_siteName = "siteName",
        K_logo = "logo",
        K_noindex = "noindex",
        K_defaultTheme = "defaultTheme",
        K_showThemeToggle = "showThemeToggle",
        K_showNavigation = "showNavigation",
        K_showGraph = "showGraph",
        K_showOutline = "showOutline",
        K_showSearch = "showSearch",
        K_googleAnalytics = "googleAnalytics",
        K_hideTitle = "hideTitle",
        K_readableLineLength = "readableLineLength",
        K_strictLineBreaks = "strictLineBreaks",
        K_showHoverPreview = "showHoverPreview",
        K_showBacklinks = "showBacklinks",
        K_slidingWindowMode = "slidingWindowMode",
        K_navigationOrdering = "navigationOrdering",
        K_navigationHiddenItems = "navigationHiddenItems"

    let defaultConfig = {}
    defaultConfig[K_indexFile] = ""
    defaultConfig[K_siteName] = ""
    defaultConfig[K_logo] = ""
    defaultConfig[K_noindex] = false
    defaultConfig[K_defaultTheme] = "light"
    defaultConfig[K_showThemeToggle] = false
    defaultConfig[K_showNavigation] = true
    defaultConfig[K_showGraph] = true
    defaultConfig[K_showOutline] = false
    defaultConfig[K_showSearch] = false
    defaultConfig[K_googleAnalytics] = ""
    defaultConfig[K_hideTitle] = false
    defaultConfig[K_readableLineLength] = true
    defaultConfig[K_strictLineBreaks] = false
    defaultConfig[K_showHoverPreview] = false
    defaultConfig[K_showBacklinks] = false
    defaultConfig[K_slidingWindowMode] = false
    defaultConfig[K_navigationOrdering] = []
    defaultConfig[K_navigationHiddenItems] = []


    var Uo = function (e) {
        return 255 & parseInt(e)
    }
    var _o = /^rgba?\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*[\d.]+\s*)?\)$/i;

    function $o(e) {
        var t = e.match(_o);
        return t ? {
            r: Uo(t[1]),
            g: Uo(t[2]),
            b: Uo(t[3]),
            a: t[4] ? Math.clamp(parseFloat(t[4].substring(1)), 0, 1) : 1
        } : null
    }

    var Wo = .2,
        Go = function (e, t, n) {
            return void 0 === n && (n = .9), e * n + t * (1 - n)
        },
        Ko = function (e, t) {
            return (Go(e >> 16 & 255, t >> 16 & 255) << 16) + (Go(e >> 8 & 255, t >> 8 & 255) << 8) + (0 | Go(255 & e, 255 & t))
        },
        Yo = function (e, t) {
            return t.right < e.left || t.left > e.right || t.bottom < e.top || t.top > e.bottom
        },
        Xo = function (e, t, n) {
            return {left: e - n, right: e + n, top: t - n, bottom: t + n}
        },
        Jo = function (e) {
            e.style.margin = "0", e.style.padding = "0", e.style.border = "0", e.style.width = "100%", e.style.height = "100%", e.style.overflow = "hidden"
        };

    function Qo(e) {
        return void 0 === e && (e = ""), {type: e, links: {}}
    }

    function es(e) {
        if (!e) return Qo();
        var t = Qo(e.type);
        return e.color && (t.color = e.color), t
    }

    var ts = {tag: !0},
        ns = {
            fill: "color-fill",
            fillFocused: "color-fill-focused",
            fillTag: "color-fill-tag",
            fillUnresolved: "color-fill-unresolved",
            fillAttachment: "color-fill-attachment",
            arrow: "color-arrow",
            circle: "color-circle",
            line: "color-line",
            text: "color-text",
            fillHighlight: "color-fill-highlight",
            lineHighlight: "color-line-highlight"
        },
        rs = 100,
        is = function () {
            function e(e, t, n) {
                var r = this;
                this.x = null, this.y = null, this.fx = null, this.fy = null, this.forward = {}, this.reverse = {}, this.weight = 0, this.color = null, this.rendered = !1, this.fadeAlpha = 0, this.moveText = 0, this.fontDirty = !1, this.onClick = function (e) {
                    var t = e.nativeEvent;
                    if (2 === e.button || t.instanceOf(MouseEvent) && ur(t)) {
                        var n = r.renderer;
                        n.onNodeRightClick && n.onNodeRightClick(e.nativeEvent, r.id, r.type)
                    }
                }, this.renderer = e, this.id = t, this.type = n
            }

            return e.prototype.initGraphics = function () {
                var e = this;
                if (this.rendered) return !1;
                this.rendered = !0;
                var t, n = this.renderer;
                (t = this.circle = new PIXI.Graphics).eventMode = "static", t.beginFill(16777215), t.drawCircle(rs, rs, rs), t.endFill(), Platform.isMobile && (t.beginFill(16777215, 1e-4), t.drawCircle(rs, rs, 500), t.endFill()), t.pivot.x = rs, t.pivot.y = rs, t.cursor = "pointer", t.zIndex = 1, t.on("pointerdown", (function (t) {
                    return n.onPointerDown(e, t)
                })).on("pointerover", (function (t) {
                    return n.onPointerOver(e, t)
                })).on("pointerout", (function () {
                    return n.onPointerOut()
                })).on("click", this.onClick).on("rightclick", this.onClick);
                var r = this.getFillColor();
                t.alpha = r.a, t.tint = r.rgb, n.hanger.addChild(t);
                var i = new PIXI.TextStyle(this.getTextStyle()),
                    a = this.text = new PIXI.Text(this.getDisplayText(), i);
                return a.eventMode = "none", a.resolution = 2, a.anchor.set(.5, 0), a.zIndex = 2, n.hanger.addChild(a), this.fadeAlpha = 0, !0
            }, e.prototype.clearGraphics = function () {
                if (this.rendered) {
                    this.rendered = !1;
                    var e = this, t = e.circle, n = e.highlight, r = e.text;
                    t && (this.circle = null, t.parent && t.parent.removeChild(t), t.destroy()), n && (this.highlight = null, n.parent && n.parent.removeChild(n), n.destroy()), r && (this.text = null, r.parent && r.parent.removeChild(r), r.destroy())
                }
            }, e.prototype.getTextStyle = function () {
                var e = this.renderer, t = this.getSize();
                return new PIXI.TextStyle({
                    fontSize: 14 + t / 4,
                    fill: e.colors.text.rgb,
                    fontFamily: 'ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif',
                    wordWrap: !0,
                    wordWrapWidth: 300,
                    align: "center"
                })
            }, e.prototype.render = function () {
                if (this.rendered) {
                    var e = this, t = e.renderer, n = e.x, r = e.y, i = e.circle, a = e.highlight, o = e.text,
                        s = e.fadeAlpha, l = e.moveText, c = this.getSize(), h = this.getFillColor(), u = t.colors.text,
                        f = t.getHighlightNode(), p = f === this, d = t.nodeScale, m = o.visible, v = Wo;
                    (!f || p || this.forward.hasOwnProperty(f.id) || this.reverse.hasOwnProperty(f.id)) && (v = 1);
                    var g = (s = this.fadeAlpha = Go(s, v)) * h.a, M = t.textAlpha;
                    M *= s, p && (M = 1), M *= u.a;
                    var y = p ? 15 : 0;
                    l = this.moveText = m ? Go(l, y) : y;
                    var b = M > .001, w = t.viewport, k = p || !Yo(w, Xo(n, r, c * d + 1));
                    if (b && (b = p || !Yo(w, {
                        left: n - 300,
                        right: n + 300,
                        top: r,
                        bottom: r + 200
                    })), i.tint = Ko(i.tint, h.rgb), i.visible = k, k && (i.x = n, i.y = r, i.scale.x = i.scale.y = c / 100 * d, i.alpha = g), o.visible = b, b && (o.x = n, o.y = r + (c + 5) * d + l / t.scale, o.scale.x = o.scale.y = d, p && t.scale < 1 && (o.scale.x = o.scale.y = 1 / t.scale), o.alpha = M), p) {
                        a || ((a = this.highlight = new PIXI.Graphics).eventMode = "none", a.zIndex = 1, t.hanger.addChild(a)), a.x = n, a.y = r, a.scale.x = a.scale.y = d, a.clear();
                        var x = Math.max(1, 1 / t.scale / d), C = t.colors.circle;
                        a.alpha = C.a, a.lineStyle(x, C.rgb, 1), a.drawCircle(0, 0, c + x / 2)
                    } else a && (a.parent.removeChild(a), a.destroy(), this.highlight = null);
                    this.fontDirty && (this.fontDirty = !1, o.style = this.getTextStyle())
                }
            }, e.prototype.getFillColor = function () {
                var e = this, t = e.renderer, n = e.type, r = e.color;
                if (t.getHighlightNode() === this) return t.colors.fillHighlight;
                if ("focused" === n) {
                    var i = t.colors.fillFocused;
                    if (i.a > 0) return i
                } else {
                    if (r) return r;
                    if ("tag" === n) return t.colors.fillTag;
                    if ("unresolved" === n) return t.colors.fillUnresolved;
                    if ("attachment" === n) return t.colors.fillAttachment
                }
                return t.colors.fill
            }, e.prototype.getSize = function () {
                return this.renderer.fNodeSizeMult * Math.max(8, Math.min(3 * Math.sqrt(this.weight + 1), 30))
            }, e.prototype.getDisplayText = function () {
                var e, t = this.id;
                return e = "md", bo(t) === e && (t = Mo(t)), t
            }, e.prototype.getRelated = function () {
                return Object.keys(this.forward).concat(Object.keys(this.reverse))
            }, e
        }(),
        as = function () {
            function e(e, t, n) {
                this.rendered = !1, this.renderer = e, this.source = t, this.target = n
            }

            return e.prototype.initGraphics = function () {
                if (!this.rendered && this.source.rendered && this.target.rendered) {
                    this.rendered = !0;
                    var e = this.renderer, t = this.px = new PIXI.Container;
                    e.hanger.addChild(t);
                    var n = this.line = new PIXI.Sprite(PIXI.Texture.WHITE);
                    n.eventMode = "none";
                    var r = e.colors.line;
                    n.alpha = Wo * r.a, n.tint = r.rgb, t.addChild(n);
                    var i = this.arrow = new PIXI.Graphics;
                    i.eventMode = "none";
                    var a = e.colors.text;
                    i.alpha = Wo * a.a, i.tint = a.rgb, i.beginFill(16777215), i.moveTo(0, 0), i.lineTo(-4, -2), i.lineTo(-3, 0), i.lineTo(-4, 2), i.lineTo(0, 0), i.endFill(), i.zIndex = 1, e.hanger.addChild(i)
                }
            }, e.prototype.clearGraphics = function () {
                if (this.rendered) {
                    this.rendered = !1;
                    var e = this, t = e.px, n = e.line, r = e.arrow;
                    t && (this.px = null, t.parent && t.parent.removeChild(t), t.destroy(), t.visible = !1), n && (this.line = null, n.destroy(), n.visible = !1), r && (this.arrow = null, r.parent && r.parent.removeChild(r), r.destroy(), r.visible = !1)
                }
            }, e.prototype.render = function () {
                if (this.rendered) {
                    var e = this, t = e.px, n = e.line, r = e.arrow, i = e.renderer, a = e.source, o = e.target,
                        s = i.getHighlightNode(), l = a === s || o === s, c = Wo;
                    s && !l || (c = 1);
                    var h = c * Math.clamp(2 * (i.scale - .3), 0, 1), u = i.colors.line;
                    l && (u = i.colors.lineHighlight);
                    var f, p, d = i.colors.arrow, m = !(a.reverse.hasOwnProperty(o.id) && a.id.localeCompare(o.id) < 0),
                        v = i.fShowArrow, g = i.fLineSizeMult / i.scale, M = i.viewport, y = Xo(a.x, a.y, g),
                        b = Xo(o.x, o.y, g), w = !Yo(M, (f = y, p = b, {
                            left: Math.min(f.left, p.left),
                            right: Math.max(f.right, p.right),
                            top: Math.min(f.top, p.top),
                            bottom: Math.max(f.bottom, p.bottom)
                        }));
                    if (c *= u.a, h *= d.a, n.alpha = Go(n.alpha, c), r.alpha = Go(r.alpha, h), m = m && w, v = v && w && r.alpha > .001, n.visible = m, r.visible = v, m || v) {
                        var k = o.x - a.x, x = o.y - a.y, C = Math.sqrt(k * k + x * x), A = a.getSize() * i.nodeScale,
                            L = o.getSize() * i.nodeScale;
                        r.visible = v = v && C > g, m && (t.x = a.x + k * A / C, t.y = a.y + x * A / C, t.pivot.set(0, 0), t.rotation = Math.atan2(x, k), n.x = 0, n.y = -g / 2, n.width = Math.max(0, C - A - L), n.height = g, n.tint = Ko(n.tint, u.rgb)), r.visible = v, v && (L += 1, r.x = o.x - k * L / C, r.y = o.y - x * L / C, r.pivot.set(0, 0), r.rotation = Math.atan2(x, k), r.scale.x = r.scale.y = 2 * Math.sqrt(i.fLineSizeMult) / i.scale, r.tint = d.rgb)
                    }
                }
            }, e
        }(),
        os = function () {
            function e(e) {
                this.rendered = !1, this.renderer = e
            }

            return e.prototype.initGraphics = function () {
                var e = this.renderer;
                if (!this.text) {
                    var t = this.text = new PIXI.Text("Powered by Obsidian", this.getTextStyle());
                    t.eventMode = "none", t.anchor.set(1, 1), t.zIndex = 3, t.alpha = .5, e.px.stage.addChild(t)
                }
            }, e.prototype.clearGraphics = function () {
                var e = this.text;
                e && e.parent && (this.text = null, e.parent.removeChild(e), e.destroy()), this.rendered = !1
            }, e.prototype.render = function () {
                var e = this.renderer, t = this.text;
                if (t) {
                    t.visible = !e.hidePowerTag, t.alpha = e.colors.text.a;
                    var n = e.px.renderer;
                    t.x = n.width / n.resolution, t.y = n.height / n.resolution, this.rendered || (this.rendered = !0, this.text.style = this.getTextStyle())
                }
            }, e.prototype.getTextStyle = function () {
                return new PIXI.TextStyle({
                    fontSize: 12,
                    fill: this.renderer.colors.text.rgb,
                    fontFamily: 'ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif',
                    wordWrap: !1,
                    align: "right"
                })
            }, e
        }(),
        ss = function () {
            function e(e, t, n, r) {
                var i = this;
                this.interactiveEl = null, this.onNodeClick = null, this.onNodeRightClick = null, this.onNodeHover = null, this.onNodeUnhover = null, this.workerResults = null, this.nodeLookup = {}, this.nodes = [], this.links = [], this.dragNode = null, this.highlightNode = null, this.px = null, this.hanger = null, this.powerTag = null, this.scale = 1, this.nodeScale = 1, this.textAlpha = 1, this.targetScale = 1, this.panX = 0, this.panY = 0, this.panvX = 0, this.panvY = 0, this.keyboardActions = {}, this.panning = !1, this.width = 0, this.height = 0, this.viewport = null, this.zoomCenterX = 0, this.zoomCenterY = 0, this.hidePowerTag = !1, this.fNodeSizeMult = 1, this.fLineSizeMult = 1, this.fTextShowMult = 1, this.fShowArrow = !1, this.mouseX = null, this.mouseY = null, this.colors = {}, this.renderTimer = null, this.hidePowerTag = n, this.containerEl = e, this.testCSS();
                var a = this.interactiveEl = e.createEl("canvas");
                if (e.style.padding = "0", e.style.overflow = "hidden", e.style.position = "relative", a.style.position = "absolute", a.style.left = "0", a.style.top = "0", Jo(a), a.addEventListener("mousedown", (function (e) {
                    return e.preventDefault()
                })), a.addEventListener("wheel", this.onWheel.bind(this), {passive: !1}), a.addEventListener("mousemove", this.onMouseMove.bind(this), {passive: !0}), a.addEventListener("mouseout", this.onMouseMove.bind(this)), r || (r = new Worker("/sim.js", {name: "Graph Worker"})), this.worker = r, r.onmessage = function (e) {
                    e.data.ignore || (i.workerResults = e.data, i.changed())
                }, t) {
                    var o = this.iframeEl = e.createEl("iframe");
                    Jo(o), o.onload = this.onIframeLoad.bind(this), o.contentDocument && this.onIframeLoad()
                } else {
                    var s = e.createEl("canvas");
                    Jo(s), setTimeout((function () {
                        try {
                            i.initGraphics(s)
                        } catch (e) {
                            setTimeout((function () {
                                i.initGraphics(s)
                            }), 300)
                        }
                    }), 50)
                }
            }

            return e.prototype.destroy = function () {
                this.worker.terminate(), this.workerResults = null, this.destroyGraphics()
            }, e.prototype.onIframeLoad = function () {
                var e = this.iframeEl;
                e.contentWindow.onbeforeunload = this.onIframeUnload.bind(this);
                var t = e.contentDocument.body;
                Jo(t), t.innerHTML = "<canvas>";
                var n = t.firstChild;
                Jo(n), this.destroyGraphics(), this.initGraphics(n)
            }, e.prototype.onIframeUnload = function () {
                this.destroyGraphics()
            }, e.prototype.onWheel = function (e) {
                if (e.preventDefault(), this.px) {
                    var t = e.deltaY;
                    1 === e.deltaMode ? t *= 40 : 2 === e.deltaMode && (t *= 800);
                    var n = this.targetScale;
                    if (n *= Math.pow(1.5, -t / 120), this.targetScale = n, n < this.scale) this.zoomCenterX = 0, this.zoomCenterY = 0; else {
                        var r = window.devicePixelRatio;
                        this.zoomCenterX = e.offsetX * r, this.zoomCenterY = e.offsetY * r
                    }
                    this.changed()
                }
            }, e.prototype.onMouseMove = function (e) {
                "mouseout" === e.type ? this.mouseX = this.mouseY = null : (this.mouseX = e.offsetX, this.mouseY = e.offsetY)
            }, e.prototype.initGraphics = function (e) {
                var t, n = this, r = this, i = r.iframeEl, a = r.interactiveEl, o = r.worker;
                PIXI.settings.RENDER_OPTIONS.hello = !1;
                var s = window.WebGL2RenderingContext;
                try {
                    i && i.contentWindow.WebGL2RenderingContext && (window.WebGL2RenderingContext = i.contentWindow.WebGL2RenderingContext), t = this.px = new PIXI.Application({
                        view: e,
                        antialias: !0,
                        backgroundAlpha: 0,
                        autoStart: !1
                    })
                } finally {
                    window.WebGL2RenderingContext = s
                }
                t.renderer.events.setTargetElement(a);
                var l = null;
                this.onPointerDown = function (e, r) {
                    r.nativeEvent.target === a && (g || (n.dragNode = e, l = r.getLocalPosition(t.stage)))
                };
                var c = function (e) {
                    e.nativeEvent.instanceOf(TouchEvent) && w(e.nativeEvent);
                    var t = n.dragNode;
                    if (t) {
                        var r = e.nativeEvent;
                        l && n.onNodeClick && (r.instanceOf(MouseEvent) && (0 === r.button || 1 === r.button) && !ur(r) || r.instanceOf(TouchEvent)) && n.onNodeClick(r, t.id, t.type), t.fx = null, t.fy = null, o.postMessage({
                            alphaTarget: 0,
                            forceNode: {id: t.id, x: null, y: null}
                        }), l = null, n.dragNode = null, n.changed()
                    }
                };
                t.stage.on("pointermove", (function (e) {
                    var r = n.dragNode;
                    if (r) {
                        if (M) return l = null, void (n.dragNode = null);
                        if (l) {
                            var i = e.getLocalPosition(t.stage), a = i.x - l.x, s = i.y - l.y;
                            a * a + s * s > 25 && (l = null)
                        }
                        var c = e.getLocalPosition(n.hanger);
                        r.fx = c.x, r.fy = c.y, o.postMessage({
                            alpha: .3,
                            alphaTarget: .3,
                            run: !0,
                            forceNode: {id: r.id, x: c.x, y: c.y}
                        }), n.changed()
                    }
                })).on("pointerup", c).on("pointerupoutside", c).eventMode = "static", this.onPointerOver = function (e, t) {
                    if ("touch" !== t.pointerType) {
                        n.highlightNode = e, n.changed();
                        var r = t.nativeEvent;
                        r.instanceOf(MouseEvent) && (n.mouseX = r.offsetX, n.mouseY = r.offsetY), n.onNodeHover && n.onNodeHover(r, e.id, e.type)
                    }
                }, this.onPointerOut = function () {
                    n.highlightNode = null, n.changed(), n.onNodeUnhover && n.onNodeUnhover()
                };
                var h = this.hanger = new PIXI.Container;
                h.eventMode = "static";
                var u = this.powerTag = new os(this);
                this.onResize(), this.resetPan();
                var f = new PIXI.Graphics;
                f.eventMode = "static", f.beginFill(0), f.drawRect(0, 0, 1e4, 1e4), f.endFill(), f.alpha = 0;
                var p = null, d = null, m = performance.now(), v = 0, g = null, M = null, y = 0, b = 0,
                    w = function (e) {
                        for (var t = performance.now(), r = t - m, i = Array.prototype.slice.call(e.touches), a = null, o = null, s = 0, c = i; s < c.length; s++) {
                            var h = c[s];
                            g && h.identifier === g.identifier && (a = h), M && h.identifier === M.identifier && (o = h)
                        }
                        if (o && !a && (g = M, a = o, M = null, o = null), a ? i.remove(a) : i.length > 0 && (a = i.first(), i.splice(0, 1)), o ? i.remove(o) : i.length > 0 && (o = i.first(), i.splice(0, 1)), !l && !n.dragNode && g && a && g.identifier === a.identifier) {
                            var u = window.devicePixelRatio;
                            if (M && o && M.identifier === o.identifier) {
                                var f = n.interactiveEl.getBoundingClientRect(),
                                    p = ((g.clientX + M.clientX) / 2 - f.x) * u,
                                    d = ((g.clientY + M.clientY) / 2 - f.y) * u,
                                    w = ((a.clientX + o.clientX) / 2 - f.x) * u,
                                    k = ((a.clientY + o.clientY) / 2 - f.y) * u, x = g.clientX - M.clientX,
                                    C = g.clientY - M.clientY, A = a.clientX - o.clientX, L = a.clientY - o.clientY,
                                    E = x * x + C * C, S = A * A + L * L;
                                if (0 !== E && 0 !== S) {
                                    var H = Math.sqrt(S / E), T = n.targetScale * H, V = n.panX + (w - p),
                                        O = n.panY + (k - d);
                                    n.zoomCenterX = w, n.zoomCenterY = k, n.setPan(V, O), n.targetScale = T, n.changed()
                                }
                                y = 0, b = 0
                            } else {
                                var N = (a.clientX - g.clientX) * u, P = (a.clientY - g.clientY) * u;
                                v = Go(v, r, .8), m = t, y = Go(y, N, .8), b = Go(b, P, .8), n.setPan(n.panX + N, n.panY + P), n.changed()
                            }
                        } else v = Go(v, r, .8), r < 100 && (n.panvX = y / v, n.panvY = b / v), y = y = 0;
                        g = a, M = o
                    }, k = function (e) {
                        if (e.nativeEvent.instanceOf(TouchEvent)) w(e.nativeEvent); else {
                            p = null, document.body.removeClass("is-grabbing"), n.panning = !1;
                            var t = performance.now() - m;
                            v = Go(v, t, .8), t > 100 ? n.panvX = n.panvY = 0 : (n.panvX /= v, n.panvY /= v)
                        }
                    };
                f.on("pointerdown", (function (e) {
                    e.nativeEvent.instanceOf(TouchEvent) ? w(e.nativeEvent) : (p = e.getLocalPosition(t.stage), d = {
                        x: h.x,
                        y: h.y
                    }, document.body.addClass("is-grabbing"), n.panning = !0)
                })), t.stage.on("pointermove", (function (e) {
                    if (e.nativeEvent.instanceOf(TouchEvent)) w(e.nativeEvent); else if (p) {
                        var r = e.getLocalPosition(t.stage), i = d.x + r.x - p.x, a = d.y + r.y - p.y,
                            o = performance.now();
                        v = Go(v, o - m, .8), m = o, n.panvX = Go(n.panvX, i - n.panX, .8), n.panvY = Go(n.panvY, a - n.panY, .8), n.setPan(i, a), n.changed()
                    }
                })).on("pointerup", k).on("pointerupoutside", k).eventMode = "static", t.stage.addChild(f), t.stage.addChild(h), u.initGraphics(), this.updateZoom(), this.renderCallback = function () {
                    if (n.renderTimer = null, n.px && !(n.idleFrames > 60)) {
                        var e = n, r = e.nodes, i = e.links, a = n.workerResults;
                        if (a) {
                            var o = a.id, s = a.buffer, l = !0;
                            if (s instanceof ArrayBuffer) n.workerResults = null; else {
                                var c = new Uint32Array(s, s.byteLength - 4, 1);
                                c[0] === a.v ? l = !1 : a.v = c[0]
                            }
                            if (l) for (var f = new Float32Array(s), p = 0; p < o.length; p++) {
                                (U = n.nodeLookup[o[p]]) && (U.x = f[2 * p], U.y = f[2 * p + 1], U.fx && (U.x = U.fx), U.fy && (U.y = U.fy))
                            }
                        }
                        var d = n, m = d.panning, v = d.panvX, g = d.panvY, M = d.keyboardActions, y = M.shift;
                        if (!m) {
                            n.panX += 1e3 * v / 60, n.panY += 1e3 * g / 60;
                            var b = 0, w = 0;
                            M.up && (w += 1), M.down && (w -= 1), M.left && (b += 1), M.right && (b -= 1), 0 === b && 0 === w || (n.idleFrames = 0);
                            var k = y ? 3 : 1;
                            n.panvX = Go(v, b * k, .9), n.panvY = Go(g, w * k, .9)
                        }
                        var x = 1 + (y ? .1 : .03), C = !1;
                        if (M.zoomin && (n.targetScale *= x, C = !0), M.zoomout && (n.targetScale /= x, C = !0), C) {
                            n.idleFrames = 0;
                            var A = window.devicePixelRatio;
                            n.zoomCenterX = n.width / 2 * A, n.zoomCenterY = n.height / 2 * A
                        }
                        n.updateZoom();
                        var L = n.scale, E = -n.panX / L, S = -n.panY / L,
                            H = E + n.width / L * window.devicePixelRatio,
                            T = S + n.height / L * window.devicePixelRatio;
                        n.viewport = {left: E, right: H, top: S, bottom: T};
                        for (var V = (E + H) / 2, O = (S + T) / 2, N = [], P = function (e, t) {
                            return e.dist - t.dist
                        }, I = 0, D = r; I < D.length; I++) {
                            if (!(U = D[I]).rendered) {
                                var q = (Q = U.x - V) * Q + (ee = U.y - O) * ee;
                                (N.length < 50 || q < N.last().dist) && (N.push({
                                    node: U,
                                    dist: Q * Q + ee * ee
                                }), N.sort(P), N.length > 50 && N.pop())
                            }
                        }
                        if (N.length > 0) {
                            for (var z = 0, R = N; z < R.length; z++) {
                                R[z].node.initGraphics()
                            }
                            n.idleFrames = 0
                        }
                        for (var Z = 0, B = i; Z < B.length; Z++) {
                            B[Z].initGraphics()
                        }
                        for (var j = 0, F = r; j < F.length; j++) {
                            var U;
                            (U = F[j]).render()
                        }
                        for (var _ = 0, $ = i; _ < $.length; _++) {
                            $[_].render()
                        }
                        u.render(), h.sortChildren(), t.render(), n.idleFrames++, n.queueRender();
                        var W = n, G = W.mouseX, K = W.mouseY, Y = W.highlightNode;
                        if (null !== G && null !== K && Y) {
                            var X = (G * window.devicePixelRatio - n.panX) / L,
                                J = (K * window.devicePixelRatio - n.panY) / L, Q = Y.x - X, ee = Y.y - J,
                                te = Y.getSize() * n.nodeScale + 2;
                            Q * Q + ee * ee > te * te && (n.highlightNode = null, n.idleFrames = 0, n.onNodeUnhover && n.onNodeUnhover())
                        }
                    }
                }, this.queueRender()
            }, e.prototype.destroyGraphics = function () {
                var e = this, t = e.iframeEl, n = e.px, r = e.links, i = e.nodes, a = e.powerTag;
                this.hanger = null;
                for (var o = 0, s = r; o < s.length; o++) {
                    s[o].clearGraphics()
                }
                for (var l = 0, c = i; l < c.length; l++) {
                    c[l].clearGraphics()
                }
                a && (this.powerTag = null, a.clearGraphics()), n && (n.renderer.events.setTargetElement(null), t && document.body.contains(t) && t.contentDocument && n.destroy(!0, {
                    children: !0,
                    texture: !0,
                    baseTexture: !0
                }), this.px = null), this.containerEl.win.cancelAnimationFrame(this.renderTimer), this.renderTimer = null, this.renderCallback = null, document.body.removeClass("is-grabbing")
            }, e.prototype.zoomTo = function (e, t) {
                this.targetScale = e, t ? (this.zoomCenterX = t.x, this.zoomCenterY = t.y) : this.zoomCenterX = this.zoomCenterY = 0
            }, e.prototype.onResize = function () {
                var e = this, t = e.px, n = e.hanger, r = e.containerEl, i = e.interactiveEl,
                    a = window.devicePixelRatio, o = r.clientWidth, s = r.clientHeight;
                if (this.width = o, this.height = s, t) {
                    var l = Math.round(o * a), c = Math.round(s * a), h = t.renderer, u = h.width, f = h.height;
                    h.view.style.width = o + "px", h.view.style.height = s + "px", h.resize(l, c), i.width = o, i.height = s, t.renderer.events.resolutionChange(1 / a), n && this.setPan(this.panX + (l - u) / 2, this.panY + (c - f) / 2)
                }
                this.changed()
            }, e.prototype.resetPan = function () {
                var e = window.devicePixelRatio;
                this.setPan(this.width / 2 * e, this.height / 2 * e)
            }, e.prototype.setData = function (e) {
                for (var t = this, n = t.nodes, r = t.nodeLookup, i = t.links, a = e.nodes, o = {}, s = [], l = [], c = !1, h = !1, u = 0, f = 0, p = n; f < p.length; f++) {
                    var d = p[f];
                    a.hasOwnProperty(d.id) ? (u = Math.max(u, d.x * d.x + d.y * d.y), o[d.id] = !1) : (s.push(d), c = !0)
                }
                var m = Math.sqrt(u), v = [];
                for (var g in a) if (a.hasOwnProperty(g)) {
                    var M = a[g];
                    if (r.hasOwnProperty(g)) {
                        var y = M.color || null;
                        (d = r[g]).color !== y && (d.color = y, h = !0), d.type !== M.type && (d.type = M.type, h = !0)
                    } else {
                        (d = new is(this, g, M.type)).color = M.color || null, n.push(d), r[g] = d, c = !0, v.push(d)
                    }
                }
                for (var g in a) if (a.hasOwnProperty(g) && r.hasOwnProperty(g)) {
                    d = r[g];
                    var b = a[g].links;
                    for (var w in d.forward) d.forward.hasOwnProperty(w) && (b.hasOwnProperty(w) || (l.push(d.forward[w]), c = !0));
                    for (var w in b) if (b.hasOwnProperty(w) && !d.forward.hasOwnProperty(w) && r.hasOwnProperty(w)) {
                        var k = r[w], x = new as(this, d, k);
                        i.push(x), d.forward[k.id] = x, k.reverse[d.id] = x, c = !0
                    }
                }
                for (var C = function (e) {
                    e.clearGraphics(), i.remove(e), delete e.source.forward[e.target.id], delete e.target.reverse[e.source.id]
                }, A = 0, L = l; A < L.length; A++) {
                    C(x = L[A])
                }
                for (var E = 0, S = s; E < S.length; E++) {
                    (d = S[E]).clearGraphics(), n.remove(d), delete r[d.id];
                    var H = d.forward, T = d.reverse;
                    for (var w in H) H.hasOwnProperty(w) && C(H[w]);
                    for (var w in T) T.hasOwnProperty(w) && C(T[w])
                }
                var V = v.length;
                if (V > 0) for (var O = 60 * V * 60, N = Math.sqrt(O / Math.PI + m * m) - m, P = Math.sqrt(O), I = 0, D = v; I < D.length; I++) {
                    for (var q = 0, z = 0, R = 0, Z = 0, B = (d = D[I]).getRelated(); Z < B.length; Z++) {
                        var j = B[Z];
                        if (r.hasOwnProperty(j)) {
                            var F = r[j];
                            null !== F.x && null !== F.y && (q += F.x, z += F.y, R++)
                        }
                    }
                    if (R > 0) d.x = q / R + (Math.random() - .5) * P, d.y = z / R + (Math.random() - .5) * P; else {
                        var U = 2 * Math.random() * Math.PI, _ = m + Math.sqrt(Math.random()) * N;
                        d.x = _ * Math.cos(U), d.y = _ * Math.sin(U)
                    }
                    o[d.id] = [d.x, d.y]
                }
                var $ = e.weights;
                for (var g in r) if (r.hasOwnProperty(g)) {
                    var W = (d = r[g]).weight;
                    W = $ ? $.hasOwnProperty(g) ? $[g] : 0 : d.getRelated().length, d.weight !== W && (d.weight = W, c = !0)
                }
                if (c) {
                    for (var G = [], K = 0, Y = i; K < Y.length; K++) {
                        x = Y[K];
                        G.push([x.source.id, x.target.id])
                    }
                    this.worker.postMessage({nodes: o, links: G, alpha: .3, run: !0}), this.changed()
                } else h && this.changed()
            }, e.prototype.setRenderOptions = function (e) {
                var t = e.nodeSizeMultiplier, n = e.lineSizeMultiplier, r = e.showArrow, i = e.textFadeMultiplier;
                Number.isNumber(t) && (this.fNodeSizeMult = t), Number.isNumber(n) && (this.fLineSizeMult = n), Number.isNumber(i) && (this.fTextShowMult = i), isBoolean(r) && (this.fShowArrow = r), this.changed()
            }, e.prototype.setForces = function (e) {
                this.worker.postMessage({forces: e, alpha: .3, run: !0})
            }, e.prototype.getHighlightNode = function () {
                return this.dragNode || this.highlightNode
            }, e.prototype.updateZoom = function () {
                var e = this, t = e.scale, n = e.targetScale, r = e.panX, i = e.panY;
                if ((t > (n = this.targetScale = Math.min(8, Math.max(1 / 128, n))) ? t / n : n / t) - 1 >= .01) {
                    var a = this.zoomCenterX, o = this.zoomCenterY;
                    if (0 === a && 0 === o) {
                        var s = window.devicePixelRatio;
                        a = this.width / 2 * s, o = this.height / 2 * s
                    }
                    var l = {x: (a - r) / t, y: (o - i) / t};
                    t = Go(t, n, .85), r -= l.x * t + r - a, i -= l.y * t + i - o, this.changed()
                }
                this.setPan(r, i), this.setScale(t)
            }, e.prototype.setPan = function (e, t) {
                var n = this.hanger;
                this.panX = e, this.panY = t, n && (n.x = e, n.y = t)
            }, e.prototype.setScale = function (e) {
                var t = this.hanger;
                this.scale = e, this.nodeScale = Math.sqrt(1 / e);
                var n = Math.log(e) / Math.log(2);
                this.textAlpha = Math.clamp(n + 1 - this.fTextShowMult, 0, 1), t && (t.scale.x = t.scale.y = e)
            }, e.prototype.changed = function () {
                this.idleFrames = 0, this.queueRender()
            }, e.prototype.queueRender = function () {
                !this.renderTimer && this.renderCallback && (this.renderTimer = this.containerEl.win.requestAnimationFrame(this.renderCallback))
            }, e.prototype.testCSS = function () {
                var e = function (e) {
                    var t = document.body.createDiv({cls: "graph-view " + e}), n = getComputedStyle(t), r = n.color,
                        i = n.opacity;
                    t.detach();
                    var a = $o(r), o = parseFloat(i);
                    return isNaN(o) && (o = 1), a ? {a: o * a.a, rgb: a.r << 16 | a.g << 8 | a.b} : {a: o, rgb: 8947848}
                };
                for (var t in ns) ns.hasOwnProperty(t) && (this.colors[t] = e(ns[t]));
                for (var n = 0, r = this.nodes; n < r.length; n++) {
                    r[n].fontDirty = !0
                }
                var i = this.powerTag;
                i && (i.rendered = !1), this.changed()
            }, e.prototype.getTransparentScreenshot = function () {
                var e = this.px;
                return e.render(), e.view
            }, e.prototype.getBackgroundScreenshot = function () {
                var e = this.getTransparentScreenshot(), t = document.createElement("canvas");
                t.width = e.width, t.height = e.height;
                var n = t.getContext("2d");
                return n.fillStyle = "#FFFFFF", n.fillRect(0, 0, e.width, e.height), n.drawImage(e, 0, 0), t
            }, e.copyToClipboard = function (e, t) {
                return a(this, void 0, void 0, (function () {
                    return o(this, (function (n) {
                        switch (n.label) {
                            case 0:
                                return [4, Or(e, t)];
                            case 1:
                                return [4, xr(n.sent())];
                            case 2:
                                return n.sent(), [2]
                        }
                    }))
                }))
            }, e
        }();
    let ls = null, cs = null;
    let hs = null;

    function us() {
        hs && (clearTimeout(hs), hs = null)
    }

    function fs(e) {
        return "true" === getComputedStyle(e).getPropertyValue("--no-tooltip").trim()
    }

    function onMouseOver(evt, parent) {
        if (Sr(evt, parent)) {
            Vr(evt) || fs(parent) || vs(parent)
        }
    }

    function onMouseOut(evt, parent) {
        if (Sr(evt, parent)) {
            onMouseUp();
            let n = evt.relatedTarget;
            if (n && n.matchParent) {
                let r = n.matchParent("[aria-label]");
                if (r && r.instanceOf(HTMLElement)) {
                    if (fs(r)) {
                        return
                    }
                    vs(r)
                }
            }
        }
    }

    const ms = new WeakMap()

    function vs(e) {
        us();
        var t = e.getAttribute("aria-label") || "";
        ms.has(e) && (t = ms.get(e)(e));
        var n = "bottom";
        e.hasAttribute("data-tooltip-position") && (n = e.getAttribute("data-tooltip-position"));
        var r = [];
        e.hasAttribute("data-tooltip-classes") && (r = (e.getAttribute("data-tooltip-classes") || "").split(" "));
        var i = 750;
        e.hasAttribute("data-tooltip-delay") && (i = parseInt(e.getAttribute("data-tooltip-delay") || ""), isNaN(i) && (i = 750)), Ms(e, t, {
            placement: n,
            classes: r,
            delay: i
        })
    }

    let gs = 0

    function Ms(el, tooltip, options) {
        if (tooltip) {
            options = options || {}
            let _placement = options.placement,
                placement = void 0 === _placement ? "bottom" : _placement,
                _classes = options.classes,
                classes = void 0 === _classes ? [] : _classes,
                _gap = options.gap,
                gap = void 0 === _gap ? 8 : _gap,
                horizontalParent = options.horizontalParent,
                _delay = options.delay,
                delay = void 0 === _delay ? 0 : _delay;
            if (delay > 0 && (ls || Date.now() > gs + 100)) {
                us()
                options.delay = 0
                hs = window.setTimeout(function () {
                    return Ms(el, tooltip, options)
                }, delay)
                return
            }
            if (el.isShown()) {
                let doc = el.doc,
                    clientRect = el.getBoundingClientRect(),
                    top = clientRect.top,
                    left = clientRect.left,
                    width = clientRect.width,
                    height = clientRect.height;
                if (horizontalParent) {
                    let M = horizontalParent.getBoundingClientRect();
                    left = M.left
                    width = M.width
                }
                ls && cs === el
                    ? ls.setText(tooltip)
                    : (onMouseUp(), ls = createDiv({cls: "tooltip", text: tooltip}));
                let arrowEl = ls.createDiv("tooltip-arrow"),
                    b = 0,
                    w = 0;
                "bottom" === placement
                    ? (b = top + height + gap, w = left + width / 2)
                    : "right" === placement
                        ? (b = top + height / 2, w = left + width + gap, classes.push("mod-right"))
                        : "left" === placement
                            ? (b = top + height / 2, w = left - gap, classes.push("mod-left"))
                            : "top" === placement && (b = top - gap - 5, w = left + width / 2, classes.push("mod-top"))
                ls.addClasses(classes)
                ls.style.top = "0px"
                ls.style.left = "0px"
                ls.style.width = ""
                ls.style.height = ""
                ls.parentNode || doc.body.appendChild(ls)

                let k = ls.getBoundingClientRect(),
                    x = ["bottom", "top"].contains(placement) ? k.width / 2 : k.width,
                    C = "right" === placement || "left" === placement ? k.height / 2 : k.height;
                "left" === placement ? w -= x : "top" === placement && (b -= C);
                let A = doc.body.clientHeight,
                    L = doc.body.clientWidth;
                b + C > A && (b = A - C - gap)
                b = Math.max(b, gap)
                if ("top" === placement || "bottom" === placement) {
                    if (w + x > L) {
                        w -= E = w + x + gap - L
                        arrowEl.style.left = "initial"
                        arrowEl.style.right = x - E - gap / 2 + "px";
                    } else if (w - gap - x < 0) {
                        var E;
                        w += E = -(w - gap - x)
                        arrowEl.style.right = "initial"
                        arrowEl.style.left = x - E - gap / 2 + "px"
                    }
                    w = Math.max(w, gap)
                }
                ls.style.top = b + "px"
                ls.style.left = w + "px"
                ls.style.width = k.width + "px"
                ls.style.height = k.height + "px"
                cs = el
            }
        }
    }

    function onMouseUp() {
        us()
        if (ls) {
            gs = Date.now()
            ls.detach()
            ls = null
            cs = null
        }
    }

    function bs(el, options) {
        var n = options || {}, r = n.placement, i = n.classes, a = n.delay;
        r && "bottom" !== r && el.setAttribute("data-tooltip-position", r), i && el.setAttribute("data-tooltip-classes", i.join(" ")), a && el.setAttribute("data-tooltip-delay", String(a))
    }

    function setTooltip(el, tooltip, options) {
        el.setAttribute("aria-label", tooltip), bs(el, options), cs === el && Ms(el, tooltip, options)
    }

    const ks = loadScriptAsync("/lib/pixi.min.js?7.2.4")
    const GraphView = function () {
        function e(e, t) {
            var n = this;
            this.expanded = !1, this.global = !1, this.interlinks = !0, this.publish = e;
            var r = this.outerContainerEl = t.createDiv("graph-view-outer");
            r.createDiv("list-item published-section-header", (function (e) {
                e.createSpan("published-section-header-icon", (function (e) {
                    setIcon(e, "lucide-git-fork")
                })), e.createSpan({text: "Interactive graph"})
            }));
            var i = this.outerEl = r.createDiv("graph-view-container");
            this.containerEl = i.createDiv("graph-view");
            var a = i.createDiv("graph-icon graph-expand");
            a.setAttr("role", "button"), setIcon(a, "lucide-arrow-up-right"), setTooltip(a, "Expand", {placement: "top"}), a.addEventListener("click", this.onExpand.bind(this));
            var o = i.createDiv("graph-icon graph-global");
            o.setAttr("role", "button"), setIcon(o, "lucide-git-fork"), setTooltip(o, "Global Graph", {placement: "top"}), o.addEventListener("click", this.onGlobalGraph.bind(this));
            var s = this.modalEl = createDiv("modal-container"), l = s.createDiv("modal-bg");
            this.modalContainerEl = s.createDiv("graph-view-container mod-expanded"), l.addEventListener("click", (function (e) {
                return 0 === e.button && n.onExitExpand()
            })), e.on("options-updated", this.updateOptions.bind(this)), e.on("navigated", this.onNavigated.bind(this))
        }

        return e.prototype.updateOptions = function () {
            var e, t, n = this, r = this.publish.site.getConfig(K_showGraph);
            Hr && (r = !1), this.publish.containerEl.toggleClass("has-graph", r), this.containerEl.toggle(r), r && !this.renderer && (e = this.containerEl, t = function () {
                var e = Ea("/sim.js", {name: "Graph Worker"});
                ks.then((function () {
                    return a(n, void 0, void 0, (function () {
                        var t, n;
                        return o(this, (function (r) {
                            switch (r.label) {
                                case 0:
                                    return this.renderer ? [2] : [4, e];
                                case 1:
                                    return t = r.sent(), document.fonts ? [4, document.fonts.ready] : [3, 3];
                                case 2:
                                    r.sent(), r.label = 3;
                                case 3:
                                    return (n = this.renderer = new ss(this.containerEl, !1, !1, t)).onNodeClick = this.onNodeClick.bind(this), n.setScale(.5), n.targetScale = .5, n.setRenderOptions({textFadeMultiplier: -1}), this.onNavigated(), [2]
                            }
                        }))
                    }))
                }))
            }, e.isShown() ? t() : e.onNodeInserted(t, !0))
        }, e.prototype.onNodeClick = function (e, t, n) {
            this.onExitExpand(), this.publish.navigate(t, "", e instanceof MouseEvent || e instanceof PointerEvent ? e : null)
        }, e.prototype.onResize = function () {
            this.renderer && this.renderer.onResize()
        }, e.prototype.onExpand = function () {
            if (!this.expanded) {
                this.expanded = !0;
                var e = this, t = e.containerEl, n = e.renderer, r = e.modalEl, i = e.modalContainerEl;
                document.body.appendChild(r), i.appendChild(t), n && (n.onResize(), n.zoomTo(2 * n.scale))
            }
        }, e.prototype.onExitExpand = function () {
            if (this.expanded) {
                this.expanded = !1;
                var e = this, t = e.outerEl, n = e.modalEl, r = e.containerEl, i = e.renderer, a = e.global;
                n.detach(), t.insertBefore(r, t.firstChild), i && (i.onResize(), a || i.zoomTo(i.scale / 2)), this.global = !1, a && this.onNavigated()
            }
        }, e.prototype.onGlobalGraph = function () {
            this.onExpand(), this.global = !0;
            var e = this.renderer;
            e && e.zoomTo(e.scale), this.onNavigated()
        }, e.prototype.onNavigated = function () {
            var e = this, t = e.publish, n = e.renderer, r = e.currentFilepath;
            if (n) {
                var i = t.site;
                if (i.getConfig(K_showGraph)) {
                    var a = t.render.currentFilepath;
                    if (r !== a && (n.resetPan(), r = this.currentFilepath = a), n.highlightNode = null, r) {
                        var o = {
                            showAttachments: !1,
                            hideUnresolved: !0,
                            showTags: !1,
                            showOrphans: !0,
                            localFile: r,
                            localJumps: 1,
                            localInterlinks: !0,
                            localForelinks: !0,
                            localBacklinks: !0
                        }, s = function (e, t) {
                            var n = t.showAttachments, r = t.hideUnresolved, i = t.showTags, a = {},
                                o = function (t) {
                                    if (e.cache.hasOwnProperty(t)) {
                                        if (!n && "md" !== bo(t)) return "continue";
                                        var o = (a[t] = Qo()).links, s = e.cache[t];
                                        if (ao(s, (function (i) {
                                            var s = getLinkpath(i.link), l = e.getLinktextDest(s, t);
                                            if (l) {
                                                if (!n && "md" !== bo(l)) return;
                                                o[l] = !0
                                            } else r && (o[s] = !0, a.hasOwnProperty(s) || (a[s] = Qo("unresolved")))
                                        })), i) {
                                            var l = getAllTags(s);
                                            if (l && l.length > 0) for (var c = 0, h = l; c < h.length; c++) {
                                                var u = h[c];
                                                o[u] = !0, a.hasOwnProperty(u) || (a[u] = Qo("tag"))
                                            }
                                        }
                                    }
                                };
                            for (var s in e.cache) o(s);
                            return {nodes: a}
                        }(i.cache, o);
                        this.global || (s = function (e, t) {
                            var n = e.nodes, r = {}, i = {}, a = t.localFile, o = t.localJumps,
                                s = t.localInterlinks, l = t.localForelinks, c = t.localBacklinks;
                            if (i[a] = 30, !n.hasOwnProperty(a)) return r[a] = Qo(), {nodes: r, weights: i};
                            r[a] = Qo(n[a].type);
                            for (var h = function (e) {
                                var t = {};
                                for (var a in n) if (n.hasOwnProperty(a)) {
                                    var o = n[a];
                                    if ("tag" !== o.type) {
                                        var s = o.links;
                                        for (var h in s) if (s.hasOwnProperty(h)) {
                                            var u = r[a];
                                            l && r.hasOwnProperty(a) && !r.hasOwnProperty(h) && !ts.hasOwnProperty(u.type) ? (t[h] = t[h] || es(n[h]), u.links[h] = !0) : c && r.hasOwnProperty(h) && !r.hasOwnProperty(a) && !ts.hasOwnProperty(r[h].type) && (t[a] = t[a] || es(n[a]), t[a].links[h] = !0)
                                        }
                                    }
                                }
                                for (var f in t) t.hasOwnProperty(f) && (r[f] = t[f], i[f] = e)
                            }, u = 30 / o, f = 0; f < o; f++) h(30 - u * (f + 1));
                            if (s) for (var p in r) r.hasOwnProperty(p) && n.hasOwnProperty(p) && (r[p] = n[p]);
                            return {nodes: r, weights: i}
                        }(s, o)), n.setData(s)
                    } else n.setData({nodes: {}})
                }
            }
        }, e
    }()
    const compareFn = new Intl.Collator(void 0, {
        usage: "sort",
        sensitivity: "base",
        numeric: true
    }).compare

    function As(e) {
        return decodeURIComponent(e.replace(/\+/g, "%20"))
    }

    function Ls(e) {
        return encodeURIComponent(e).replace(/%20/g, "+")
    }

    function Es(e, t, n) {
        void 0 === n && (n = !0);
        if (n) for (var r = 0, i = e; r < i.length; r++) {
            var a = i[r];
            "folder" === a.type && Es(a.children, t, n)
        }
        e.sort((function (e, n) {
            var r = t.hasOwnProperty(e.path) ? t[e.path] : void 0,
                i = t.hasOwnProperty(n.path) ? t[n.path] : void 0;
            if (void 0 !== r && void 0 !== i) return r - i;
            if (void 0 !== r) return -1;
            if (void 0 !== i) return 1;
            var a = "folder" === e.type, o = "folder" === n.type;
            if (a || o) {
                if (a && !o) return -1;
                if (o && !a) return 1
            }
            return compareFn(e.name, n.name)
        }))
    }

    let Ss = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.children = null, t
        }

        return extend(t, e), t.prototype.render = function () {
            var e = this.childrenEl, t = this.children;
            if (null !== t) {
                e.setChildrenInPlace(t.map((function (e) {
                    return e.el
                })));
                for (var n = 0, r = t; n < r.length; n++) {
                    r[n].render()
                }
            } else e.empty()
        }, t
    }(function () {
        function e(e) {
            void 0 === e && (e = "div");
            var t = this;
            this.collapsible = !0, this.collapsed = !1;
            var n = this.el = createDiv("tree-item"), r = this.selfEl = this.el.createEl(e);
            r.addClass("tree-item-self"), r.addEventListener("click", (function (e) {
                0 !== e.button || e.defaultPrevented || t.onSelfClick(e)
            })), r.addEventListener("auxclick", (function (e) {
                1 !== e.button || e.defaultPrevented || t.onSelfClick(e)
            })), this.coverEl = this.selfEl;
            var i = this.collapseEl = r.createDiv({cls: "tree-item-icon collapse-icon"});
            setIcon(i, "right-triangle"), i.addEventListener("click", this.onCollapseClick.bind(this)), this.innerEl = r.createDiv("tree-item-inner"), this.childrenEl = n.createDiv("tree-item-children")
        }

        return e.prototype.onSelfClick = function (e) {
        }, e.prototype.onCollapseClick = function (e) {
            0 === e.button && (e.preventDefault(), this.toggleCollapsed(!0))
        }, e.prototype.toggleCollapsed = function (e) {
            if (this.collapsible) return this.setCollapsed(!this.collapsed, e)
        }, e.prototype.setCollapsed = function (e, t) {
            if (this.collapsed !== e) return this.collapsed = e, this.updateCollapsed(t)
        }, e.prototype.setCollapsible = function (e) {
            if (this.collapsible !== e) {
                var t = this.selfEl, n = this.collapseEl;
                this.collapsible = e, e ? t.prepend(n) : n.detach(), t.toggleClass("mod-collapsible", e)
            }
        }, e.prototype.setClickable = function (e) {
            this.selfEl.toggleClass("is-clickable", e)
        }, e.prototype.updateCollapsed = function (e) {
            return a(this, void 0, Promise, (function () {
                var t, n, r, i;
                return o(this, (function (a) {
                    switch (a.label) {
                        case 0:
                            return n = (t = this).el, r = t.childrenEl, i = t.collapsed, Un(n, i), [4, nr(r, n, i, e)];
                        case 1:
                            return a.sent(), [2]
                    }
                }))
            }))
        }, e
    }())
    let Hs = function () {
        function e(e) {
            this.children = [], this.childrenEl = e
        }

        return e.prototype.render = function () {
            var e = this.childrenEl, t = this.children;
            e.setChildrenInPlace(t.map((function (e) {
                return e.el
            })));
            for (var n = 0, r = t; n < r.length; n++) {
                r[n].render()
            }
        }, e.prototype.addRoot = function (e) {
            this.children.push(e)
        }, e.prototype.clear = function () {
            this.children = [], this.render()
        }, e
    }()

    function Ts(e, t, n) {
        var r = {type: "folder", name: "", path: "", children: [], parent: null}, i = {};
        i[""] = r;
        for (var a = 0, o = e; a < o.length; a++) for (var s = o[a].split("/"), l = r, c = "", h = 0; h < s.length; h++) {
            var u = s[h], f = c + u;
            if (h === s.length - 1) l.children.push({type: "file", name: u, path: f, parent: l}); else {
                var p = i[c = f + "/"];
                p || (p = {
                    type: "folder",
                    path: f,
                    name: u,
                    children: [],
                    parent: l
                }, i[c] = p, l.children.push(p)), l = p
            }
        }
        var d = function (e) {
            for (var t = [], r = 0, i = e.children; r < i.length; r++) {
                var a = i[r];
                n.has(a.path) || t.push(a), "folder" === a.type && d(a)
            }
            e.children = t
        };
        return d(r), Es(r.children, t), r
    }

    var NavC = function () {
            function e(e, t) {
                this.initialized = !1, this.publish = e;
                var n = this.outerEl = t.createDiv("nav-view-outer");
                this.containerEl = n.createDiv("nav-view"), this.treeView = new Is(this.containerEl, this.publish, this.onItemClick.bind(this)), e.on("options-updated", this.updateOptions.bind(this)), e.on("navigated", this.onNavigated.bind(this))
            }

            return e.prototype.getOuterEl = function () {
                return this.outerEl
            }, e.prototype.updateOptions = function () {
                var e = this, t = this.publish.site.getConfig(K_showNavigation);
                if (Hr && (t = !1), this.containerEl.toggle(t), this.publish.containerEl.toggleClass("has-navigation", t), t) {
                    this.init();
                    try {
                        window.matchMedia("(max-width: 750px)").addEventListener("change", (function () {
                            return e.init()
                        }))
                    } catch (e) {
                        console.error(e)
                    }
                }
            }, e.prototype.init = function (e) {
                if (void 0 === e && (e = !1), !this.initialized) {
                    var t = this.publish.site;
                    if (t.getConfig(K_showNavigation) && (e || !(this.containerEl.getBoundingClientRect().right <= 0))) {
                        this.initialized = !0;
                        for (var n = t.getConfig(K_navigationOrdering), r = new Set(t.getConfig(K_navigationHiddenItems)), i = {}, a = 0; a < n.length; a++) {
                            i[n[a]] = a
                        }
                        var o = Ts(Object.keys(t.cache.cache), i, r);
                        this.treeView.renderTree(o), this.treeView.setActiveItem(this.publish.render.currentFilepath)
                    }
                }
            }, e.prototype.onNavigated = function () {
                this.treeView.setActiveItem(this.publish.render.currentFilepath)
            }, e.prototype.onItemClick = function (e, t) {
                var n = this.publish;
                t.preventDefault(), n.containerEl.removeClass("is-left-column-open"), n.navigate(e.getItemPath(), "", t)
            }, e
        }(),
        Os = function (e) {
            function t(t, n, r) {
                void 0 === r && (r = "div");
                var i = e.call(this, r) || this;
                i.owner = t, i.file = n;
                var a = i, o = a.selfEl, s = a.innerEl, l = n.name;
                return "file" === n.type && (l = Mo(l)), s.setText(l), o.setAttr("data-path", n.path), i
            }

            return extend(t, e), t.prototype.setActive = function (e) {
                this.selfEl.toggleClass("mod-active", e)
            }, t.prototype.getItemPath = function () {
                return this.file.path
            }, t
        }(Ss),
        Ns = function (e) {
            function t(t, n) {
                var r = e.call(this, t, n, "a") || this;
                return r.setCollapsible(!1), r
            }

            return extend(t, e), t.prototype.onSelfClick = function (e) {
                e.defaultPrevented || this.owner.onItemClick(this, e)
            }, t.prototype.render = function () {
                e.prototype.render.call(this);
                var t = this.owner.publish.site.getPublicHref(this.getItemPath());
                this.selfEl.setAttr("href", t), this.selfEl.addClass("is-clickable")
            }, t
        }(Os),
        Ps = function (e) {
            function t(t, n) {
                var r = e.call(this, t, n) || this;
                return r.children = [], r.setCollapsible("" !== n.name), r.setCollapsed(!0, !1), r
            }

            return extend(t, e), t.prototype.onSelfClick = function (e) {
                e.defaultPrevented || this.toggleCollapsed(!0)
            }, t.prototype.render = function () {
                e.prototype.render.call(this), this.selfEl.addClass("is-clickable")
            }, t
        }(Os),
        Is = function (e) {
            function t(t, n, r) {
                var i = e.call(this, t) || this;
                return i.activeItem = null, i.rootFolder = null, i.publish = n, i.onItemClick = r, i
            }

            return extend(t, e), t.prototype.setActiveItem = function (e) {
                var t = this.activeItem;
                if (null == t || t.setActive(!1), e) {
                    for (var n = [], r = e.split("/"), i = this.rootFolder, a = 0, o = r; a < o.length; a++) {
                        var s = o[a];
                        if (!(i instanceof Ps)) return;
                        for (var l = null, c = 0, h = i.children; c < h.length; c++) {
                            var u = h[c];
                            if (u.file.name === s) {
                                l = u;
                                break
                            }
                        }
                        if (!l) return;
                        n.push(l), i = l
                    }
                    for (var f = null, p = 0, d = n; p < d.length; p++) {
                        var m = d[p];
                        m instanceof Ps && m.collapsed && (f ? m.setCollapsed(!1, !1) : f = m), t = m
                    }
                    f && f.setCollapsed(!1, !0), this.activeItem = t, t && t.setActive(!0)
                }
            }, t.prototype.renderTree = function (e) {
                var t = this.rootFolder = this.renderFolder(null, e);
                for (null === t && (t = new Ps(this, e)); 1 === t.children.length;) {
                    var n = t.children[0];
                    if (!(n instanceof Ps)) break;
                    t = n
                }
                t.setCollapsed(!1, !1), t.setCollapsible(!1), t.selfEl.addClass("mod-root"), this.addRoot(t), this.render()
            }, t.prototype.renderFolder = function (e, t) {
                for (var n = new Ps(this, t), r = 0, i = t.children; r < i.length; r++) {
                    var a = i[r];
                    "file" === a.type ? this.renderFile(n, a) : "folder" === a.type && this.renderFolder(n, a)
                }
                return 0 === n.children.length ? null : (e && e.children.push(n), n)
            }, t.prototype.renderFile = function (e, t) {
                if ("md" !== bo(t.path)) return null;
                var n = new Ns(this, t);
                e.children.push(n)
            }, t
        }(Hs),
        Ds = function (e) {
            function t(t, n) {
                var r = e.call(this) || this;
                return r.owner = t, r.heading = n, r.innerEl.setText(function (e) {
                    var t = jn(Dn(e.heading));
                    return t || (t = e.heading), t
                }(n)), r
            }

            return extend(t, e), t.prototype.onSelfClick = function (e) {
                if (!e.defaultPrevented) {
                    var t = this.owner;
                    t.onItemClick && t.onItemClick(this.heading)
                }
            }, t.prototype.render = function () {
                e.prototype.render.call(this);
                var t = this.owner, n = this.children;
                this.setCollapsible(t.collapsible && n && n.length > 0), this.setClickable(!!t.onItemClick)
            }, t.prototype.setActive = function (e) {
                this.selfEl.toggleClass("mod-active", e)
            }, t
        }(Ss),
        qs = function (e) {
            function t(t, n) {
                var r = e.call(this, t) || this;
                return r.collapsible = !0, r.highlighted = null, r.allItems = [], r.onItemClick = n, r
            }

            return extend(t, e), t.prototype.renderOutline = function (e) {
                for (var t = [], n = this.allItems = [], r = 0, i = e; r < i.length; r++) {
                    for (var a = i[r], o = a.level, s = new Ds(this, a), l = t.last(); l && l.heading.level >= o;) t.pop(), l = t.last();
                    t.push(s), l ? (l.children = l.children || [], l.children.push(s)) : this.addRoot(s), n.push(s)
                }
                this.highlighted = null, this.render()
            }, t.prototype.highlightLine = function (e) {
                for (var t = this.highlighted, n = null, r = 0, i = this.allItems; r < i.length; r++) {
                    var a = i[r];
                    if (!(a.heading.position.start.line <= e)) break;
                    n = a
                }
                n !== t && (t && t.setActive(!1), this.highlighted = n, n && n.setActive(!0))
            }, t
        }(Hs),
        OutlineView = function () {
            function e(e, t) {
                this.publish = e;
                var n = this.containerEl = t.createDiv("outline-view-outer");
                n.createDiv("list-item published-section-header", (function (e) {
                    e.createSpan("published-section-header-icon", (function (e) {
                        setIcon(e, "lucide-list")
                    })), e.createSpan({text: "On this page"})
                }));
                var r = n.createDiv("outline-view");
                (this.treeView = new qs(r, this.onItemClick.bind(this))).collapsible = !1, e.on("options-updated", this.updateOptions.bind(this)), e.on("navigated", this.onNavigated.bind(this))
            }

            return e.prototype.updateOptions = function () {
                var e = this.publish.site.getConfig(K_showOutline);
                Hr && (e = !1), this.publish.containerEl.toggleClass("has-outline", e), this.containerEl.toggle(e), e && this.containerEl.onNodeInserted(this.onNavigated.bind(this))
            }, e.prototype.onItemClick = function (e) {
                var t = this.publish;
                t.render.scrollToLoc(e.position.start);
                var n = t.site.getPublicHref(t.render.currentFilepath) + "#" + stripHeadingForLink(e.heading);
                history.replaceState(null, null, n)
            }, e.prototype.onNavigated = function () {
                var e = this, t = e.publish, n = e.treeView, r = e.containerEl, i = t.site;
                if (i.getConfig(K_showOutline) && (n.clear(), r.isShown())) {
                    var a = t.render.currentFilepath, o = i.cache.getCache(a);
                    o && o.headings && 0 !== o.headings.length ? (r.toggleVisibility(!0), n.renderOutline(o.headings), this.highlightLine(0)) : r.toggleVisibility(!1)
                }
            }, e.prototype.highlightLine = function (e) {
                this.treeView.highlightLine(e)
            }, e
        }(),
        Rs = {
            3: "Cancel",
            6: "Help",
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            28: "Convert",
            29: "NonConvert",
            30: "Accept",
            31: "ModeChange",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            41: "Select",
            42: "Print",
            43: "Execute",
            44: "PrintScreen",
            45: "Insert",
            46: "Delete",
            48: "0",
            49: "1",
            50: "2",
            51: "3",
            52: "4",
            53: "5",
            54: "6",
            55: "7",
            56: "8",
            57: "9",
            91: "OS",
            93: "ContextMenu",
            95: "Sleep",
            106: "*",
            107: "+",
            109: "-",
            110: ".",
            111: "/",
            144: "NumLock",
            145: "ScrollLock",
            181: "VolumeMute",
            182: "VolumeDown",
            183: "VolumeUp",
            186: ";",
            187: "=",
            188: ",",
            189: "-",
            190: ".",
            191: "/",
            192: "`",
            219: "[",
            220: "\\",
            221: "]",
            222: "'",
            224: "Meta",
            225: "AltGraph",
            246: "Attn",
            247: "CrSel",
            248: "ExSel",
            249: "EraseEof",
            250: "Play",
            251: "ZoomOut"
        }
    for (var Zs = 1; Zs < 25; Zs++) {
        Rs[111 + Zs] = "F" + Zs;
    }
    for (Zs = 65; Zs < 91; Zs++) {
        var Bs = String.fromCharCode(Zs);
        Rs[Zs] = Bs.toUpperCase()
    }
    for (Zs = 96; Zs < 106; Zs++) {
        Rs[Zs] = "Numpad" + String.fromCharCode(Zs - 48);
    }

    function js(e) {
        var t = e.key;
        if (!t) {
            var n = e.which || e.keyCode;
            t = Rs[n]
        }
        return t
    }

    function Fs(e) {
        var t = e.which || e.keyCode;
        return Rs[t] || "Key" + t
    }

    const Scope = function () {
        function e(e) {
            this.tabFocusContainerEl = null, this.keys = [], this.parent = e
        }

        return e.prototype.register = function (e, t, n) {
            var r = {scope: this, modifiers: e ? Keymap.compileModifiers(e) : null, key: t, func: n};
            return this.keys.push(r), r
        }, e.prototype.unregister = function (e) {
            this.keys.remove(e)
        }, e.prototype.setTabFocusContainerEl = function (e) {
            this.tabFocusContainerEl = e
        }, e.prototype.handleKey = function (e, t) {
            for (var n = 0, r = this.keys; n < r.length; n++) {
                var i = r[n];
                if (Keymap.isMatch(i, t)) {
                    var a = i.func(e, t);
                    if (void 0 !== a) return a;
                    if (null !== i.key || null !== i.modifiers) return a
                }
            }
            if (this.parent) return this.parent.handleKey(e, t)
        }, e
    }()
    const Keymap = (function (e) {
        function t(t, n) {
            var r = e.call(this, t) || this;
            return r.cb = n, r
        }

        extend(t, e), t.prototype.handleKey = function (t, n) {
            var r = this.cb();
            return r ? r.handleKey(t, n) : e.prototype.handleKey.call(this, t, n)
        }
    }(Scope), function () {
        function e() {
            this.modifiers = "", this.rootScope = new Scope, this.scope = this.rootScope, this.prevScopes = [], window.addEventListener("keydown", this.onKeyEvent.bind(this), !0), window.addEventListener("focusin", this.onFocusIn.bind(this))
        }

        return e.init = function () {
            return e.global || (e.global = new e), e.global
        }, e.prototype.getRootScope = function () {
            return this.rootScope
        }, e.prototype.pushScope = function (e) {
            this.scope !== e && (this.prevScopes.push(this.scope), this.scope = e)
        }, e.prototype.popScope = function (e) {
            e !== this.rootScope && (this.scope === e ? this.scope = this.prevScopes.pop() || this.rootScope : this.prevScopes.remove(e))
        }, e.prototype.onKeyEvent = function (t) {
            this.updateModifiers(t);
            var n = this.scope;
            if (n) {
                var r = js(t);
                if (!e.isModifierKey(r)) {
                    var i = Fs(t);
                    54 === t.which && "^" == t.key && "KeyI" === t.code && (i = "KeyI");
                    var a = {modifiers: this.modifiers, key: r, vkey: i};
                    return !1 === n.handleKey(t, a) ? (t.preventDefault(), t.stopPropagation(), !1) : void 0
                }
            }
        }, e.prototype.onFocusIn = function (e) {
            var t = this, n = this.scope;
            if (n && n.tabFocusContainerEl) {
                var r = n.tabFocusContainerEl, i = e.targetNode;
                i && i !== activeDocument.body && i.instanceOf(Element) && !r.contains(i) && setTimeout((function () {
                    if (!(t.scope !== n || (a = r.querySelector(["a[href]", "button", "input", "select", "textarea", '[contenteditable]:not([contenteditable="false"])', "[tabindex]"].map((function (e) {
                        return e + ':not([disabled]):not([tabindex="-1"])'
                    })).join(","))) && (a.instanceOf(HTMLElement) || a.instanceOf(SVGElement)) && (a.focus(i), a))) {
                        var e = activeDocument.activeElement;
                        e && e instanceof HTMLElement && e.blur()
                    }
                    var i, a
                }), 0)
            }
        }, e.prototype.updateModifiers = function (t) {
            this.modifiers = e.getModifiers(t)
        }, e.getModifiers = function (t) {
            var n = [];
            return t.ctrlKey && n.push("Ctrl"), t.metaKey && n.push("Meta"), t.altKey && n.push("Alt"), t.shiftKey && n.push("Shift"), e.compileModifiers(n)
        }, e.compileModifiers = function (e) {
            return e.map((function (e) {
                return "Mod" === e ? "MacOS" === __os ? "Meta" : "Ctrl" : e
            })).sort().join(",")
        }, e.decompileModifiers = function (e) {
            return e.split(",").map((function (e) {
                return "MacOS" === __os && "Meta" === e || "MacOS" !== __os && "Ctrl" === e ? "Mod" : e
            })).filter((function (e) {
                return e
            }))
        }, e.isModifierKey = function (e) {
            return "Control" === e || "Alt" === e || "Shift" === e || "OS" === e || "Meta" === e
        }, e.prototype.matchModifiers = function (e) {
            return this.modifiers === e
        }, e.prototype.hasModifier = function (t) {
            return e.decompileModifiers(this.modifiers).contains(t)
        }, e.isModifier = function (e, t) {
            return "Ctrl" === t ? e.ctrlKey : "Meta" === t ? e.metaKey : "Alt" === t ? e.altKey : "Shift" === t ? e.shiftKey : "Mod" === t && ("MacOS" === __os ? e.metaKey : e.ctrlKey)
        }, e.isMatch = function (e, t) {
            var n = e.modifiers, r = e.key;
            return (null === n || n === t.modifiers) && (!r || (r === t.vkey || !(!t.key || r.toLowerCase() !== t.key.toLowerCase())))
        }, e.isModEvent = function (t) {
            return !!t && (function (e) {
                return (e.instanceOf(MouseEvent) || e.instanceOf(PointerEvent)) && 1 === e.button
            }(t) ? "tab" : !!e.isModifier(t, "Mod") && (e.isModifier(t, "Alt") ? e.isModifier(t, "Shift") ? "window" : "split" : "tab"))
        }, e
    }())

    const Modal = function () {
        function e(e) {
            this.publish = e, this.scope = new Scope, this.scope.register([], "Escape", this.close.bind(this)), this.containerEl = createDiv("modal-container");
            var t = this.containerEl.createDiv("modal-bg");
            this.modalEl = this.containerEl.createDiv("modal");
            var n = this.closeButtonEl = this.modalEl.createDiv("modal-close-button");
            this.titleEl = this.modalEl.createDiv("modal-title"), this.contentEl = this.modalEl.createDiv("modal-content"), n.addEventListener("click", this.close.bind(this)), t.addEventListener("click", this.close.bind(this))
        }

        return e.prototype.open = function () {
            this.publish.keymap.pushScope(this.scope), document.body.appendChild(this.containerEl), this.onOpen()
        }, e.prototype.close = function () {
            this.publish.keymap.popScope(this.scope), this.containerEl.remove(), this.onClose()
        }, e.prototype.onOpen = function () {
        }, e.prototype.onClose = function () {
        }, e
    }()
    const Gs = function (Modal) {
        function t(t, n) {
            var r = Modal.call(this, t) || this;
            return r.done = !1, r.cb = n, r.modalEl.addClass("mod-password-required"), r.titleEl.setText("Protected site"), r.closeButtonEl.hide(), r
        }

        return extend(t, Modal), t.prototype.close = function () {
            this.done && Modal.prototype.close.call(this)
        }, t.prototype.onOpen = function () {
            this.showPasswordRequired()
        }, t.prototype.showPasswordRequired = function () {
            var e = this, t = this.contentEl;
            t.empty(), this.passwordIncorrectMsg = t.createDiv("message-container", (function (e) {
                e.createDiv({cls: "message mod-error", text: "Password is incorrect, please try again."}), e.hide()
            })), t.createEl("p", {
                cls: "u-center-text u-muted",
                text: "This site is protected by password."
            }), t.createEl("p", {cls: "u-center-text"}, (function (t) {
                e.passwordEl = t.createEl("input", {type: "password"}, (function (t) {
                    t.setAttribute("placeholder", "Enter password..."), t.addEventListener("keydown", (function (t) {
                        t.isComposing || "Enter" !== t.key || e.tryUnlockSite()
                    }))
                }))
            })), t.createDiv("modal-button-container", (function (t) {
                t.createEl("button", {
                    text: "Confirm",
                    cls: "mod-cta"
                }).addEventListener("click", e.tryUnlockSite.bind(e))
            }))
        }, t.prototype.tryUnlockSite = function () {
            return a(this, void 0, void 0, (function () {
                var e, t, n, r;
                return o(this, (function (i) {
                    switch (i.label) {
                        case 0:
                            e = this.passwordEl.value, t = this.publish.site, i.label = 1;
                        case 1:
                            return i.trys.push([1, 3, , 4]), [4, ajaxPromise({
                                method: "POST",
                                url: t.host + "/pw",
                                data: {id: t.id, pw: e}
                            })];
                        case 2:
                            if (n = i.sent()) try {
                                r = JSON.parse(n), this.publish.site.hpw = r.hpw, localStorage[t.id] = r.hpw
                            } catch (e) {
                                console.error(e)
                            }
                            return this.done = !0, this.cb(), this.showPasswordCorrect(), [3, 4];
                        case 3:
                            return i.sent(), this.passwordIncorrectMsg.show(), [3, 4];
                        case 4:
                            return [2]
                    }
                }))
            }))
        }, t.prototype.showPasswordCorrect = function () {
            var e = this, t = this.contentEl;
            t.empty(), this.titleEl.setText("Site unlocked"), t.createDiv("message-container", (function (e) {
                e.createDiv({cls: "message mod-success", text: "Thank you, the password is correct."})
            })), t.createEl("p", {
                cls: "u-muted",
                text: "The password will be remembered during the following sessions for your convenience."
            }), t.createDiv("modal-button-container", (function (t) {
                t.createEl("button", {text: "Enter", cls: "mod-cta"}).addEventListener("click", (function () {
                    e.close()
                }))
            }))
        }, t
    }(Modal)
    const Ks = function (Modal) {
        function t(t, n) {
            var r = Modal.call(this, t) || this;
            return r.tag = n, r.titleEl.createSpan({text: "Pages with tag " + n}), r
        }

        return extend(t, Modal), t.prototype.onOpen = function () {
            var e = this, t = this.publish, n = this.tag, r = t.site, i = r.cache.cache,
                a = new RegExp("^" + yr(n) + "(\\/|$)", "i"), o = [];
            for (var s in i) if (i.hasOwnProperty(s)) {
                var l = getAllTags(i[s]);
                if (l) for (var c = 0, h = l; c < h.length; c++) {
                    var u = h[c];
                    if (a.test(u)) {
                        o.push(s);
                        break
                    }
                }
            }
            var f = this.contentEl.createEl("ol", "files-with-tag-container");
            if (o.length > 0) for (var p = function (n) {
                f.createEl("li", "files-with-tag-item", (function (i) {
                    return i.createEl("a", {
                        cls: "internal-link",
                        href: r.getPublicHref(n),
                        text: wo(n)
                    }).addEventListener("click", (function (r) {
                        r.preventDefault(), e.close(), t.navigate(n, "")
                    }))
                }))
            }, d = 0, m = o; d < m.length; d++) {
                p(m[d])
            } else f.createDiv({cls: "files-with-tag-item", text: "There are no pages that contain this tag."})
        }, t
    }(Modal)

    const Us = {}
    !function (e) {
        e[e.Showing = 0] = "Showing", e[e.Shown = 1] = "Shown", e[e.Hiding = 2] = "Hiding", e[e.Hidden = 3] = "Hidden"
    }(Us)
    var Ys = [],
        Xs = [],
        Js = 0,
        Qs = null,
        el = function () {
            for (var e = 0, t = Ys; e < t.length; e++) {
                t[e].hide()
            }
            setTimeout((function () {
                for (var e = 0, t = Xs; e < t.length; e++) {
                    t[e].hide()
                }
            }), 5)
        },
        tl = function () {
            for (var e = 0, t = Ys; e < t.length; e++) {
                t[e].hide()
            }
        },
        nl = function (e) {
            Qs = {x: e.clientX, y: e.clientY, doc: e.doc}
        },
        rl = function () {
            if (Qs) if (0 === Xs.length) window.removeEventListener("click", el), window.removeEventListener("contextmenu", tl), window.removeEventListener("mousemove", nl), clearInterval(Js), Js = 0; else {
                for (var e = Qs.doc.elementFromPoint(Qs.x, Qs.y), t = 0, n = Xs; t < n.length; t++) {
                    n[t].detect(e)
                }
                for (var r = 0, i = Xs; r < i.length; r++) {
                    i[r].transition()
                }
            }
        },
        il = function () {
            Js || (window.addEventListener("click", el), window.addEventListener("contextmenu", el), window.addEventListener("mousemove", nl), Js = window.setInterval(rl, 500))
        }

    let HoverPopover = function (Component) {
        function t(t, n, r) {
            void 0 === r && (r = 300);
            var i = Component.call(this) || this;
            i.onTarget = !0, i.onHover = !1, i.shownPos = null, i.parent = t, i.targetEl = n, i.waitTime = r, i.state = Us.Showing;
            var a = i.hoverEl = createDiv("popover hover-popover"), o = i.onMouseIn = i.onMouseIn.bind(i),
                s = i.onMouseOut = i.onMouseOut.bind(i);
            return n && (n.addEventListener("mouseover", o), n.addEventListener("mouseout", s)), a.addEventListener("mouseover", (function (e) {
                Sr(e, a) && (i.onHover = !0, i.transition())
            })), a.addEventListener("mouseout", (function (e) {
                Sr(e, a) && (i.onHover = !1, i.transition())
            })), i.timer = window.setTimeout(i.show.bind(i), r), Ys.push(i), il(), i
        }

        extend(t, Component)
        t.prototype.onMouseIn = function (e) {
            this.targetEl && !Sr(e, this.targetEl) || (this.onTarget = !0, this.transition())
        }
        t.prototype.onMouseOut = function (e) {
            this.targetEl && !Sr(e, this.targetEl) || (this.onTarget = !1, this.transition())
        }
        t.prototype.detect = function (e) {
            var t = this.targetEl, n = this.hoverEl;
            t && (this.onTarget = e === t || t.contains(e)), this.onHover = e === n || n.contains(e)
        }
        t.prototype.shouldShow = function () {
            return this.shouldShowSelf() || this.shouldShowChild()
        }
        t.prototype.shouldShowSelf = function () {
            return this.onTarget || this.onHover
        }
        t.prototype.shouldShowChild = function () {
            var e = this;
            return Xs.some((function (t) {
                return t !== e && t.targetEl && e.hoverEl.contains(t.targetEl) && t.shouldShow()
            }))
        }
        t.prototype.transition = function () {
            var e = this, t = this.shouldShow(), n = this.state;
            t ? n === Us.Hiding && (this.state = Us.Shown, clearTimeout(this.timer)) : n === Us.Showing ? this.hide() : n === Us.Shown && (this.state = Us.Hiding, this.timer = window.setTimeout((function () {
                e.shouldShow() ? e.transition() : e.hide()
            }), this.waitTime))
        }
        t.prototype.show = function () {
            var e = this.targetEl;
            !e || e.doc.body.contains(e) ? (this.state = Us.Shown, this.timer = 0, this.shownPos = Qs, this.position(Qs), this.onShow(), Ys.remove(this), Xs.push(this), il(), this.load()) : this.hide()
        }
        t.prototype.hide = function () {
            var e = this, t = this, n = t.hoverEl, r = t.targetEl, i = t.timer;
            this.state = Us.Hidden, Ys.remove(this), Xs.remove(this), clearTimeout(i), n.detach(), r && (r.removeEventListener("mouseover", this.onMouseIn), r.removeEventListener("mouseout", this.onMouseOut)), this.onTarget = !1, this.onHover = !1, Xs.filter((function (t) {
                return t.targetEl && e.hoverEl.contains(t.targetEl)
            })).forEach((function (e) {
                return e.hide()
            })), this.onHide(), this.unload()
        }
        t.prototype.onShow = function () {
            var e = this.parent;
            e.hoverPopover && e.hoverPopover.hide(), e.hoverPopover = this
        }
        t.prototype.onHide = function () {
            var e = this.parent;
            e.hoverPopover === this && (e.hoverPopover = null)
        }
        t.prototype.position = function (e) {
            void 0 === e && (e = this.shownPos);
            var t, n = this.hoverEl, r = this.targetEl;
            if (e) t = {top: e.y - 10, bottom: e.y + 10, left: e.x, right: e.x}; else if (r) {
                var i = Ir(r, r.doc.body);
                t = {top: i.top, bottom: i.top + r.offsetHeight, left: i.left, right: i.left + r.offsetWidth}
            } else t = {top: 0, bottom: 0, left: 0, right: 0};
            var a = activeDocument;
            if (r) {
                a = r.doc;
                var o = function (e) {
                    var t = e.frameElement;
                    if (!t) return null;
                    for (var n = {x: 0, y: 0, scale: 1, win: e}; null !== t;) {
                        var r = t.getBoundingClientRect(), i = r.width / t.clientWidth;
                        n.scale *= i, n.x = n.x * i + r.x, n.y = n.y * i + r.y, n.win = t.win, t = t.win.frameElement
                    }
                    return n
                }(r.win);
                if (o) {
                    var s = o.scale, l = o.x, c = o.y;
                    a = o.win.document, t.left = t.left * s + l, t.right = t.right * s + l, t.top = t.top * s + c, t.bottom = t.bottom * s + c
                }
            }
            a.body.appendChild(n), Pr(t, n, {gap: 10, preventOverlap: !0})
        }
        return t
    }(Component)

    let noticeContainerEl = createDiv("notice-container")
    const Notice = function () {
        function e(text, duration) {
            void 0 === duration && (duration = 4000)
            let _this = this
            activeDocument.body.appendChild(noticeContainerEl)
            let noticeEl = this.noticeEl = noticeContainerEl.createDiv({cls: "notice", text: text})
            Platform.isMobile
                ? transitionElement(noticeEl, new Gn().addProp("marginBottom", -noticeEl.offsetHeight + "px", "0", ""))
                : transitionElement(noticeEl, new Gn().addProp("transform", "translateX(350px)", "", ""))
            duration && setTimeout(() => {
                return _this.hide()
            }, duration)
            noticeEl.addEventListener("click", function () {
                return _this.hide()
            })
        }

        e.prototype.setMessage = function (text) {
            this.noticeEl.setText(text)
            return this
        }
        e.prototype.hide = function () {
            let _this = this
            setTimeout(function () {
                let noticeEl = _this.noticeEl
                if (Platform.isMobile) {
                    transitionElement(noticeEl, new Gn().addProp("opacity", null, "0", ""), function () {
                        noticeEl.detach()
                        0 === noticeContainerEl.childElementCount && noticeContainerEl.detach()
                    })
                } else {
                    let style = getComputedStyle(noticeEl),
                        r = -(noticeEl.offsetHeight + parseInt(style.marginBottom)) + "px";
                    transitionElement(noticeEl, (new Gn).addProp("marginTop", "0", r, ""), function () {
                        noticeEl.detach()
                        0 === noticeContainerEl.childElementCount && noticeContainerEl.detach()
                    })
                }
            })
        }
        return e
    }()
    window.Notice = Notice


    const image_extensions = ["bmp", "png", "jpg", "jpeg", "gif", "svg", "webp", "avif"],
        audio_extensions = ["mp3", "wav", "m4a", "3gp", "flac", "ogg", "oga", "opus"],
        video_extensions = ["mp4", "webm", "ogv", "mov", "mkv"],
        pdf_extensions = ["pdf"],
        md_extensions = ["md"],
        canvas_extensions = ["canvas"];
    [].concat(image_extensions, audio_extensions, video_extensions, pdf_extensions, md_extensions, canvas_extensions);

    const Renderer = function (e) {
        function t(app) {
            let pubRendererEl = createDiv("publish-renderer")

            let _this = this
            _this = e.call(this, app, pubRendererEl) || this

            let extraTitleEl = pubRendererEl.createDiv("extra-title");
            _this.renderContainerEl = pubRendererEl
            _this.extraTitle = extraTitleEl.createSpan("extra-title-text");
            let closeBtn = extraTitleEl.createSpan()
            setIcon(closeBtn, "lucide-x")
            setTooltip(closeBtn, "Close page")
            closeBtn.setAttr("role", "button")
            closeBtn.addEventListener("click", function () {
                return app.closeRenderer(_this)
            })
            return _this
        }

        extend(t, e)
        t.prototype.loadFile = function (e, t) {
            return a(this, void 0, void 0, (function () {
                var n, r, i, a, s, l, c, h, u, f, p, d, m, v, g, M, y, b;
                return o(this, (function (o) {
                    switch (o.label) {
                        case 0:
                            return r = (n = this).publish, i = n.renderer, a = n.hoverPopover, s = r.site, this.currentFilepath === e ? (this.navigateSubpath(t), [2]) : (this.currentFilepath = e, l = vo(e), c = bo(l), h = wo(e), a && (a.hide(), this.hoverPopover = a = null), this.extraTitle.setText(h), u = i.header, (f = u.el).empty(), s.getConfig(K_hideTitle) || f.createDiv({
                                cls: "page-header",
                                text: h
                            }), i.updateHeader(), i.clear(), p = i.footer, (d = p.el).empty(), i.updateFooter(), "md" !== c ? [3, 2] : [4, s.loadMarkdownFile(e)]);
                        case 1:
                            return m = o.sent(), i.set(m || " "), this.navigateSubpath(t) || (t = ""), [3, 3];
                        case 2:
                            i.set("![[" + e + "]]"), o.label = 3;
                        case 3:
                            if (r.trigger("navigated"), t && (v = s.getPublicHref(e) + t.split("#").map(Ls).join("#"), history.replaceState(null, null, v)), s.getConfig(K_showBacklinks)) {
                                for (b in g = s.cache.cache, M = [], y = function (t) {
                                    if (!g.hasOwnProperty(t) || t === e) return "continue";
                                    if (ao(g[t], (function (n) {
                                        if (s.cache.getLinktextDest(n.link, t) === e) return !0
                                    }))) {
                                        var n = wo(t), r = createDiv("backlink-item", (function (e) {
                                            return e.createEl("a", {
                                                cls: "internal-link",
                                                href: s.getPublicHref(t),
                                                attr: {"data-href": t},
                                                text: n
                                            })
                                        }));
                                        M.push({el: r, name: n})
                                    }
                                }, g) y(b);
                                M.length > 0 && i.onRendered((function () {
                                    d.empty();
                                    var e = d.createDiv("backlinks");
                                    e.createDiv("published-section-header", (function (e) {
                                        e.createSpan("published-section-header-icon", (function (e) {
                                            setIcon(e, "lucide-link")
                                        })), e.createSpan({text: "Links to this page"})
                                    }));
                                    var t = e.createDiv("backlink-items-container");
                                    M.sort((function (e, t) {
                                        return compareFn(e.name, t.name)
                                    })), t.setChildrenInPlace(M.map((function (e) {
                                        return e.el
                                    }))), i.updateFooter()
                                }))
                            }
                            return [2]
                    }
                }))
            }))
        }
        t.prototype.onScroll = function () {
            var e = this.publish, t = this.renderer;
            if (e.site.getConfig(K_showOutline)) {
                var n = t.getScroll();
                e.outline.highlightLine(Math.round(n))
            }
        }
        t.prototype.onResize = function () {
            this.renderer.onResize()
        }
        t.prototype.navigateSubpath = function (e) {
            if (e) {
                var t = this.publish.site.cache.getCache(this.currentFilepath);
                if (t) {
                    var n = resolveSubpath(t, e);
                    if (n) return this.scrollToLoc(n.start), !0
                }
            }
            return !1
        }
        t.prototype.scrollToLoc = function (e) {
            this.renderer.applyScrollDelayed(e.line, {highlight: !0}), this.onScroll()
        }
        return t
    }(function (Component) {
        function t(app, publishRendererEl) {
            let _this = Component.call(this) || this
            _this.id = genRandomHex(16)
            _this.hoverPopover = null
            _this.currentFilepath = null
            _this.embedDepth = 0
            _this.publish = app
            let renderer = _this.renderer = new MarkdownPreviewRenderer(_this, _this, publishRendererEl, "/worker.js")
            renderer.addHeader()
            renderer.addFooter()
            return _this
        }

        extend(t, Component)
        t.prototype.renderContent = function (e, t) {
            this.currentFilepath = t;
            var n = this.renderer, r = this.hoverPopover;
            r && (r.hide(), this.hoverPopover = null), n.clear(), n.set(e)
        }
        t.prototype.onScroll = function () {
        }
        t.prototype.onFoldChange = function () {
        }
        t.prototype.onCheckboxClick = function (e, t, n) {
        }
        t.prototype.onExternalLinkClick = function (e, t, n) {
        }
        t.prototype.onInternalLinkClick = function (e, t, n) {
            e.preventDefault(), this.publish.navigate(n, this.currentFilepath, e)
        }
        t.prototype.onInternalLinkDrag = function (e, t, n) {
        }
        t.prototype.onInternalLinkRightClick = function (e, t, n) {
        }
        t.prototype.onExternalLinkRightClick = function (e, t, n) {
        }
        t.prototype.onInternalLinkMouseover = function (e, t, n) {
            var r = this;
            if (this.publish.site.getConfig(K_showHoverPreview)) {
                var i = this.hoverPopover;
                i && i.state !== Us.Hidden && i.targetEl === t || (i = new HoverPopover(this, t), setTimeout((function () {
                    return a(r, void 0, void 0, (function () {
                        var e;
                        return o(this, (function (t) {
                            switch (t.label) {
                                case 0:
                                    return i.state === Us.Hidden ? [2] : (e = i.hoverEl, [4, this.loadEmbed(n, this.currentFilepath, e, !0)]);
                                case 1:
                                    return t.sent() || (e.createDiv({
                                        cls: "markdown-embed",
                                        text: "This page does not yet exist."
                                    }), e.addClass("mod-empty")), i.state === Us.Shown && i.position(), [2]
                            }
                        }))
                    }))
                }), 100))
            }
        }
        t.prototype.onTagClick = function (e, t, n) {
            new Ks(this.publish, n).open()
        }
        t.prototype.onQueryClick = function (e, t, n) {
        }
        t.prototype.postProcess = function (e, t, n) {
            var r = this, i = this._postProcess({
                docId: this.id,
                sourcePath: this.currentFilepath,
                frontmatter: n,
                promises: t,
                addChild: function (e) {
                    return r.addChild(e)
                },
                getSectionInfo: function (e) {
                    return r.renderer.getSectionInfo(e)
                },
                containerEl: this.renderer.sizerEl,
                el: e.el
            });
            e.usesFrontMatter = !!i.usesFrontMatter
        }
        t.prototype.onRenderComplete = function () {
        }
        t.prototype._postProcess = function (e) {
            for (var t = this, n = this.publish.site, r = n.cache, i = e.sourcePath, s = e.promises, l = e.el, c = 0, h = MarkdownPreviewRenderer.postProcessors; c < h.length; c++) {
                var u = (0, h[c])(l, e);
                u && u.then && s.push(u)
            }
            var f = l.findAll("a.internal-link");
            if (f.length > 0) for (var p = 0, d = f; p < d.length; p++) {
                var m = d[p];
                if (E = m.getAttribute("data-href")) {
                    var v = parseLinktext(E), g = v.path, M = v.subpath, y = r.getLinkpathDest(g, i);
                    m.toggleClass("is-unresolved", !y), y || (y = g || ""), m.setAttr("href", n.getPublicHref(y) + M)
                }
            }
            var b = l.firstChild;
            if (b instanceof HTMLHeadingElement) {
                var w = b.getAttr("data-heading");
                if (w) {
                    b.appendText(" "), b.addClass("publish-article-heading");
                    var k = b.createSpan({cls: "clickable-icon"});
                    k.addEventListener("click", (function () {
                        return a(t, void 0, void 0, (function () {
                            var e;
                            return o(this, (function (t) {
                                return e = n.getPublicHref(i) + "#" + Ls(stripHeadingForLink(w)), history.replaceState(null, null, e), function (e) {
                                    if (navigator.clipboard && navigator.permissions) navigator.clipboard.writeText(e); else {
                                        var t = document.createElement("textarea");
                                        t.value = e, t.style.top = "0", t.style.left = "0", t.style.position = "fixed", document.body.appendChild(t);
                                        try {
                                            t.focus(), t.select(), document.execCommand("copy")
                                        } catch (e) {
                                        }
                                        document.body.removeChild(t)
                                    }
                                }(e), new Notice("Link copied to your clipboard"), [2]
                            }))
                        }))
                    })), setIcon(k, "lucide-link"), setTooltip(k, "Copy link")
                }
            }
            var x = l.findAll(".internal-embed:not(.is-loaded)");
            if (x.length > 0) for (var C = 0, A = x; C < A.length; C++) {
                var L = A[C], E = L.getAttribute("src"), S = this.loadEmbed(E, i, L);
                s.push(S)
            }
            for (var H = 0, T = l.findAll("img:not([alt])"); H < T.length; H++) {
                var V = T[H];
                V.setAttr("alt", vo(V.getAttr("src")))
            }
            for (var O = 0, N = l.findAll('a:not([href]), a[href=""]'); O < N.length; O++) {
                N[O].setAttr("href", "#")
            }
            for (var P = 0, I = l.findAll('input[type="checkbox"]:not([aria-label])'); P < I.length; P++) {
                I[P].setAttr("aria-label", "Task")
            }
            return e
        }
        t.prototype.loadEmbed = function (e, n, r, i) {
            return void 0 === i && (i = !1), a(this, void 0, Promise, (function () {
                var a, s, l, c, h, u, f, p, d, m, v, g, M, y, b, w, k, x;
                return o(this, (function (o) {
                    switch (o.label) {
                        case 0:
                            return a = this.publish, s = a.site, l = s.cache, c = parseLinktext(e), h = c.path, u = c.subpath, f = l.getLinkpathDest(h, n), r.empty(), f ? (p = vo(f), d = bo(f), m = s.getInternalUrl(f), image_extensions.contains(d) ? (r.addClass("image-embed"), [4, Cr(r, m)]) : [3, 2]) : [2, !1];
                        case 1:
                            return o.sent(), [3, 14];
                        case 2:
                            return audio_extensions.contains(d) ? (r.addClass("media-embed"), [4, Ar(r, m)]) : [3, 4];
                        case 3:
                            return o.sent(), [3, 14];
                        case 4:
                            return video_extensions.contains(d) ? (r.addClass("media-embed"), [4, Lr(r, m)]) : [3, 6];
                        case 5:
                            return o.sent(), [3, 14];
                        case 6:
                            return pdf_extensions.contains(d) ? (r.addClass("pdf-embed"), (v = r.createEl("iframe")).src = m + (u || ""), v.style.width = "100%", v.style.height = "100%", [3, 14]) : [3, 7];
                        case 7:
                            if (!(md_extensions.contains(d) && this.embedDepth < 5)) return [3, 13];
                            g = l.getCache(f), M = resolveSubpath(g, u), y = void 0, o.label = 8;
                        case 8:
                            return o.trys.push([8, 10, , 11]), [4, ajaxPromise({withCredentials: !0, url: m})];
                        case 9:
                            return y = o.sent(), M && (y = po(y, g, M).content), [3, 11];
                        case 10:
                            return b = o.sent(), y = b instanceof XMLHttpRequest && 404 === b.status ? "File not found" : "Failed to load", [3, 11];
                        case 11:
                            return p = p.substr(0, p.length - bo(p).length - 1), w = r.createDiv("markdown-embed"), i || M || w.createDiv({
                                cls: "markdown-embed-title",
                                text: p
                            }), k = w.createDiv("markdown-embed-content"), w.createDiv("markdown-embed-link", (function (t) {
                                setIcon(t, "lucide-link"), setTooltip(t, "Open link"), t.setAttr("role", "button"), t.onClickEvent((function (t) {
                                    0 !== t.button && 1 !== t.button || (t.preventDefault(), t.stopPropagation(), a.navigate(e, n, t))
                                }))
                            })), (x = new t(a, k)).embedDepth = this.embedDepth + 1, x.renderContent(y, f), [4, new Promise((function (e) {
                                x.renderer.onRendered(e)
                            }))];
                        case 12:
                            return o.sent(), [3, 14];
                        case 13:
                            r.addClass("file-embed"), r.createDiv({
                                cls: "file-embed-title",
                                text: p
                            }), r.createDiv("file-embed-link", (function (e) {
                                e.addEventListener("click", (function () {
                                    window.open(m)
                                })), setIcon(e, "lucide-arrow-up-right"), setTooltip(e, "Open in default app")
                            })), o.label = 14;
                        case 14:
                            return r.addClass("is-loaded"), [2, !0]
                    }
                }))
            }))
        }
        return t
    }(Component))

    var ml = function (e, t) {
        return e[0] - t[0]
    }

    function vl(e, t, n, r) {
        if (0 === e.length) return 0;
        var i = 0;
        i -= Math.max(0, e.length - 1), i -= r / 10;
        var a = e[0][0];
        return i -= (e[e.length - 1][1] - a + 1 - t) / 100, i -= a / 1e3, i -= n / 1e4
    }

    function gl(e, t) {
        if (e) for (var n = 0, r = e; n < r.length; n++) {
            var i = r[n];
            i[0] += t, i[1] += t
        }
    }

    function Ml(e, t) {
        for (var n = t.toLowerCase(), r = [], i = 0, a = e; i < a.length; i++) {
            var o = a[i];
            if (o) {
                for (var s = !1, l = -1, c = o.length; -1 !== (l = n.indexOf(o, l));) s = !0, r.push([l, l + c]), l += c + 1;
                if (!s) return null
            }
        }
        return function (e) {
            if (0 === e.length) return e;
            e.sort(ml);
            for (var t = [e[0]], n = 1; n < e.length; n++) {
                var r = t.last();
                r[1] < e[n][0] ? t.push(e[n]) : r[1] < e[n][1] && (r[1] = e[n][1])
            }
            return t
        }(r)
    }

    function yl(e, t, n) {
        var r = Ml(e, n);
        return r ? {score: vl(r, t.length, n.length, 0), matches: r} : null
    }

    function bl(e, t, n, r) {
        void 0 === r && (r = 0), function (e, t, n, r) {
            void 0 === r && (r = 0);
            e.appendChild(function (e, t, n) {
                void 0 === n && (n = 0);
                if (!t || 0 === t.length) return document.createTextNode(e);
                for (var r = document.createDocumentFragment(), i = 0, a = 0; i < e.length && a < t.length; a++) {
                    var o = t[a], s = o[0] + n, l = o[1] + n;
                    if (!(l <= 0)) {
                        if (s >= e.length) break;
                        s < 0 && (s = 0), s !== i && r.appendText(e.substring(i, s)), r.createSpan({
                            cls: "suggestion-highlight",
                            text: e.substring(s, l)
                        }), i = l
                    }
                }
                i < e.length && r.appendText(e.substring(i));
                return r
            }(t, n, r))
        }(e, t, n ? n.matches : null, r)
    }

    const Chooser = function () {
        function e(e, t, n) {
            var r = this;
            this.chooser = e, this.containerEl = t, this.values = [], this.suggestions = [], this.selectedItem = 0, t.on("click", ".suggestion-item", this.onSuggestionClick.bind(this)), t.on("auxclick", ".suggestion-item", this.onSuggestionClick.bind(this)), t.on("mousemove", ".suggestion-item", this.onSuggestionMouseover.bind(this)), this.moveUp = this.moveUp.bind(this), this.moveDown = this.moveDown.bind(this), n.register([], "ArrowUp", this.moveUp), n.register([], "ArrowDown", this.moveDown), n.register([], "PageUp", this.pageUp.bind(this)), n.register([], "PageDown", this.pageDown.bind(this)), n.register([], "Home", (function (e) {
                return r.setSelectedItem(0, e), !1
            })), n.register([], "End", (function (e) {
                return r.setSelectedItem(r.suggestions.length - 1, e), !1
            })), (Platform.isMacOS || Platform.isIosApp) && (n.register(["Ctrl"], "p", this.moveUp), n.register(["Ctrl"], "n", this.moveDown)), n.register([], "Enter", (function (e) {
                if (!e.isComposing) return r.useSelectedItem(e), !1
            }))
        }

        return e.prototype.moveUp = function (e) {
            if (!e.isComposing) return this.setSelectedItem(this.selectedItem - 1, e), !1
        }, e.prototype.moveDown = function (e) {
            if (!e.isComposing) return this.setSelectedItem(this.selectedItem + 1, e), !1
        }, Object.defineProperty(e.prototype, "rowHeight", {
            get: function () {
                return this.suggestions[this.selectedItem].clientHeight
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "numVisibleItems", {
            get: function () {
                return Math.floor(this.containerEl.clientHeight / this.rowHeight)
            }, enumerable: !1, configurable: !0
        }), e.prototype.pageUp = function (e) {
            if (!e.isComposing) {
                var t = this, n = t.containerEl, r = t.numVisibleItems, i = t.rowHeight,
                    a = n.scrollTop - parseFloat(getComputedStyle(n).paddingTop), o = Math.floor(a / i);
                this.selectedItem <= o && (o -= r);
                var s = Math.max(0, o);
                return this.setSelectedItem(s, e), !1
            }
        }, e.prototype.pageDown = function (e) {
            if (!e.isComposing) {
                var t = this, n = t.containerEl, r = t.numVisibleItems, i = t.rowHeight,
                    a = n.scrollTop - parseFloat(getComputedStyle(n).paddingTop), o = Math.floor(a / i) + (r - 1);
                this.selectedItem >= o && (o += r);
                var s = Math.min(this.suggestions.length - 1, o);
                return this.setSelectedItem(s, e), !1
            }
        }, e.prototype.setSuggestions = function (e) {
            var t = this.containerEl;
            t.empty();
            var n = [];
            if (e) for (var r = 0, i = e; r < i.length; r++) {
                var a = i[r], o = t.createDiv("suggestion-item");
                this.chooser.renderSuggestion(a, o), n.push(o)
            }
            this.values = e, this.suggestions = n, this.setSelectedItem(0, null)
        }, e.prototype.addMessage = function (e) {
            this.containerEl.createDiv({cls: "suggestion-empty", text: e})
        }, e.prototype.setSelectedItem = function (e, t) {
            var n = this.suggestions;
            0 !== n.length && (e < 0 ? e = n.length - 1 : e >= n.length && (e = 0), this.forceSetSelectedItem(e, t))
        }, e.prototype.forceSetSelectedItem = function (e, t) {
            var n, r, i = this.suggestions, a = i[this.selectedItem];
            a && a.removeClass("is-selected"), this.selectedItem = e;
            var o = i[this.selectedItem];
            o && (o.addClass("is-selected"), t && t.instanceOf(KeyboardEvent) && o.scrollIntoView({block: "nearest"})), null === (r = (n = this.chooser).onSelectedChange) || void 0 === r || r.call(n, this.values[e], t)
        }, e.prototype.onSuggestionClick = function (e, t) {
            e.preventDefault();
            var n = this.suggestions.indexOf(t);
            this.setSelectedItem(n, e), this.useSelectedItem(e)
        }, e.prototype.onSuggestionMouseover = function (e, t) {
            var n = this.suggestions.indexOf(t);
            this.setSelectedItem(n, e)
        }, e.prototype.useSelectedItem = function (e) {
            if (!this.values) return !1;
            var t = this.values[this.selectedItem];
            return void 0 !== t && (this.chooser.selectSuggestion(t, e), !0)
        }, e
    }()
    const SearchC = function () {
        function e(e) {
            this.publish = e;
            var t = this.outerContainerEl = createDiv("search-view-outer"),
                n = this.containerEl = t.createDiv("search-view-container");
            n.createSpan("published-search-icon", (function (e) {
                setIcon(e, "lucide-search")
            }));
            var r = this.inputEl = n.createEl("input", {cls: "search-bar", type: "text"});
            r.setAttribute("placeholder", "Search page or heading..."), this.resultEl = createDiv("search-results");
            var i = this.scope = new Scope;
            this.chooser = new Chooser(this, this.resultEl, i), e.on("options-updated", this.updateOptions.bind(this)), r.addEventListener("input", kr(this.updateSearch.bind(this), 100, !0)), r.addEventListener("keydown", this.onKeydown.bind(this)), document.addEventListener("click", this.onDocumentClick.bind(this))
        }

        return e.prototype.onDocumentClick = function (e) {
            e.defaultPrevented || this.resultEl.remove()
        }, e.prototype.updateOptions = function () {
            var e = this.publish.site.getConfig(K_showSearch);
            Hr && (e = !1), this.outerContainerEl.toggle(e)
        }, e.prototype.updateSearch = function () {
            var e = this.resultEl, t = this.inputEl, n = t.value;
            if (e.empty(), !n) return this.inputEl.removeClass("has-no-results"), void e.detach();
            document.body.appendChild(e), Pr(t.getBoundingClientRect(), e, {gap: 5});
            var r = n.toLowerCase().split(" "), i = this.publish.site.cache, a = [];
            for (var o in i.cache) if (i.cache.hasOwnProperty(o) && "md" === bo(o)) {
                var s = yo(o), l = vo(s), c = yl(r, n, l), h = yl(r, n, s);
                c ? (c.score += .8, gl(c.matches, s.length - l.length), a.push({
                    type: "file",
                    path: s,
                    match: c
                })) : h && (h.score += .5, a.push({type: "file", path: s, match: h}));
                var u = i.getCache(o);
                if (u) {
                    var f = Rn(u.frontmatter);
                    if (f) for (var p = 0, d = f; p < d.length; p++) {
                        var m = d[p];
                        (M = yl(r, n, m)) && a.push({type: "alias", alias: m, path: s, match: M})
                    }
                    if (u.headings) for (var v = 0, g = u.headings; v < g.length; v++) {
                        var M, y = g[v];
                        (M = yl(r, n, y.heading)) && a.push({type: "heading", path: s, heading: y, match: M})
                    }
                }
            }
            !function (e) {
                e.sort((function (e, t) {
                    return t.match.score - e.match.score
                }))
            }(a), a = a.slice(0, 50), this.chooser.setSuggestions(a), this.inputEl.toggleClass("has-no-results", 0 === a.length), 0 === a.length && this.chooser.addMessage("No results found.")
        }, e.prototype.onKeydown = function (e) {
            if (this.inputEl === document.activeElement) {
                var t = {modifiers: Keymap.getModifiers(e), key: js(e), vkey: Fs(e)};
                this.scope.handleKey(e, t)
            }
        }, e.prototype.renderSuggestion = function (e, t) {
            t.addClass("mod-complex");
            var n = t.createDiv("suggestion-content"), r = t.createDiv("suggestion-aux"),
                i = n.createDiv("suggestion-title"), a = n.createDiv("suggestion-note");
            if ("file" === e.type) {
                var o = vo(s = e.path);
                bl(a, s.substr(0, s.length - o.length - 1), e.match), bl(i, o, e.match, o.length - s.length)
            } else if ("alias" === e.type) {
                var s = e.path;
                bl(i, e.alias, e.match), a.setText(s), r.createSpan({
                    cls: "suggestion-flair",
                    prepend: !0
                }, (function (e) {
                    setIcon(e, "lucide-forward"), setTooltip(e, "Alias")
                }))
            } else "heading" === e.type && (bl(i, e.heading.heading, e.match), a.setText(e.path), r.createSpan({
                cls: "suggestion-flair",
                text: "H",
                prepend: !0
            }))
        }, e.prototype.selectSuggestion = function (e, t) {
            "file" === e.type || "alias" === e.type ? this.publish.navigate(e.path, "", t instanceof MouseEvent ? t : null) : "heading" === e.type && this.publish.navigate(e.path + "#" + stripHeadingForLink(e.heading.heading), "", t instanceof MouseEvent ? t : null), this.inputEl.value = "", this.updateSearch(), this.publish.containerEl.removeClass("is-left-column-open")
        }, e
    }()

    let xl = 700
    let Cl = 36
    let obsidian_css = "obsidian.css"
    let publish_css = "publish.css"
    let publish_js = "publish.js"
    let favicon_re = /^favicon-([0-9]+)(x[0-9]+)?.png$/i;

    function Hl(e) {
        return !e || e.getAllResponseHeaders().toLowerCase().contains("obs-status") && null !== e.getResponseHeader("obs-status")
    }

    function Tl(e) {
        return !e || e.headers.has("obs-status") && null !== e.headers.get("obs-status")
    }

    function detachPreloadEls() {
        for (let i = 0, nodes = Array.from(document.head.childNodes); i < nodes.length; i++) {
            let node = nodes[i]
            if (node instanceof HTMLLinkElement && "preload" === node.rel && "style" === node.as) {
                node.onload = null
                node.rel = "stylesheet"
            }
        }
        let preloadEls = fishAll(".preload");
        if (preloadEls) {
            for (let i = 0; i < preloadEls.length; i++) {
                preloadEls[i].detach()
            }
        }
    }

    const Publish = function (Events) {
        function n() {
            let _this = Events.call(this) || this
            _this.stack = []
            _this.origin = location.origin
            _this.slidingWindowMode = false
            _this.keymap = new Keymap()
            _this.scope = _this.keymap.getRootScope();
            const r = {
                "allow-downloads": true,
                "allow-forms": true,
                "allow-modals": true,
                "allow-orientation-lock": true,
                "allow-pointer-lock": true,
                "allow-popups": true,
                "allow-presentation": true,
                "allow-same-origin": true,
                "allow-scripts": true,
            }
            DOMPurify.addHook("afterSanitizeAttributes", function (el) {
                if (el.instanceOf(HTMLIFrameElement)) {
                    if (el.hasAttribute("sandbox")) {
                        (function (e, t, n, r) {
                            for (var i = e.getAttribute(t), a = [], o = 0, s = i.split(n); o < s.length; o++) {
                                var l = s[o];
                                l = l.trim().toLowerCase(), r.hasOwnProperty(l) && r[l] && a.push(l)
                            }
                            var c = a.join(n);
                            c !== i && e.setAttribute(t, c)
                        }(el, "sandbox", " ", r))
                    } else {
                        el.setAttribute("sandbox", "allow-forms allow-modals allow-presentation allow-popups allow-same-origin allow-scripts")
                    }
                }
            })

            // polyfill localStorage
            ;(function () {
                try {
                    window.localStorage.setItem("obsidian", "obsidian")
                    window.localStorage.removeItem("obsidian")
                } catch (t) {
                    const storage = Object.defineProperties({}, {
                        length: {
                            get: function () {
                                return Object.keys(this).length
                            }
                        },
                        clear: {
                            value: function () {
                                for (var e in this) Object.prototype.hasOwnProperty.call(this, e) && delete this[e]
                            }
                        },
                        getItem: {
                            value: function (e) {
                                return Object.prototype.hasOwnProperty.call(this, e) ? null : this[e]
                            }
                        },
                        key: {
                            value: function (e) {
                                var t = Object.keys(this);
                                return e < 0 || e >= t.length ? null : t[e]
                            }
                        },
                        removeItem: {
                            value: function (e) {
                                Object.prototype.hasOwnProperty.call(this, e) || delete this[e]
                            }
                        },
                        setItem: {
                            value: function (e, t) {
                                this[e] = t
                            }
                        }
                    })
                    Object.defineProperty(window, "localStorage", {value: storage})
                }
            })()

            Na = true
            if (isMacOS) {
                document.body.addClass("native-scrollbars")
            }
            let noindexEl = _this.noindexEl = createEl("meta")
            noindexEl.name = "robots"
            noindexEl.content = "noindex"

            let containerEl = _this.containerEl = document.body.createDiv("published-container print")
            containerEl.hide()

            let siteBodyEl = containerEl.createDiv("site-body")
            let leftColumnEl = _this.leftColumnEl = siteBodyEl.createDiv("site-body-left-column")
            let leftColumnInnerEl = _this.leftColumnInnerEl = leftColumnEl.createDiv("site-body-left-column-inner")

            let leftSiteHeaderLogoLinkEl = _this.leftSiteHeaderLogoLinkEl = leftColumnInnerEl.createEl("a", "site-body-left-column-site-logo")
            let leftSiteHeaderLogoEl = _this.leftSiteHeaderLogoEl = leftSiteHeaderLogoLinkEl.createEl("img")
            leftSiteHeaderLogoEl.setAttr("aria-hidden", true)
            leftSiteHeaderLogoEl.hide()

            _this.leftSiteHeaderEl = leftColumnInnerEl.createEl("a", "site-body-left-column-site-name")
            _this.leftSiteThemeToggleEl = leftColumnInnerEl.createDiv("site-body-left-column-site-theme-toggle")
            _this.leftSiteThemeToggleEl.hide()

            let centerColumnEl = siteBodyEl.createDiv("site-body-center-column")
            let siteHeaderEl = _this.siteHeaderEl = centerColumnEl.createDiv("site-header")
            siteHeaderEl.createDiv("clickable-icon", function (el) {
                setIcon(el, "lucide-menu")
                el.addEventListener("click", function () {
                    containerEl.classList.toggle("is-left-column-open")
                    if (_this.site.getConfig(K_showNavigation)) {
                        _this.nav.init(true)
                    }
                })
            })

            containerEl.createDiv("nav-backdrop", function (el) {
                el.addEventListener("click", function () {
                    containerEl.removeClass("is-left-column-open")
                })
            })
            let siteLogoLinkEl = _this.siteLogoLinkEl = siteHeaderEl.createEl("a", "site-header-logo")
            siteLogoLinkEl.setAttr("aria-hidden", true)
            siteLogoLinkEl.hide()
            _this.siteLogoEl = siteLogoLinkEl.createEl("img")
            _this.siteHeaderTextEl = siteHeaderEl.createEl("a", "site-header-text")
            _this.search = new SearchC(_this)
            _this.nav = new NavC(_this, leftColumnInnerEl)
            let renderContainerEl = _this.renderContainerEl = centerColumnEl.createDiv("render-container")
            _this.renderContainerInnerEl = renderContainerEl.createDiv("render-container-inner")
            let render = _this.render = new Renderer(_this)
            let footerEl = _this.footerEl = centerColumnEl.createDiv("site-footer")
            _this.notFoundEl = renderContainerEl.createDiv("not-found-container", function (el) {
                el.createDiv("not-found-image")
                el.createDiv({
                    cls: "not-found-title",
                    text: "Not found"
                })
                el.createDiv({cls: "not-found-description", text: "This page does not exist"})
            })
            let rightColumnEl = _this.rightColumnEl = renderContainerEl.createDiv("site-body-right-column")
            let rightColumnInnerEl = _this.rightColumnInnerEl = rightColumnEl.createDiv("site-body-right-column-inner")

            _this.graph = new GraphView(_this, rightColumnInnerEl)
            _this.outline = new OutlineView(_this, rightColumnInnerEl)
            footerEl.createEl("a", {
                attr: {
                    href: "https://publish.obsidian.md",
                    target: "_blank"
                },
                text: "Powered by ck"
            })

            window.addEventListener("popstate", function () {
                return _this.loadFromUrl()
            })
            window.addEventListener("resize", kr(function () {
                return _this.onResize()
            }, 50, true))

            _this.on("navigated", _this.onNavigated.bind(_this))
            _this.stack.push(render)
            _this.toggleNotFound(false)
            containerEl.removeClass("has-not-found")
            if (window.siteInfo) {
                _this.site = new Site(_this, window.siteInfo)
            }
            window.applyCss = function (cssText) {
                _this.applyCss(cssText)
            }
            window.applyCssByLink = function (url) {
                return a(_this, void 0, void 0, (function () {
                    let cssText, err;
                    return o(this, (function (r) {
                        switch (r.label) {
                            case 0:
                                r.trys.push([0, 2, , 3])
                                return [4, ajaxPromise({url: url})];
                            case 1:
                                cssText = r.sent()
                                this.applyCss(cssText)
                                return [3, 3];
                            case 2:
                                err = r.sent()
                                console.error(err)
                                return [3, 3];
                            case 3:
                                return [2]
                        }
                    }))
                }))
            }
            window.require = function () {
                return obsidian_api
            }
            window.publish = _this
            _this.load()
            return _this
        }

        extend(n, Events)
        n.prototype.load = function () {
            return a(this, void 0, void 0, (function () {
                let containerEl, site, renderer, topNoticeEl, siteOptions, siteCache, leftColumnInnerEl,
                    rightColumnInnerEl, siteHeaderEl, siteHeaderTextEl, siteLogoEl, siteLogoLinkEl, leftSiteHeaderEl,
                    leftSiteHeaderLogoEl, leftSiteHeaderLogoLinkEl, renderContainerEl, showNavigation, showGraph,
                    showOutline, searchContainerEl, siteName, theme, mediaQueryList, onThemeChange, toggleTheme,
                    siteTheme,
                    slidingWindowMode, T, xhr, docHead,
                    logoUrl, logoSrc, _gaConfig, D, scriptEl, obsidian_css_loaded, publish_css_loaded, Z, node, _cache,
                    U, _, filename, matchResult, sizes, K, _this = this;
                return o(this, (function (o) {
                    debugger
                    switch (o.label) {
                        case 0:
                            containerEl = _this.containerEl
                            site = _this.site
                            renderer = _this.render
                            if (site) {
                                if ("degraded" === site.status) {
                                    topNoticeEl = document.body.createDiv("top-notice")
                                    topNoticeEl.setText("This site is no longer active. If you are the owner of the site, please update your subscription ")
                                    topNoticeEl.createEl("a", {
                                        attr: {
                                            href: "https://obsidian.md/account",
                                            target: "_blank"
                                        },
                                        text: "here"
                                    })
                                    topNoticeEl.appendText(".")
                                }
                                siteOptions = site.loadOptions()
                                siteCache = site.loadCache()
                                return [4, siteOptions]
                            } else {
                                detachPreloadEls()
                                containerEl.show()
                                renderer.renderContent("### Site not found.")
                                return [2]
                            }
                        case 1:
                            o.sent()
                            detachPreloadEls()
                            containerEl.show()
                            leftColumnInnerEl = _this.leftColumnInnerEl
                            rightColumnInnerEl = _this.rightColumnInnerEl
                            siteHeaderEl = _this.siteHeaderEl
                            siteHeaderTextEl = _this.siteHeaderTextEl
                            siteLogoEl = _this.siteLogoEl
                            siteLogoLinkEl = _this.siteLogoLinkEl
                            leftSiteHeaderEl = _this.leftSiteHeaderEl
                            leftSiteHeaderLogoEl = _this.leftSiteHeaderLogoEl
                            leftSiteHeaderLogoLinkEl = _this.leftSiteHeaderLogoLinkEl
                            renderContainerEl = _this.renderContainerEl
                            showNavigation = site.getConfig(K_showNavigation)
                            showGraph = site.getConfig(K_showGraph)
                            showOutline = site.getConfig(K_showOutline)
                            searchContainerEl = this.search.outerContainerEl
                            if (showNavigation) {
                                leftColumnInnerEl.insertBefore(searchContainerEl, this.leftSiteThemeToggleEl.nextSibling)
                            } else if (showGraph || showOutline) {
                                rightColumnInnerEl.prepend(searchContainerEl)
                            } else {
                                siteHeaderEl.prepend(searchContainerEl)
                            }
                            siteName = site.getSiteName()
                            siteHeaderTextEl.setText(siteName)
                            leftSiteHeaderEl.setText(siteName)
                            leftSiteHeaderEl.setAttr("aria-label", siteName)
                            leftSiteHeaderLogoLinkEl.setAttr("aria-label", "".concat(siteName, " logo"))

                            theme = site.getConfig(K_defaultTheme)
                            if ("system" === theme) {
                                mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)")
                                onThemeChange = function () {
                                    mediaQueryList.matches
                                        ? _this.setTheme("dark")
                                        : _this.setTheme("light")
                                }
                                mediaQueryList.addEventListener("change", onThemeChange)
                                onThemeChange()
                            } else {
                                this.setTheme(theme)
                            }

                            if (site.getConfig(K_showThemeToggle)) {
                                toggleTheme = function (el) {
                                    let isDarkTheme = "dark" === _this.themeInEffect,
                                        targetTheme = isDarkTheme ? "light" : "dark";
                                    _this.setTheme(targetTheme)
                                    _this.leftSiteThemeToggleEl.toggleClass("is-dark", !isDarkTheme)
                                    el.toggleClass("is-enabled", !isDarkTheme)
                                    localStorage.setItem("site-theme", targetTheme)
                                    _this.graph.renderer && _this.graph.renderer.testCSS()
                                }
                                siteTheme = localStorage.getItem("site-theme")
                                if (siteTheme) {
                                    this.setTheme(siteTheme)
                                }
                                this.leftSiteThemeToggleEl.createSpan({cls: "option mod-dark"}, function (el) {
                                    setIcon(el, "lucide-moon")
                                })
                                this.leftSiteThemeToggleEl.createDiv("checkbox-container", function (el) {
                                    _this.leftSiteThemeToggleEl.toggleClass("is-dark", "dark" === _this.themeInEffect)
                                    el.toggleClass("is-enabled", "dark" === _this.themeInEffect)
                                    el.addEventListener("click", function () {
                                        return toggleTheme(el)
                                    })
                                })
                                this.leftSiteThemeToggleEl.createSpan({cls: "option mod-light"}, function (el) {
                                    setIcon(el, "lucide-sun")
                                })
                                this.leftSiteThemeToggleEl.show()
                            }

                            slidingWindowMode = site.getConfig(K_slidingWindowMode)
                            if (slidingWindowMode) {
                                renderContainerEl.on("click", ".publish-renderer", this.onPublishRendererClick.bind(this))
                                renderContainerEl.addEventListener("scroll", this.onSlidingWindowScroll.bind(this))
                            }
                            T = !slidingWindowMode && !!site.getConfig(K_readableLineLength)
                            this.containerEl.toggleClass("is-readable-line-width", T)
                            On.globalOptions.breaks = !site.getConfig(K_strictLineBreaks)
                            renderer.renderContent("### Loading site...")
                            o.label = 2;
                        case 2:
                            o.trys.push([2, 4, , 9])
                            return [4, siteCache];
                        case 3:
                            o.sent()
                            return [3, 9];
                        case 4:
                            xhr = o.sent()
                            if (xhr instanceof XMLHttpRequest && 401 === xhr.status) {
                                this.setNoIndex(true)
                                renderer.renderContent("### Password protected site")
                                return [4, new Promise(function (resolve) {
                                    new Gs(_this, resolve).open()
                                })]
                            } else {
                                return [3, 7]
                            }
                        case 5:
                            o.sent()
                            return [4, site.loadCache()];
                        case 6:
                            o.sent()
                            return [3, 8];
                        case 7:
                            console.error(xhr)
                            new Notice("Oh no! Seems like something went wrong!")
                            return [2];
                        case 8:
                            return [3, 9];
                        case 9:
                            docHead = document.head
                            logoUrl = site.getSiteLogoUrl()
                            if (logoUrl && site.cache.has(logoUrl)) {
                                logoSrc = site.getInternalUrl(logoUrl)
                                siteLogoLinkEl.show()
                                siteLogoEl.setAttribute("src", logoSrc)
                                leftSiteHeaderLogoEl.show()
                                leftSiteHeaderLogoEl.setAttribute("src", logoSrc)
                            }
                            this.addLinkToSiteRoot(siteHeaderTextEl)
                            this.addLinkToSiteRoot(leftSiteHeaderEl)
                            this.addLinkToSiteRoot(leftSiteHeaderLogoLinkEl)
                            this.addLinkToSiteRoot(siteLogoLinkEl)
                            _gaConfig = site.getConfig(K_googleAnalytics)
                            if (site.isCustomDomain() && _gaConfig) {
                                try {
                                    if (_gaConfig.startsWith("G-")) {
                                        window.dataLayer = window.dataLayer || []
                                        window.gtag = function () {
                                            window.dataLayer.push(arguments)
                                        }
                                        window.gtag("js", new Date())
                                        window.gtag("config", _gaConfig)
                                        scriptEl = docHead.createEl("script")
                                        scriptEl.async = true
                                        scriptEl.src = "https://www.googletagmanager.com/gtag/js?id=" + _gaConfig
                                    } else {
                                        window.GoogleAnalyticsObject = "ga"
                                        D = window.ga = function () {
                                            (D.q = D.q || []).push(arguments)
                                        }
                                        D.l = Date.now()
                                        scriptEl = docHead.createEl("script")
                                        scriptEl.async = true
                                        scriptEl.src = "https://www.google-analytics.com/analytics.js"
                                        D("create", _gaConfig, "auto")
                                        D("send", "pageview")
                                    }
                                } catch (e) {
                                }
                            }

                            obsidian_css_loaded = false
                            publish_css_loaded = false
                            for (let i = 0, headNodes = Array.from(docHead.childNodes); i < headNodes.length; i++) {
                                node = headNodes[i]
                                if (node instanceof HTMLLinkElement && "stylesheet" === node.rel) {
                                    node.href.contains(obsidian_css) && (obsidian_css_loaded = true)
                                    node.href.contains(publish_css) && (publish_css_loaded = true)
                                }
                            }
                            if (!obsidian_css_loaded && site.cache.has(obsidian_css)) {
                                docHead.createEl("link", {
                                    href: site.getInternalUrl(obsidian_css),
                                    attr: {rel: "stylesheet"}
                                })
                            }
                            if (!publish_css_loaded && site.cache.has(publish_css)) {
                                docHead.createEl("link", {
                                    href: site.getInternalUrl(publish_css),
                                    attr: {rel: "stylesheet"}
                                })
                            }
                            _cache = site.cache.cache
                            U = docHead.find('link[rel="icon"]:not([sizes])')
                            for (let _ in _cache) {
                                if (_cache.hasOwnProperty(_)) {
                                    filename = vo(_)
                                    if ("favicon.ico" === filename) {
                                        docHead.createEl("link", {
                                            href: site.getInternalUrl(_),
                                            attr: {rel: "icon"}
                                        })
                                        U && U.detach();
                                        continue
                                    }
                                    matchResult = filename.match(favicon_re)
                                    if (matchResult) {
                                        sizes = matchResult[1] + (matchResult[2] || "x" + matchResult[1])
                                        docHead.createEl("link", {
                                            href: site.getInternalUrl(_),
                                            attr: {rel: "icon", sizes: sizes}
                                        })
                                        U && U.detach()
                                    }
                                }
                            }
                            this.trigger("options-updated")
                            this.updateSlidingWindow()
                            if (site.isCustomDomain() && site.cache.has(publish_js)) {
                                K = createEl("script")
                                K.async = true
                                K.src = site.getInternalUrl(publish_js)
                                return [4, new Promise(function (resolve) {
                                    K.addEventListener("load", resolve)
                                    K.addEventListener("error", resolve)
                                    docHead.appendChild(K)
                                })]
                            } else {
                                return [3, 11]
                            }
                        case 10:
                            o.sent()
                            o.label = 11;
                        case 11:
                            return [4, this.loadFromUrl()];
                        case 12:
                            o.sent()
                            return [2]
                    }
                }))
            }))
        }
        n.prototype.loadFromUrl = function () {
            return a(this, void 0, void 0, (function () {
                let _this, site, renderer, r, path, subpath, s, dest;
                return o(this, (function (o) {
                    switch (o.label) {
                        case 0:
                            _this = this
                            site = _this.site
                            renderer = _this.render
                            r = this.parseUrl()
                            path = r.path
                            subpath = r.subpath
                            s = path
                            if ("" === path) {
                                s = site.getConfig(K_indexFile)
                                subpath = ""
                            }
                            this.toggleNotFound(false)
                            dest = site.cache.getLinktextDest(s, "")
                            if (dest) {
                                return [4, renderer.loadFile(dest, subpath)]
                            } else {
                                renderer.currentFilepath = ""
                                this.setNoIndex(true)
                                if ("" === path) {
                                    renderer.renderContent("### Welcome to " + site.getSiteName())
                                    this.setNoIndex(false)
                                    return [2]
                                } else {
                                    renderer.renderContent("")
                                    this.toggleNotFound(true)
                                    return [2]
                                }
                            }
                        case 1:
                            o.sent()
                            return [2]
                    }
                }))
            }))
        }
        n.prototype.toggleNotFound = function (open) {
            this.containerEl.toggleClass("has-not-found", open)
            this.notFoundEl.toggle(open)
        }
        n.prototype.setTheme = function (theme) {
            if (["light", "dark"].contains(theme)) {
                document.body.removeClasses(["theme-light", "theme-dark"])
                document.body.addClass("theme-".concat(theme))
                this.themeInEffect = theme
            } else {
                console.error("Not a valid theme: ", theme)
            }
        }
        n.prototype.addLinkToSiteRoot = function (link) {
            let _this = this, site = this.site, indexFile = site.getConfig(K_indexFile);
            link.setAttr("href", site.getPublicHref(indexFile))
            link.addEventListener("click", function (evt) {
                evt.preventDefault()
                if (_this.slidingWindowMode) {
                    _this.stack = []
                }
                _this.navigate(indexFile, "", evt)
            })
        }
        n.prototype.onResize = function () {
            this.render.onResize()
            this.graph.onResize()
            this.updateSlidingWindow()
        }
        n.prototype.parseUrl = function () {
            let path, pathname = location.pathname, customurl = this.site.customurl, r = false;
            if (customurl) {
                let i = location.host + pathname;
                if (i.startsWith(customurl)) {
                    pathname = i.substring(customurl.length)
                    r = true
                }
            }
            if (pathname.startsWith("/")) {
                pathname = pathname.substring(1)
            }
            if (!r) {
                let a = pathname.indexOf("/");
                pathname = a >= 0 ? pathname.substring(a + 1) : ""
            }
            let permalinks = this.site.cache.permalinks;
            path = permalinks.hasOwnProperty(pathname)
                ? permalinks[pathname]
                : pathname.split("/").filter(e => e).map(As).join("/");
            let hash = location.hash || ""
            return {
                path: path,
                subpath: hash = hash.split("#").map(As).join("#")
            }
        }
        n.prototype.navigate = function (linktext, t, evt) {
            let site = this.site;
            if (site) {
                this.toggleNotFound(false)
                let i = parseLinktext(linktext),
                    path = i.path,
                    subpath = i.subpath,
                    dest = site.cache.getLinkpathDest(path, t);
                if (dest) {
                    if (evt && Keymap.isModEvent(evt)) {
                        window.open(site.getPublicHref(dest))
                    } else if (this.slidingWindowMode) {
                        let stack = this.stack
                        for (let c = 0, h = stack; c < h.length; c++) {
                            var u = h[c];
                            if (u.currentFilepath === dest) {
                                u.loadFile(dest, subpath)
                                this.scrollToWindow(u)
                                return
                            }
                        }
                        if (evt) {
                            let f = evt.currentTarget, p = null
                            for (; f && f !== this.renderContainerInnerEl;) {
                                p = f
                                f = f.parentElement
                            }
                            for (let d = 0; d < stack.length - 1; d++) {
                                if (stack[d].renderContainerEl === p) {
                                    stack.splice(d + 1, stack.length - d - 1)
                                    break
                                }
                            }
                        }
                        const render = new Renderer(this);
                        stack.push(render)
                        render.loadFile(dest, subpath)
                        this.render = render
                        this.updateSlidingWindow()
                        this.scrollToWindow(render)
                    } else {
                        this.render.loadFile(dest, subpath)
                    }
                    if (site.isCustomDomain()) {
                        try {
                            window.ga && window.ga("send", "pageview")
                            window.gtag && window.gtag("event", "page_view")
                        } catch (e) {
                        }
                    }
                } else {
                    new Notice('The link destination "'.concat(linktext, '" does not exist.'))
                }
            }
        }
        n.prototype.closeRenderer = function (renderer) {
            if (this.slidingWindowMode) {
                let stack = this.stack, idx = stack.indexOf(renderer);
                if (-1 !== idx) {
                    stack.remove(renderer)
                    if (renderer === this.render) {
                        idx = Math.min(idx, stack.length - 1)
                        this.scrollToWindow(stack[idx])
                    }
                    this.updateSlidingWindow()
                }
            }
        }
        n.prototype.updateSlidingWindow = function () {
            let site = this.site,
                renderContainerInnerEl = this.renderContainerInnerEl;
            if (site) {
                let n = document.body.clientWidth - this.leftColumnEl.clientWidth - this.rightColumnEl.clientWidth,
                    r = site.getConfig(K_slidingWindowMode) && n >= xl,
                    i = this.slidingWindowMode !== r;
                if (i) {
                    this.slidingWindowMode = r
                    this.stack = [this.render]
                    document.body.toggleClass("sliding-windows", r)
                }
                if (r || i) {
                    for (let stack = this.stack, i = 0; i < stack.length; i++) {
                        let style = stack[i].renderContainerEl.style;
                        if (r) {
                            style.minWidth = "700px"
                            style.left = i * Cl + "px"
                            style.right = (stack.length - i) * Cl - xl + "px"
                        } else {
                            style.minWidth = ""
                            style.left = ""
                            style.right = ""
                        }
                    }
                }
                renderContainerInnerEl.setChildrenInPlace(this.stack.map(e => e.renderContainerEl))
            }
        }
        n.prototype.scrollToWindow = function (renderer) {
            let stack = this.stack,
                renderContainerEl = this.renderContainerEl,
                idx = stack.indexOf(renderer);
            if (-1 !== idx) {
                this.render = renderer
                this.trigger("navigated");
                let i = idx * xl;
                if (renderContainerEl.scrollLeft < i || renderContainerEl.scrollLeft + renderContainerEl.clientWidth > i + xl) {
                    renderContainerEl.scrollTo({
                        left: i - idx * Cl,
                        top: 0,
                        behavior: "smooth"
                    })
                }
            }
        }
        n.prototype.onPublishRendererClick = function (evt, renderContainerEl) {
            if (!evt.defaultPrevented) {
                for (let i = 0, stack = this.stack; i < stack.length; i++) {
                    let renderer = stack[i];
                    if (renderer.renderContainerEl === renderContainerEl) {
                        this.scrollToWindow(renderer)
                        break
                    }
                }
            }
        }
        n.prototype.onSlidingWindowScroll = function () {
            let stack = this.stack,
                renderContainerEl = this.renderContainerEl,
                scrollLeft = renderContainerEl.scrollLeft,
                r = scrollLeft + renderContainerEl.clientWidth
            for (let i = 0; i < stack.length; i++) {
                let el = stack[i]
                el.renderContainerEl.toggleClass("mod-overlay", i > 0 && scrollLeft > 664 * (i - 1) || i * xl + (stack.length - i - 1) * Cl > r)
                el.renderContainerEl.toggleClass("mod-squished", scrollLeft >= 664 * (i + 1) || i * xl + (stack.length - i) * Cl >= r)
            }
        }
        n.prototype.onNavigated = function () {
            let site = this.site,
                currentFilepath = this.render.currentFilepath,
                siteTitle = site.isCustomDomain() ? "" : " - Obsidian Publish";
            if (currentFilepath) {
                this.setNoIndex(false);
                let docTitle = wo(currentFilepath);
                document.title = docTitle + " - " + site.getSiteName() + siteTitle;
                let href = site.getPublicHref(currentFilepath);
                if (location.href !== href) {
                    history.pushState(null, null, href)
                }
            } else {
                this.setNoIndex(true)
                document.title = site.getSiteName() + siteTitle
            }
        }
        n.prototype.setNoIndex = function (noindex) {
            if (this.site.getConfig(K_noindex)) {
                noindex = true
            }
            let noindexEl = this.noindexEl
            if (noindex && !noindexEl.parentNode) {
                document.head.appendChild(noindexEl)
            } else {
                !noindex && noindexEl.parentNode && noindexEl.detach()
            }
        }
        n.prototype.applyCss = function (cssText) {
            if (!this.styleEl) {
                this.styleEl = createEl("style", {type: "text/css"})
                document.head.appendChild(this.styleEl)
            }
            this.styleEl.setText(cssText)
        }
        Object.defineProperty(n.prototype, "currentFilepath", {
            get: function () {
                return this.render.currentFilepath
            },
            enumerable: false,
            configurable: true,
        })
        n.prototype.registerMarkdownPostProcessor = function (e, t) {
            MarkdownPreviewRenderer.registerPostProcessor(e, t)
            return e
        }
        n.prototype.registerMarkdownCodeBlockProcessor = function (e, t, n) {
            let r = MarkdownPreviewRenderer.createCodeBlockPostProcessor(e, t);
            MarkdownPreviewRenderer.registerPostProcessor(r, n)
            MarkdownPreviewRenderer.registerCodeBlockPostProcessor(e, t)
            return r
        }
        n.prototype.trigger = function (name, ...args) {
            // let args = []
            // for (let i = 1; i < arguments.length; i++) {
            //     args[i - 1] = arguments[i]
            // }
            Events.prototype.trigger.apply(this, s([name], args, false))
        }
        n.prototype.on = function (name, callback, ctx) {
            return Events.prototype.on.call(this, name, callback, ctx)
        }
        return n
    }(Events)
    const Site = function () {
        function e(app, siteInfo) {
            let host = siteInfo.host

            this.pwts = 0
            this.pwsig = ""
            this.options = {}
            this.publish = app
            this.id = siteInfo.uid
            this.host = host.startsWith("127.0.0.1") || host.startsWith("localhost") ? "http://" + host : "https://" + host
            this.status = siteInfo.status
            this.slug = siteInfo.slug
            this.customurl = siteInfo.customurl
            this.hpw = localStorage[siteInfo.uid]
            this.cache = new SiteCache()
        }

        e.prototype.loadCache = function () {
            return a(this, void 0, void 0, (function () {
                let preloadCache, t, n, r, i, a;
                return o(this, (function (o) {
                    switch (o.label) {
                        case 0:
                            preloadCache = window.preloadCache
                            if (!preloadCache) {
                                return [3, 7];
                            }
                            o.label = 1;
                        case 1:
                            o.trys.push([1, 6, , 7])
                            delete window.preloadCache
                            return [4, preloadCache];
                        case 2:
                            t = o.sent()
                            if (t.ok && Tl(t)) {
                                n = this.cache
                                r = n.load
                                return [4, t.json()]
                            } else {
                                return [3, 5]
                            }
                        case 3:
                            return [4, r.apply(n, [o.sent()])];
                        case 4:
                            o.sent()
                            return [2];
                        case 5:
                            return [3, 7];
                        case 6:
                            o.sent()
                            return [3, 7];
                        case 7:
                            i = {
                                withCredentials: true,
                                url: this.host + "/cache/" + encodeURIComponent(this.id) + this.getPathSuffix()
                            }
                            return [4, ajaxPromise(i)];
                        case 8:
                            a = o.sent()
                            return Hl(i.req) ? [4, this.cache.load(JSON.parse(a))] : [2];
                        case 9:
                            o.sent()
                            return [2]
                    }
                }))
            }))
        }
        e.prototype.loadOptions = function () {
            return a(this, void 0, void 0, (function () {
                let preloadOptions, t, _this, r, i, a;
                return o(this, (function (o) {
                    switch (o.label) {
                        case 0:
                            preloadOptions = window.preloadOptions
                            if (!preloadOptions) {
                                return [3, 6];
                            }
                            o.label = 1;
                        case 1:
                            o.trys.push([1, 5, , 6])
                            delete window.preloadOptions
                            return [4, preloadOptions];
                        case 2:
                            t = o.sent()
                            if (t.ok && Tl(t)) {
                                _this = this
                                return [4, t.json()]
                            } else {
                                return [3, 4];
                            }
                        case 3:
                            _this.options = o.sent()
                            return [2];
                        case 4:
                            return [3, 6];
                        case 5:
                            o.sent()
                            return [3, 6];
                        case 6:
                            o.trys.push([6, 8, , 9])
                            r = {
                                withCredentials: true,
                                url: this.host + "/options/" + encodeURIComponent(this.id)
                            }
                            return [4, ajaxPromise(r)];
                        case 7:
                            i = o.sent()
                            if (Hl(r.req)) {
                                this.options = JSON.parse(i)
                                return [3, 9]
                            } else {
                                return [2];
                            }
                        case 8:
                            a = o.sent()
                            console.error("Failed to load options", a)
                            return [3, 9];
                        case 9:
                            return [2]
                    }
                }))
            }))
        }
        e.prototype.getPathSuffix = function () {
            let _this = this, hpw = _this.hpw, pwts = _this.pwts, pwsig = _this.pwsig;
            if (!hpw) {
                return "";
            }
            let now = Date.now(), a = 36e5;
            if (pwts + a < now) {
                pwts = this.pwts = Math.floor(now / a + 6) * a
                pwsig = this.pwsig = Ka().stringify(Xa()(String(pwts), hpw))
            }
            return "?ts=".concat(String(pwts), "&sig=").concat(pwsig)
        }
        e.prototype.isCustomDomain = function () {
            return !!this.customurl
        }
        e.prototype.getConfig = function (name) {
            let value = this.options[name];
            if (void 0 === value) {
                value = defaultConfig[name]
            }
            return value
        }
        e.prototype.getSiteName = function () {
            return this.getConfig(K_siteName) || this.slug || ""
        }
        e.prototype.getSiteLogoUrl = function () {
            return this.getConfig(K_logo) || ""
        }
        e.prototype.encodeFilepath = function (path, t) {
            return path.split("/").map(t ? Ls : encodeURIComponent).join("/")
        }
        e.prototype.getInternalUrl = function (path) {
            return this.host + "/access/" + encodeURIComponent(this.id) + "/" + this.encodeFilepath(path, false) + this.getPathSuffix()
        }
        e.prototype.getPublicHref = function (e) {
            let t, n = this.cache.getCache(e);
            "md" === bo(vo(e)) && (e = e.substr(0, e.length - 3));
            var r = this.encodeFilepath(e, !0),
                i = null === (t = null == n ? void 0 : n.frontmatter) || void 0 === t ? void 0 : t.permalink;
            return i && "string" == typeof i && (i.startsWith("/") && (i = i.substring(1)), r = i), this.slug ? this.publish.origin + "/" + encodeURIComponent(this.slug) + "/" + r : this.customurl ? "https://" + this.customurl + "/" + r : ""
        }
        e.prototype.loadMarkdownFile = function (path) {
            return a(this, void 0, Promise, (function () {
                let url, preloadPage, r, i;
                return o(this, (function (a) {
                    switch (a.label) {
                        case 0:
                            url = this.getInternalUrl(path)
                            preloadPage = window.preloadPage
                            if (!preloadPage) {
                                return [3, 4];
                            }
                            delete window.preloadPage
                            a.label = 1;
                        case 1:
                            a.trys.push([1, 3, , 4])
                            return [4, preloadPage];
                        case 2:
                            r = a.sent()
                            if (r.ok && r.url === url) {
                                return [2, r.text()]
                            } else {
                                return [3, 4]
                            }
                        case 3:
                            a.sent()
                            return [3, 4];
                        case 4:
                            a.trys.push([4, 6, , 7])
                            return [4, ajaxPromise({withCredentials: true, url: url})];
                        case 5:
                            return [2, a.sent()];
                        case 6:
                            i = a.sent()
                            if (i instanceof XMLHttpRequest) {
                                if (404 === i.status) {
                                    new Notice('"'.concat(path, '" does not exist'))
                                } else {
                                    new Notice('An error occurred while loading "'.concat(path, '"'))
                                    console.error(i.response)
                                }
                            } else {
                                new Notice('An error occurred while loading "'.concat(path, '"'))
                                console.error(i)
                            }
                            return [3, 7];
                        case 7:
                            return [2]
                    }
                }))
            }))
        }
        return e
    }()


    window.addEventListener("load", function () {
        debugger
        window.app = new Publish()

        let body = document.body
        body.on("mouseover", "[aria-label]", onMouseOver)
        body.on("mouseout", "[aria-label]", onMouseOut)
        body.addEventListener("mouseup", onMouseUp)
    }, false)
})()
