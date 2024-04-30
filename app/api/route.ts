import admin from 'firebase-admin';
import { promises as fs } from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';
import { customInitApp } from 'lib/firebase-admin-config';

customInitApp();

const folders = [
    'BlockChain',
    'DSA',
    'artificial_intelligence',
    'backend',
    'cloud_computing_platforms',
    'competitive_programming',
    'cybersecurity',
    'data_structures',
    'devops',
    'frontend',
    'internet_of_things',
    'languages',
    'open_source',
    'other',
    'placement_prep',
    'resources',
    'technical-writing',
    'youtube'
];

export async function GET() {
    try {
        const firestore = admin.firestore();
        const mainDirectoryPath = path.join(__dirname, '../../../../database');
        for (let i = 0; i < folders.length; i++) {
            const folder = folders[i];
            const folderPath = path.join(mainDirectoryPath, folder);

            const files = await fs.readdir(folderPath);
            for (let j = 0; j < files.length; j++) {
                const file = files[j];
                const filePath = path.join(folderPath, file);

                const fileContent = await fs.readFile(filePath, 'utf-8');
                const jsonData = JSON.parse(fileContent);
                console.log(jsonData);
                firestore.collection('resources').doc(folder).set({ resources: jsonData });
            }
        }
        return NextResponse.json({ message: 'Imported to Firestore' });
    } catch (error) {
        console.error('Error occurred: \n', error);
        return NextResponse.json({ message: 'Error occurred' });
    }
}
