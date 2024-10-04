import Photogallery from "../../photogallery/Photogallery";


export const BookList2024_25 = () => { return <div>BookList 2024-25</div> };

export const HouseSystem = () =>{ 
    const title1 = "House System"
    const title2 = "Investiture 2022"
    const para1="Qualities like leadership develops when working as a team with each other and qualities like desire of growth develops from sense of competition. Qualities like leadership develops when working as a team with each other and qualities like desire of growth develops from sense of competition. With the House System, the students are divided within four houses namely, Achievers(red), Conqueror (Green), Believer(blue), Challenger(Yellow), and Each house is required to have students ranging from class 6th to class 12th.Each house has been assigned a house captain. Along with house captains, Sport's Head, Discipline In-charge, Assembly In-charge and Environment In-charge has also been appointed"
    const para2 = " Inter-house competition under Academics, Sports, and overall Class Credit will be held throughout the active session. Students scoring good under any or every head, will be awarded a Certificate of excellence. "

    const r1 =  require.context(`../../../images/houseSystem/houseSystem1`, false, /\.(png|jpe?g|svg)$/)
    const r2 =  require.context(`../../../images/houseSystem/houseSystem2`, false, /\.(png|jpe?g|svg)$/)
    { return (
        <>
            <PageComposition para={para1} title={title1}>
                <Photogallery photos={r1} />
            </PageComposition>
            <PageComposition para={para2} title={title2}>
                <Photogallery photos={r2} />
            </PageComposition>
        </>
    ) };}


export const Infrastructure = () => {
    const r1 = require.context('../../../images/Infrastructure/1',false,/\.(png|jpe?g|svg)$/);
    const r2 = require.context('../../../images/Infrastructure/2',false,/\.(png|jpe?g|svg)$/);
    const r3 = require.context('../../../images/Infrastructure/3',false,/\.(png|jpe?g|svg)$/);
    const r4 = require.context('../../../images/Infrastructure/4',false,/\.(png|jpe?g|svg)$/);
    const r5 = require.context('../../../images/Infrastructure/5',false,/\.(png|jpe?g|svg)$/);
    const r6 = require.context('../../../images/Infrastructure/6',false,/\.(png|jpe?g|svg)$/);
    
    const paths = [
        {heading:"Infrastructure",para:"",folder:r1},
        {heading:"Ventilated Classromms",para:"New Angels is one of the top CBSE Schools in Pratapgarh, the class Rooms are well designed, Spacious & Safe with two exit doors. As New Angels is an eco-friendly campus, natural lighting & ventilation has been taken into account.",folder:r2},
        {heading:"Robotics Lab ",para:"Robotics lab is the newest edition to our school where kids can learn the fundamentals of Mechanics by assembling parts to make different functioning models like cars and cranes.These classes ranges from assembling parts to coding different microcontrollers.",folder:r3},
        {heading:"Science Labs",para:"School has well equipped Physics, Chemistry & Biology Laboratories. We make sure in our curriculum that there exists a balance between theoretical & practical approach of teaching. These laboratories help our students in developing a thoughtful approach to understand scientific concepts.",folder:r4},
        {heading:"IT Lab",para:"The school has an advanced & Updated Computer lab. Computer science as a subject is compulsorily taken up for all student from nursery to 10th & beyond. Students learn different Tools & Technique. These labs help in developing relevant computational skill in our Student",folder:r5},
        {heading:"Collosal Playground",para:" New Angels' Campus has one of the largest play ground in the city for outdoor games with facilities as Athletic track, Kho-Kho, Volleyball & Kabaddi Ground, Badminton Court & Cricket. We also provide Indoor games in the campus.",folder:r6},
    ] 
   const comp = paths.map(item=>{
    return(
        <PageComposition title={item.heading} para={item.para}>
            <Photogallery photos={item.folder}/>
        </PageComposition>
    )
   })
    return(
        <>
            {comp}
        </>
    )
}
export const MailingList = () => { return <div>Mailing List</div> };
export const PublicDisclosure = () => { return <div>Puublic Disclosure</div> };
export const TestSchedule = () => { return <div>Test Schedule</div> };
export const Uniform = () => { return <div>Mailing List</div> };

function PageComposition({children,para,title}){
    return(
        <div className="row">
            <div className="col-xs-12">
                <div className="card pb-2">
                    <div className="card-title">
                        {title}
                    </div>
                    {children}
                    <p>
                        {para}
                    </p>
                </div>
            </div>
        </div>
    )
}