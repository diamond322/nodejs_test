import PostServices from './PostServices.js'

class PostController {
  async create (req, res) {
    try {
      const post = await PostServices.create(req.body, req.files.picture)
      res.json(post)
    } catch (e) {
      res.status(500).json(e)
    }
  }

  async getAll (req, res) {
    try {
      const posts = await PostServices.getAll()
      return res.json(posts)
    }catch (e){
      res.status(500).json(e)
    }
  }

  async getOne (req, res) {
    try {
      const post = await PostServices.getOne(req.params.id)
      return res.json(post)
    }catch (e){
      res.status(500).json(e)
    }
  }

  async update (req, res) {
    try {
      const updatedPost = await PostServices.update(req.body)
      return res.json(updatedPost)
    } catch (e) {
      res.status(500).json(e.message)
    }
  }

  async delete (req, res) {
    try {
      const post = await PostServices.delete(req.params.id)
      return res.json(post)
    } catch (e) {
      res.status(500).json(e)
    }
  }
}

export default new PostController()