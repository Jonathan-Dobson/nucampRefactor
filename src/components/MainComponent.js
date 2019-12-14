import React from 'react';
import Directory from './DirectoryComponent';
import CampsiteInfo from './CampsiteInfoComponent';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        campsites: state.campsites,
        comments: state.comments,
        partners: state.partners,
        promotions: state.promotions
    };
};

const HomePageWithFeatured = ({campsites,promotions,partners}) => {
    const getFeatured = item => item.featured
    return (<Home
        campsite={campsites.filter(getFeatured)[0]}
        promotion={promotions.filter(getFeatured)[0]}
        partner={partners.filter(getFeatured)[0]}/>
    );
}

const AboutWithPartners = props => <About partners={props.partners} {...props}/>

const DirectoryWithCampsites = props => 
    <Directory campsites={props.campsites} {...props}/>

const Main = (props) => {

    const Campsite = ({match}) => {
        return (<CampsiteInfo
            campsite={props.campsites.filter(campsite => campsite.id === + match.params.campsiteId)[0]}
            comments={props.comments.filter(comment => comment.campsiteId === + match.params.campsiteId)}/>
        );
    };

    return (
        <div>
            <Header/>
            <Switch>
                <Route path='/home'>
                    <HomePageWithFeatured {...props}/></Route>

                <Route path='/directory/:campsiteId' 
                    render={(r)=><Campsite {...r}/>}/>

                <Route path='/aboutus'>
                    <AboutWithPartners {...props} /></Route>

                <Route path='/directory'>
                    <DirectoryWithCampsites {...props}/></Route>

                <Route path='/contactus'>
                    <Contact /></Route>

                <Redirect to='/home'/>
            </Switch>
            <Footer/>
        </div>
    );
}

export default withRouter(connect(mapStateToProps)(Main));
