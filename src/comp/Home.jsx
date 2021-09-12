import  React,{Component}  from 'react';
import { Typography } from '@material-ui/core';
import { fetchData } from "../serv/api";
import {Con,Dat, Death} from './helper/Date';

class Home extends Component{
    constructor(props){
        super(props)
        this.state={
            data:[]
        }
    }

    async componentDidMount(){
        const fetchedData =await fetchData();
        this.setState({data : fetchedData})
      }

    render(){
    const style = {
        header:{
            fontFamily: 'Times New Roman',
            fontStyle : 'italic ',
            textDecoration:'underline',
            display:'inline-block',
            marginTop:'2rem',
            overflowY:'hidden'
        },
        para:{
            fontFamily: 'Times New Roman',
            display: 'inline-block',
            textAlign:'justify'
        },
        containerText:{
            display:'flex',
            color:'grey',
            flexDirection:'column',
            animatoinDelay:'2s',
            marginLeft:'4rem',marginRight:'4rem',
            overflowY: 'scroll',
            maxHeight:'85vh'
        },
        info:{
            marginLeft:'2rem',marginRight:'2rem'
        }
    }
    const {data} = this.state;
    return(
        <div style={style.containerText}>
            <Typography style={style.header} variant="h4" color="primary" gutterBottom>Covid-19 Pandemic</Typography>
            <Typography style={style.para} variant='h6' color='textSecondary' gutterBottom>The COVID-19 pandemic, also known as the coronavirus pandemic, is an ongoing global pandemic of coronavirus disease 2019 (COVID-19) caused by severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2). The virus was first identified in December 2019 in Wuhan, China. The World Health Organization declared a Public Health Emergency of International Concern regarding COVID-19 on 30 January 2020, and later declared a pandemic on 11 March 2020. As of <Dat data={data}/>, more than <Con data={data}/> cases have been confirmed, with more than <Death data={data}/> deaths attributed to COVID-19, making it one of the deadliest pandemics in history.</Typography>
            <Typography style={style.header} variant='h4' color='primary' gutterBottom>Cause of CoronaVirus</Typography>
            <Typography style={style.para} variant='h6' color='textSecondary' gutterBottom>Infection with the new coronavirus (severe acute respiratory syndrome coronavirus 2, or SARS-CoV-2) causes coronavirus disease 2019 (COVID-19).The virus that causes COVID-19 spreads easily among people, and more continues to be discovered over time about how it spreads. Data has shown that it spreads mainly from person to person among those in close contact (within about 6 feet, or 2 meters). The virus spreads by respiratory droplets released when someone with the virus coughs, sneezes, breathes, sings or talks. These droplets can be inhaled or land in the mouth, nose or eyes of a person nearby.In some situations, the COVID-19 virus can spread by a person being exposed to small droplets or aerosols that stay in the air for several minutes or hours — called airborne transmission. It's not yet known how common it is for the virus to spread this way.It can also spread if a person touches a surface or object with the virus on it and then touches his or her mouth, nose or eyes, but the risk is low.Some reinfections of the virus that causes COVID-19 have happened, but these have been uncommon</Typography>
            <Typography style={style.header} variant='h4' color='primary' gutterBottom>Complications</Typography>
            <Typography style={style.para} variant='h6' color='textSecondary' gutterBottom>Although most people with COVID-19 have mild to moderate symptoms, the disease can cause severe medical complications and lead to death in some people. Older adults or people with existing medical conditions are at greater risk of becoming seriously ill with COVID-19.<br/>
                Complications can include:<br/>
                <ul style={style.info}><li>Pneumonia and trouble breathing</li>
                <li>Organ failure in several organs</li>
                <li>Heart problems</li>
                <li>A severe lung condition that causes a low amount of oxygen to go through your bloodstream to your organs (acute respiratory distress syndrome)</li>
                <li>Blood clots</li>
                <li> kidney injury</li>
                <li>Additional viral and bacterial infections</li></ul></Typography>
                <Typography style={style.header} variant='h4' color='primary' gutterBottom>Prevention</Typography>
                <Typography style={style.para} variant='h6' color='textSecondary' gutterBottom>The U.S. Food and Drug Administration (FDA) has given emergency use authorization to some COVID-19 vaccines in the U.S. A vaccine might prevent you from getting COVID-19 or prevent you from becoming seriously ill from COVID-19 if you get the COVID-19 virus.You can take additional steps to reduce your risk of infection. WHO and CDC recommend following these precautions for avoiding exposure to the virus that causes COVID-19:<br/>
                    <ul style={style.info}><li>Avoid close contact (within about 6 feet, or 2 meters) with anyone who is sick or has symptoms.</li>
                    <li>Keep distance between yourself and others (within about 6 feet, or 2 meters). This is especially important if you have a higher risk of serious illness. Keep in mind some people may have COVID-19 and spread it to others, even if they don't have symptoms or don't know they have COVID-19.</li>
                    <li>Avoid crowds and indoor places that have poor ventilation.</li>

                    <li>Wash your hands often with soap and water for at least 20 seconds, or use an alcohol-based hand sanitizer that contains at least 60% alcohol.</li>
                    <li>Wear a face mask in indoor public spaces and outdoors where there is a high risk of COVID-19 transmission, such as at a crowded event. Further mask guidance differs depending on whether you are fully vaccinated or unvaccinated. Surgical masks may be used if available. N95 respirators should be reserved for health care providers.</li>
                    <li>Cover your mouth and nose with your elbow or a tissue when you cough or sneeze. Throw away the used tissue. Wash your hands right away.</li>
                    <li>Avoid touching your eyes, nose and mouth.</li>
                    <li>Avoid sharing dishes, glasses, towels, bedding and other household items if you're sick.</li>
                    <li>Clean and disinfect high-touch surfaces, such as doorknobs, light switches, electronics and counters, daily.</li>
                    <li>Stay home from work, school and public areas if you're sick, unless you're going to get medical care. Avoid public transportation, taxis and ride-sharing if you're sick.</li></ul>
                    If you have a chronic medical condition and may have a higher risk of serious illness, check with your doctor about other ways to protect yourself.</Typography>
        </div>
    )
}
}

export default Home;