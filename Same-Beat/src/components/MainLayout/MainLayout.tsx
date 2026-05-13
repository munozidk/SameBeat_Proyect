import React from 'react';
import { useLocation } from 'react-router-dom';
import LocationToggle from '../LocationToggle/LocationToggle';
import FilterBar from '../FilterBar/FilterBar';
import HeaderConcerts from '../HeaderConcerts/HeaderConcerts';
import { useFilter } from '../../contexts/FilterContext';
import './MainLayout.css';

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    const location = useLocation();
    const isConcertsScreen = location.pathname === '/';
    const { selectedGenres, toggleGenre, allGenres } = useFilter();

    return (
        <div className="app-container screen-container">
            {/* Desktop Layout (Dashboard style) */}
            <div className="desktop-layout">
                <header className="header">
                    <HeaderConcerts />
                </header>

                <div className="desktop-body">
                    <aside className="sidebar">
                        <div className="nav-group-placeholder">
                        </div>
                        <div className="nav-footer-mock"></div>
                    </aside>

                    <main className="center-content">
                        {isConcertsScreen && (
                            <section className="filters">
                                <div className="filters-container">
                                    <LocationToggle />
                                    <FilterBar 
                                        genres={allGenres} 
                                        selectedGenres={selectedGenres} 
                                        onToggleGenre={toggleGenre} 
                                    />
                                </div>
                            </section>
                        )}
                        
                        <section className={`main-content ${!isConcertsScreen ? 'full-height' : ''}`}>
                            <div className="main-content-scroll">
                                {children}
                            </div>
                        </section>
                    </main>

                    <aside className="right-panel">
                        <section className="right-panel-top">
                            <div className="user-names-placeholder">
                                {/* Space for User names / Community components */}
                            </div>
                        </section>
                        <section className="right-panel-bottom">
                            <div className="now-playing-placeholder">
                                {/* Space for "Now Playing" and Player controls */}
                            </div>
                        </section>
                    </aside>
                </div>
            </div>

            {/* Mobile Layout (Standard SPA style) */}
            <div className="mobile-layout">
                <main className="mobile-main-content">
                    {isConcertsScreen && (
                        <div className="mobile-filters-top">
                            <div className="flex justify-center py-4">
                                <LocationToggle />
                            </div>
                            <FilterBar 
                                genres={allGenres} 
                                selectedGenres={selectedGenres} 
                                onToggleGenre={toggleGenre} 
                            />
                        </div>
                    )}
                    {children}
                </main>
                <nav className="mobile-nav-bar">
                    {/* Placeholder for mobile navigation bar */}
                </nav>
            </div>
        </div>
    );
};

export default MainLayout;
