<template>
  <el-form ref="parkView" :model="form" :rules="rules" label-position="top" :inline="true" style="padding-top: 23px;">
    <el-form-item label="园区名称" class="inline-5" prop="parkname">
      <el-input v-model="form.parkname"></el-input>
    </el-form-item>
    <el-form-item label="园区类型" class="inline-5" prop="parktype">
      <el-select v-model="form.parktype" placeholder="请选择" :clearable="true">
        <el-option v-for="item in parkTypeList" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="项目地址" class="inline-5">
      <el-cascader
        v-model="form.position"
        :options="positionMaps"
        :props="{ expandTrigger: 'hover' }"></el-cascader>
    </el-form-item>
    <el-form-item label="开发时间" class="inline-5">
      <el-date-picker
        v-model="form.developtime"
        type="year"
        format="yyyy"
        value-format="yyyy"
        placeholder="选择年">
      </el-date-picker>
    </el-form-item>
    <el-form-item label="建成时间" class="inline-5">
      <el-date-picker
        v-model="form.createtime"
        format="yyyy"
        value-format="yyyy"
        type="year"
        placeholder="选择年">
      </el-date-picker>
    </el-form-item>
    <el-form-item label="园区介绍" class="inline-1" prop="parkdes">
      <el-input type="textarea" autosize v-model="form.parkdes"></el-input>
    </el-form-item>
    <el-form-item label="用地范围" class="inline-1" prop="landscope">
      <el-input type="textarea" autosize v-model="form.landscope"></el-input>
    </el-form-item>
    <el-form-item class="inline-1">
      <UploadDescBottom :value="form.landscopeimgArr" @setFileList="value => setFileList('landscopeimg', value)"></UploadDescBottom>
    </el-form-item>
    <el-form-item class="like-hr inline-1"></el-form-item>
    <el-form-item label="总平面图" class="inline-1" prop="generallayout">
      <el-input  type="textarea" autosize v-model="form.generallayout"></el-input>
    </el-form-item>
    <el-form-item class="inline-1">
      <UploadDescBottom :value="form.generallayoutimgArr" @setFileList="value => setFileList('generallayoutimg', value)"></UploadDescBottom>
    </el-form-item>
    <el-form-item label="实景图" class="inline-1" prop="realphotos">
      <el-input  type="textarea"  autosize v-model="form.realphotos"></el-input>
    </el-form-item>
    <el-form-item class="inline-1">
      <UploadDescBottom :value="form.realphotosimgArr" @setFileList="value => setFileList('realphotosimg', value)"></UploadDescBottom>
    </el-form-item>
    <el-form-item class="like-hr inline-1"></el-form-item>
    <el-form-item label="多媒体宣传片" class="inline-1">
      <!-- <UploadButton :value="form.multimediapromoArr" @setFileList="value => setFileList('multimediapromo', value)"></UploadButton> -->
      <uploader
                ref="uploader"
                :options="options"
                :autoStart="false"
                @file-added="onFileAdded"
                @file-success="onFileSuccess"
                @file-progress="onFileProgress"
                @file-error="onFileError"
                class="uploader-app">
            <uploader-unsupport></uploader-unsupport>

            <uploader-btn id="global-uploader-btn" :attrs="attrs" ref="uploadBtn">选择文件</uploader-btn>

            <uploader-list v-show="panelShow">
                <div class="file-panel" slot-scope="props" :class="{'collapse': collapse}">
                    <div v-show="!cflag">
                      文件正在识别计算：{{computeProgress}}
                    </div>

                    <ul class="file-list" v-show="cflag">
                        <li v-for="file in props.fileList" :key="file.id">
                            <uploader-file :class="'file_' + file.id" ref="files" :file="file" :list="true"></uploader-file>
                        </li>
                        <div class="no-file" v-if="!props.fileList.length"><i class="nucfont inuc-empty-file"></i> 暂无待上传文件</div>
                    </ul>
                </div>
            </uploader-list>
        </uploader>
    </el-form-item>
    <el-form-item label="航拍短视频" class="inline-1">
      <UploadButton :value="form.shortvideoArr" @setFileList="value => setFileList('shortvideo', value)"></UploadButton>
    </el-form-item>
    <el-form-item label="园区荣誉" class="inline-1" prop="parkhonor">
      <el-input  type="textarea"  autosize v-model="form.parkhonor"></el-input>
    </el-form-item>
    <el-form-item class="inline-1">
      <UploadDescBottom :value="form.parkhonorimgArr" @setFileList="value => setFileList('parkhonorimg', value)"></UploadDescBottom>
    </el-form-item>
    <el-form-item class="like-hr inline-1"></el-form-item>
    <el-form-item class="inline-1">
      <el-button type="primary" @click="onSubmit">保存</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { mapState } from 'vuex'
