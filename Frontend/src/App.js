import './App.scss';
import 'boxicons/css/boxicons.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Navigationbar from './pages/NavigationBar';
// Udantha
import Signin from './pages/Profile/Signin';
import Login from './pages/Profile/Login';
import Profile from './pages/Profile/Profilepage';
import ProfileUdantha from './pages/Profile/ProfilepageUdantha';
import Createdistrict from './pages/Createdistrict';
import ManageDistrict from './pages/ManageDistrict';
import CreateLocation from './pages/CreateLocation';
import ManageLocation from './pages/ManageLocation';
import Alldistrict from './pages/Alldistrict';
import Singledictrict from './pages/Singledictrict';
import Singlelocation from './pages/Singlelocation';
// Udantha

//Thiranya
import Home from './pages/HomePage';
import StarClass from './pages/StarClass';
import Boutique from './pages/Boutique';
import GuestHouse from './pages/GuestHouse';
import AddHotel from './pages/AddHotel';
import UpdateHotel from './pages/UpdateHotel';
import AddBoutique from './pages/AddBoutique';
import UpdateBoutique from './pages/UpdateBoutique';
import AddGuestHouse from './pages/AddGuestHouse';
import UpdateGuestHouse from './pages/UpdateGuestHouse';
import ReportPdf from './pages/ReportPdf';
import BoutiquePDF from './pages/BoutiquePDF';
import HomeCustomer from './pages/HomePageCustomer';
import StarClassCustomer from './pages/StarClassCustomer';
import BoutiqueCustomer from './pages/BoutiqueCustomer';
import GuestHouseCustomer from './pages/GuestHouseCustomer';
//Thiranya

// Chamath
import Createblog from './pages/Createblog';
import ViewAllBlog from './pages/ViewAllBlog';
import ManageBlog from './pages/ManageBlog';
import ViewSingleblog from './pages/ViewSingleblog';
import Report from './pages/Report';
import Createtravel from './pages/Createtravel';
import Viewtravel from './pages/Viewtravel';
import Travelreport from './pages/Travelreport';
import Viewsingletravel from './pages/Viewsingletravel';
import Viewalltravel from './pages/ViewAllTravel';
// Chamath

// Sithmi
import HomePage from './pages/HomePage2';
import UserHomePage from './pages/UserHomePage';
import MaleGuide from './pages/MaleGuide';
import FemaleGuide from './pages/FemaleGuide';
import CreateMaleGuide from './pages/CreateMaleGuide';
import CreateFemaleGuide from './pages/CreateFemaleGuide';
import ViewSingleMGuide from "./pages/ViewSingleMGuide";
import ViewSingleFGuide from "./pages/ViewSingleFGuide";
import MReport from "./pages/MReport";
import FReport from "./pages/FReport";
import ViewAllGuide from "./pages/ViewAllGuide";
import ViewAllFGuide from "./pages/ViewAllFGuide";
// Sithmi


function App() {
    return (
        <BrowserRouter>
            <Navigationbar />
            <Routes>

                {/* Udantha */}
                <Route path='/signin' element={<Signin />} />
                <Route path='/login' element={<Login />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/createdist' element={<Createdistrict />} />
                <Route path='/managedist' element={<ManageDistrict />} />
                <Route path='/createlocat' element={<CreateLocation />} />
                <Route path='/manageloc' element={<ManageLocation />} />
                <Route path='/' element={<Alldistrict />} />
                <Route path='/singledistrict' element={<Singledictrict />} />
                <Route path='/singlelocation' element={<Singlelocation />} />
                <Route path='/profileudantha' element={<ProfileUdantha />} />
                {/* Udantha */}

                {/* Thiranya */}

                <Route path="/Home" element={<Home />} />
                <Route path="/View" element={<StarClass />} />
                <Route path="/Boutique" element={<Boutique />} />
                <Route path="/GuestHouse" element={<GuestHouse />} />
                <Route path="/AddHotel" element={<AddHotel />} />
                <Route path="/updatePage" element={<UpdateHotel />} />
                <Route path="/AddBoutique" element={<AddBoutique />} />
                <Route path="/updateBoutique" element={<UpdateBoutique />} />
                <Route path="/AddGuestHouse" element={<AddGuestHouse />} />
                <Route path="/updateGuestHouse" element={<UpdateGuestHouse />} />
                <Route path="/Reportpdf" element={<ReportPdf />} />
                <Route path="/boutiquePDF" element={<BoutiquePDF />} />
                <Route path="/StarClassCustomer" element={<StarClassCustomer/>}/>
               <Route path="/BoutiqueCustomer" element={<BoutiqueCustomer/>}/>
               <Route path="/GuestHouseCustomer" element={<GuestHouseCustomer/>}/>
               <Route path="/CustomerHomePage" element = {<HomeCustomer/>} />

                {/* Thiranya */}

                {/* Chamath */}
                <Route path='/createblog' element={<Createblog />} />
                <Route path='/viewblog' element={<ViewAllBlog />} />
                <Route path='/manage' element={<ManageBlog />} />
                <Route path='/viewsingle' element={<ViewSingleblog />} />
                <Route path='/report' element={<Report />} />
                <Route path='/createtravel' element={<Createtravel />} />
                <Route path='/viewtravel' element={<Viewtravel />} />
                <Route path='/travelreport' element={<Travelreport />} />
                <Route path='/viewsingletravel' element={<Viewsingletravel />} />
                <Route path='/viewalltravel' element={<Viewalltravel />} />
                {/* Chamath */}

                {/* Sithmi */}
                <Route path='/homepage' element={<HomePage />} />
                <Route path='/userhomepage' element={<UserHomePage />} />
                <Route path='/maleguide' element={<MaleGuide />} />
                <Route path='/femaleGuide' element={<FemaleGuide />} />
                <Route path='/CreateMaleGuide' element={<CreateMaleGuide />} />
                <Route path='/CreateFemaleGuide' element={<CreateFemaleGuide />} />
                <Route path='/ViewSingleMGuide' element={<ViewSingleMGuide />} />
                <Route path='/ViewSingleFGuide' element={<ViewSingleFGuide />} />
                <Route path='/ViewAllGuide' element={<ViewAllGuide />} />
                <Route path='/ViewAllFGuide' element={<ViewAllFGuide />} />
                <Route path='/MReport' element={<MReport />} />
                <Route path='/FReport' element={<FReport />} />
                {/* Sithmi */}

            </Routes>
        </BrowserRouter>
    );
}

export default App;
