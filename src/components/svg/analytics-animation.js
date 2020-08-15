import React, { useEffect } from "react";

const AnalyticsAnimation = ({ className, animateOnHover, inView }) => {
	(!animateOnHover && inView) && useEffect(() => {
		var elem = document.getElementById("Top_Box_1_fill_width");
		var parentElem = document.getElementById("Web_Analytics_Solutions_Animated");
		var lastAnimationElem = document.getElementById("Pie_Large_with_Label_turn_opaque");
		lastAnimationElem.onend = () => document.getElementById("Web_Analytics_Solutions_Animated").classList.remove("on");
		if(!parentElem.classList.contains("on")){
			parentElem.classList.add("on");
			elem.beginElement();
		}
	})

	return (
		<svg className={className} width="628" height="353" viewBox="0 0 628 353" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g id="Web_Analytics_Solutions_Animated">
				<rect width="628" height="353" fill="white"/>
				<rect id="Rectangle 126" width="628" height="353" fill="#EDF2F7"/>
				<path id="This_Year_Line" d="M44 240L66 244L88 252L110 256L132 247L154 235" stroke="#2CB0ED">
					<animate 
						id="This_Year_Line_stroke_be_transparent" 
						attributeType="xml"
						attributeName="stroke-opacity" 
						begin="Top_Box_1_fill_width.begin"
						end="This_Year_6_turn_opaque.end"
						from="0"
						to="0"
						fill="freeze" 
					/>
					<animate 
						id="This_Year_Line_stroke_turn_opaque" 
						attributeType="xml"
						attributeName="stroke-opacity" 
						begin="This_Year_6_turn_opaque.end"
						from="0"
						to="1" 
						dur="0.8s"
						fill="freeze" 
					/>
				</path>
				<path id="Last_Year_Line" d="M44 262L66 266L88 260L110 262L132 254L154 249L176 248L198 244L220 245L242 240L264 249L286 246" stroke="#81DEFD"/>
				<path id="Vector 13" d="M44 229V311.5H286.5" stroke="#B9C9DA"/>
				<path id="Vector 9" d="M140 135.5V169.5" stroke="#B9C9DA"/>
				<path id="Vector 10" d="M257 135.5V169.5" stroke="#B9C9DA"/>
				<path id="Vector 11" d="M373 135.5V169.5" stroke="#B9C9DA"/>
				<path id="Vector 12" d="M489 135.5V169.5" stroke="#B9C9DA"/>
				<rect id="Rectangle 123" x="72" y="11" width="100" height="40" fill="#B9C9DA"/>
				<rect id="Rectangle 124" x="353" y="21" width="145" height="15" fill="#B9C9DA"/>
				<rect id="Rectangle 125" x="368" y="43" width="115" height="8" fill="#B9C9DA"/>
				<path id="Vector 6" d="M231.5 14V48" stroke="#B9C9DA"/>
				<path id="Vector 7" d="M555.5 14H616V34.5" stroke="#B9C9DA"/>
				<rect id="Rectangle 127" x="20" y="73" width="106" height="10" fill="#B9C9DA"/>
				<rect id="Rectangle 128" x="523" y="80" width="80" height="6" fill="#B9C9DA"/>
				<rect id="Rectangle 129" x="23" y="93" width="111" height="6" fill="#B9C9DA"/>
				<rect id="Rectangle 130" x="147" y="93" width="38" height="6" fill="#B9C9DA"/>
				<rect id="Rectangle 131" x="63" y="115" width="36" height="7" fill="#DDE6EE"/>
				<rect id="Rectangle 132" x="165" y="115" width="67" height="7" fill="#DDE6EE"/>
				<rect id="Rectangle 133" x="289" y="115" width="49" height="7" fill="#DDE6EE"/>
				<rect id="Rectangle 134" x="420" y="115" width="21" height="7" fill="#DDE6EE"/>
				<rect id="Rectangle 135" x="526" y="115" width="42" height="7" fill="#DDE6EE"/>
				<rect id="Top_Box_1" x="54" y="128" width="53" height="14" fill="#2CB0ED">
					<animate 
						id="Top_Box_1_fill_width"
						attributeName="width"
						attributeType="XML"
						from="0" 
						to="53"
						begin="indefinite"
						dur="1s"
						fill="freeze" 
					/>
				</rect>
				<rect id="Top_Box_2" x="170" y="128" width="57" height="14" fill="#2CB0ED">
					<animate 
						id="Top_Box_2_fill_width"
						attributeName="width"
						attributeType="XML"
						from="0" 
						to="57"
						begin="Top_Box_1_fill_width.begin"
						dur="1s"
						fill="freeze" 
					/>
				</rect>
				<rect id="Top_Box_3" x="293.001" y="128" width="42" height="14" fill="#2CB0ED">
					<animate 
						id="Top_Box_3_fill_width"
						attributeName="width"
						attributeType="XML"
						from="0" 
						to="42"
						begin="Top_Box_1_fill_width.begin"
						dur="1s"
						fill="freeze" 
					/>
				</rect>
				<rect id="Top_Box_4" x="404.999" y="128" width="51" height="14" fill="#2CB0ED">
					<animate 
						id="Top_Box_4_fill_width"
						attributeName="width"
						attributeType="XML"
						from="0" 
						to="51"
						begin="Top_Box_1_fill_width.begin"
						dur="1s"
						fill="freeze" 
					/>
				</rect>
				<rect id="Top_Box_5" x="521.004" y="128" width="51" height="14" fill="#2CB0ED">
					<animate 
						id="Top_Box_5_fill_width"
						attributeName="width"
						attributeType="XML"
						from="0" 
						to="51"
						begin="Top_Box_1_fill_width.begin"
						dur="1s"
						fill="freeze" 
					/>
				</rect>
				<rect id="Bottom_Box_1" x="60.5" y="171" width="41" height="12" fill="#2CB0ED">
					<animate 
						id="Bottom_Box_1_zero_width"
						attributeName="width"
						attributeType="XML"
						from="0" 
						to="0"
						begin="Top_Box_1_fill_width.begin"
						end="Top_Box_1_fill_width.end"
						dur="1s"
						fill="freeze" 
					/>
					<animate 
						id="Bottom_Box_1_fill_width"
						attributeName="width"
						attributeType="XML"
						from="0" 
						to="41"
						begin="Top_Box_1_fill_width.end"
						dur="1s"
						fill="freeze" 
					/>
				</rect>
				<rect id="Bottom_Box_2" x="175.999" y="171" width="45" height="12" fill="#2CB0ED">
					<animate 
						id="Bottom_Box_2_zero_width"
						attributeName="width"
						attributeType="XML"
						from="0" 
						to="0"
						begin="Top_Box_1_fill_width.begin"
						end="Top_Box_1_fill_width.end"
						dur="1s"
						fill="freeze" 
					/>
					<animate 
						id="Bottom_Box_2_fill_width"
						attributeName="width"
						attributeType="XML"
						from="0" 
						to="45"
						begin="Top_Box_1_fill_width.end"
						dur="1s"
						fill="freeze" 
					/>
				</rect>
				<rect id="Bottom_Box_3" x="296.001" y="171" width="35" height="12" fill="#2CB0ED">
					<animate 
						id="Bottom_Box_3_zero_width"
						attributeName="width"
						attributeType="XML"
						from="0" 
						to="0"
						begin="Top_Box_1_fill_width.begin"
						end="Top_Box_1_fill_width.end"
						dur="1s"
						fill="freeze" 
					/>
					<animate 
						id="Bottom_Box_3_fill_width"
						attributeName="width"
						attributeType="XML"
						from="0" 
						to="35"
						begin="Top_Box_1_fill_width.end"
						dur="1s"
						fill="freeze" 
					/>
				</rect>
				<rect id="Bottom_Box_4" x="411.999" y="171" width="37" height="12" fill="#2CB0ED">
					<animate 
						id="Bottom_Box_4_zero_width"
						attributeName="width"
						attributeType="XML"
						from="0" 
						to="0"
						begin="Top_Box_1_fill_width.begin"
						end="Top_Box_1_fill_width.end"
						dur="1s"
						fill="freeze" 
					/>
					<animate 
						id="Bottom_Box_4_fill_width"
						attributeName="width"
						attributeType="XML"
						from="0" 
						to="37"
						begin="Top_Box_1_fill_width.end"
						dur="1s"
						fill="freeze" 
					/>
				</rect>
				<rect id="Bottom_Box_5" x="525.001" y="171" width="43" height="12" fill="#2CB0ED">
					<animate 
						id="Bottom_Box_5_zero_width"
						attributeName="width"
						attributeType="XML"
						from="0" 
						to="0"
						begin="Top_Box_1_fill_width.begin"
						end="Top_Box_1_fill_width.end"
						dur="1s"
						fill="freeze" 
					/>
					<animate 
						id="Bottom_Box_5_fill_width"
						attributeName="width"
						attributeType="XML"
						from="0" 
						to="43"
						begin="Top_Box_1_fill_width.end"
						dur="1s"
						fill="freeze" 
					/>
				</rect>
				<g id="Middle_YoY_1">
					<animate 
						id="Middle_YoY_1_be_transparent" 
						attributeType="xml"
						attributeName="fill-opacity" 
						begin="Top_Box_1_fill_width.begin"
						end="Bottom_Box_1_fill_width.end"
						from="0"
						to="0"
						fill="freeze" 
					/>
					<animate 
						id="Middle_YoY_1_turn_opaque" 
						attributeType="xml"
						attributeName="fill-opacity" 
						begin="Bottom_Box_1_fill_width.end"
						from="0"
						to="1" 
						dur="0.6s"
						fill="freeze" 
					/>
					<circle id="Middle Indicator 1" cx="69" cy="151" r="3" fill="#5BD0FB"/>
					<rect id="Middle Box 1" x="75" y="147" width="22" height="8" fill="#5BD0FB"/>
				</g>
				<g id="Middle_YoY_2">
					<animate 
						id="Middle_YoY_2_be_transparent" 
						attributeType="xml"
						attributeName="fill-opacity" 
						begin="Top_Box_1_fill_width.begin"
						end="Bottom_Box_1_fill_width.end"
						from="0"
						to="0"
						fill="freeze" 
					/>
					<animate 
						id="Middle_YoY_2_turn_opaque" 
						attributeType="xml"
						attributeName="fill-opacity" 
						begin="Bottom_Box_1_fill_width.end"
						from="0"
						to="1" 
						dur="0.6s"
						fill="freeze" 
					/>
					<circle id="Middle Indicator 2" cx="187" cy="151" r="3" fill="#5BD0FB"/>
					<rect id="Middle Box 2" x="193" y="147" width="22" height="8" fill="#5BD0FB"/>
				</g>
				<g id="Middle_YoY_3">
					<animate 
						id="Middle_YoY_3_be_transparent" 
						attributeType="xml"
						attributeName="fill-opacity" 
						begin="Top_Box_1_fill_width.begin"
						end="Bottom_Box_1_fill_width.end"
						from="0"
						to="0"
						fill="freeze" 
					/>
					<animate 
						id="Middle_YoY_3_turn_opaque" 
						attributeType="xml"
						attributeName="fill-opacity" 
						begin="Bottom_Box_1_fill_width.end"
						from="0"
						to="1" 
						dur="0.6s"
						fill="freeze" 
					/>
					<circle id="Middle Indicator 3" cx="301" cy="151" r="3" fill="#5BD0FB"/>
					<rect id="Middle Box 3" x="307" y="147" width="22" height="8" fill="#5BD0FB"/>
				</g>
				<g id="Middle_YoY_4">
					<animate 
						id="Middle_YoY_4_be_transparent" 
						attributeType="xml"
						attributeName="fill-opacity" 
						begin="Top_Box_1_fill_width.begin"
						end="Bottom_Box_1_fill_width.end"
						from="0"
						to="0"
						fill="freeze" 
					/>
					<animate 
						id="Middle_YoY_4_turn_opaque" 
						attributeType="xml"
						attributeName="fill-opacity" 
						begin="Bottom_Box_1_fill_width.end"
						from="0"
						to="1" 
						dur="0.6s"
						fill="freeze" 
					/>
					<circle id="Middle Indicator 4" cx="417" cy="151" r="3" fill="#5BD0FB"/>
					<rect id="Middle Box 4" x="423" y="147" width="22" height="8" fill="#5BD0FB"/>
				</g>
				<g id="Middle_YoY_5">
					<animate
						id="Middle_YoY_5_be_transparent" 
						attributeType="xml"
						attributeName="fill-opacity" 
						begin="Top_Box_1_fill_width.begin"
						end="Bottom_Box_1_fill_width.end"
						from="0"
						to="0"
						fill="freeze" 
					/>
					<animate
						id="Middle_YoY_5_turn_opaque" 
						attributeType="xml"
						attributeName="fill-opacity" 
						begin="Bottom_Box_1_fill_width.end"
						from="0"
						to="1" 
						dur="0.6s"
						fill="freeze" 
					/>
					<circle id="Middle Indicator 5" cx="534" cy="151" r="3" fill="#5BD0FB"/>
					<rect id="Middle Box 5" x="540" y="147" width="22" height="8" fill="#5BD0FB"/>
				</g>
				<rect id="Rectangle 151" x="50" y="161" width="63" height="6" fill="#DDE6EE"/>
				<rect id="Rectangle 152" x="156" y="161" width="85" height="6" fill="#DDE6EE"/>
				<rect id="Rectangle 153" x="274" y="161" width="79" height="6" fill="#DDE6EE"/>
				<rect id="Rectangle 154" x="403" y="161" width="55" height="6" fill="#DDE6EE"/>
				<rect id="Rectangle 155" x="512" y="161" width="69" height="6" fill="#DDE6EE"/>
				<rect id="Rectangle 156" x="28" y="207" width="105" height="8" fill="#B9C9DA"/>
				<rect id="Rectangle 157" x="329" y="207" width="120" height="8" fill="#B9C9DA"/>
				<rect id="Rectangle 158" x="28" y="226" width="10" height="5" fill="#DDE6EE"/>
				<rect id="Rectangle 159" x="28" y="247" width="10" height="5" fill="#DDE6EE"/>
				<rect id="Rectangle 160" x="28" y="268" width="10" height="5" fill="#DDE6EE"/>
				<rect id="Rectangle 161" x="31" y="289" width="7" height="5" fill="#DDE6EE"/>
				<rect id="Rectangle 162" x="34" y="310" width="4" height="5" fill="#DDE6EE"/>
				<rect id="Rectangle 163" x="34" y="316" width="21" height="5" fill="#DDE6EE"/>
				<rect id="Rectangle 164" x="55" y="324" width="23" height="5" fill="#DDE6EE"/>
				<rect id="Rectangle 165" x="80" y="316" width="17" height="5" fill="#DDE6EE"/>
				<rect id="Rectangle 166" x="104" y="324" width="12" height="5" fill="#DDE6EE"/>
				<rect id="Rectangle 167" x="126" y="316" width="12" height="5" fill="#DDE6EE"/>
				<rect id="Rectangle 168" x="170" y="316" width="12" height="5" fill="#DDE6EE"/>
				<rect id="Rectangle 170" x="187" y="324" width="21" height="5" fill="#DDE6EE"/>
				<rect id="Rectangle 171" x="204" y="316" width="31" height="5" fill="#DDE6EE"/>
				<rect id="Rectangle 173" x="250" y="316" width="28" height="5" fill="#DDE6EE"/>
				<rect id="Rectangle 174" x="273" y="324" width="27" height="5" fill="#DDE6EE"/>
				<rect id="Rectangle 172" x="232" y="324" width="21" height="5" fill="#DDE6EE"/>
				<rect id="Rectangle 169" x="148" y="324" width="12" height="5" fill="#DDE6EE"/>
				<circle id="This_Year_1" cx="44" cy="240" r="1.5" fill="#1991D2" stroke="#2CB0ED">
					<animate 
						id="This_Year_1_be_transparent" 
						attributeType="xml"
						attributeName="fill-opacity" 
						begin="Top_Box_1_fill_width.begin"
						end="Middle_YoY_1_turn_opaque.end"
						from="0"
						to="0"
						fill="freeze" 
					/>
					<animate 
						id="This_Year_1_turn_opaque" 
						attributeType="xml"
						attributeName="fill-opacity" 
						begin="Middle_YoY_1_turn_opaque.end"
						from="0"
						to="1" 
						dur="0.2s"
						fill="freeze" 
					/>
					<animate 
						id="This_Year_1_stroke_be_transparent" 
						attributeType="xml"
						attributeName="stroke-opacity" 
						begin="Top_Box_1_fill_width.begin"
						end="Middle_YoY_1_turn_opaque.end"
						from="0"
						to="0"
						fill="freeze" 
					/>
					<animate 
						id="This_Year_1_stroke_turn_opaque" 
						attributeType="xml"
						attributeName="stroke-opacity" 
						begin="Middle_YoY_1_turn_opaque.end"
						from="0"
						to="1" 
						dur="0.2s"
						fill="freeze" 
					/>
				</circle>
				<circle id="This_Year_2" cx="66" cy="244" r="1.5" fill="#1991D2" stroke="#2CB0ED">
					<animate 
						id="This_Year_2_be_transparent" 
						attributeType="xml"
						attributeName="fill-opacity" 
						begin="Top_Box_1_fill_width.begin"
						end="This_Year_1_turn_opaque.end"
						from="0"
						to="0"
						fill="freeze" 
					/>
					<animate 
						id="This_Year_2_turn_opaque" 
						attributeType="xml"
						attributeName="fill-opacity" 
						begin="This_Year_1_turn_opaque.end"
						from="0"
						to="1" 
						dur="0.2s"
						fill="freeze" 
					/>
					<animate 
						id="This_Year_2_stroke_be_transparent" 
						attributeType="xml"
						attributeName="stroke-opacity" 
						begin="Top_Box_1_fill_width.begin"
						end="This_Year_1_turn_opaque.end"
						from="0"
						to="0"
						fill="freeze" 
					/>
					<animate 
						id="This_Year_2_stroke_turn_opaque" 
						attributeType="xml"
						attributeName="stroke-opacity" 
						begin="This_Year_1_turn_opaque.end"
						from="0"
						to="1" 
						dur="0.2s"
						fill="freeze" 
					/>
				</circle>
				<circle id="This_Year_3" cx="88" cy="252" r="1.5" fill="#1991D2" stroke="#2CB0ED">
					<animate 
						id="This_Year_3_be_transparent" 
						attributeType="xml"
						attributeName="fill-opacity" 
						begin="Top_Box_1_fill_width.begin"
						end="This_Year_2_turn_opaque.end"
						from="0"
						to="0"
						fill="freeze" 
					/>
					<animate 
						id="This_Year_3_turn_opaque" 
						attributeType="xml"
						attributeName="fill-opacity" 
						begin="This_Year_2_turn_opaque.end"
						from="0"
						to="1" 
						dur="0.2s"
						fill="freeze"
					/>
					<animate 
						id="This_Year_3_stroke_be_transparent" 
						attributeType="xml"
						attributeName="stroke-opacity" 
						begin="Top_Box_1_fill_width.begin"
						end="This_Year_2_turn_opaque.end"
						from="0"
						to="0"
						fill="freeze" 
					/>
					<animate 
						id="This_Year_3_stroke_turn_opaque" 
						attributeType="xml"
						attributeName="stroke-opacity" 
						begin="This_Year_2_turn_opaque.end"
						from="0"
						to="1" 
						dur="0.2s"
						fill="freeze" 
					/>
				</circle>
				<circle id="This_Year_4" cx="110" cy="256" r="1.5" fill="#1991D2" stroke="#2CB0ED">
					<animate 
						id="This_Year_4_be_transparent" 
						attributeType="xml"
						attributeName="fill-opacity" 
						begin="Top_Box_1_fill_width.begin"
						end="This_Year_3_turn_opaque.end"
						from="0"
						to="0"
						fill="freeze" 
					/>
					<animate 
						id="This_Year_4_turn_opaque" 
						attributeType="xml"
						attributeName="fill-opacity" 
						begin="This_Year_3_turn_opaque.end"
						from="0"
						to="1" 
						dur="0.2s"
						fill="freeze"
					/>
					<animate 
						id="This_Year_4_stroke_be_transparent" 
						attributeType="xml"
						attributeName="stroke-opacity" 
						begin="Top_Box_1_fill_width.begin"
						end="This_Year_3_turn_opaque.end"
						from="0"
						to="0"
						fill="freeze" 
					/>
					<animate 
						id="This_Year_4_stroke_turn_opaque" 
						attributeType="xml"
						attributeName="stroke-opacity" 
						begin="This_Year_3_turn_opaque.end"
						from="0"
						to="1" 
						dur="0.2s"
						fill="freeze" 
					/>
				</circle>
				<circle id="This_Year_5" cx="132" cy="247" r="1.5" fill="#1991D2" stroke="#2CB0ED">
					<animate 
						id="This_Year_5_be_transparent" 
						attributeType="xml"
						attributeName="fill-opacity" 
						begin="Top_Box_1_fill_width.begin"
						end="This_Year_4_turn_opaque.end"
						from="0"
						to="0"
						fill="freeze" 
					/>
					<animate 
						id="This_Year_5_turn_opaque" 
						attributeType="xml"
						attributeName="fill-opacity" 
						begin="This_Year_4_turn_opaque.end"
						from="0"
						to="1" 
						dur="0.2s"
						fill="freeze" 
					/>
					<animate 
						id="This_Year_5_stroke_be_transparent" 
						attributeType="xml"
						attributeName="stroke-opacity" 
						begin="Top_Box_1_fill_width.begin"
						end="This_Year_4_turn_opaque.end"
						from="0"
						to="0"
						fill="freeze" 
					/>
					<animate 
						id="This_Year_5_stroke_turn_opaque" 
						attributeType="xml"
						attributeName="stroke-opacity" 
						begin="This_Year_4_turn_opaque.end"
						from="0"
						to="1" 
						dur="0.2s"
						fill="freeze" 
					/>
				</circle>
				<circle id="This_Year_6" cx="154" cy="235" r="1.5" fill="#1991D2" stroke="#2CB0ED">
					<animate 
						id="This_Year_6_be_transparent" 
						attributeType="xml"
						attributeName="fill-opacity" 
						begin="Top_Box_1_fill_width.begin"
						end="This_Year_5_turn_opaque.end"
						from="0"
						to="0"
						fill="freeze" 
					/>
					<animate 
						id="This_Year_6_turn_opaque" 
						attributeType="xml"
						attributeName="fill-opacity" 
						begin="This_Year_5_turn_opaque.end"
						from="0"
						to="1" 
						dur="0.2s"
						fill="freeze" 
					/>
					<animate 
						id="This_Year_6_stroke_be_transparent" 
						attributeType="xml"
						attributeName="stroke-opacity" 
						begin="Top_Box_1_fill_width.begin"
						end="This_Year_5_turn_opaque.end"
						from="0"
						to="0"
						fill="freeze" 
					/>
					<animate 
						id="This_Year_6_stroke_turn_opaque" 
						attributeType="xml"
						attributeName="stroke-opacity" 
						begin="This_Year_5_turn_opaque.end"
						from="0"
						to="1" 
						dur="0.2s"
						fill="freeze" 
					/>
				</circle>
				<circle id="Ellipse 50" cx="44" cy="262" r="1.5" fill="#5BD0FB" stroke="#81DEFD"/>
				<circle id="Ellipse 51" cx="66" cy="266" r="1.5" fill="#5BD0FB" stroke="#81DEFD"/>
				<circle id="Ellipse 52" cx="88" cy="260" r="1.5" fill="#5BD0FB" stroke="#81DEFD"/>
				<circle id="Ellipse 53" cx="110" cy="262" r="1.5" fill="#5BD0FB" stroke="#81DEFD"/>
				<circle id="Ellipse 54" cx="132" cy="254" r="1.5" fill="#5BD0FB" stroke="#81DEFD"/>
				<circle id="Ellipse 55" cx="154" cy="249" r="1.5" fill="#5BD0FB" stroke="#81DEFD"/>
				<circle id="Ellipse 56" cx="176" cy="248" r="1.5" fill="#5BD0FB" stroke="#81DEFD"/>
				<circle id="Ellipse 57" cx="198" cy="244" r="1.5" fill="#5BD0FB" stroke="#81DEFD"/>
				<circle id="Ellipse 58" cx="220" cy="245" r="1.5" fill="#5BD0FB" stroke="#81DEFD"/>
				<circle id="Ellipse 59" cx="242" cy="240" r="1.5" fill="#5BD0FB" stroke="#81DEFD"/>
				<circle id="Ellipse 60" cx="264" cy="249" r="1.5" fill="#5BD0FB" stroke="#81DEFD"/>
				<circle id="Ellipse 61" cx="286" cy="246" r="1.5" fill="#5BD0FB" stroke="#81DEFD"/>
				<rect id="Rectangle 175" x="115" y="333" width="24" height="5" fill="#DDE6EE"/>
				<rect id="Rectangle 176" x="164" y="333" width="65" height="5" fill="#DDE6EE"/>
				<circle id="Ellipse 62" cx="106" cy="336" r="1.5" fill="#1991D2" stroke="#2CB0ED"/>
				<circle id="Ellipse 63" cx="155" cy="336" r="1.5" fill="#40C3F7" stroke="#5BD0FB"/>
				<g id="Pie_Large_with_Label">
					<animate 
						id="Pie_Large_with_Label_be_transparent" 
						attributeType="xml"
						attributeName="fill-opacity" 
						begin="Top_Box_1_fill_width.begin"
						end="Pie_Medium_with_Label_turn_opaque.end"
						from="0"
						to="0"
						fill="freeze" 
					/>
					<animate 
						id="Pie_Large_with_Label_turn_opaque" 
						attributeType="xml"
						attributeName="fill-opacity" 
						begin="Pie_Medium_with_Label_turn_opaque.end"
						from="0"
						to="1" 
						dur="0.4s"
						fill="freeze"
						onend={() => document.getElementById('Web_Analytics_Solutions_Animated').classList.remove('on')}
					/>
					<path id="Pie_Large" fillRule="evenodd" clipRule="evenodd" d="M459 328C487.719 328 511 304.719 511 276C511 247.281 487.719 224 459 224V240C478.882 240 495 256.118 495 276C495 295.882 478.882 312 459 312C448.829 312 439.643 307.782 433.096 301L421.781 312.315C431.225 321.992 444.411 328 459 328Z" fill="#2CB0ED"/>
					<rect id="Rectangle 179" x="492" y="294" width="12" height="4" fill="#EDF2F7"/>
				</g>
				<g id="Pie_Medium_with_Label">
					<animate 
						id="Pie_Medium_with_Label_be_transparent" 
						attributeType="xml"
						attributeName="fill-opacity" 
						begin="Top_Box_1_fill_width.begin"
						end="Pie_Small_with_Label_turn_opaque.end"
						from="0"
						to="0"
						fill="freeze" 
					/>
					<animate 
						id="Pie_Medium_with_Label_turn_opaque" 
						attributeType="xml"
						attributeName="fill-opacity" 
						begin="Pie_Small_with_Label_turn_opaque.end"
						from="0"
						to="1" 
						dur="0.4s"
						fill="freeze" 
					/>
					<path id="Pie_Medium" d="M459 224C430.281 224 407 247.281 407 276H423C423 256.118 439.118 240 459 240V224Z" fill="#1991D2"/>
					<rect id="Rectangle 177" x="422" y="244" width="12" height="4" fill="#EDF2F7"/>
				</g>
				<g id="Pie_Small_with_Label">
					<animate 
						id="Pie_Small_with_Label_be_transparent" 
						attributeType="xml"
						attributeName="fill-opacity" 
						begin="Top_Box_1_fill_width.begin"
						end="This_Year_Line_stroke_turn_opaque.end"
						from="0"
						to="0"
						fill="freeze" 
					/>
					<animate 
						id="Pie_Small_with_Label_turn_opaque" 
						attributeType="xml"
						attributeName="fill-opacity" 
						begin="This_Year_Line_stroke_turn_opaque.end"
						from="0"
						to="1" 
						dur="0.4s"
						fill="freeze" 
					/>
					<path id="Pie_Small" d="M423 276H407C407 290.13 412.635 302.943 421.781 312.315L433.096 301C426.845 294.524 423 285.711 423 276Z" fill="#1280BF"/>
					<rect id="Rectangle 178" x="412" y="289" width="12" height="4" fill="#EDF2F7"/>
				</g>
				<g id="Pie_Small_Legend">
					<circle id="Ellipse 64" cx="388.5" cy="335.5" r="3.5" fill="#1991D2"/>
					<rect id="Rectangle 180" x="395" y="333" width="35" height="5" fill="#DDE6EE"/>
				</g>
				<g id="Pie_Medium_Legend">
					<circle id="Ellipse 65" cx="445.5" cy="335.5" r="3.5" fill="#2CB0ED"/>
					<rect id="Rectangle 181" x="451" y="333" width="43" height="5" fill="#DDE6EE"/>
				</g>
				<g id="Pie_Large_Legend">
					<circle id="Ellipse 67" cx="510.5" cy="335.5" r="3.5" fill="#40C3F7"/>
					<rect id="Rectangle 182" x="516" y="333" width="15" height="5" fill="#DDE6EE"/>
				</g>
			</g>
		</svg>
	);
};


export default AnalyticsAnimation;