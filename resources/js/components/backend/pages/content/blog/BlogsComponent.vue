<template>
  <div>
      <Breadcrumb activename="Blogs Content" ></Breadcrumb>

        <div class="row">
            <div class="col-12">
                   <div class="card">
                  <div class="card-header pb-0">
                    <h5>Blogs

                     <div style="float: right;">
                    <PrimaryButton icon="fas fa-plus"  label="Add blog"  v-on:activemodal="openModal($event)"></PrimaryButton>
                        </div>

                    </h5>

                  <div class="mb-3 col-4 mt-3">

                        <SearchInput :apiurl="'/content/blog?page=' +this.page_num"
                        v-on:query="isquery($event)"
                        v-on:loading="loadingStart($event)"
                        v-on:reload="getblogs()"
                        v-on:filterList="filterdata($event)"
                        label="Search blogs"></SearchInput>
                    </div>
                  </div>

                  <div class="card-body">
                       <content-placeholders v-if="loading">
                     <content-placeholders-heading :img="true" />
                     <content-placeholders-text :lines="1" />
                     <content-placeholders-heading :img="true" />
                     <content-placeholders-text :lines="1" />
                     <content-placeholders-heading :img="true" />
                     <content-placeholders-text :lines="1" />
                     <content-placeholders-heading :img="true" />
                     <content-placeholders-text :lines="1" />
                  </content-placeholders>
                   <BlogTable :getblogs="getblogs" :blogs="blogs" v-on:editItem="editItem($event)" v-on:deleteItem="deleteItem($event)" v-else></BlogTable>
                  </div>
            </div>
        </div>
        </div>
        <vs-dialog blur   v-model="active_modal" width="50%">
         <template #header>
            <h4 class="not-margin" v-if="!edit_mode">
               Create New <b>blog</b>
            </h4>
            <h4 class="not-margin" v-else>
               Update <b>{{blog.name}}</b> blog
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
                  <vs-button color="rgb(121, 81, 170)" gradient  type="submit" @click="onSubmit"  v-if="!this.edit_mode">
                     Submit
                  </vs-button>
                   <vs-button  color="rgb(59,222,200)" gradient  type="submit"  @click="onSubmit" v-if="this.edit_mode">
                     Update
                  </vs-button>
               </div>

         </div>
      </vs-dialog>
  </div>

</template>

<script>
import Breadcrumb from "../../../components/BreadcrumbComponent.vue";
import PrimaryButton from "../../../components/PrimaryButton";
import BlogTable from "./BlogTable.vue";
import SearchInput from "../../../components/SearchInput.vue";
export default {

    components:{
        Breadcrumb,
        BlogTable,
        PrimaryButton,
        SearchInput,
    },
     data(){
            return {
            blogs:{},
            blog:{},
            active_modal:false,
            edit_mode:false,
            errors:[],
            page_num:1,
            query:"",
            loading:false,
            }

     },
     mounted(){
       this.getblogs();


     },
        methods:{
          onChange(event){
            console.log("log",event);
          },
            editItem(item) {
            this.resetForm();

            this.edit_mode=true;
            this.active_modal=true;
            this.blog=item;
        
            },
            deleteItem(item){
            const url=`/content/blog/${item.id}`;
            Swal.fire({
              title: "Are you sure?",
              text: "You won't be able to revert this!",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Yes, delete it!",
            }).then((result) => {
              if (result.isConfirmed) {
                axios.delete(url).then((res) => {
                    Swal.fire("Deleted!", "Your file has been deleted.", "success");
                        this.getblogs();

                  }).catch((err)=>{
                        this.$root.alertNotificationMessage(err.response.status,err.response.data);
                   //    console.log("erro",err.response.data.message);

                  });
              }
            });
            },
            openModal(val){
             this.resetForm();
             return this.active_modal=val;
            },
            resetForm(){
            this.edit_mode=false;
            this.active_modal=false;
            this.blog={};

            },
           async getblogs(page=1){
             this.loading=true;
             this.page_num=page;
             const url="/content/blog?page=" + page + "&query=" + this.query;
               await axios.get(url).then((res)=>{
                   this.blogs = res.data.blogs;
                   this.loading=false;

               }).catch((err)=>{
                     this.$root.alertErrorMessage(err.response.status,err.response.data);
               });
            },
           isquery(query) {
            return (this.query = query);
          },

          filterdata(data){
            this.blogs=data.blogs;
          },
        loadingStart(value) {

            this.loading = value;
          },

            onSubmit(){
                let formData = new FormData();
                formData=Object.assign(this.blog,formData);
                formData=Object.assign({users:this.selected_users},formData)
                const url="/content/blog";
                if(!this.edit_mode){
                     axios.post(url,formData).then((res)=>{
                     this.$root.alertNotificationMessage(res.status,"New blog has been created successfully")
                     this.resetForm();
                     this.getblogs();

                }).catch((err)=>{
                     if(err.response.status==422){
                        this.errors=err.response.data.errors;
                        return this.$root.alertNotificationMessage(err.response.status,err.response.data.errors);
                    }
                    this.$root.alertNotificationMessage(err.response.status,err.response.data);
                });
                }
                else {
                    let data={id:this.blog.id,title:this.blog.title,description:this.blog.description};
                    axios.put(url+"/"+this.blog.id,data).then((res)=>{

                     this.getblogs();
                     this.resetForm();
                    this.$root.alertNotificationMessage(res.status,"blog has been updated successfully");

                }).catch((err)=>{
                     if(err.response.status==422){
                        this.errors=err.response.data.errors;
                        return this.$root.alertNotificationMessage(err.response.status,err.response.data.errors);
                    }
                    this.$root.alertNotificationMessage(err.response.status,err.response.data);
                });
                }

            },


    }



}
</script>
<style scoped>

  .vs-input {
   width: 100%;
   }
   .vs-select-content {
   width: 100%;
   max-width: 100%;
   }
</style>
