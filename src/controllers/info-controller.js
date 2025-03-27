// info function
export const info = (req, res) => {
  res.status(200).json({
    success: true,
    message: "my API is live",
    error: {},
    data: {},
  });
};
