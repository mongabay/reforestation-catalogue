export const getCategoryInfoModalText = (categoryId, categoriesConfig) => {
  const category = categoriesConfig?.find(cat => cat.id === categoryId);
  return category ? category.infoModalText : '';
};
