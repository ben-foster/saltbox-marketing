import React, { useEffect } from "react";

const SEOAnimation = ({ className, animateOnHover, inView }) => {
    (!animateOnHover && inView) && useEffect(() => {
		var elem = document.getElementById("Client_Search_Result_pull_out");
		var parentElem = document.getElementById("SEO_Animated");
		var lastAnimationElem = document.getElementById("Client_Sitelink_Extensions_turn_opaque");
		lastAnimationElem.onend = () => document.getElementById("SEO_Animated").classList.remove("on");
		if(!parentElem.classList.contains("on")){
			parentElem.classList.add("on");
			elem.beginElement();
		}
	})
    return (
        <svg className={className} width="628" height="353" viewBox="0 0 628 353" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SEO_Animated">
                <g id="Google_Header">   
                    <rect width="628" height="353" fill="white"/>
                    <rect id="Rectangle 45" width="628" height="353" fill="#EDF2F7"/>
                    <g id="Google_Logo">
                        <path id="Vector" d="M34.1583 20.5889C34.1583 19.9518 34.107 19.3112 33.9975 18.6844H25.2125V22.2938H30.2432C30.0345 23.4578 29.3637 24.4876 28.3815 25.142V27.484H31.3828C33.1453 25.8515 34.1583 23.4406 34.1583 20.5889Z" fill="#B9C9DA"/>
                        <path id="Vector_2" d="M25.2125 29.7468C27.7244 29.7468 29.8428 28.9168 31.3862 27.484L28.3849 25.142C27.5499 25.7138 26.4719 26.0375 25.2159 26.0375C22.7861 26.0375 20.7258 24.3878 19.9866 22.1698H16.8895V24.5841C18.4706 27.7492 21.6909 29.7468 25.2125 29.7468Z" fill="#768A9E"/>
                        <path id="Vector_3" d="M19.9832 22.1698C19.5931 21.0057 19.5931 19.7452 19.9832 18.5811V16.1668H16.8895C15.5685 18.8153 15.5685 21.9356 16.8895 24.5841L19.9832 22.1698Z" fill="#93A8BD"/>
                        <path id="Vector_4" d="M25.2125 14.7099C26.5403 14.6892 27.8237 15.1921 28.7853 16.1151L31.4444 13.439C29.7607 11.8479 27.5259 10.9731 25.2125 11.0006C21.6909 11.0006 18.4706 12.9982 16.8895 16.1668L19.9832 18.5811C20.719 16.3596 22.7826 14.7099 25.2125 14.7099Z" fill="#768A9E"/>
                    </g>
                    <circle id="Ellipse 19" cx="604" cy="21" r="8" fill="#B9C9DA"/>
                    <rect id="Rectangle 46" x="80.5" y="10.5" width="342" height="20" rx="9.5" fill="white" stroke="#DDE6EE"/>
                    <circle id="Ellipse 20" cx="580" cy="18" r="1" fill="#93A8BD"/>
                    <circle id="Ellipse 23" cx="580" cy="21" r="1" fill="#93A8BD"/>
                    <circle id="Ellipse 26" cx="580" cy="24" r="1" fill="#93A8BD"/>
                    <circle id="Ellipse 21" cx="583" cy="18" r="1" fill="#93A8BD"/>
                    <circle id="Ellipse 24" cx="583" cy="21" r="1" fill="#93A8BD"/>
                    <circle id="Ellipse 27" cx="583" cy="24" r="1" fill="#93A8BD"/>
                    <circle id="Ellipse 22" cx="586" cy="18" r="1" fill="#93A8BD"/>
                    <circle id="Ellipse 25" cx="586" cy="21" r="1" fill="#93A8BD"/>
                    <circle id="Ellipse 28" cx="586" cy="24" r="1" fill="#93A8BD"/>
                    <rect id="Rectangle 47" x="112" y="17" width="29" height="7" rx="1" fill="#B9C9DA"/>
                    <rect id="Rectangle 48" x="91" y="17" width="19" height="7" rx="1" fill="#B9C9DA"/>
                    <circle id="Ellipse 29" cx="411.5" cy="20.5" r="3.5" fill="#B9C9DA"/>
                    <circle id="Ellipse 30" cx="395.5" cy="20.5" r="3.5" fill="#B9C9DA"/>
                    <path id="Vector 5" d="M0 60.5H628" stroke="#DDE6EE" strokeWidth="2"/>
                    <rect id="Rectangle 49" x="84" y="59" width="29" height="1" fill="#93A8BD"/>
                    <circle id="Ellipse 31" cx="92.5" cy="49.5" r="3.5" fill="#B9C9DA"/>
                    <circle id="Ellipse 32" cx="122.5" cy="49.5" r="3.5" fill="#B9C9DA"/>
                    <circle id="Ellipse 34" cx="211.5" cy="49.5" r="3.5" fill="#B9C9DA"/>
                    <circle id="Ellipse 35" cx="254.5" cy="49.5" r="3.5" fill="#B9C9DA"/>
                    <circle id="Ellipse 33" cx="161.5" cy="49.5" r="3.5" fill="#B9C9DA"/>
                    <rect id="Rectangle 50" x="99" y="47" width="9" height="5" fill="#B9C9DA"/>
                    <rect id="Rectangle 51" x="129" y="47" width="16" height="5" fill="#B9C9DA"/>
                    <rect id="Rectangle 53" x="218" y="47" width="16" height="5" fill="#B9C9DA"/>
                    <rect id="Rectangle 54" x="261" y="47" width="16" height="5" fill="#B9C9DA"/>
                    <rect id="Rectangle 55" x="356" y="47" width="23" height="5" fill="#B9C9DA"/>
                    <rect id="Rectangle 56" x="392" y="47" width="15" height="5" fill="#B9C9DA"/>
                    <rect id="Rectangle 52" x="168" y="47" width="26" height="5" fill="#B9C9DA"/>
                    <rect id="Rectangle 58" x="85" y="75" width="135" height="6" fill="#DDE6EE"/>
                </g>
                <g id="Client_Search_Result">
                    <animateTransform 
                        id="Client_Search_Result_pull_out"
                        attributeName="transform"
                        type="translate"
                        from="0 204"
                        to="10 204"
                        begin="indefinite"
                        dur="0.7s"
                        repeatCount="0"
                        fill="freeze"
                    />
                    <animateTransform 
                        id="Client_Search_Result_move_up"
                        attributeName="transform"
                        type="translate"
                        from="10 204"
                        to="10 0"
                        begin="Client_Search_Result_pull_out.end"
                        dur="2s"
                        repeatCount="0"
                        fill="freeze"
                    />
                    <animateTransform 
                        id="Client_Search_Result_settle_in"
                        attributeName="transform"
                        type="translate"
                        from="10 0"
                        to="0 0"
                        begin="Client_Search_Result_move_up.end"
                        dur="0.7s"
                        repeatCount="0"
                        fill="freeze"
                    />
                    <rect id="Rectangle 59" x="85" y="94" width="80" height="8" fill="#5BD0FB"/>
                    <rect id="Rectangle 61" x="85" y="123" width="287" height="8" fill="#5BD0FB"/>
                    <rect id="Rectangle 62" x="85" y="135" width="240" height="8" fill="#5BD0FB"/>
                    <rect id="Rectangle 60" x="85" y="107" width="276" height="12" fill="#5BD0FB"/>
                </g>
                <g id="Client_Sitelink_Extensions">
                    <animate 
                        id="Client_Sitelink_Extensions_be_transparent" 
                        attributeType="xml"
                        attributeName="fill-opacity" 
                        begin="Client_Search_Result_pull_out.begin"
                        end="Organic_Result_1_move_down_again.end"
                        from="0"
                        to="0"
                        fill="freeze" 
                    />
                    <animate 
                        id="Client_Sitelink_Extensions_turn_opaque" 
                        attributeType="xml"
                        attributeName="fill-opacity" 
                        begin="Organic_Result_1_move_down_again.end"
                        from="0"
                        to="1" 
                        dur="1s"
                        fill="freeze" 
                        onend={() => document.getElementById('SEO_Animated').classList.remove('on')}
                    />
                    <rect id="Rectangle 65" x="99" y="166" width="72" height="6" fill="#5BD0FB"/>
                    <rect id="Rectangle 78" x="99" y="205" width="66" height="6" fill="#5BD0FB"/>
                    <rect id="Rectangle 67" x="250" y="166" width="72" height="6" fill="#5BD0FB"/>
                    <rect id="Rectangle 79" x="250" y="205" width="80" height="6" fill="#5BD0FB"/>
                    <rect id="Rectangle 66" x="99" y="176" width="81" height="6" fill="#5BD0FB"/>
                    <rect id="Rectangle 80" x="99" y="215" width="20" height="6" fill="#5BD0FB"/>
                    <rect id="Rectangle 68" x="250" y="176" width="80" height="6" fill="#5BD0FB"/>
                    <rect id="Rectangle 81" x="250" y="215" width="52" height="6" fill="#5BD0FB"/>
                    <rect id="Rectangle 63" x="99" y="152" width="75" height="10" fill="#5BD0FB"/>
                    <rect id="Rectangle 82" x="99" y="191" width="75" height="10" fill="#5BD0FB"/>
                    <rect id="Rectangle 64" x="250" y="152" width="75" height="10" fill="#5BD0FB"/>
                    <rect id="Rectangle 83" x="250" y="191" width="75" height="10" fill="#5BD0FB"/>
                </g>
                <g id="Organic_Results">
                    <g id="Organic_Result_1">
                        <animateTransform 
                            id="Organic_Result_1_offset_start"
                            attributeName="transform"
                            type="translate"
                            from="0 -141"
                            to="0 -141"
                            begin="Client_Search_Result_pull_out.begin"
                            end="Organic_Result_2_move_down.end"
                            repeatCount="0"
                            fill="freeze"
                        />
                        <animateTransform 
                            id="Organic_Result_1_move_down"
                            attributeName="transform"
                            type="translate"
                            from="0 -141"
                            to="0 -78"
                            begin="Organic_Result_2_move_down.end"
                            dur="0.5s"
                            repeatCount="0"
                            fill="freeze"
                        />
                        <animateTransform 
                            id="Organic_Result_1_move_down_again"
                            attributeName="transform"
                            type="translate"
                            from="0 -78"
                            to="0 0"
                            begin="Client_Search_Result_settle_in.end"
                            dur="0.8s"
                            repeatCount="0"
                            fill="freeze"
                        />
                        <rect id="Rectangle 69" x="85" y="235" width="89" height="8" fill="#DDE6EE"/>
                        <rect id="Rectangle 70" x="85" y="264" width="294" height="8" fill="#DDE6EE"/>
                        <rect id="Rectangle 71" x="85" y="248" width="276" height="12" fill="#DDE6EE"/>
                    </g>
                    <g id="Organic_Result_2">
                        <animateTransform 
                            id="Organic_Result_2_offset_start"
                            attributeName="transform"
                            type="translate"
                            from="0 -141"
                            to="0 -141"
                            begin="Client_Search_Result_pull_out.begin"
                            end="Organic_Result_3_move_down.end"
                            repeatCount="0"
                            fill="freeze"
                        />
                        <animateTransform 
                            id="Organic_Result_2_move_down"
                            attributeName="transform"
                            type="translate"
                            from="0 -141"
                            to="0 -78"
                            begin="Organic_Result_3_move_down.end"
                            dur="0.5s"
                            repeatCount="0"
                            fill="freeze"
                        />
                        <animateTransform 
                            id="Organic_Result_2_move_down_again"
                            attributeName="transform"
                            type="translate"
                            from="0 -78"
                            to="0 0"
                            begin="Client_Search_Result_settle_in.end"
                            dur="0.8s"
                            repeatCount="0"
                            fill="freeze"
                        />
                        <rect id="Rectangle 72" x="85" y="286" width="112" height="8" fill="#DDE6EE"/>
                        <rect id="Rectangle 73" x="85" y="315" width="291" height="8" fill="#DDE6EE"/>
                        <rect id="Rectangle 74" x="85" y="299" width="287" height="12" fill="#DDE6EE"/>
                    </g>
                    <g id="Organic_Result_3">
                        <animateTransform 
                            id="Organic_Result_3_offset_start"
                            attributeName="transform"
                            type="translate"
                            from="0 -141"
                            to="0 -141"
                            begin="Client_Search_Result_pull_out.begin"
                            end="Organic_Result_4_move_down.end"
                            repeatCount="0"
                            fill="freeze"
                        />
                        <animateTransform 
                            id="Organic_Result_3_move_down"
                            attributeName="transform"
                            type="translate"
                            from="0 -141"
                            to="0 -78"
                            begin="Organic_Result_4_move_down.end"
                            dur="0.5s"
                            repeatCount="0"
                            fill="freeze"
                        />
                        <animateTransform 
                            id="Organic_Result_3_move_down_again"
                            attributeName="transform"
                            type="translate"
                            from="0 -78"
                            to="0 0"
                            begin="Client_Search_Result_settle_in.end"
                            dur="0.8s"
                            repeatCount="0"
                            fill="freeze"
                        />
                        <rect id="Rectangle 75" x="85" y="337" width="89" height="8" fill="#DDE6EE"/>
                        <rect id="Rectangle 76" x="85" y="366" width="287" height="8" fill="#DDE6EE"/>
                        <rect id="Rectangle 77" x="85" y="350" width="265" height="12" fill="#DDE6EE"/>
                    </g>
                    <g id="Organic_Result_4">
                        <animateTransform 
                            id="Organic_Result_4_offset_start"
                            attributeName="transform"
                            type="translate"
                            from="0 -141"
                            to="0 -141"
                            begin="Client_Search_Result_pull_out.begin"
                            end="Client_Search_Result_move_up.begin"
                            repeatCount="0"
                            fill="freeze"
                        />
                        <animateTransform 
                            id="Organic_Result_4_move_down"
                            attributeName="transform"
                            type="translate"
                            from="0 -141"
                            to="0 -78"
                            begin="Client_Search_Result_move_up.begin"
                            dur="0.5s"
                            repeatCount="0"
                            fill="freeze"
                        />
                        <animateTransform 
                            id="Organic_Result_4_move_down_again"
                            attributeName="transform"
                            type="translate"
                            from="0 -78"
                            to="0 0"
                            begin="Client_Search_Result_settle_in.end"
                            dur="0.8s"
                            repeatCount="0"
                            fill="freeze"
                        />
                        <rect id="Rectangle 75_2" x="85" y="388" width="89" height="8" fill="#DDE6EE"/>
                        <rect id="Rectangle 76_2" x="85" y="417" width="287" height="8" fill="#DDE6EE"/>
                        <rect id="Rectangle 77_2" x="85" y="401" width="265" height="12" fill="#DDE6EE"/>
                    </g>
                </g>
            </g>
        </svg>
    );
};

export default SEOAnimation;