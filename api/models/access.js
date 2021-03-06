const userIsAdmin = ({ authentication: { item: user } }) => {
  return Boolean(user && user.isAdmin);
};
const userIsSeller = ({ authentication }) => {
  const { item: user } = authentication;
  return Boolean(user && (user.isSeller || user.isAdmin));
};
const ownItem = ({ authentication: { item: user } }) => {
  if (user) {
    if (user.isAdmin) return true;
    else return { createdBy: { id: user.id } };
  } else return false;
};
const allCanMutation = ({}) => {
  return true;
};
/**
 * ACCESS
 */
const user = {
  read: ({ authentication, context }) => {
    const { item: user } = authentication;
    if (user) {
      if (user.isAdmin) return true;
      return { id: user.id };
    }
  },
  create: allCanMutation,
  update: ({ authentication: { item: user } }) => {
    if (user.isAdmin) return true;
    return { id: user.id };
  },
  delete: userIsAdmin,
  auth: true,
};
var createdById = {};
var loading = {};
/**
 * 1 HOUR
 */
setInterval(() => {
  createdById = {};
  loading = {};
  console.log("clear cache");
}, 3600000);
const getPage = async ({ domain, context }) => {
  if (!createdById[domain] && !loading[domain]) {
    loading[domain] = true;
    try {
      const {
        data: { allPages },
      } = await context.executeGraphQL({
        context,
        query: `
          query {
            allPages {
              user {
                id
              }
            }
          }
        `,
      });
      createdById[domain] = allPages ? allPages[0].user.id : null;
      console.log("cache", domain, createdById[domain], allPages);
    } catch (e) {
      console.log(JSON.stringify(e));
    }
  }
};
const sellerItemRead = async ({ listKey, authentication }) => {
  if (listKey === "Shift") return true;
  const { item: user } = authentication;
  if (user) {
    if (user.isAdmin) return true;
    if (listKey === "Face") return { user: { id: user.id } };
    if (listKey === "Image") return { identity: user.id };
    if (listKey === "Work") return { worker: { id: user.id } };
    return { createdBy: { id: user.id } };
  }
  return false;
};
const sellerItem = {
  read: sellerItemRead,
  create: userIsSeller,
  update: ownItem,
  delete: ownItem,
};

const publicItemRead = ({ authentication, context }) => {
  return true;
  const { item: user } = authentication;
  return Boolean(user);
};
const publicItem = {
  /**
   * C??c Model s??? d???ng ph??n quy???n n??y c???n c?? field of.
   */
  read: publicItemRead,
  create: allCanMutation,
  update: allCanMutation,
  delete: allCanMutation,
};
module.exports = { sellerItem, publicItem, user };
