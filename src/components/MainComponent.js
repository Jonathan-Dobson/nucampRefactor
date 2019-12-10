import React from 'react';
import Directory from './DirectoryComponent';
import CampsiteInfo from './CampsiteInfoComponent';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import {COMMENTS} from '../shared/comments';
import {PARTNERS} from '../shared/partners';
import {PROMOTIONS} from '../shared/promotions';
import {Switch, Route, Redirect} from 'react-router-dom';
import {CAMPSITES} from '../shared/campsites';

const HomePageWithFeatured = () => {
    const getFeatured = item => item.featured
    return (<Home
        campsite={CAMPSITES.filter(getFeatured)[0]}
        promotion={PROMOTIONS.filter(getFeatured)[0]}
        partner={PARTNERS.filter(getFeatured)[0]}/>
    );
}

const Campsite = ({match}) => {
    return (<CampsiteInfo
        campsite={CAMPSITES.filter(campsite => campsite.id === + match.params.campsiteId)[0]}
        comments={COMMENTS.filter(comment => comment.campsiteId === + match.params.campsiteId)}/>
    );
};

const AboutWithPartners = props => <About partners={PARTNERS} {...props}/>
const DirectoryWithCampsites = props => <Directory campsites={CAMPSITES} {...props}/>

const Main = () => {
    return (
        <div>
            <Header/>
            <Switch>
                <Route path='/home' component={HomePageWithFeatured}/>
                <Route path='/directory/:campsiteId' component={Campsite}/>
                <Route path='/aboutus' component={AboutWithPartners}/>
                <Route path='/directory' component={DirectoryWithCampsites}/>
                <Route path='/contactus' component={Contact}/>
                <Redirect to='/home'/>
            </Switch>
            <Footer/>
        </div>
    );
}

export default Main;
