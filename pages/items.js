import fs from 'fs';
import path from 'path';

export default function ItemsPage({ items }) {
    return(
        <div>
            <h1>Items</h1>
            <ul>
                {items.map(items => (
                    <li key={items.id}>
                        <h2>{items.num}</h2>
                        <h3>{items.colour}</h3>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export async function getStaticProps() {
    const filePath = path.join(process.cwd(), 'public', 'data.json');
    const jsonData = fs.readFileSync(filePath, 'utf8');
    const items =JSON.parse(jsonData);

    return{
        props: {
            items
        }
    };
}

//  getStaticProps are usd for pagees that data dosnt change often. getServerSideProps are used when data needs to pop up every request