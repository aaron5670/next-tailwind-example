import UsersList from "../components/UsersList";

export default function Home({users}) {
    return (
        <div>
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                </div>
            </header>
            <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div className="px-4 py-6 sm:px-0">
                        <UsersList users={users}/>
                    </div>
                </div>
            </main>
        </div>
    )
}

export async function getServerSideProps() {
    let dev = process.env.NODE_ENV !== 'production';
    let {DEV_URL, PROD_URL} = process.env;

    let response = await fetch(`${dev ? DEV_URL : PROD_URL}/api/users`);
    let data = await response.json();

    return {
        props: {
            users: data['message'],
        },
    };
}
