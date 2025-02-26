import Link from "next/link";
import React from "react";

export default function Portfolio1() {
  return (
    <div>
      <>
        {/* full Title */}
        <div className="full-title">
          <div className="container">
            {/* Page Heading/Breadcrumbs */}
            <h1 className="mt-4 mb-3">
              การดำเนินการเปลี่ยนแปลงองค์การภาครัฐ<small></small>
            </h1>
          </div>
        </div>
        {/* Page Content */}
        <div className="container">
          <div className="breadcrumb-main">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">หน้าหลัก</a>
              </li>
              <li className="breadcrumb-item active">Portfolio 1</li>
            </ol>
          </div>
          <div className="project-inner">
            {/* Project One */}
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-01.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>การดำเนินการเปลี่ยนแปลงองค์การภาครัฐในยุคดิจิทัล</h3>
                <p>
                  ก้าวที่ท้าทายของการเปลี่ยนผ่านสู่ รัฐบาลดิจิทัล
                  กับการใช้คลาวด์เชื่อมโยงข้อมูลภาครัฐแบบไร้รอยต่อ
                </p>
                <p>
                  ต้องยอมรับว่าความท้าทายของภาครัฐในยุคนี้ คือ
                  จะทำอย่างไรให้ประชาชนติดต่อและรับบริการจากภาครัฐได้โดยสะดวกในโลกยุคดิจิทัล
                  คำตอบก็คือ การปรับเปลี่ยนไปสู่ภาครัฐที่ทันสมัย
                  ใช้เทคโนโลยีดิจิทัลในการบริหารงานและให้บริการแก่ประชาชน
                  ซึ่งก็คือการก้าวไปสู่การเป็น รัฐบาลดิจิทัล (Digital
                  Government) นั่นเอง
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/change processing-1-66.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          <div className="project-inner">
            {/* Project Two */}
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-02.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>การดำเนินการเปลี่ยนแปลงให้เกิดประสิทธิผล</h3>
                <p>
                  การดำเนินการเปลี่ยนแปลงให้เกิดประสิทธิผลต้องประกอบด้วยกิจกรรมหลัก
                </p>
                <p>
                  การสร้างความพร้อมในการเปลี่ยนแปลงของสมาชิกในองค์การ
                  การสร้างวิสัยทัศน์
                  การแสวงหาแรงสนับสนุนในการเปลี่ยนแปลงจากกลุ่มผลประโยชน์
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/change processing-67-71.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          <div className="project-inner">
            {/* Project Three */}
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-03.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>การดำเนินการเปลี่ยนแปลงเพื่อการเปลี่ยนผ่าน</h3>
                <p>
                  เพื่อเปลี่ยนผ่านไปสู่ความเป็นองค์กรดิจิทัล
                  องค์กรเสมือนจริงและองค์กรอัจฉริยะ
                </p>
                <p>
                  มีความสำคัญต่อธุรกิจและองค์กรทั้งหมด
                  เนื่องจากช่วยให้สามารถปรับตัวเข้ากับสถานการณ์ที่เปลี่ยนแปลง
                  ปรับปรุงประสิทธิภาพและรักษาความสามารถในการแข่งขัน
                  ด้วยการใช้กระบวนการจัดการการเปลี่ยนแปลงที่มีประสิทธิภาพ
                  ธุรกิจสามารถลดการหยุดชะงัก ลดการต่อต้านการเปลี่ยนแปลง
                  และเพิ่มโอกาสของผลลัพธ์ที่ประสบความสำเร็จ
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/change processing-72-75.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียด
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project Four */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>ปัจจัยที่ส่งเสริมความสำเร็จของการดำเนินการเปลี่ยนแปลง </h3>
                <p>
                  การเปลี่ยนระบบจะเน้นระเบียบและขั้นตอนไปสู่การบริหารแบบใหม่
                  ซึ่งเน้นผลสำเร็จและความรับผิดชอบ
                  รวมทั้งใช้เทคนิคและวิธีการของเอกชนมาปรับปรุงการทำงาน
                </p>
                <p>
                  การปรับเปลี่ยนการบริหารจัดการภาครัฐ
                  โดยการนำเอาแนวทางหรือวิธีการบริหารงานของภาคเอกชนมาปรับใช้กับการบริหารงานภาครัฐ
                  เช่น การบริหารงานแบบมุ่งเน้นผลสัมฤทธิ์ การบริหารงานแบบมืออาชีพ
                  การคำนึงถึงหลักความคุ้มค่า
                  การเปิดโอกาสให้เอกชนเข้ามาแข่งขันการให้บริการสาธารณะ
                  คุณธรรมและจริยธรรม
                  ตลอดทั้งการมุ่งเน้นการให้บริการแก่ประชาชนโดยคำนึงถึงคุณภาพเป็นสำคัญ
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/change processing-76-78.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
            {/* /.row */}
          </div>
          <hr />
          {/* Project Five */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>การสร้างความพร้อมในการเปลี่ยนแปลง </h3>
                <p>
                  เพื่อส่งเสริมและพัฒนาทักษะเทคโนโลยีดิจิทัลของบุคลากรภาครัฐและเพื่อวิเคราะห์กระบวนการการพัฒนาทักษะเทคโนโลยีดิจิทัลของบุคลากรภาครัฐ
                  ด้วยวิธีวิจัยเชิงคุณภาพ การรวบรวมข้อมูลใช้วิธีศึกษาเอกสาร
                  สัมภาษณ์เชิงลึกและสังเกตการณ์
                </p>
                <p>
                  เพื่อวิเคราะห์กระบวนการการพัฒนาทักษะเทคโนโลยีดิจิทัลของบุคลากรภาครัฐด้วยวิธีวิจัยเชิงคุณภาพ
                  การรวบรวมข้อมูลใช้วิธีศึกษาเอกสาร สัมภาษณ์เชิงลึก
                  และสังเกตการณ์ โดยเลือกกลุ่มผู้ให้ข้อมูลโดยยึดตามวัตถุประสงค์
                  ได้แก่ กลุ่มแรก
                  ผู้กำหนดนโยบายและทิศทางของหน่วยงานที่รับผิดชอบการพัฒนาบุคลากรภาครัฐที่เกี่ยวข้องกับการพัฒนาเทคโนโลยีดิจิทัลของบุคลากรภาครัฐ
                  และกลุ่มสอง
                  ผู้รับผิดชอบนำนโยบายการพัฒนาทักษะเทคโนโลยีดิจิทัลของบุคลากรภาครัฐจากฝ่ายบริหารไปปฏิบัติและควบคุมการทำงานของหน่วยงานให้เป็นไปตามนโยบาย
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/change processing-79-82.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
            {/* /.row */}
          </div>
          <hr />
          {/* Project Six */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>ตัวอย่างแบบสำรวจความพร้อมในการเปลี่ยนแปลง </h3>
                <p>
                  ความพร้อมในการเปลี่ยนแปลงจะเป็นตัววัดความพึงพอใจ คนในองค์การ
                  รวมถึงประชาชน
                </p>
                <p>
                  ความพร้อมในการเปลี่ยนแปลงจะเป็นตัววัดความพึงพอใจ
                  เป็นแบบสอบถามที่ทางภาครัฐออกแบบและสำรวจความพึงพอใจเพื่อนำมาปรับเปลี่ยนหรือปรับปรุง
                  เพื่อตรียมความพร้อมในการเปลี่ยนแปลง
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/change processing-83-85.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
            {/* /.row */}
          </div>
          <hr />
          {/* Project Seven */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>การต่อต้านการเปลี่ยนแปลง </h3>
                <p>
                  <Link
                    href={"https://www.humanica.com/th/resistance-to-change/"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    การต่อต้านการเปลี่ยนแปลง{" "}
                  </Link>
                </p>
                <p>
                  การต่อต้านการเปลี่ยนแปลง คือ
                  การที่องค์กรจำเป็นต้องปรับเปลี่ยนโครงสร้างภายใน
                  เพื่อรองรับการเติบโตหรือเพื่อความอยู่รอดขององค์กร
                  แต่มีพนักงานบางส่วนไม่ยอมรับและปฏิเสธการเปลี่ยนแปลงดังกล่าว
                  ทำให้เกิดการต่อต้านการเปลี่ยนแปลงนั่นเอง ยกตัวอย่างเช่น
                  การเปลี่ยนผู้บริหาร, การเปลี่ยนระบบการทำงาน,
                  การปรับเปลี่ยนกลยุทธ์ทางการตลาด
                  หรือการเปลี่ยนวัฒนธรรมองค์กรใหม่ เป็นต้น
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/change processing-86-89.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
            {/* /.row */}
          </div>
          <hr />
          {/* Project Eight */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>การเอาชนะการต่อต้านการเปลี่ยนแปลง </h3>
                <p>
                  <Link
                    href={
                      "https://innoinsight.co.th/change-management-strategy/"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    7 กลยุทธ์ผู้นำเพื่อจัดการการเปลี่ยนแปลง
                  </Link>
                </p>
                <p>
                  หลายๆองค์กร มีการเปลี่ยนแปลงต่างๆ อย่างมาก
                  เพื่อการรับมือกับภาวะเศรษฐกิจที่มีความผันผวน และไม่แน่นอนสูง
                  กลยุทธ์ สำหรับ change management 7 ข้อนี้
                  จะช่วยทำให้การเปลี่ยนแปลงเป็นไปตามเป้าหมาย
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/change processing-90-92.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
            {/* /.row */}
          </div>
          <hr />
          {/* Project Nine */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>การสร้างวิสัยทัศน์ในการเปลี่ยนแปลง </h3>
                <p>
                  <Link
                    href={
                      "https://www.linkedin.com/pulse/%E0%B8%A7%E0%B8%AA%E0%B8%A2%E0%B8%97%E0%B8%A8%E0%B8%99%E0%B8%84%E0%B8%AD%E0%B8%AD%E0%B8%B0%E0%B9%84%E0%B8%A3-%E0%B8%A1%E0%B8%AD%E0%B8%87%E0%B8%84%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%AD%E0%B8%9A%E0%B8%97%E0%B8%AA%E0%B8%B3%E0%B8%84%E0%B8%8D%E0%B8%AD%E0%B8%A2%E0%B8%B2%E0%B8%87%E0%B9%84%E0%B8%A3-%E0%B8%AD%E0%B8%99-%E0%B8%A3-%E0%B8%81%E0%B8%A9-%E0%B8%9E-%E0%B8%A5%E0%B8%A8%E0%B8%A3-"
                    }
                  >
                    การสร้างวิสัยทัศน์ในการเปลี่ยนแปลงคืออะไร?
                  </Link>{" "}
                </p>
                <p>
                  <ol style={{ listStyleType: "disc" }} className="ml-4">
                    {" "}
                    <li>
                      วิสัยทัศน์ หมายถึง การมองภาพในอนาคต (Future Perspective){" "}
                    </li>
                    <li>
                      เป็นสิ่งที่จะบอกถึงสิ่งที่องค์กรอยากจะเป็นในอนาคต
                      เป็นการบอกทิศทางขององค์กรในอนาคต
                    </li>
                    <li> การมองภาพอนาคตของผู้นำและของสมาชิกในองค์การ </li>
                    <li>
                      และกำหนดจุดหมายปลายทางที่ต้องการ ที่มีความชัดเจน ท้าทาย
                      มีพลัง และมีความเป็นไปได้
                    </li>
                  </ol>
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/change processing-93-98.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
            {/* /.row */}
          </div>
          <hr />
          {/* Project Ten */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>ขั้นตอนการกำหนดวิสัยทัศน์ </h3>
                <p>
                  <Link
                    href={
                      "https://www.popticles.com/branding/how-to-write-effective-vision-statement/"
                    }
                  >
                    ขั้นตอนการกำหนดวิสัยทัศน์คืออะไร ?
                  </Link>
                </p>
                <p>
                  <ol style={{ listStyleType: "disc" }} className="ml-4">
                    {" "}
                    <li>
                      Vision Statement
                      หรือคำกล่าวถึงวิสัยทัศน์ของแบรนด์หรือองค์กร
                      ซึ่งมันคือแนวทางที่แสดงออกให้เห็นถึงการที่จะไปสู่เป้าหมายของแบรนด์หรือการทำธุรกิจ
                      ผ่านคำพูดหรือข้อความและมีการสื่อสารไปยังผู้มีส่วนได้ส่วนเสียทุกๆฝ่าย
                      (Stakeholders) ไม่ว่าจะเป็นพนักงาน คู่ค้าทางธุรกิจ ลูกค้า
                      ผู้ถือหุ้น สื่อมวลชน และคนที่เกี่ยวข้อง{" "}
                    </li>
                  </ol>
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/change processing-99-102.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
            {/* /.row */}
          </div>
          <hr />
          {/* Project Eleven */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>การค้นหาผู้มีส่วนได้ส่วนเสีย </h3>
                <p>
                  <Link
                    href={"https://thailandpolicylab.com/stakeholder-analysis/"}
                  >
                    ทำความรู้จักมนุษย์ให้ดีขึ้นด้วย
                    “การวิเคราะห์ผู้มีส่วนได้ส่วนเสีย”
                  </Link>
                </p>
                <p>
                  <ol style={{ listStyleType: "disc" }} className="ml-4">
                    {" "}
                    <li>
                      ปฏิเสธไม่ได้เลยว่าผู้มีส่วนได้ส่วนเสียเป็นหนึ่งในปัจจัยที่จะมาตัดสินความสำเร็จของโครงการใดๆ
                      ก็ตาม เนื่องจากโครงการจะ “สำเร็จ”
                      ได้ก็ด้วยเครือข่ายสนับสนุน ขณะเดียวกันโครงการนั้นก็สามารถ
                      “ล้มเหลว” ได้โดยผู้คนกลุ่มเดียวกันนี้เอง
                    </li>
                  </ol>
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/change processing-103-106.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
            {/* /.row */}
          </div>
          <hr />
          {/* Project Twelve */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>การโน้มน้าวผู้มีส่วนได้ส่วนเสีย </h3>
                <p>
                  <Link
                    href={
                      "https://setsustainability.com/page/stakeholder-engagement"
                    }
                  >
                    การโน้มน้าวผู้มีส่วนได้ส่วนเสียคือะไร ?
                  </Link>
                </p>
                <p>
                  <ol style={{ listStyleType: "disc" }} className="ml-4">
                    {" "}
                    <li>
                      การบริหารจัดการธุรกิจที่มีประสิทธิภาพไม่ได้เกิดขึ้นด้วยตัวองค์กรเองเท่านั้น
                      แต่เกี่ยวข้องกับห่วงโซ่คุณค่าซึ่งประกอบด้วยผู้มีส่วนได้เสียหลากหลายกลุ่ม
                      ดังนั้น
                      องค์กรต้องพิจารณาให้ได้ว่ามีความเกี่ยวข้องกับผู้มีส่วนได้เสียกลุ่มใดบ้าง
                      แต่ละกลุ่มมีลักษณะเฉพาะอย่างไร
                      รวมถึงมีความสำคัญและสอดคล้องกับกลยุทธ์การดำเนินงานขององค์กรอย่างไร
                      ที่สำคัญองค์กรและผู้มีส่วนได้เสียมีคุณค่าร่วมกันอย่างไร
                    </li>
                  </ol>
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/change processing-107-110.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
            {/* /.row */}
          </div>
          <hr />
          {/* Project Thirteen */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>คณะทำงานที่รับผิดชอบการดำเนินการเปลี่ยนแปลง </h3>
                <p>
                  <Link
                    href={
                      "https://th.hrnote.asia/personnel-management/change-management-241120/"
                    }
                  >
                    คณะทำงานที่รับผิดชอบการดำเนินการเปลี่ยนแปลงคืออะไร?
                  </Link>
                </p>
                <p>
                  <ol style={{ listStyleType: "disc" }} className="ml-4">
                    {" "}
                    <li>
                      ผู้บริหารและผู้ร่วมงานที่มีระบบตามแผนที่ได้จัดทําไว้
                      เพื่อร่วมกันเปลี่ยนแปลง สภาพขององค์การ
                      แบบเดิมไปสู่องค์การแบบใหม่ คือองค์การแห่งการเรียนรู้
                      ได้อย่างมีประสิทธิภาพ
                    </li>
                  </ol>
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/change processing-111-114.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
            {/* /.row */}
          </div>
          <hr />
          {/* Project Fourteen */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>การประคับประคองการเปลี่ยนแปลงดิจิทัลในองค์การภาครัฐ </h3>
                <p>
                  <Link
                    href={
                      "https://www.theeleader.com/digital-transformation/digital-revolutionize/"
                    }
                  >
                    ปรากฏการณ์การประคับประคองการเปลี่ยนแปลงดิจิทัล…ผู้นำจะทำอย่างไร
                    ?
                  </Link>
                </p>
                <p>
                  <ol style={{ listStyleType: "disc" }} className="ml-4">
                    {" "}
                    <li>
                      การดำเนินเปลี่ยนแปลงทำให้เกิดค่าใช้จ่ายอย่างหลีกเลี่ยงไม่ได้
                      ผู้นำจึงต้องจัดการทรัพยากร{" "}
                    </li>
                    <li>การพัฒนาสมรรถนะและทักษะที่จำเป็นต่อการเปลี่ยนแปลง</li>
                    <li>การส่งเสริมให้พนักงานแสดงพฤติกรรมใหม่</li>
                  </ol>
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/change processing-115-119.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          <div className="pagination_bar">
            {/* Pagination */}
            <ul className="pagination justify-content-center">
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">«</span>
                  <span className="sr-only">Previous</span>
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">»</span>
                  <span className="sr-only">Next</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* /.container */}
      </>
    </div>
  );
}
