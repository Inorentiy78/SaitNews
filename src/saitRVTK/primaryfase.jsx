import React, {useState} from 'react';
import './primary.css';
import viviska from './imeg.img/viviskaRVTK.jpeg';
import img3 from './imeg.img/img3.jpeg';
import viviska2 from './imeg.img/img-viviska2.jpeg';
import vid from './imeg.img/img-vid.jpeg';
import video from  './imeg.img/glav-video2.mp4';
import mestopolozh from './imeg.img/2gisRVTK.jpeg';
import logoRVTK from './imeg.img/logoRVTK.png'


const PrimaryFase = () => {
const [isZoomed, setIsZoomed] = useState(false);

    const toggleZoom = () => {
      setIsZoomed(prevZoom => !prevZoom);
    };
  return (
    <div>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
  <div className='fon'><img width='1480' height='3000' src= 'https://catherineasquithgallery.com/uploads/posts/2023-01/1674320390_catherineasquithgallery-com-p-serii-fon-pastelnii-foto-59.jpg'></img></div>
      <div>
          <p className='em'><div>RVTK</div>
          <div>ANDAS</div>
          </p>
          </div>
          <div>
          <video  className="imgs" autoPlay loop muted>
            <source src={video} type='video/mp4'/>
          </video>
      </div>
        <div>
       
          
          <div>
          <img className='img-vivisk' src={viviska}/>
          <div className='div-vivisk2'><img className='img-vivisk2' src={viviska2}></img></div>
          <div className='div-vid'><img className='img-vid' src={vid}></img></div>
          </div>
                  <div className='t1'>
                  <div><strong>Добро пожаловать в Республиканский Высший Технический Колледж – ваш путь к инновационному образованию и успешной
                     карьере! ВЫСШАЯ  ТЕХНИЧЕСКАЯ ШКОЛА была  создана в 2008 году,  и уже 2016 году переименовано в Республиканский 
                     высший технический колледж (далее - РВТК).</strong> </div>
                  
                  <div className='mestopolozhtext'>РВТК расположен в исторической части города Уральска, по адресу <a className='a-mtstopolozh' href='https://2gis.kz/uralsk/firm/70000001024859345'>ул. Кайрата Жумагалиева 20/1.</a>
 Расположение  РВТК в самом центре города,  даёт преимущества в транспортной развязке, и представляет удобства для наших студентов.
                  </div>
                  <div className='nashKolledj'>
                  <img id="zoomableImage" className={`mestopolozhimg ${isZoomed ? 'zoomed' : ''}`} src={mestopolozh} alt="Your Alt Text" onClick={toggleZoom}/>

  <div className='nashKolledjtext'>Наш колледж является основой технического образования, где современные технологии переплетаются с прогрессивными методами обучения
  и активной студенческой жизнью. Наше учебное заведение специализируется в области программного обеспечения, а также в других технических специальностях,
  предлагая высококачественные образовательные программы и возможность поступления по гранту.Наши студенты демонстрируют свои высокие достижения как в сфере IТ, так и в других направлениях.
        </div>          
                  </div>
                    <p>
Наши студенты находят вдохновение и 
  силы в просторном спортзале, где проводят время в спортивных секциях, стремясь к новым спортивным достижениям.
Прогуливаясь по коридорам колледжа, вы обратите внимание на великолепный стенд с многочисленными медалями, грамотами и дипломами 
студентов.
Столовая нашего колледжа предлагает разнообразные блюда, учитывая разнообразные предпочтения студентов. Мы гордимся обеспечивать
 не только всестороннее образование, но и уютное пространство для общения и отдыха.
В центре профориентации студентов вы найдете необходимую поддержку для выбора своего пути в мире технологий. Расписание предметов 
и другие важные детали легко доступны, чтобы обеспечить нашим студентам комфортное и продуктивное учебное окружение.
                    </p>
                  </div>
                  <div className='t2'>
                      <p>
                      <div className='parag-t2'><strong>Почему выбирают нас?</strong></div>
<div className='parag-li'>
<li>Академическая Экспертиза: Наш факультет состоит из выдающихся профессионалов, обеспечивающих высокий уровень образования в области
 техники и технологий.</li>
<li> Инфраструктура: Современные лаборатории, технические центры и библиотеки обеспечивают студентам доступ 
 к передовым ресурсам и инструментам для успешного обучения.</li> 
 <li>Практическое Обучение: Мы ценим практический опыт. 
 Студенты имеют возможность участвовать в проектах, стажировках и соревнованиях, что расширяет их навыки и подготавливает 
 к будущим вызовам.</li>
</div>
                      </p>
                  </div>
                       <div className='t3'>
                                      <p>
                                     <div className='parag-t3'> <strong>Гранты и Финансовая Поддержка:</strong></div>
<div className='mi-gordimsya'>Мы гордимся тем, что предоставляем разнообразные гранты и финансовую поддержку для талантливых и преданных студентов. 
Наши программы стипендий призваны сделать высшее образование более доступным и стимулировать стремление к знаниям.</div>
<div className='parag-li'>
<li>Академические Гранты: Студенты с выдающимся академическим прошлым могут рассчитывать на гранты, вознаграждающие отличные результаты в учебе.</li>
<li>Технические Инновации: Мы поддерживаем студентов, проявляющих интерес и талант в области технологических инноваций, предоставляя финансовую поддержку для их проектов.</li>
</div>
                                      
                                      </p>
                    </div> 
          
             </div>
                    
      <div className="content-container">
        <p>Выберите возможность получить образование в области программного обеспечения и в других специальностях с помощью грантов, выбирая Республиканский Высший Технический Колледж для вашего будущего.</p>            Стройте будущее вместе с РВТК.
            <p>Мы ждем вас!</p>
      </div>
      <div className='fartuk'>
        <img className='logorvtk' src={logoRVTK}/>
       

</div>
<div className='soc-sety'>
Социальные сети:
<ul >
<li><a className='a-soc-sety' href='https://mail.kz/ru'> Email: </a><p> vtsh_08@mail.ru</p></li>
<li><a className='a-soc-sety' href='https://www.instagram.com/rvtk_07?igsh=dDA0dmxmczBndHhq'> Instagram </a></li>
<li><a className='a-soc-sety' href='https://www.tiktok.com/@rvtk_07?_t=8iXLhQCxpHq&_r=1'> Tik Tok </a></li>
<li><a className='a-soc-sety' href='https://rvtk.edu.kz/'> Official sait </a></li>
</ul>
</div>
<div className='nomera'>Приемная комиссия <ul>
                  <li> +7 705-212-16-07</li>
                   <li>+7-776-919-76-27</li>
                   <li>+7 (7112) 25-50-52</li>
                   <li>+7 (7112) 51-35-70</li></ul>
</div>
<div >
<ul className='xz'>
<li>О нас:</li>
<li>О колледже</li>
<li>Студенту</li>
<li>Абитуриенту</li>
<li>Контакты</li>
</ul>
<div className='ylitca'> 09000 Западно-Казахстанская область,город Уральск, улица Кайрата Жумагалиева 20/1 </div>
<div className='Rvtk-2024'>
©Rvtk 2024
</div>
      </div>
      </div>
  );
}

export default PrimaryFase;
 