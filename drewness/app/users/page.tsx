import React from 'react';
import LinkButton from '../components/Buttons/LinkButton';

const UsersPage = () => {
    return (
        <>
            <div>UsersPage</div>
            <div className="m-12">
                <h2 className="mb-6">Link Buttons:</h2>
                <div className="flex gap-4">
                    <LinkButton href="/" label="Primary -> Home"></LinkButton>
                    <LinkButton href="/" label="Secondary -> Home" size="md" style="secondary"></LinkButton>
                </div>
            </div>
        </>
    );
};

export default UsersPage;
