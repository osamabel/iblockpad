import React from "react";

export default function About() {
  
  return (
    <div className="w-[1128px] flex pt-[250px] relative z-[1]">
      <div className=" absolute right-[36px] top-0 flex items-end text-primary z-[2]">
        <img className="" src="/title.svg" alt="" />
        <h1 className="text-[33.75px] ">من نحن</h1>
      </div>
      <div className="flex flex-wrap relative w-full ">
        <div className=" w-[50%] h-[200px] relative flip-container">
          <div className="ShadowCard"></div>
          <div className="w-full absolute flex flex-col card pb-[20px] h-[250px] flipper">
            <div className="h-[100px] w-full flex justify-start">
              <img className="" src="/section.svg" alt="" />
            </div>
            <p className="rtl font-light font-graphik-arabic px-[40px] leading-[30px]">
              في مختبرات BLOCKPAD، نحن متخصصون في تحويل فكرتك المبتكرة من
              المفهوم إلى الإطلاق باستخدام خبرتنا في الخدمات الاستشارية الرائدة
              في السوق، الاستثمار، والتطوير، والتسويق عبر المؤثرين، والدعم
              القانوني.
            </p>
          </div>
        </div>

        <div className=" w-[50%] h-[200px] relative flip-container">
          <div className="w-full absolute flex flex-col card pb-[20px] h-[250px] top-[80px] right-[-30px] flipper">
            <div className="h-[100px] w-full flex justify-start">
              <img className="" src="/section.svg" alt="" />
            </div>
            <p className="rtl font-light font-graphik-arabic px-[40px] leading-[30px]">
              نحن لا نكتفي بتوفير رأس المال والشركاء فحسب، بل نساعد في كل جانب
              من جوانب مشروعك بدءاً من اقتصاديات التوكنات وصولاً إلى التسويق بعد
              الإطلاق
            </p>
          </div>
        </div>

        <div className="w-[50%] h-[200px] relative flip-container">
          <div className="w-full absolute flex flex-col card pb-[20px] h-[250px] top-[100px] right-[100px] flipper">
            <div className="h-[100px] w-full flex justify-start">
              <img className="" src="/section.svg" alt="" />
            </div>
            <p className="rtl font-light font-graphik-arabic px-[40px] leading-[30px]">
              نحن شركة رأس المال المخاطر الوحيدة التي تمتلك فريقاً داخلياً من
              المطورين والمصممين والمسوقين والمؤثرين والمتداولين، بالإضافة إلى
              الدعم القانوني ومنصات الإطلاق.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
