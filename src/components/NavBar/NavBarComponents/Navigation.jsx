import React, { useState, useEffect } from 'react';
import DownArrow from '/images/icon-arrow-down.svg';
import UpArrow from '/images/icon-arrow-up.svg';
import TodoIcon from '/images/icon-todo.svg';
import CalendarIcon from '/images/icon-calendar.svg';
import RemindersIcon from '/images/icon-reminders.svg';
import PlanningIcon from '/images/icon-planning.svg';

function Navigation() {
    const [featuresOpen, setFeaturesOpen] = useState(false);
    const [companyOpen, setCompanyOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 640);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleFeatures = () => setFeaturesOpen(!featuresOpen);
    const toggleCompany = () => setCompanyOpen(!companyOpen);

    const FeatureSubmenu = () => (
        <div className={`${isMobile ? 'mt-2 ml-4' : 'absolute left-0 mt-2 bg-white shadow-lg rounded-md'} w-40 py-2 z-10`}>
            <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
                <div className="flex items-center">
                    <img src={TodoIcon} alt="Todo" className="w-4 h-4 mr-2" />
                    Todo List
                </div>
            </a>
            <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
                <div className="flex items-center">
                    <img src={CalendarIcon} alt="Calendar" className="w-4 h-4 mr-2" />
                    Calendar
                </div>
            </a>
            <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
                <div className="flex items-center">
                    <img src={RemindersIcon} alt="Reminders" className="w-4 h-4 mr-2" />
                    Reminders
                </div>
            </a>
            <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
                <div className="flex items-center">
                    <img src={PlanningIcon} alt="Planning" className="w-4 h-4 mr-2" />
                    Planning
                </div>
            </a>
        </div>
    );

    const CompanySubmenu = () => (
        <div className={`${isMobile ? 'mt-2 ml-4' : 'absolute left-0 mt-2 bg-white shadow-lg rounded-md'} w-40 py-2 z-10`}>
            <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">History</a>
            <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Our Team</a>
            <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Blog</a>
        </div>
    );

    return (
        <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} gap-4 sm:gap-8 font-epilogue`}>
            <div className={isMobile ? '' : 'relative'}>
                <div className="flex gap-2 sm:hover:cursor-pointer" onClick={toggleFeatures}>
                    <p>Features</p>
                    <img src={featuresOpen ? UpArrow : DownArrow} alt="" className="w-[10px] h-[6px] self-center" />
                </div>
                {featuresOpen && <FeatureSubmenu />}
            </div>
            <div className={isMobile ? '' : 'relative'}>
                <div className="flex gap-2 sm:hover:cursor-pointer" onClick={toggleCompany}>
                    <p>Company</p>
                    <img src={companyOpen ? UpArrow : DownArrow} alt="" className="w-[10px] h-[6px] self-center" />
                </div>
                {companyOpen && <CompanySubmenu />}
            </div>
            <div className="sm:hover:cursor-pointer">
                Careers
            </div>
            <div className="sm:hover:cursor-pointer">
                About
            </div>
        </div>
    );
}

export default Navigation;