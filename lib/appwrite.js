import { Account, Avatars, Client, Databases, ID } from "react-native-appwrite";

export const appwriteConfig = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.anurag.aoraapp",
  projectId: "66bf50b500119c848f5c",
  databaseId: "66bf522d002a97576dcd",
  userCollectionId: "66bf52a5003065842e19",
  videoCollectionId: "66bf53020012159ee273",
  storageId: "66bf54d10037a09cb261",
};

// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
  .setProject(appwriteConfig.projectId) // Your project ID
  .setPlatform(appwriteConfig.platform); // Your application ID or bundle ID.

// Register User
const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client)
export const createUser = async (email, password, username) => {
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    );

    // if account is not created throw error
    if (!newAccount) throw new Error();
    // profile create create new profile pictures
    const avatarUrl = avatars.getInitials(username);

    await signIn(email, password)

    const newUser = await databases.createDocument(
        appwriteConfig.databaseId,
        appwriteConfig.userCollectionId,
        ID.unique(),
        {
            accountId: newAccount.$id,
            email,
            username,
            avatar: avatarUrl,
        }
    )

    return newUser;
  } catch (err) {
    throw new Error(err);
  }
};

export const signIn = async (email, password) => {
  try {
    const session = await account.createEmailPasswordSession(email, password);
    if (!session) throw new Error();

    return session;
  } catch (err) {
    throw new Error(err);
  }
};
