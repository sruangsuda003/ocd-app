import React from "react";

export default function Blogpost1() {
  return (
    <div>
      <>
        {/* full Title */}
        <div className="full-title">
          <div className="container">
            {/* Page Heading/Breadcrumbs */}
            <h1 className="mt-4 mb-3">
              Post Title
              <small>Subheading</small>
            </h1>
          </div>
        </div>
        {/* Page Content */}
        <div className="container">
          <div className="breadcrumb-main">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item active">Blog Home 2</li>
            </ol>
          </div>
          <div className="row">
            {/* Post Content Column */}
            <div className="col-lg-8">
              {/* Preview Image */}
              <img
                className="img-fluid rounded"
                src="images/blog-item-01.jpg"
                alt=""
              />
              <hr />
              {/* Date/Time */}
              <p>โพสต์เมื่อวันที่ 18 ธันวาคม 2567 โดยสรวงสุดา ทองมินทร์</p>
              <hr />
              {/* Post Content */}
              <p className="lead">แนวคิดปรัชญากับการพัฒนาองค์การ</p>
              <p>
                แนวคิดปรัชญากับการพัฒนาองค์การ ได้แก่{" "}
                <ol className="ml-4" style={{ listStyleType: "lower-alpha" }}>
                  <li>
                    การกำหนดรูปแบบในการพัฒนาองค์การ การกำหนดเป้าหมาย
                    และตัวชี้วัดให้ชัดเจน (KPI)
                  </li>
                  <li> มีแนวคิดเชิงบวกเกี่ยวกับองค์การ</li>
                  <li> มีที่ปรึกษาด้านการพัฒนาองค์การ</li>
                </ol>
              </p>
              <p className="lead">การพัฒนาองค์การคืออะไร</p>
              <p>
                การพัฒนาองค์การคือ
                <ol className="ml-4" style={{ listStyleType: "upper-roman" }}>
                  <li> การกระทำที่มีการวางแผนล่วงหน้า</li>
                  <li> นำไปปฏิบัติทั่วทั้งองค์การ</li>
                  <li> บริหารโดยผู้บริหารระดับสูง</li>
                  <li>
                    เพื่อเพิ่มประสิทธิผลและความสามารถขององค์การ
                    เป็นการเปลี่ยนแปลงกระบวนการขององค์การ
                  </li>
                  <li>
                    กิจกรรมพัฒนาองค์การที่วางแผนไว้ (Planned Intervention)
                    และสอดคล้องกับองค์ความรู้ด้านพฤติกรรมศาสตร์ (Behavioral
                    Science)
                  </li>
                  <li>
                    กระบวนการเปลี่ยนแปลงวัฒนธรรมองค์การตามที่วางแผนไว้
                    ด้วยการประยุกต์ใช้เทคโนโลยี งานวิจัย และทฤษฎี Behavioral
                    Sciences
                  </li>
                  <li>
                    กิจกรรมพัฒนาองค์การที่วางแผนล่วงหน้า และอยู่บนพื้นฐานของ
                    Behavioral Sciences โดยมุ่งที่การปรับปรุงการทำงานขององค์การ
                    และการพัฒนาบุคคล
                  </li>
                  <li>
                    การเปลี่ยนแปลงวัฒนธรรม เทคโนโลยีและการจัดการทั่วทั้งองค์การ
                    หรืออย่างน้อยมีหน่วยงานเกิดการเปลี่ยนแปลง
                  </li>
                  <li>
                    ระบบการวางแผนลยุทธ์ด้าน Behavioral Science สร้างความเข้าใจ
                    ในพัฒนาและเปลี่ยนแปลงองค์การ เพื่อปรับปรุงประสิทธิผล
                    และความสามารถขององค์การทั้งในปัจจุบันและอนาคต
                  </li>
                </ol>
              </p>
              <p className="lead">OD มีรากฐานมาจากอะไร</p>
              <p>
                OD ได้รับอิทธิพลองค์ความรู้มาจากศาสตร์ที่หลากหลาย ได้แก่
                <ul className="ml-4" style={{ listStyleType: "lower-roman" }}>
                  <li> จิตวิทยาสังคม (Social Psychology)</li>
                  <li> กระบวนการกลุ่ม (Group Dynamics)</li>
                  <li>
                    จิตวิทยาอุตสาหกรรมและองค์การ (Industrial and Organization
                    Psychology)
                  </li>
                  <li>
                    ทฤษฎีการจัดการแบบมีส่วนร่วม (Participative Management
                    Theory)
                  </li>
                  <li> พฤติกรรมองค์การ (Organization Behavior)</li>
                  <li> สังคมวิทยา (Sociology)</li>
                  <li> จิตบำบัด (Psychotherapy)</li>
                </ul>
              </p>
              <p className="lead">ธรรมชาติของ OD คืออะไร</p>
              <p>
                ธรรมชาติของ OD (The Nature of OD) คือ
                <ul className="ml-4" style={{ listStyleType: "decimal" }}>
                  <li>
                    OD เกี่ยวข้องศาสตร์หลายแขนง โดยมี Behavioral Sciences
                    เป็นแกนกลางหรือแกนหลัก
                  </li>
                  <li> เป้าหมายหลักของ OD คือปรับปรุงประสิทธิผลขององค์การ</li>
                  <li>
                    ขอบเขตของการทำ OD คือทำทั่วทั้งระบบ ได้แก่ ฝ่าย แผนก กลุ่ม
                    บุคคล ชุมชน ประเทศ ภูมิภาค
                  </li>
                  <li>OD ตระหนักถึงความมุ่งมั่น สนับสนุน และการมีส่วนร่วม</li>
                  <li> OD กลยุทธ์ระยะยาวที่องค์การได้วางแผนไว้</li>
                  <li>OD ให้ความสำคัญกับระบบทั้งระบบ และองค์ประกอบของระบบ</li>
                  <li> OD ต้องอาศัยความร่วมมือจากบุคคลต่างๆ</li>
                  <li>
                    OD คือกิจกรรมบนพื้นฐานทางวิชาการ ที่ออกแบบสำหรับการพัฒนา
                  </li>
                  <ul className="ml-4" style={{ listStyleType: "square" }}>
                    <li>ค่านิยม (Values)</li>
                    <li> ทัศนคติ (Attitudes)</li>
                    <li> บรรทัดฐาน (Norms)</li>
                    <li> วิธีการบริหารจัดการ (Management Practices)</li>
                  </ul>
                  <li> ผู้มีบทบาทสำคัญในการทำ OD</li>
                  <ul className="ml-4" style={{ listStyleType: "disc" }}>
                    <li> ทีมงาน/คณะกรรมการดำเนินโครงการ OD</li>
                    <li> ผู้จัดการฝ่ายต่างๆ (Line Manager)</li>
                    <li> ผู้อำนวยการความสะดวก (Facilitator)</li>
                    <li> อาจารย์ (Teacher)</li>
                    <li> ผู้ฝึกสอน (Coach)</li>
                  </ul>
                  <li>
                    OD ให้ความสำคัญกับการติดตามผลตามที่วางแผนไว้
                    (PlannedFollow-up)
                  </li>
                  <li>
                    OD เกี่ยวข้องกับการเปลี่ยนแปลง
                    หรือปรับปรุงกระบวนการหรือโครงสร้างขององค์การ
                  </li>
                </ul>
              </p>
              <p className="lead">ลักษณะสำคัญของ OD</p>
              <p>
                ลักษณะสำคัญของการพัฒนาองค์การ มีดังนี้
                <ul className="ml-4" style={{ listStyleType: "decimal" }}>
                  <li> OD เกี่ยวข้องกับการเปลี่ยน แปลงกลยุทธ์ </li>
                  <li>
                    โครงสร้างและ/หรือกระบวนการของระบบทั้งระบบมีความหมายครอบคลุมตั้งแต่องค์การ
                    ฝ่ายหรือกลุ่มงาน
                  </li>
                  OD เป็นการประยุกต์ใช้และถ่ายทอดความรู้และวิธีปฏิบัติด้าน
                  Behavioral Science ให้กับสมาชิกขององค์การ เช่นภาวะผู้นำ
                  กระบวนการกลุ่ม การออกแบบงาน กลยุทธ์ รูปแบบองค์การ
                  ความสัมพันธ์ระหว่างประเทศ เป็นต้น
                  <li>
                    OD เกี่ยวข้องกับการจัดการการเปลี่ยนแปลงตามที่วางแผนไว้
                  </li>
                  <li>
                    {" "}
                    OD
                    เกี่ยวข้องกับการสร้างและส่งเสริมการเปลี่ยนแปลงให้ดำรงอยู่ต่อไป
                  </li>
                  <li> OD มุ่งปรับปรุงประสิทธิผลขององค์การ</li>
                </ul>
              </p>
              <p className="lead">
                {" "}
                การพัฒนา OD จะต้องอยู่บนรากฐานของความรู้และค่านิยม{" "}
              </p>
              <p>
                การพัฒนา OD จะต้องอยู่บนรากฐานของความรู้และค่านิยม มีดังนี้
                <ul className="ml-4" style={{ listStyleType: "decimal" }}>
                  <li>
                    ความเข้าใจในระบบสังคม (Understanding social systems)
                    คือต้องเข้าใจในศาสตร์ที่เกี่ยวข้องกับการพัฒนาและเปลี่ยนแปลงองค์การ
                    เช่น จิตวิทยา จิตวิทยาสังคม สังคมวิทยา รัฐศาสตร์ เศรษฐศาสตร์
                    ปรัชญา ศาสนา ฟิสิกส์และชีววิทยา เป็นต้น
                  </li>
                  <li>เข้าใจในวิธีการและสาเหตุของการเปลี่ยนแปลง </li>
                  <li>
                    เข้าใจบทบาทบุคคลที่สาม (Third Party)
                    ของที่ปรึกษาด้านการเปลี่ยนแปลง{" "}
                  </li>
                </ul>
              </p>
              <p className="lead"> ค่านิยมของ OD </p>
              <p>
                ค่านิยมของ OD (OD Values) มีดังนี้
                <ul className="ml-4" style={{ listStyleType: "decimal" }}>
                  <li>
                    การส่งเสริมศักดิ์ศรีแห่งความเป็นมนุษย์ (State of Human
                    Dignity)
                  </li>
                  <li>
                    การยึดมั่นในคุณค่าของมนุษย์ (Humanistically Oriented){" "}
                  </li>
                  <li>ความเท่าเทียม (Democracy)</li>
                  <li>ความสุจริต (Honesty)</li>
                  <li>การกระจายอำนาจ (Empowerment)</li>
                  <li>ค้นหาปัญหาและเป็นวิทยาศาสตร์ (Inquiry and Sciences)</li>
                  <li>มีจิตช่วยเหลือ (Being Helpful)</li>
                </ul>
              </p>
              <p className="lead"> สรุปค่านิยมของ OD ที่สำคัญ </p>
              <p>
                สรุปค่านิยมของ OD ที่สำคัญ ได้แก่
                <ul className="ml-4" style={{ listStyleType: "decimal" }}>
                  <li>
                    การให้ความเคารพและการมีส่วนร่วม (Respect and Inclusion)
                  </li>
                  <li>การให้ความร่วมมือ (Collaboration) </li>
                  <li>ความจริงใจ (Authenticity)</li>
                  <li>ความเข้าใจในตนเอง (Self-awareness)</li>
                  <li>การกระจายอำนาจ (Empowerment)</li>
                  <li>
                    ประชาธิปไตยและความเป็นธรรมในสังคม (Democracy and Social
                    Justice)
                  </li>
                </ul>
              </p>
              <p className="lead">
                {" "}
                ข้อแตกต่างระหว่าง OD กับ Change Management (CM)
              </p>
              <p>
                ข้อแตกต่างระหว่าง OD กับ Change Management มีดังนี้
                <ul className="ml-4" style={{ listStyleType: "decimal" }}>
                  <li>
                    OD
                    ทำให้องค์การตระหนักและสร้างการเรียนรู้ผ่านกระบวนการแก้ไขปัญหาหลัก
                    ส่วน CM
                    ประยุกต์วิธีการแก้ปัญหาอย่างมีเหตุผลในการทำให้เป้าหมายที่ต้องการบรรลุผล
                  </li>
                  <li>
                    OD มุ่งไปที่พลวัตของระบบในองค์การ
                    ซึ่งเปิดพื้นที่ให้องค์การวิจัย
                    สะท้อนและทบทวนรูปแบบของระบบที่ดำรงอยู่เวลานั้น ส่วน CM
                    มุ่งไปที่ผลลัพธ์มากกว่า{" "}
                  </li>
                  <li>
                    OD
                    ตั้งอยู่บนความร่วมมือระหว่างองค์การและที่ปรึกษาด้านพัฒนาองค์การในการกำหนดกระบวนการที่เกี่ยวข้อง
                    ส่วน CM
                    เน้นที่บทบาทของผู้เชี่ยวชาญหรือผู้ที่แก้ปัญหาได้อย่างเบ็ดเสร็จ{" "}
                  </li>
                  <li>
                    OD แก้ปัญหากระบวนการต่างๆ ที่ไม่ปรากฏชัดเจน เช่น
                    การเปลี่ยนแปลงที่เกี่ยวข้องกับอำนาจ เชื้อชาติ
                    เพศและสถานะทางสังคม และการอยู่ท่ามกลางแรงกดดันอื่นๆ ทางสังคม
                    ส่วน CM
                    จัดการกับการเปลี่ยนแปลงที่ปรากฏอย่างชัดเจนของสถานการณ์หนึ่งๆ{" "}
                  </li>
                </ul>
              </p>
              <p className="lead">
                {" "}
                สรุปความแตกต่างระหว่าง OD และ Change Management (CM){" "}
              </p>
              <p>
                สรุปความแตกต่างระหว่าง OD และ Change Management (CM) มีดังนี้
                <ul className="ml-4" style={{ listStyleType: "decimal" }}>
                  <li>
                    OD
                    <ul className="ml-4" style={{ listStyleType: "square" }}>
                      <li>การเปลี่ยนแปลงเพื่อเพิ่มความสามารถของบุคลากร </li>
                      <li>
                        การเปลี่ยนแปลงตามที่วางแผนไว้ล่วงหน้า และยึดหลักการของ
                        OD
                      </li>
                    </ul>
                  </li>
                  CM
                  <ul className="ml-4" style={{ listStyleType: "square" }}>
                    <li>การเปลี่ยนแปลงเพื่อเพิ่มมูลค่าทางเศรษฐกิจ </li>
                    <li>เป็นไปเพื่อผลทางการตลาด และไม่ได้ยึดหลักการของ OD </li>
                  </ul>
                  <li>OD</li>
                  <ul className="ml-4" style={{ listStyleType: "square" }}>
                    <li>
                      ส่งเสริมศักยภาพ ความมีส่วนร่วม และการพัฒนามนุษย์พร้อมๆ
                      กับเพิ่มผลประกอบการ และการสร้างการได้เปรียบเชิงแข่งขัน
                    </li>
                    <li>
                      ถ่ายทอดความรู้
                      และทักษะเพื่อช่วยให้ระบบมีความสามารถในการจัดการการเปลี่ยนแปลงในอนาคต
                    </li>
                  </ul>
                  CM
                  <ul className="ml-4" style={{ listStyleType: "square" }}>
                    <li>มุ่งที่ต้นทุน คุณภาพและตารางการทำงาน</li>
                    <li>ไม่จำเป็นต้องมีการถ่ายทอดทักษะ</li>
                  </ul>
                </ul>
              </p>
              <p className="lead"> พัฒนาการของ OD (The Revolution of OD) </p>
              <p>
                พัฒนาการของ OD (The Revolution of OD) มีดังนี้
                <ul className="ml-4" style={{ listStyleType: "decimal" }}>
                  <li>
                    มาจากรากฐานการฝึกอบรมเชิงปฏิบัติการ (Laboratory Training
                    Background หรือ T-group)
                  </li>
                  <li>มาจากรากฐาน Action Research และ Survey Feedback </li>
                  มาจากรากฐาน Normative Background
                  <li>
                    แนวคิดที่เชื่อว่ามีวิธีการที่ดีที่สุดเพียงวิธีการเดียว (One
                    Best Way) ในการบริหารองค์การ
                  </li>
                  <ul className="ml-4" style={{ listStyleType: "square" }}>
                    <li>รูปแบบการจัดการแบบมีส่วนร่วม</li>
                    <li>หลักการของตาข่าย (เครือข่าย)</li>
                  </ul>
                  <li>
                    มาจากรากฐานผลิตภาพและคุณภาพชีวิตในการทำงาน (Productivity
                    และQuality-of-Work-Life)
                  </li>
                  <ul className="ml-4" style={{ listStyleType: "square" }}>
                    <li>
                      มุ่งพัฒนารูปแบบการทำงานที่ให้ความสำคัญกับความสอดคล้องระหว่างเทคโนโลยีกับมนุษย์
                    </li>
                    <li>เน้นการมีส่วนร่วมของพนักงาน </li>
                  </ul>
                  <li>การจัดการทั่วทั้งองค์การ (Total Quality Management)</li>
                  <ul className="ml-4" style={{ listStyleType: "square" }}>
                    <li>Total = ทุกคน ทุกระดับ กระทรวง กรม กอง หน่วย </li>
                    <li>
                      Quality = คุณภาพการให้บริการ ความพึงพอใจของผู้รับบริการ
                    </li>
                    <li>Management = การบริหารองค์การ</li>
                  </ul>
                </ul>
              </p>
              <p className="lead">
                {" "}
                รูปแบบในการพัฒนาองค์การ: OD (Models of Planned Change){" "}
              </p>
              <p>
                รูปแบบในการพัฒนาองค์การ มีดังนี้
                <ul className="ml-4" style={{ listStyleType: "decimal" }}>
                  <li> รูปแบบการเปลี่ยนแปลงของ Lewin (Lewin's Change Model)</li>
                  <ul className="ml-4" style={{ listStyleType: "square" }}>
                    <li>Unfreezing: การเตรียมพร้อมกับการเปลี่ยนแปลง</li>
                    <li>Moving/ Change: การดำเนินการเปลี่ยนแปลง</li>
                    <li>Refreezing: การรักษาผลของการเปลี่ยนแปลง</li>
                  </ul>
                  <li>รูปแบบ Action Research (Action Research Model)</li>
                  <ul className="ml-4" style={{ listStyleType: "square" }}>
                    <li>
                      Action Research (การวิจัยเชิงปฏิบัติการ)
                      เป็นกระบวนการที่ดำเนินต่อเนื่องจากขั้นตอนแรกไปจนถึงขั้นตอนสุดท้าย
                      แล้วย้อนกลับไปเริ่มต้นที่ขั้นตอนแรกใหม่และดำเนินไปตามวงจรเดิมตลอดเวลา
                    </li>
                    <li>ขั้นตอน Action Research มี 8 ขั้นตอน ดังนี้</li>
                    <ul className="ml-4" style={{ listStyleType: "square" }}>
                      <li>
                        การรับรู้ปัญหา (Problem Identification)
                        เป็นขั้นตอนที่ผู้บริหาร
                        หรือผู้มีอำนาจและบทบาทสำคัญในองค์การตระหนักว่าองค์การมีปัญหา
                        และต้องการให้ที่ปรึกษาด้านการพัฒนาองค์การช่วยแก้ปัญหาดังกล่าว{" "}
                      </li>
                      <li>
                        {" "}
                        การปรึกษากับผู้เชี่ยวชาญด้านการพัฒนาองค์การ
                        (Consultation with a Behavioral Sciences Export){" "}
                      </li>
                      <li>
                        การรวบรวมข้อมูลและการวิเคราะห์เบื้องต้น (Data Gathering
                        and Preliminary Diagnosis)
                      </li>
                      <li>
                        การป้อนกลับข้อมูลและผลการวิเคราะห์ให้ตัวแทนองค์การ
                        (Feedback to a Key Client or Group)
                      </li>
                      <li>
                        การวิเคราะห์ปัญหาร่วมกัน (Joint Diagnosis of the
                        Problem)
                      </li>
                      <li>การวางแผนปฏิบัติร่วมกัน (Joint Action Planning)</li>
                      <li>การดำเนินการตามแผนปฏิบัติการ (Action)</li>
                      <li>
                        การรวบรวมข้อมูลหลังการดำเนินการ (Data Gathering after
                        Action)
                      </li>
                    </ul>
                  </ul>
                  <li>
                    รูปแบบทั่วไปของการวางแผนการเปลี่ยนแปลง (General Model of
                    Planned Change){" "}
                  </li>
                  <ul className="ml-4" style={{ listStyleType: "decimal" }}>
                    <li>
                      การกำหนดประเด็น (En-tering)
                      การรวบรวมข้อมูลขององค์การได้จากการสังเกตพฤติกรรมการทำงาน
                      การสัมภาษณ์ การสำรวจความคิดเห็นด้วยแบบสอบถาม การทำข้อตกลง
                      (Con-tracting)
                      ความคาดหวังของทั้งสองฝ่ายองค์การระบุผลลัพธ์ที่ได้และที่ปรึกษาฯ
                      ระบุค่าตอบแทน และการอ้างอิงผลงาน
                    </li>
                    <li>
                      การวินิจฉัยระบบ (Diagnosing) ด้วย McKinsey's 7S Model
                    </li>
                    <li>
                      การวางแผนและปฏิบัติตามแผน (Planning and Implementing
                      Change)
                    </li>
                    <li>
                      การประเมินและรักษาผลของการเปลี่ยนแปลง (Evaluating
                      Institutionalizing Change)
                    </li>
                  </ul>
                  <li>
                    แนวคิดเชิงบวกเกี่ยวกับองค์การ และรูปแบบการเปลี่ยนแปลงเชิงบวก
                    (Positive Organizational Scholarship (POS) and Appreciative
                    Inquiry (AI))
                  </li>
                  <ul className="ml-4" style={{ listStyleType: "square" }}>
                    <li>
                      การเบี่ยงเบนเชิงบวก (Positive Deviance)
                      ผลลัพธ์เชิงบวกที่ดีเลิศและกระบวนการที่ทำให้ผลลัพธ์ดังกล่าวเกิดขึ้น
                    </li>
                    <li>
                      การมุ่งปัจจัยด้านบวก (An Affirmative orientation)
                      การให้ความสำคัญกับจุดแข็งแทนที่จะเป็นจุดอ่อน
                      หรือความสัมพันธ์ที่เป็นประโยชน์แทนที่เป็นความสัมพันธ์ที่ก่อให้เกิดปัญหา
                    </li>
                    <li>
                      ความประพฤติที่ซื่อสัตย์และถูกทำนองคลองธรรม (Virtuousness)
                      และการยกระดับกระบวนการต่างๆ (Elevating Process) เช่น
                      การทำความดีและทำอย่างมีประสิทธิภาพ{" "}
                    </li>
                  </ul>

                  <li>
                    หลักการพื้นฐานของ POS
                    (แนวคิดเชิงบวกในการพัฒนาและเปลี่ยนแปลงองค์การ Positive
                    Organizational Scholarship)
                  </li>
                  <ul className="ml-4" style={{ listStyleType: "decimal" }}>
                    <li>แนวคิดเชิงบวกเกี่ยวกับองค์การ ได้แก่</li>
                    <ul className="ml-4" style={{ listStyleType: "square" }}>
                      <li>
                        Negative Deviance
                        การเบี่ยงเบนเชิงลบก่อให้เกิดจุดอ่อนในองค์การ
                      </li>
                      <li>Ordinary ความเป็นปกติภายในองค์กร</li>
                      <li>
                        Positive Deviance
                        การเบี่ยงเบนเชิงบวกก่อให้เกิดจุดแข็งในองค์การ
                      </li>
                    </ul>
                  </ul>
                </ul>
              </p>
              <p className="lead">
                {" "}
                การประยุกต์ใช้รูปแบบการเปลี่ยนแปลงเชิงบวกกับการเปลี่ยนแปลงตามที่วางไว้
                (The Application of Positive Model)
              </p>
              <p>รูปแบบการเปลี่ยนแปลงเชิงบวก Appreciate Inquiry (AI) คือ </p>
              <ul className="ml-4" style={{ listStyleType: "decimal" }}>
                <li>
                  รูปแบบการเปลี่ยนแปลงเชิงบวก (Appreciate Inquiry: AI) คือ
                  การเปลี่ยนจุดแข็งให้เป็นจุดแกร่ง
                </li>
                <li>
                  รูปแบบการเปลี่ยนแปลงเชิงบวก Appreciate Inquiry (AI) คือ
                  การประยุกต์ใช้การเปลี่ยนแปลงตามที่วางแผนไว้
                </li>
              </ul>
              <p className="lead">
                {" "}
                ที่ปรึกษาด้านการพัฒนาองค์การ (OD Practitioner)
              </p>
              <p>ที่ปรึกษาด้านการพัฒนาองค์การ มีชื่อเรียกแตกต่างกัน ดังนี้ </p>
              <ul className="ml-4" style={{ listStyleType: "decimal" }}>
                <li>OD Practitioner </li>
                <li>OD Consultants </li>
                <li>OD Expert</li>
                <li>Change Agent</li>
                <li>Change Leader</li>
              </ul>
              <p className="lead"> บุคคลที่มีบทบาทต่อการเปลี่ยนแปลงองค์การ</p>
              <p>บุคคลที่มีบทบาทต่อการเปลี่ยนแปลงองค์การ คือ </p>
              <ul className="ml-4" style={{ listStyleType: "decimal" }}>
                <li>
                  ลูกค้า (Client) หมายถึง ผู้ที่เป็นสมาชิกขององค์การ ได้แก่
                  ลูกค้า (Client) หมายถึง ผู้ที่เป็นสมาชิกขององค์การ ได้แก่
                  ประธาน รองประธานอาวุโส ผู้จัดการ พนักงาน ฯลฯ
                </li>
                <li>
                  ที่ปรึกษาด้านการพัฒนาองค์การ (Change Consultant) คือ
                  ผู้ที่มีบทบาทคล้ายกับสถาปนิก (Architect)
                  ของกระบวนการเปลี่ยนแปลง
                </li>
                <li>
                  ขวัญใจพนักงาน (Champions) คือ ผู้ที่เคยประสบความสำเร็จ มีบทบาท{" "}
                </li>
                <li>
                  พนักงานและผู้จัดการ (Staff and Managers)
                  ใช้ความเชี่ยวชาญของตนในการช่วยรักษาผลของการเปลี่ยนแปลง
                </li>
              </ul>
              <p className="lead">
                {" "}
                คุณสมบัติของที่ปรึกษาด้านการพัฒนาองค์การ (Competencies of
                Practitioners)
              </p>
              <p>คุณสมบัติของที่ปรึกษาด้านการพัฒนาองค์การ ดังนี้ </p>
              <ul className="ml-4" style={{ listStyleType: "decimal" }}>
                <li>
                  ทักษะด้านการทำความเข้าใจตนเอง หรือ Competency
                  ด้านการบริหารอารมณ์ความรู้สึกของตนเอง{" "}
                </li>
                <li>
                  ทักษะการสร้างความสัมพันธ์กับผู้อื่น (Interpersonal Skills){" "}
                </li>
                <li>ทักษะการให้คำปรึกษาทั่วไป (General Consultation Skills)</li>
                <li>
                  ทฤษฎีเกี่ยวกับการพัฒนาองค์การ (Organization Development
                  Theory)
                </li>
                <li>เป็นนักวิเคราะห์ (Diagnostician)</li>
                <li>เป็นนักวิจัยสังคมวิทยา (Social Scientist Researcher)</li>
                <li>เป็นนักเปลี่ยนแปลง (Interventionist)</li>
                <li>เป็นผู้ให้ความรู้หรือนักฝึกอบรม (Educator or Trainer) </li>
                <li>เป็นผู้อำนวยความสะดวก (Facilitator)</li>
                <li>เป็นผู้ฝึกสอน (Coach)</li>
              </ul>
              <p className="lead">
                {" "}
                ทักษะและความสามารถของที่ปรึกษาด้านการพัฒนาองค์การ
              </p>
              <p>
                ทักษะและความสามารถของที่ปรึกษาด้านการพัฒนาองค์การ
                ประกอบด้วยดังนี้{" "}
              </p>
              <ul className="ml-4" style={{ listStyleType: "decimal" }}>
                <li>ความรู้ (Knowledge) </li>
                <li>
                  การยึดมั่นในมาตรฐานสูงสุดของจริยธรรมและอาชีพ (Commitment){" "}
                </li>
                <li>ความสามารถในการสร้างเครือข่าย (Network Ability)</li>
                <li>ทักษะในการแสวงหาข้อมูล (Elicitation Skills)</li>
                <li>
                  ทักษะการประเมินและการบูรณาการ (Evaluation and Integration
                  Skills)
                </li>
                <li>
                  ทักษะการวินิจฉัยและการนำเสนอแนวทาง (Diagnostic and Prognosis
                  Skills)
                </li>
              </ul>
              <p className="lead">
                {" "}
                จริยธรรมของที่ปรึกษาด้านการพัฒนาองค์การ(Professional Ethics)
              </p>
              <p>
                จริยธรรมของที่ปรึกษาด้านการพัฒนาองค์การ มีดังนี้ (Professional
                Ethics){" "}
              </p>
              <ul className="ml-4" style={{ listStyleType: "decimal" }}>
                <li>การสำแดงข้อมูลเท็จ (Misrepresentation) </li>
                <li>การนำข้อมูลไปใช้ในทางที่ผิด (Misuse of Data) </li>
                <li>การบังคับ (Coecion)</li>
                <li>
                  ความเห็นต่างในค่านิยมและเป้าหมาย (Value and Goal Conflict)
                </li>
                <li>ความไม่พร้อมด้านเทคนิค (Technical Ineptness)</li>
              </ul>

              <blockquote className="blockquote">
                <p className="mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante.
                </p>
                <footer className="blockquote-footer">
                  Someone famous in
                  <cite title="Source Title">Source Title</cite>
                </footer>
              </blockquote>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error,
                nostrum, aliquid, animi, ut quas placeat totam sunt tempora
                commodi nihil ullam alias modi dicta saepe minima ab quo
                voluptatem obcaecati?
              </p>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum,
                dolor quis. Sunt, ut, explicabo, aliquam tenetur ratione tempore
                quidem voluptates cupiditate voluptas illo saepe quaerat numquam
                recusandae? Qui, necessitatibus, est!
              </p>
              <hr />
              <div className="blog-right-side">
                {/* Comments Form */}
                <div className="card my-4">
                  <h5 className="card-header">Leave a Comment:</h5>
                  <div className="card-body">
                    <form>
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          rows={3}
                          defaultValue={""}
                        />
                      </div>
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              {/* Single Comment */}
              <div className="media mb-4">
                <img
                  className="d-flex mr-3 rounded-circle"
                  src="images/testi_01.png"
                  alt=""
                />
                <div className="media-body">
                  <h5 className="mt-0">Commenter Name</h5>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                  scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                  vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
                  nisi vulputate fringilla. Donec lacinia congue felis in
                  faucibus.
                </div>
              </div>
              {/* Comment with nested comments */}
              <div className="media mb-4">
                <img
                  className="d-flex mr-3 rounded-circle"
                  src="images/testi_02.png"
                  alt=""
                />
                <div className="media-body">
                  <h5 className="mt-0">Commenter Name</h5>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                  scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                  vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
                  nisi vulputate fringilla. Donec lacinia congue felis in
                  faucibus.
                  <div className="media mt-4">
                    <img
                      className="d-flex mr-3 rounded-circle"
                      src="images/testi_01.png"
                      alt=""
                    />
                    <div className="media-body">
                      <h5 className="mt-0">Commenter Name</h5>
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel
                      metus scelerisque ante sollicitudin. Cras purus odio,
                      vestibulum in vulputate at, tempus viverra turpis. Fusce
                      condimentum nunc ac nisi vulputate fringilla. Donec
                      lacinia congue felis in faucibus.
                    </div>
                  </div>
                  <div className="media mt-4">
                    <img
                      className="d-flex mr-3 rounded-circle"
                      src="images/testi_03.png"
                      alt=""
                    />
                    <div className="media-body">
                      <h5 className="mt-0">Commenter Name</h5>
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel
                      metus scelerisque ante sollicitudin. Cras purus odio,
                      vestibulum in vulputate at, tempus viverra turpis. Fusce
                      condimentum nunc ac nisi vulputate fringilla. Donec
                      lacinia congue felis in faucibus.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Sidebar Widgets Column */}
            <div className="col-md-4 blog-right-side">
              {/* Search Widget */}
              <div className="card mb-4">
                <h5 className="card-header">Search</h5>
                <div className="card-body">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search for..."
                    />
                    <span className="input-group-btn">
                      <button className="btn btn-secondary" type="button">
                        Go!
                      </button>
                    </span>
                  </div>
                </div>
              </div>
              {/* Categories Widget */}
              <div className="card my-4">
                <h5 className="card-header">Categories</h5>
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-6">
                      <ul className="list-unstyled mb-0">
                        <li>
                          <a href="#">Web Design</a>
                        </li>
                        <li>
                          <a href="#">HTML</a>
                        </li>
                        <li>
                          <a href="#">Freebies</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-6">
                      <ul className="list-unstyled mb-0">
                        <li>
                          <a href="#">JavaScript</a>
                        </li>
                        <li>
                          <a href="#">CSS</a>
                        </li>
                        <li>
                          <a href="#">Tutorials</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* Side Widget */}
              <div className="card my-4">
                <h5 className="card-header">Side Widget</h5>
                <div className="card-body">
                  You can put anything you want inside of these side widgets.
                  They are easy to use, and feature the new Bootstrap 4 card
                  containers!
                </div>
              </div>
            </div>
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </>
    </div>
  );
}
