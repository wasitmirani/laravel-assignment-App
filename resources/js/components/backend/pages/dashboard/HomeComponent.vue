<template>
   <div>
    <div class="container-fluid">
            <div class="row learning-block">
              <div class="col-xl-9 xl-60">
                <div class="row">
                  <div class="col-xl-12 col-sm-6" v-for="item in blogs.data" :key="item.id">
                    <div class="card">
                      <div class="blog-box blog-list row">
                        <div class="col-xl-5 col-12"><img class="img-fluid sm-100-w" src="/assets/images/faq/1.jpg" alt=""></div>
                        <div class="col-xl-7 col-12">
                          <div class="blog-details">
                            <div class="blog-date"><span>{{item.created_at | timeformat}}</span></div>
                            <a href="#">
                              <h6>{{item.title}} </h6></a>
                            <div class="blog-bottom-content">
                              <ul class="blog-social">
                                <li>by: {{item.author.name}} 
                                <a role="button" @click="updateBlog(item)"  v-if="item.author_id==authuser.id">
                                <i class="fas fa-edit"></i></a>
                                <a role="button" @click="updateBlog(item)"  v-if="item.author_id!=authuser.id" v-can="'blog-edit'">
                                <i class="fas fa-edit"></i></a>
                                </li>
                                
                              </ul>
                              <hr>
                              <p class="mt-0">{{item.description}}</p>

                             
                             
                            </div>
                                 
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

        </div>
   </div>
   </div>
   </div>
 <vs-dialog blur   v-model="active_modal" width="50%">
         <template #header>
          
            <h4 class="not-margin" >
               Update <b>{{blog.title}}</b> blog
            </h4>
         </template>
         <div class="con-form">

                  <div class="mb-3">
                   <label class="col-form-label" for="recipient-name">Blog Title:</label>
                   <vs-input   :color="this.$root.primary_color" v-model="blog.title" placeholder="Blog Title"  required/>
                   <span class="mt-1 text-danger" v-if="this.errors.title">{{ this.errors.title[0]}}</span>
                  </div>
               <div class="mb-3">
                <label class="col-form-label" for="recipient-name">Description:</label>
                <textarea class="form-control" rows="3" v-model="blog.description"></textarea>


               </div>
               <div class="flex">
                  <!-- <vs-checkbox v-model="checkbox1">Remember me</vs-checkbox> -->
                 
                   <vs-button  color="rgb(59,222,200)" gradient  type="submit"  @click="onSubmit" >
                     Update
                  </vs-button>
               </div>

         </div>
      </vs-dialog>
   </div>
</template>

<script>
    export default {
        data(){
            return {
                blogs:{},
                authuser:{},
                blog:{},
                active_modal:false,
                comment:{},
                errors:[],
            };
        },
        methods:{
            updateBlog(item){
            this.blog=item;
            this.active_modal=true;

            },
            onSubmit(){
            
                const url="/content/blog";
               
                    let data={id:this.blog.id,title:this.blog.title,description:this.blog.description};
                    axios.put(url+"/"+this.blog.id,data).then((res)=>{

                     this.getBlogs();
                     this.resetForm();
                    this.$root.alertNotificationMessage(res.status,"blog has been updated successfully");

                }).catch((err)=>{
                     if(err.response.status==422){
                        this.errors=err.response.data.errors;
                        return this.$root.alertNotificationMessage(err.response.status,err.response.data.errors);
                    }
                    this.$root.alertNotificationMessage(err.response.status,err.response.data);
                });
            

            },
            resetForm(){
                this.blog={};
                this.active_modal=false;
            },
            getBlogs(){
                axios.get('/content/all/blogs').then((res)=>{
                    this.blogs=res.data.blogs;
                }).catch((err)=>{
                     if(err.response.status==422){
                        this.errors=err.response.data.errors;
                        return this.$root.alertNotificationMessage(err.response.status,err.response.data.errors);
                    }
                    this.$root.alertNotificationMessage(err.response.status,err.response.data);
                });
            }
        },
        mounted() {
            this.getBlogs();
            this.authuser=user;
            console.log('Component mounted.')
        }
    }
</script>
<style>

  .vs-input {
   width: 100%;
   }
   .vs-select-content {
   width: 100%;
   max-width: 100%;
   }
</style>