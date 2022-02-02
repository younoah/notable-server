const documents = [
  {
    id: 1,
    title: '1번 문서제목',
    content: '1번 문서 내용',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    documents: [
      {
        id: 2,
        title: '2번 문서 제목 블라블라',
        content: '2번 문서 내용 블라블라',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        documents: [
          {
            id: 3,
            title: '3번 문서 제목 랄라블라',
            content: '3번 문서 내용 랄라블라',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            documents: [],
          },
          {
            id: 5,
            title: '5번 문서 제목 휘리릴리',
            content: '5번 문서 내용 휘리릴리',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            documents: [],
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: '2번 문서 제목 블링블링',
    content: '2번 문서 내용 블링블링',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    documents: [],
  },
];

const getDocumentById = (id, documents) => {
  if (documents.length === 0) return;

  documents.forEach(document => {});
};

export async function getRootDocuments() {
  return documents;
}

export async function getDocumentById(id) {}

export async function createDocument(title, parent) {}

export async function deleteDocument(id) {}
