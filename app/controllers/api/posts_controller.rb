class Api::PostsController < ApplicationController
  def index
    render json: { posts: Post.all } 
  end

  def create
    @post = Post.new(post_params)
    if @post.save
      render json: { post: @post }
    else
      render json: { error: @post.errors.full_messages },
             status: :unprocessable_entity
    end
  end

  private

    def post_params
      params.require(:post).permit(:url, :source)
    end
end