import UploadDescBottom from '@components/form/upload-desc-bottom'
import UploadButton from '@components/form/upload-button'
import URL from '@config/urlConfig.js'
import rules from './rules.js'
import * as _D from '@config/dictionaries'
import positionMaps from '@config/maps.js'
import SparkMD5 from 'spark-md5'

export default {
  name: 'parkview',
  components: { UploadDescBottom, UploadButton },
  data () {
    return {
      parkTypeList: _D.parkTypeList,
      rules,
      positionMaps,
      form: {
        parkname: '',
        parktype: '',
        position: [],
        province: '',
        city: '',
        region: '',
        street: '',
        developtime: '',
        createtime: '',
        parkdes: '',
        landscope: '',
        landscopeimg: '',
        landscopeimgArr: [],
        generallayout: '',
        generallayoutimg: '',
        generallayoutimgArr: [],
        realphotos: '',
        realphotosimg: '',
        realphotosimgArr: [],
        multimediapromo: '',
        multimediapromoArr: [],
        shortvideo: '',
        shortvideoArr: [],
        parkhonor: '',
        parkhonorimg: '',
        parkhonorimgArr: []
      },
      collapse: '',
      computeProgress: '',
      options: {
        target: '/fileupload', // 目标上传 URL
        chunkSize: '2048000', // 分块大小
        fileParameterName: 'file', // 上传文件时文件的参数名，默认file
        maxChunkRetries: 3, // 最大自动失败重试上传次数
        testChunks: false, // 是否开启服务器分片校验
        // 服务器分片校验函数，秒传及断点续传基础
        checkChunkUploadedByResponse: function (chunk, message) {
          let objMessage = JSON.parse(message)
          if (objMessage.skipUpload) {
            return true
          }

          return (objMessage.uploaded || []).indexOf(chunk.offset + 1) >= 0
        },
        headers: {
          // 在header中添加的验证，请根据实际业务来
          // Authorization: 'Bearer ' // + Ticket.get().access_token
        }
      },
      attrs: {
        // 接受的文件类型，形如['.png', '.jpg', '.jpeg', '.gif', '.bmp'...] 这里我封装了一下
        accept: ['.mp4', '.rmvb', '.rm', '.mtv', '.wmv', '3gp', 'rmvb', 'mpg14']
      },
      cflag: false,
      panelShow: false // 选择文件后，展示上传panel
    }
  },
  computed: {
    ...mapState('addProject', {
      projectid: state => state.project_id
    })
  },
  mounted () {
    if (this.$route.path.indexOf('/editProject/') !== -1) {
      this.initForm(this.$route.params.id)
    }
  },
  methods: {
    onFileAdded (file, event) {
      this.panelShow = true
      this.cflag = false
      // md5 计算唯一标识
      this.computeMD5(file)
    },
    onFileSuccess (rootFile, file, response, chunk) {

      let res = JSON.parse(response)

      // 服务器自定义的错误，这种错误是Uploader无法拦截的
      if (!res.result) {
        this.$message({ message: res.message, type: 'error' })
        return
      }
      // 如果服务端返回需要合并
      // if (res.needMerge) {
      //     api.mergeSimpleUpload({
      //         tempName: res.tempName,
      //         fileName: file.name,
      //         ...this.params,
      //     }).then(data => {
      //         // 文件合并成功
      //         Bus.$emit('fileSuccess', data);
      //     }).catch(e => {});
      // // 不需要合并    
      // } else {
      //     Bus.$emit('fileSuccess', res);
      //     console.log('上传成功');
      // }
    },
    onFileProgress (rootFile, file, chunk) {
      console.log(`上传中 ${file.name}，chunk：${chunk.startByte / 1024 / 1024} ~ ${chunk.endByte / 1024 / 1024}`)
    },
    onFileError (rootFile, file, response, chunk) {
      console.log("error")
    },
    fileListShow () {

    },
    close () {

    },
    /**
    * 计算md5，实现断点续传及秒传
    * @param file
    */
    computeMD5 (file) {
      let fileReader = new FileReader()
      let time = new Date().getTime()
      let blobSlice = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice
      let currentChunk = 0
      const chunkSize = 10 * 1024 * 1000
      let chunks = Math.ceil(file.size / chunkSize)
      let spark = new SparkMD5.ArrayBuffer()
      // 文件状态设为"计算MD5"
      // this.statusSet(file.id, 'md5')
      file.pause()
      loadNext()
      fileReader.onload = ( e => {
        spark.append(e.target.result)
        if (currentChunk < chunks) {
          currentChunk++
          loadNext()
          // 实时展示MD5的计算进度
          this.$nextTick(() => {
            // $(`.myStatus_${file.id}`).text('校验MD5 '+ ((currentChunk/chunks)*100).toFixed(0)+'%')
            this.computeProgress = ((currentChunk / chunks) * 100).toFixed(0) + '%'
            console.log('校验MD5 ' + this.computeProgress)
          })
        } else {
          let md5 = spark.end()
          this.cflag = true
          this.computeMD5Success(md5, file)
          console.log(`MD5计算完毕：${file.name} \nMD5：${md5} \n分片：${chunks} 大小:${file.size} 用时：${new Date().getTime() - time} ms`)
        }
      })
      fileReader.onerror = function () {
        this.error(`文件${file.name}读取出错，请检查该文件`)
        file.cancel()
      }
      function loadNext () {
        let start = currentChunk * chunkSize
        let end = ((start + chunkSize) >= file.size) ? file.size : start + chunkSize
        fileReader.readAsArrayBuffer(blobSlice.call(file.file, start, end))
      }
    },
    computeMD5Success (md5, file) {
      // 将自定义参数直接加载uploader实例的opts上
      // Object.assign(this.uploader.opts, {
      //   query: {
      //     ...this.params,
      //   }
      // })
      console.log(md5)
      file.uniqueIdentifier = md5
      // file.resume()
      // this.statusRemove(file.id)
    },
    initForm (id) {
      this.$axios.post(URL['SELECT_PROJECT_BASE_INFO'], { projectid: id || this.projectid }).then(resp => {
        this.loading = false
        if (resp.status === 200) {
          if (resp.data && resp.data.data && resp.data.code === 1) {
            let data = resp.data.data
            const { province = '', city = '', region = '', street = '' } = data
            data.position = [province, city, region, street]
            // data.developtime = data.developtime ? new Date(data.developtime + '').toJSON() : ''
            // data.createtime = data.createtime ? new Date(data.createtime + '').toJSON() : ''
            this.form = data
          }
        } else {
          this.$message.error('系统异常，请联系管理员！')
        }
      })
    },
    onSubmit () {
      this.$refs.parkView.validate(isValid => {
        if (isValid) {
          // 填充项目地址
          const [ province, city, region, street ] = this.form.position || []
          this.form.province = province || ''
          this.form.city = city || ''
          this.form.region = region || ''
          this.form.street = street || ''
          this.$axios.post(URL['INSERT_PROJECT_BASE'], { ...this.form, projectid: this.projectid }).then(resp => {
            if (resp.status === 200) {
              if (resp.data && resp.data.code === 1) {
                this.$message.success(resp.data.msg)
              } else {
                this.$message.error(resp.data && resp.data.msg ? resp.data.msg : '处理失败')
              }
            } else {
              this.$message.error('系统异常，请联系管理员！')
            }
          })
        }
      })
    },
    setFileList (column, value) {
      this.form[column] = value
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
