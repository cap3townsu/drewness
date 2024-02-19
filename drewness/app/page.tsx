import Image from 'next/image';
import Link from 'next/link';
import EventButton from './components/Buttons/EventButton';
import LinkButton from './components/Buttons/LinkButton';

export default function Home() {
    return (
        <main>
            <h1 className="mb-2">Welcome to Drewness</h1>
            <Link href="/users">Users</Link>
            <div className="m-12">
                <h2 className="mb-6">Event Buttons:</h2>
                <div className="flex gap-4">
                    <EventButton label="Primary"></EventButton>
                    <EventButton label="Secondary" size="md" style="secondary"></EventButton>
                </div>
            </div>
            <div className="m-12">
                <h2 className="mb-6">Link Buttons:</h2>
                <div className="flex gap-4">
                    <LinkButton href="/users" label="Primary -> Users"></LinkButton>
                    <LinkButton href="/users" label="Secondary -> Users" size="md" style="secondary"></LinkButton>
                </div>
            </div>
        </main>
    );
}
