let whoAmIcontroller = {
  index: async (req, res, next) => {
    res.status(200).json({
      ipaddress:req.ip,
      language:req.headers['accept-language'],
      software:req.headers['user-agent']
    })
  }
}

export default whoAmIcontroller
